Ext.define('ShoesApp.view.Offer', {
    extend: 'Ext.Container',
    xtype: 'offer-screen',
    config: {
        cls: 'x-offer-container',
        itemId: 'offer-screen',
        items: [
            {
                xtype: 'shoesapptitlebar'
            },
            {
                xtype: 'panel',
                cls: 'x-offer-list-wrapper',
                height: '100%',
                items: [
                    {
                        xtype: 'list',
                        cls: 'x-offer-list',
                        height: '90%',
                        store: 'offers',
                        itemTpl: [
                            '<div>',
                            '<div class="img-container"><img src="resources/images/offer-1.png"></div><div class="offer-info">{text}</div>',
                            '<div class="clear"></div>',
                            '</div>'
                        ].join(''),
                        variableHeights: true
                    }
                ]
            }
        ]
    }
});