CriticsController = AppController.extend({
    waitOn: function () {
        Meteor.subscribe("reviews");
        Meteor.subscribe("allCritics");

    },
    data: {},
    onAfterAction: function () {
        Meta.setTitle('Critics');
    }
});

CriticsController.events({
    'click [data-action=doSomething]': function (event, template) {
        event.preventDefault();
    }
});
