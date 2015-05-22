PostController = AppController.extend({
    waitOn: function () {

    },
    data: {},
    onAfterAction: function () {
        Meta.setTitle('Post');
    }
});
