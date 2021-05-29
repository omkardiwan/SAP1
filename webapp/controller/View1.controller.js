sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, MessageToast) {
		"use strict";
           
		return Controller.extend("ui.firstapp.controller.View1", {
           onInit: function () {},

          

            
            onLogin : function () {
                MessageToast.show("Hi, Thanks for Logging in!");
            },
            
            onSignUp : function (){
                MessageToast.show("Thanks for Sign Up");
            }
            
        });
        
        
	});
