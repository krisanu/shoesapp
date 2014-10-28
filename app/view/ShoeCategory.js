Ext.define('ShoesApp.view.ShoeCategory', {
    extend: 'Ext.Container',
    xtype: 'shoecategory-screen',
    config: {
//        layout: 'fit',
        cls: 'x-shoecategory-container',
        itemId: 'shoecategory-screen',
        scrollable: true,
        items: [
            {
                xtype: 'shoesapptitlebar'
            },
            {
                xtype: 'container',
                items: [
                    {
                        xtype: 'panel',
                        cls: 'x-cat-panel',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'button',
                                cls: 'x-location-btn',
                                flex: 1
                            },
                            {
                                xtype: 'panel',
                                cls: 'x-cat-panel-inner',
                                html: '<div class="cat-select-text">SELECT YOUR</div><div class="cat-text">CATEGORY</div>',
                                flex: 3
                            },
                            {
                                xtype: 'button',
                                cls: 'x-event-btn',
                                flex: 1
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        cls: 'x-shoe-cat-wrapper',
                        items: [
                            {
                                xtype: 'panel',
                                cls: 'x-shoe-cat x-shoe-cat-ladies',
                                items: [
                                    {
                                        xtype: 'panel',
                                        html: "ladies shoes",
                                        listeners: [
                                            {
                                                element: 'element',
                                                delegate: 'div.x-innerhtml',
                                                event: 'tap',
                                                fn: function(e) {
                                                    ShoesApp.app.application.getController('Navigation').openLadiesShoe();
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'panel',
                                cls: 'x-shoe-cat x-shoe-cat-men',
                                items: [
                                    {
                                        xtype: 'panel',
                                        html: "men's shoes",
                                        listeners: [
                                            {
                                                element: 'element',
                                                delegate: 'div.x-innerhtml',
                                                event: 'tap',
                                                fn: function(e) {
                                                    ShoesApp.app.application.getController('Navigation').openMenShoe();
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'panel',
                                cls: 'x-shoe-cat x-shoe-cat-child',
                                items: [
                                    {
                                        xtype: 'panel',
                                        cls: 'x-shoe-cat-child-fline',
                                        html: "CHILDREN’s & BABY FOOTWEAR",
                                        flex: 1
                                    },
                                    {
                                        xtype: 'panel',
                                        flex: 1,
                                        layout: 'hbox',
                                        items: [
                                            {
                                                xtype: 'panel',
                                                cls: 'x-shoe-cat-child-lline',
                                                html: "girls",
                                                flex: 1
                                            },
                                            {
                                                xtype: 'panel',
                                                cls: 'x-shoe-cat-child-lline',
                                                html: "boys",
                                                flex: 1
                                            }
                                        ]
                                    }
                                ],
                                listeners: [
                                    {
                                        element: 'element',
                                        delegate: 'div.x-innerhtml',
                                        event: 'tap',
                                        fn: function(e) {
                                            console.log('CHILDREN');
                                            ShoesApp.app.application.getController('Navigation').openChildShoe();
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
});