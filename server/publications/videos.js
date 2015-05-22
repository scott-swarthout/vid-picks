Meteor.publishComposite("newestVideos", {
    find: function () {
        // Let's go ahead and find those newest videos
        return Videos.find({}, {
            sort: {createdAt: -1},
        });
    },
    children: [
        {
            find: function (video) {
                // And the top reviews on each article
                return Reviews.find(
                    {url: video.url},
                    {sort: {rating: -1}});
            },
            children: [
                {
                    find: function (review, video) {
                        // And those comments' authors. Hey! We have two
                        // args this time! We get all the documents going
                        // up the hierarchy passed in. Nearest parent
                        // gets passed in first.
                        return Meteor.users.find({_id: review.author});
                    }
                }
            ]
        }
    ]
});

Meteor.publishComposite("videoById", function (videoId) {
    return {
        find: function () {
            // Let's go ahead and find those newest videos
            return Videos.find({_id: videoId}, {limit: 1});
        },
        children: [
            {
                find: function (video) {
                    // And the top reviews on each article
                    return Reviews.find(
                        {url: video.url},
                        {sort: {rating: -1}});
                },
                children: [
                    {
                        find: function (review, video) {
                            // And those comments' authors. Hey! We have two
                            // args this time! We get all the documents going
                            // up the hierarchy passed in. Nearest parent
                            // gets passed in first.
                            return Meteor.users.find({_id: review.author});
                        }
                    }
                ]
            }
        ]
    };
});
