Ext.define('ShoesApp.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main-screen',
    id: 'main-screen',
    requires: [
        'ShoesApp.view.ShoesAppTitlebar',
        'ShoesApp.view.Login',
        'ShoesApp.view.ShoeCategory',
        'ShoesApp.view.LadiesShoeCategory',
        'ShoesApp.view.MenShoeCategory',
        'ShoesApp.view.ChildShoeCategory',
        'ShoesApp.view.LadiesAccessoriesCategory',
        'ShoesApp.view.Offer'
    ],
    config: {
        layout: 'card',
//        animation: {
//            type: 'slide',
//            direction: 'left'
//        },
        itemId: 'main-screen',
        items: [
            {
                xtype: 'login-screen'
            },
            {
                xtype: 'shoecategory-screen'
            },
            {
                xtype: 'ladiesshoecategory-screen'
            },
            
            {
                xtype: 'menshoecategory-screen'
            },
            {
                xtype: 'childshoecategory-screen'
            },
            
            {
                xtype: 'offer-screen'
            },
            {
                xtype:'ladiesaccessoriescategory-screen'
            }
        ]
    }
});
