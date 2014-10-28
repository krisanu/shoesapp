Ext.define('ShoesApp.view.ChildShoeCategory', {
    extend: 'Ext.Container',
    xtype: 'childshoecategory-screen',
    config: {
        cls: 'x-childshoecategory-container',
        itemId: 'childshoecategory-screen',
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
                        store: 'childshoes',
                        itemTpl: '{shoetype}<tpl if="haschild"><div class="submenu-link"></div></tpl>',
                        variableHeights:true
                    }
                ]
            }
        ]
    }
});