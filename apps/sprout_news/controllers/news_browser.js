// ==========================================================================
// Project:   SproutNews.newsBrowser
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals SproutNews */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
SproutNews.newsBrowser = SC.ObjectController.create(
/** @scope SproutNews.newsBrowser.prototype */ {

  // TODO: Add your own code here.
	url: null,
	
	openItem: function() {
		
		if (this._openItemPanel) {
		      return; // in this case, we've done everything we need.
		}
		
		try {

			  SC.Logger.log("newsBrowser.openItem() Opening ContentPanel for URL "+this.url);
		      var itemPanel = SproutNews.ContentPanel.generateWithLink(this.url);
		      itemPanel.append();
		      this._openItemPanel = itemPanel;
		      
		 } catch (e) {
		      SC.Logger.log("newsBrowser.openItem() Exception: "+e);
		 } // end try-catch
		
	}, // end openItem()
	
	closeItem: function() {
		this.swipesAllowed = true;
		this._openItemPanel.remove();
	    this._openItemPanel = null;
	}, // end openItem()

}) ;
