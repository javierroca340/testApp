Ext.define('testApp.view.main.NewClient', {
    extend: 'Ext.window.Window',
    controller: 'main',
    itemId: 'newClient',
    id: 'newClient',	
    xtype: 'basic-window',
    width:400,
    autoHeight:true,
    resizable: false,	
    title:'Crear Cliente',
    modal:true,
    autoShow: true,	
    layout:'auto',
    items:[{
     autoScroll:true,
     defaultType:'textfield',
     xtype:'form',
     id: 'newClientForm',	    
     defaults: {anchor: '100%'},
     bodyPadding: 20,
     items:[{
        xtype: 'fieldset',
        title: 'Datos del Cliente',
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },
        items: [{
            fieldLabel: 'Nombre',
            emptyText: 'Ingrese el Nombre del Cliente',
            name: 'name',
	    allowBlank: false	
        }, {
            fieldLabel: 'Correo Electronico',
            emptyText: 'Ingrese el Correo Electronico',
            name: 'email',
            vtype: 'email',
	    allowBlank: false	
        }, {
            fieldLabel: 'Telefono',
            name: 'phone',
	    emptyText: 'Ingrese su Telefono.',
	    allowBlank: false	
        }]
	    }],
         dockedItems: [{
            xtype: 'toolbar',
            dock: 'bottom',
            ui: 'footer',
            layout:{
            pack: 'center'
            },
            fixed: true,
            items: [
                {xtype: 'button', text: 'Guardar', handler: 'onSaveClient'}
            ]
        }]    
    }]
});
