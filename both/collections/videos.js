Videos = new Meteor.Collection("videos");
Videos.attachSchema(new SimpleSchema({
    url: {
        type: String,
        label: "Video URL",
        regEx: SimpleSchema.RegEx.Url,
        autoform: {
            type: "url"
        }
    },
    title: {
        type: String
    },
    thumbnail: {
        type: String,
        label: "Thumbnail URL",
        regEx: SimpleSchema.RegEx.Url
    },
    origin: {
        type: String,
        allowedValues: [
            "Youtube",
            "Vimeo"
        ],
        label: "Choose Origin Website"
    },
    createdAt: {
        type: Date
    }

}));