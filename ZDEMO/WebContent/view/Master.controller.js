jQuery.sap.require("ZDEMO.view.utils.connectivity"); 
jQuery.sap.require("sap.m.MessageBox");	
sap.ui.controller("ZDEMO.view.Master", {

	onInit : function() {	
		
		//Load OData Service
		var oModel = new sap.ui.model.odata.ODataModel(serviceUrl, true);
		sap.ui.getCore().setModel(oModel);
		
	},
	
	pressODataSrv: function(){		
		
		//Get list control reference
		var list = this.getView().byId("idList1");
		
		//Frame Url with EntitySet
		var url = serviceUrl + "MaterialListSet";
				
		//Call OdataService
		OData.read(url, function(data) {

			//Read output
			var result = data.results;
			
			//set JSONoutput to a JSONModel
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.setData({
				listItems : result
			});
			
			//Set output to ListControl			
			list.setModel(oModel);
						
		}, function(err) {
			var errTxt = err.message + "\n" + err.request.requestUri;
			sap.m.MessageBox.show(errTxt, sap.m.MessageBox.Icon.ERROR, "Service Error");
		});	
	},
		
	pressNextPage: function(evt) {	
		var context = evt.getSource().getBindingContext();
		this.nav.to("Details", context);
	},

	pressGetMaterial : function(evt) {
		var sample = $.sap.getModulePath("ZDEMO", "/model/sampleData.json");
		var oModel = new sap.ui.model.json.JSONModel(sample);
		
		//Set JSONModeloutput to ListControl
		var list = this.getView().byId("idList1");
		list.setModel(oModel);	
	},

});