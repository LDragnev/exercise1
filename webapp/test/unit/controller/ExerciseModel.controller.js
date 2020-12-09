/*global QUnit*/

sap.ui.define([
	"com/kpmg/exercise1/controller/ExerciseModel.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ExerciseModel Controller");

	QUnit.test("I should test the ExerciseModel controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});