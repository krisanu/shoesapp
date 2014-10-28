Ext.define('ShoesApp.view.ShoesContainer', {
    extend: 'Ext.Container',
    xtype: 'shoescontainer-screen',
    id: 'shoescontainer-screen',
    requires: [
        'ShoesApp.view.ShoeCategory'
    ],
    config: {
        layout: 'fit',
        itemId: 'shoescontainer-screen',
        items: [
            {
                xtype: 'shoecategory-screen'
            }
        ]
    }
});
