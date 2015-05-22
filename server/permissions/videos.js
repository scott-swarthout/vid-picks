Videos.allow({
    'insert': function (userId, doc) {
        return Roles.userIsInRole(userId, ['editor']);
    },
    'update': function (userId, doc, fields, modifier) {
        return Roles.userIsInRole(userId, ['admin']);
    },
    'remove': function (userId, doc) {
        return Roles.userIsInRole(userId, ['admin']);
    }
});
