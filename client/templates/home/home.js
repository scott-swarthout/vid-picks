Template.home.rendered = function () {

};

Template.home.helpers({
    videos: function () {
        return Videos.find({});
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
    }
});
