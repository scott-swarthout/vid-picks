Reviews.allow({
    'insert': function (userId, doc) {
        return Roles.userIsInRole(userId, 'editor');
    },
    'update': function (userId, doc, fields, modifier) {
        return Roles.userIsInRole(userId, 'editor') && doc.author._id === userId;
    },
    'remove': function (userId, doc) {
        return Roles.userIsInRole(userId, 'editor') && doc.author._id === userId;
    }
});
