Reviews = new Meteor.Collection("reviews");
Reviews.attachSchema(new SimpleSchema({
    title: {
        type: String,
        label: "Enter a title for your review"
    },
    review: {
        type: String,
        autoform: {
            rows: 5
        }
    },

    rating: {
        type: Number,
        min: 0,
        max: 100
    },
    description: {
        type: String,
        min: 1,
        max: 12,
        label: "Enter a one word review of the video"
    },
    tags: {
        type: [String],
        autoform: {
            type: 'tags'
        }
    },

    url: {
        type: String,
        label: "Embed URL",
        regEx: SimpleSchema.RegEx.Url,
        autoform: {
            type: "url"
        }
    },

    createdAt: {
        type: Date
    },
    author: {
        type: Object
    }

}));

Reviews.before.insert(function (userId, doc) {
    doc.createdAt = moment().toDate();
    doc.author = Meteor.users.findOne({"_id": userId});

});