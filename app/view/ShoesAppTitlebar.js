Ext.define('ShoesApp.view.ShoesAppTitlebar', {
    extend: 'Ext.Container',
    xtype: 'shoesapptitlebar',
    config: {
        cls: 'x-shoesapptitlebar',
        itemId: 'shoesapptitlebar',
        items: [
            {
                xtype: 'titlebar',
                cls: 'x-shoes-titlebar',
                docked: 'top',
                layout: 'hbox',
                width: '100%',
                items: [
                    {
                        itemId: 'shoesappbackbtn',
                        cls: 'x-back-btn',
                        flex: 1
                    },
                    {
                        xtype: 'searchfield',
                        name: 'query',
                        flex: 15,
                        placeHolder: 'Search by Brand',
                        clearIcon: false
                    },
                    {
                        cls: 'x-cart-btn',
                        flex: 1
                    },
                    {
                        cls: 'x-user-btn',
                        flex: 1
                    }
                ]
            }
        ]
    }
});