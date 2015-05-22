Template.review.helpers({
    formatted: function (author) {
        return author.profile.firstName + " " + author.profile.lastName;
    },
    viewdate: function (date) {
        return date.toDateString();
    },
    allowed: function () {
        return Meteor.userId() === this.author._id;
    },
    videoName: function () {
        return Videos.findOne({"url": this.url}).title;
    }
});

Template.review.events({
    "click #foo": function (event, template) {

    }
});

Template.registerHelper("videoId", function () {
    return Videos.findOne({"url": this.url})._id;
});
