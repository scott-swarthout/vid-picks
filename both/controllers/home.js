HomeController = AppController.extend({
    waitOn: function () {
        return this.subscribe('newestVideos');
    },
    data: {},
    onAfterAction: function () {
        Meta.setTitle('Videos');
    }
});
