Ext.define('ShoesApp.view.ShoeCategory', {
    extend: 'Ext.NestedList',
    xtype: 'shoecategory-screen',
    config: {
        title: 'Upcoming',
        variableHeights: true,
        emptyText: 'No Data currently Available',
        store: 'shoes',
        listConfig: {
            itemTpl: 'Hi {text}'
        },
//        tpl: ['<div class="contact">Hi {text}</div>'],
        detailCard: {
            html: 'You are viewing the detail card!'
        },
        listeners: {
            leafitemtap: function(nestedList, list, index, target, record) {
                var detailCard = nestedList.getDetailCard();
                detailCard.setHtml('You selected: ' + record.get('text'));
            }
        }
    }
});