ProfileController = AppController.extend({
    waitOn: function () {
        Meteor.subscribe("reviews");
        Meteor.subscribe("allCritcs");
        Meteor.subscribe("newestVideos");
        return;
    },
    data: function () {

        return Meteor.users.findOne({_id: this.params._id});

    },
    onAfterAction: function () {
        Meta.setTitle('Profile');
    }
});
