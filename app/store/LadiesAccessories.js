Ext.define('ShoesApp.store.LadiesAccessories', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ShoesApp.model.Shoe',
        storeId: 'ladiesaccessories',
        defaultRootProperty: 'items',
        data: [
            {shoetype: 'Hosiery & Socks'},
            {shoetype: 'Sunglasses'},
            {shoetype: 'Jewellery'},
            {shoetype: 'Handbags & wallets'},
            {shoetype: 'Much more'}
        ],
        autoLoad: false
    }
});/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


