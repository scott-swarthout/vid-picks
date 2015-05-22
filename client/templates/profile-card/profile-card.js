Template.profileCard.helpers({
    formatted: function (profile) {
        return profile.firstName + " " + profile.lastName;
    },
    averageScore: function () {
        var reviews = Reviews.find({"author._id": this._id}, {fields: {rating: 1}});
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
    round: function (score) {
        if (score === parseInt(score, 10) || score === Number(score)) {
            return Math.round(score);
        }
        else {
            return score;
        }

    },
    reviewCount: function () {
        var reviews = Reviews.find({"author._id": this._id}, {fields: {rating: 1}});

        var count = 0;
        reviews.forEach(function (review) {
            count += 1;

        });
        return count;
    },
    latestReview: function () {
        var latest = Reviews.findOne({"author._id": this._id}, {sort: {createdAt: -1}});
        if (latest) {
            return latest.rating;
        }
        else {
            return "-";
        }
    }
});

Template.profileCard.events({
    "click #foo": function (event, template) {

    }
});

Avatar.options = {
    fallbackType: "identicon"
};
