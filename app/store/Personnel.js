Ext.define('testApp.store.Personnel', {
    extend: 'Ext.data.BufferedStore',
    alias: 'store.personnel',
    storeId: 'personnel',
    pageSize: 10,
    leadingBufferZone: 10,
    fields: [
        'name', 'email', 'phone'
    ],
    autoLoad: true,
    proxy: {
        type: 'ajax',
	url: 'resources/service.php?action=list',   
        reader: {
            type: 'json',
            rootProperty: 'data',
            totalProperty: 'total'
        }
    }
});
