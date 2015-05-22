/**
 * Created by scottswarthout on 4/30/15.
 */
Meteor.methods({
    parsePost: function (doc) {
        check(doc, Schema.post);

        this.unblock();

        if (doc.origin === "Youtube") {
            startIndex = doc.url.indexOf("=");

            videoId = doc.url.substring(startIndex + 1);
            embedCode = "url" + videoId;
            result = Meteor.http.get("url",
                {
                    params: {
                        "id": videoId,
                        "thumbsize": "large_hd"
                    }
                });
            if (result) {
                content = JSON.parse(result.content);
            }
        }
        else if (doc.origin === "Vimeo") {
            startIndex = doc.url.indexOf(".com/");

            videoId = doc.url.substring(startIndex + 5);
            embedCode = "url" + videoId;
            result = Meteor.http.get("url",
                {
                    params: {
                        "data": "url",
                        "video_id": videoId,
                        "output": "json",
                        "thumbsize": "medium2"
                    }
                });
            if (result) {
                content = JSON.parse(result.content);
            }
        }


        var reviewContent = {
            "createdAt": moment().toDate(),
            "author": Meteor.user(),
            "url": embedCode,
            "title": doc.reviewTitle,
            "review": doc.review,
            "rating": doc.rating,
            "description": doc.description,
            "tags": doc.tags

        };
        Reviews.insert(reviewContent);

        if (Videos.find({"url": doc.url}).count() === 0) {
            var videoContent = {
                "url": embedCode,
                "createdAt": moment().toDate(),
                "title": content.video.title,
                "origin": doc.origin,
                "thumbnail": content.video.thumb
            };
            Videos.insert(videoContent);
        }

    }

});
