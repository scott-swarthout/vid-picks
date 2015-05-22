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
            embedCode = "https://www.youtube.com/embed/" + videoId;
            result = Meteor.http.get("http://www.youtube.com/oembed",
                {
                    params: {
                        "url": doc.url,
                        "format": "json"
                    }
                });
            if (result) {
                content = JSON.parse(result.content);
            }
        }
        else if (doc.origin === "Vimeo") {
            result = Meteor.http.get("https://vimeo.com/api/oembed.json",
                {
                    params: {
                        "url": doc.url
                    }
                });
            if (result) {
                content = JSON.parse(result.content);
            }
			embedCode = "https://player.vimeo.com/video/" + content.video_id.toString();
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
                "title": content.title,
                "origin": doc.origin,
                "thumbnail": content.thumbnail_url
            };
            Videos.insert(videoContent);
        }

    }

});
