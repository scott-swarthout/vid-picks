ViewController = AppController.extend({
    waitOn: function () {
        return this.subscribe('videoById', this.params._id);
    },
    data: {},
    onAfterAction: function () {
        Meta.setTitle('View');
    }
});
