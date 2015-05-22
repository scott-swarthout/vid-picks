Meteor.publish("allCritics", function () {
    return Meteor.users.find({"roles": ["editor"]}, {fields: {emails: 0}});
});
