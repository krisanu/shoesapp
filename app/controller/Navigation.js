Ext.define('ShoesApp.controller.Navigation', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            mainScreen: 'main-screen',
            loginbtn: 'button[itemId=loginbtn]',
            shoesappbackbtn: 'button[itemId=shoesappbackbtn]',
            ladiesshoecategorylist: 'ladiesshoecategory-screen #ladiesshoecategorylist',
            ladiesaccessoriescategorylist: 'ladiesaccessoriescategory-screen #ladiesaccessoriescategorylist'
        },
        control: {
            loginbtn: {
                tap: 'login'
            },
            shoesappbackbtn: {
                tap: 'shoesappback'
            },
            ladiesshoecategorylist: {
                itemtap: 'ladiesshoecategory'
            },
            ladiesaccessoriescategorylist: {
                itemtap: 'ladiesaccessoriescategory'
            }
        }
    },
    shoesappback: function() {
        ShoesApp.Config.getScreens().stack.pop();
        var prevscreen = ShoesApp.Config.getScreens().stack.slice(-1)[0];
        this.getMainScreen().animateActiveItem(prevscreen, {type: 'slide', direction: 'right'});
    },
    screenStack: function(screen) {
        ShoesApp.Config.getScreens().stack.push(screen);
    },
    login: function() {
        this.screenStack(1);
        this.getMainScreen().animateActiveItem(1, {type: 'slide', direction: 'left'});
    },
    openLadiesShoe: function() {
        this.screenStack(2);
        this.getMainScreen().animateActiveItem(2, {type: 'slide', direction: 'left'});
    },
    openMenShoe: function() {
        this.screenStack(3);
        this.getMainScreen().animateActiveItem(3, {type: 'slide', direction: 'left'});
    },
    openChildShoe: function() {
        this.screenStack(4);
        this.getMainScreen().animateActiveItem(4, {type: 'slide', direction: 'left'});
    },
    ladiesshoecategory: function(list, index, node, record) {
        if (record.get('haschild')) {
            this.screenStack(6);
            this.getMainScreen().animateActiveItem(6, {type: 'slide', direction: 'left'});
        } else {
            this.screenStack(5);
            this.getMainScreen().animateActiveItem(5, {type: 'slide', direction: 'left'});
        }
    },
    ladiesaccessoriescategory: function(list, index, node, record) {
        this.screenStack(5);
        this.getMainScreen().animateActiveItem(5, {type: 'slide', direction: 'left'});
    }
});


