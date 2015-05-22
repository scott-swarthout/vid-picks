var users = [
    {firstName: "Beamer", lastName: "Codes", email: "beamercodes@gmail.com", roles: ["admin"]},

];

_.each(users, function (user) {


    if (!Meteor.users.findOne({"emails.address": user.email})) {
        var id;

        id = Accounts.createUser({
            email: user.email,
            password: "password1",
            profile: {firstName: user.firstName, lastName: user.lastName}
        });

        if (user.roles.length > 0) {
            // Need _id of existing user record so this call must come
            // after `Accounts.createUser` or `Accounts.onCreate`
            Roles.addUsersToRoles(id, user.roles);
        }
    }


});
if (!Meteor.roles.findOne({name: "editor"})){
  Meteor.roles.insert({name: "editor"});

}
