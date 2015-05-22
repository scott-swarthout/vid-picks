Template.thumbnail.helpers({
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
            return "-";
        }
    },
    reviewCount: function () {
        var reviews = Reviews.find({url: this.url}, {fields: {rating: 1}});

        var count = 0;
        reviews.forEach(function (review) {
            count += 1;

        });
        return count;
    },
    round: function (score) {
        return Math.round(score);
    }
});
