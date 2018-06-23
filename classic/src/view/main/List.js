
Ext.define('testApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    controller: 'main',
    requires: [
        'testApp.store.Personnel',
        'testApp.view.main.NewClient'
    ],
    title: 'Clientes',
    loadMask: true,
    selModel: 'rowmodel',
    plugins: {
        ptype: 'rowediting',
        clicksToEdit: 2,
	listeners: {
	 edit: 'onCompleteEdit',	
	}    
    },
    height: 600,
    store: {
        type: 'personnel'
    },
    dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                items: [{
	             glyph: 'f0b1',
		    itemId: 'save',
                    text: 'Crear Cliente',
                    handler: 'onCreateClient'
                }, {
                    glyph: 'f0c4',
                    text: 'Eliminar Cliente',
                    scope: this,
                    handler: this.onReset
                }]
            }],
    columns: [
        { text: 'Nombre',  dataIndex: 'name',  editor: { xtype: 'textfield', allowBlank: false } },
        { text: 'Correo Electronico', dataIndex: 'email', flex: 1, editor: { xtype: 'textfield', allowBlank: false }  },
        { text: 'Telefono', dataIndex: 'phone', flex: 1, editor: { xtype: 'textfield', allowBlank: false }  }
    ],
    listeners: {
    }
});
