Schema = {};

Schema.post = new SimpleSchema({
    url: {
        type: String,
        label: "Video URL",
        regEx: SimpleSchema.RegEx.Url,
        autoform: {
            type: "url"
        }
    },
    origin: {
        type: String,
        allowedValues: [
            "Youtube",
            "Vimeo"
        ],
        label: "Choose Origin Website"
    },
    tags: {
        type: [String],
        autoform: {
            type: 'tags'
        }

    },
    reviewTitle: {
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
    }

});
