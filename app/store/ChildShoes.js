Ext.define('ShoesApp.store.ChildShoes', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ShoesApp.model.Shoe',
        storeId: 'childshoes',
        defaultRootProperty: 'items',
        data: [
            {shoetype: 'Girls', haschild: true},
            {shoetype: 'Boys', haschild: true}
        ],
        autoLoad: false
    }
});