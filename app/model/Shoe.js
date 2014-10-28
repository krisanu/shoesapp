Ext.define('ShoesApp.model.Shoe', {
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
                name: 'shoetype',
                type: 'string'
            },
            {
                name: 'haschild',
                type: 'boolean'
            }
        ]
    }
});