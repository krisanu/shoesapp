Ext.define('ShoesApp.Config', {
    singleton: true,
    config: {
        urls: {
//            restUrl: 'http://localhost:8084/ridemaker-web/rest/'
            restUrl: 'http://ridemaker14.jelastic.regruhosting.ru/rest/'
        },
        users: {
            userId: 0
        },
        screens: {
            stack: [0]
        }
    },
    constructor: function(config) { // with this you create kind of object, simple said
        this.initConfig(config);
        return this;
    }
});