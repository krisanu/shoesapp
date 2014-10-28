Ext.define('ShoesApp.store.LadiesShoes', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ShoesApp.model.Shoe',
        storeId: 'ladiesshoe',
        defaultRootProperty: 'items',
        data: [
            {shoetype: 'Dress Shoes'},
            {shoetype: 'Boots'},
            {shoetype: 'Seasonal Wear'},
            {shoetype: 'Athletic Shoes'},
            {shoetype: 'Brand Names'},
            {shoetype: 'Sandals & Slippers'},
            {shoetype: 'Casual Shoes'},
            {shoetype: 'Hats, Scarves & Gloves'},
            {shoetype: 'Specialty Footwear'},
            {shoetype: 'Clearance Sale'},
            {shoetype: 'Rugged & Outdoors'},
            {shoetype: 'Accessories', haschild: true}
        ],
        autoLoad: false
    }
});