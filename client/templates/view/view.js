Template.view.helpers({
    videos: function () {
        return Videos.find({});
    },
    url: function () {
        return this.url;
    },
    reviews: function () {
        return Reviews.find({url: this.url});
    },
    formatted: function (author) {
        return author.profile.firstName + " " + author.profile.lastName;
    },
    averageScore: function () {
        var reviews = Reviews.find({url: this.url}, {fields: {rating: 1}});

        var sum = 0;
        var count = 0;
        reviews.forEach(function (review) {
            sum += review.rating;
            count += 1;

        });
        if (count !== 0) {
            return sum / count;
        }
        else {
            return "No Reviews Yet";
        }
    },
    round: function (score) {
        return Math.round(score);
    },
    reviewCount: function () {
        var reviews = Reviews.find({url: this.url}, {fields: {rating: 1}});

        var count = 0;
        reviews.forEach(function (review) {
            count += 1;

        });
        return count;
    },
});

Template.view.events({
    "click #newReview": function (event, template) {
        Session.set("currentUrl", this.url);

        Modal.show("newPost");
    }
});
