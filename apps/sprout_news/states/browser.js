// ==========================================================================
// Project:   SproutNews.BROWSER
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals SproutNews */

/** @class

  (Document Your State Here)

  @extends SC.Responder
  @version 0.1
*/

require("state/DEFAULT");
SproutNews.BROWSER = SC.Responder.create(
/** @scope SproutNews.BROWSER.prototype */ {

  /**
    The next state to check if this state does not implement the action.
  */
  nextResponder: null,
  
  didBecomeFirstResponder: function() {
    // Called when this state becomes first responder
	SproutNews.newsBrowser.openItem();
  },
  
  willLoseFirstResponder: function() {
    // Called when this state loses first responder
	  SproutNews.newsBrowser.closeItem();
  },
  
  closeItem: function() {
	    // Called when this state loses first responder
		SproutNews.makeFirstResponder(SproutNews.DEFAULT);
  },
  
  // ..........................................................
  // EVENTS
  //
  
  // add event handlers here
  someAction: function() {
    
  }
  
}) ;
