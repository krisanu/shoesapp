Ext.define('ShoesApp.model.Offer', {
    extend: 'Ext.data.Model',
    config: {
        idProperty: 'id',
        identifier: 'uuid',
        fields: [
            {
                name: 'text',
                type: 'string'
            },
            {
                name: 'image',
                type: 'string'
            },
            {
                name: 'rating',
                type: 'int'
            },
            {
                name: 'distance',
                type: 'string'
            },
            {
                name: 'expiry',
                type: 'int'
            },
            {
                name: 'regulerprice',
                type: 'string'
            },
            {
                name: 'saleprice',
                type: 'string'
            },
            {
                name: 'discount',
                type: 'string'
            },
            {
                name: 'soldout',
                type: 'boolean'
            }
        ]
    }
});