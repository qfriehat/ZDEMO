sap.ui.jsview("ZDEMO.view.App", {

	getControllerName: function () {
		return "ZDEMO.view.App";
	},
	
	createContent: function (oController) {
		//comment6689
		// to avoid scroll bars on desktop the root view must be set to block display
		this.setDisplayBlock(true);
		
		// create app
		this.app = new sap.m.SplitApp();

		// load the master page
		var master = sap.ui.xmlview("Master", "ZDEMO.view.Master");
		master.getController().nav = this.getController();
		this.app.addPage(master, true);
		
		// load the empty page
		var empty = sap.ui.xmlview("Empty", "ZDEMO.view.Empty");
		this.app.addPage(empty, false);
		
		return this.app;
	}
});