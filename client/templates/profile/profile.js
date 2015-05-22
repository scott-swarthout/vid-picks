Template.profile.helpers({
    reviews: function () {
        return Reviews.find({"author._id": this._id}, {sort: {rating: -1}}, {limit: 10});
    },
    formatted: function (profile) {
        return this.profile.firstName + " " + this.profile.lastName;
    }
});
