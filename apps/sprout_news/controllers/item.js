// ==========================================================================
// Project:   SproutNews.itemController
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals SproutNews */



/** @class

(Document Your Controller Here)

@extends SC.ObjectController
*/
SproutNews.itemController = SC.ObjectController.create(
/** @scope SproutNews.itemsController.prototype */ {

// TODO: Add your own code here.
	contentBinding: SC.Binding.from('SproutNews.itemsController.selection').single()
}) ;