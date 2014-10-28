Ext.define('ShoesApp.view.LadiesShoeCategory', {
    extend: 'Ext.Container',
    xtype: 'ladiesshoecategory-screen',
    config: {
        cls: 'x-ladiesshoecategory-container',
        itemId: 'ladiesshoecategory-screen',
        items: [
            {
                xtype: 'shoesapptitlebar'
            },
            {
                xtype: 'panel',
                cls: 'x-shoecategory-list-wrapper',
                height: '90%',
                items: [
                    {
                        xtype: 'list',
                        itemId: 'ladiesshoecategorylist',
                        cls: 'x-shoecategory-list',
                        height: '100%',
                        store: 'ladiesshoe',
                        itemTpl: '{shoetype}<tpl if="haschild"><div class="submenu-link"></div></tpl>',
                        variableHeights:true
                    }
                ]
            }
        ]
    }
});