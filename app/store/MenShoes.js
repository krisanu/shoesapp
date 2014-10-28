Ext.define('ShoesApp.store.MenShoes', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ShoesApp.model.Shoe',
        storeId: 'menshoes',
        defaultRootProperty: 'items',
        data: [
            {shoetype: 'Casual shoes'},
            {shoetype: 'Dress shoes'},
            {shoetype: 'Boots'},
            {shoetype: 'Athletic Shoes'},
            {shoetype: 'Work & Safety shoes'},
            {shoetype: 'Brand Names'},
            {shoetype: 'Accessories', haschild: true},
            {shoetype: 'Clearance Sale'},
            {shoetype: 'Sandals & Slippers'},
            {shoetype: 'Specialty Footwear'},
            {shoetype: 'Rugged & Outdoors'}
        ],
        autoLoad: false
    }
});