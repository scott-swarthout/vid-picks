Router.route('/', {
    name: 'home'
});

Router.route('/critics', {
    name: 'critics'
});

Router.route('/post', {
    name: 'post'
});

Router.route("/view/:_id", {
    name: 'view'
});
Router.route("/profile/:_id", {
    name: 'profile'
});
