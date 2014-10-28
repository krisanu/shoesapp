Ext.define('ShoesApp.store.Shoes', {
    extend: 'Ext.data.TreeStore',
    config: {
        model: 'ShoesApp.model.Shoe',
        storeId : 'shoes',
        defaultRootProperty: 'items',
        root: {
            items: [
                {
                    text: 'Drinks',
                    items: [
                        {
                            text: 'Water',
                            items: [
                                {text: 'Still', leaf: true},
                                {text: 'Sparkling', leaf: true}
                            ]
                        },
                        {text: 'Soda', leaf: true}
                    ]
                },
                {
                    text: 'Snacks',
                    items: [
                        {text: 'Nuts', leaf: true},
                        {text: 'Pretzels', leaf: true},
                        {text: 'Wasabi Peas', leaf: true}
                    ]
                }
            ]
        },
        autoLoad : false
    }
});