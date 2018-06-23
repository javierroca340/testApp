Ext.define('testApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    onCreateClient: function(){
    Ext.create('testApp.view.main.NewClient');
    },
    onSaveClient: function(){
     console.log(this.getView().id)
     if(Ext.getCmp('newClientForm').getForm().isValid()){
      var values = Ext.getCmp('newClientForm').getForm().getValues();
      Ext.MessageBox.confirm('Crear Cliente', 'estas a punto de Crear al Cliente ' + '<b>'  + values.name + 
      '</b>' +' deseas continuar?', 'onConfirm', this);
     } else {
      return void 0; 
     }
     return void 0;
    },
    onCompleteEdit: function(form){
    var values = form.editor.getValues();
    values.id  = form.editor.form.getRecord().getData().id;

    testApp.view.main.MainController.temporalData = values;
    Ext.MessageBox.confirm('Actualizar Cliente', 'estas a punto de Actualizar al Cliente Nombre: ' + '<b>'  + values.name + 
      '</b>' + ' ' + 'Email: ' + '<b>' + values.email + '</b>' + ' Telefono: ' + '<b>' + values.phone + '</b>' 
      + ' deseas continuar?', 'completeEdit', this);

    },	
    completeEdit: function(){
        Ext.Ajax.request({
        url : 'resources/service.php?action=update',
        params  : testApp.view.main.MainController.temporalData,
        method: 'POST',
        success: function(response){
        delete testApp.view.main.MainController.temporalData;
        Ext.data.StoreManager.lookup('personnel').load();	
	Ext.Msg.alert('Actualizar Cliente', 'El Cliente fue Actualizado Satisfactoriamente.');	
        },
	failure: function(){
	Ext.Msg.alert('Error', 'Se a producido un Error, intente de Nuevo.');
	}
        }); 
    },	
    onConfirm: function (btn) {
        if (btn === 'yes') {
        var values = Ext.getCmp('newClientForm').getForm().getValues();

        Ext.Ajax.request({
        url : 'resources/service.php?action=create',
        params  : values,
        method: 'POST',
        success: function(response){
	Ext.getCmp('newClient').destroy();
        Ext.data.StoreManager.lookup('personnel').load();	
	Ext.Msg.alert('Crear Cliente', 'El Cliente fue Creado Satisfactoriamente.');	
        },
	failure: function(){
	Ext.Msg.alert('Error', 'Se a producido un Error, intente de Nuevo.');
	}
        });      
        }
    }
});
