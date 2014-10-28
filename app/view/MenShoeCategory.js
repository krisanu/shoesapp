Ext.define('ShoesApp.view.MenShoeCategory', {
    extend: 'Ext.Container',
    xtype: 'menshoecategory-screen',
    config: {
        cls: 'x-menshoecategory-container',
        itemId: 'menshoecategory-screen',
        items: [
            {
                xtype: 'shoesapptitlebar'
            },
            {
                xtype: 'panel',
                cls: 'x-shoecategory-list-wrapper',
                height: '100%',
                items: [
                    {
                        xtype: 'list',
                        cls: 'x-shoecategory-list',
                        height: '100%',
                        store: 'menshoes',
                        itemTpl: '{shoetype}<tpl if="haschild"><div class="submenu-link"></div></tpl>',
                        variableHeights:true
                    }
                ]
            }
        ]
    }
});