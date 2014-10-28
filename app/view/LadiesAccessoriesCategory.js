Ext.define('ShoesApp.view.LadiesAccessoriesCategory', {
    extend: 'Ext.Container',
    xtype: 'ladiesaccessoriescategory-screen',
    config: {
        cls: 'x-ladiesshoecategory-container',
        itemId: 'ladiesaccessoriescategory-screen',
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
                        itemId: 'ladiesaccessoriescategorylist',
                        cls: 'x-shoecategory-list',
                        height: '100%',
                        store: 'ladiesaccessories',
                        itemTpl: '{shoetype}<tpl if="haschild"><div class="submenu-link"></div></tpl>',
                        variableHeights:true
                    }
                ]
            }
        ]
    }
});