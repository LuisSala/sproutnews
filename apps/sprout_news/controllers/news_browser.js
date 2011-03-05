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
			  
			  SC.Request.getUrl("/read?url="+this.url).notify(this, "didGetContent").send();
			  
		      
		      
		 } catch (e) {
		      SC.Logger.log("newsBrowser.openItem() Exception: "+e);
		 } // end try-catch
		
	}, // end openItem()
	
	closeItem: function() {
		this.swipesAllowed = true;
		this._openItemPanel.remove();
	    this._openItemPanel = null;
	}, // end openItem()
	
	didGetContent: function(response) {
		
		var content = "<h1>Content Retrieval Error</h1>";
		
		if (SC.ok(response)) {	
			content=response.get('body')+"";
			SC.Logger.log("Got Content " + content);
		} // end if
		
		var itemPanel = SproutNews.ContentPanel.generateWithContent(content);
	      itemPanel.append();
	    this._openItemPanel = itemPanel;
		
	} // end didGetContent
}) ;
