// ==========================================================================
// Project:   SproutNews.itemController
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals SproutNews */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/
SproutNews.itemController = SC.ArrayController.create(
	SC.CollectionViewDelegate,
/** @scope SproutNews.itemController.prototype */ {

	openItem: function() {
		var sel = this.get('selection');
    
		SC.Logger.log("itemController Selection:" + sel);
		return YES;
	}

}) ;
