Template.critics.helpers({
    editors: function () {
        return Meteor.users.find({"roles": ["editor"]});

    }
});
