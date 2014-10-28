Ext.define('ShoesApp.store.Offers', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ShoesApp.model.Offer',
        storeId: 'offers',
        defaultRootProperty: 'items',
        data: [
            {text: 'This is the sample offer title text & can only be of a fixed decent length', image: 'resources/images/icon.png', rating: 3, distance: '1.5 miles', expiry: 3, regulerprice: '$ 86.50', saleprice: '$ 64.86', discount: '25%', soldout: false},
            {text: 'This is the sample offer title text & can only be of a fixed decent length', image: 'resources/images/icon.png', rating: 3, distance: '1.5 miles', expiry: 3, regulerprice: '$ 86.50', saleprice: '$ 64.86', discount: '25%', soldout: false},
            {text: 'This is the sample offer title text & can only be of a fixed decent length', image: 'resources/images/icon.png', rating: 3, distance: '1.5 miles', expiry: 3, regulerprice: '$ 86.50', saleprice: '$ 64.86', discount: '25%', soldout: false},
            {text: 'This is the sample offer title text & can only be of a fixed decent length', image: 'resources/images/icon.png', rating: 3, distance: '1.5 miles', expiry: 3, regulerprice: '$ 86.50', saleprice: '$ 64.86', discount: '25%', soldout: false},
            {text: 'This is the sample offer title text & can only be of a fixed decent length', image: 'resources/images/icon.png', rating: 3, distance: '1.5 miles', expiry: 3, regulerprice: '$ 86.50', saleprice: '$ 64.86', discount: '25%', soldout: false},
            {text: 'This is the sample offer title text & can only be of a fixed decent length', image: 'resources/images/icon.png', rating: 3, distance: '1.5 miles', expiry: 3, regulerprice: '$ 86.50', saleprice: '$ 64.86', discount: '25%', soldout: false},
            {text: 'This is the sample offer title text & can only be of a fixed decent length', image: 'resources/images/icon.png', rating: 3, distance: '1.5 miles', expiry: 3, regulerprice: '$ 86.50', saleprice: '$ 64.86', discount: '25%', soldout: false}
        ],
        autoLoad: false
    }
});