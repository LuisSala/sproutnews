// ==========================================================================
// Project:   SproutNews.itemsController
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals SproutNews */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/

// TODO: Two arraycontrollers left and right. Two template collectionviews and each array controller is bound to one.
// look at TODOS app.
SproutNews.itemsController = SC.ArrayController.create(
	SC.CollectionViewDelegate,
/** @scope SproutNews.itemController.prototype */ {

	/*openItem: function(url) {
		//var sel = this.get('selection');
    
		SC.Logger.log("itemController Selection:" + sel);
		return YES;
	}
	
	selection: null,
	
	collectionViewShouldSelectIndexes: function (view, indexes, extend) {
		
		sel.setEach("isSelected", NO);
		
		view.set("isSelected", YES);
		return null;		
	}*/
}) ;