// ==========================================================================
// Project:   SproutNews.DEFAULT
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals SproutNews */

/** @class

  (Document Your State Here)

  @extends SC.Responder
  @version 0.1
*/
SproutNews.DEFAULT = SC.Responder.create(
/** @scope SproutNews.DEFAULT.prototype */ {

  /**
    The next state to check if this state does not implement the action.
  */
  nextResponder: null,
  
  didBecomeFirstResponder: function() {
    // Called when this state becomes first responder
	SproutNews.getPath("mainPage.mainPane.centerView.contentView.exampleView").articleOpen=NO;
  },
  
  willLoseFirstResponder: function() {
    // Called when this state loses first responder
  },
  
  // ..........................................................
  // EVENTS
  //
  
  // add event handlers here
  openArticle: function(url, title) {
	  SproutNews.newsBrowser.set("url", url);
	  SproutNews.newsBrowser.set("pageTitle", title);
	  SC.Logger.log("DEFAULT Responder openArticle(): Opening panel for "+url + "Title: " + title);
	  SproutNews.makeFirstResponder(SproutNews.BROWSER);
  }, // end openArticle()
  
  toggleSelected: function() {	  
	  SproutNews.itemsController.toggleSelected();
  }
  
}) ;
