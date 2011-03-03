// ==========================================================================
// Project:   SproutNews.CustomItemListView
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals SproutNews */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
SproutNews.CustomItemListView = SC.ListItemView.extend(SC.ContentDisplay, 
/** @scope SproutNews.CustomItemListView.prototype */ {

  // TODO: Add your own code here.
	
	acceptDrags: true,
	
	classNames: ['custom-item-list-view'],
	
	contentDisplayProperties: 'title author date link description'.w(),
	
	displayProperties: 'isSelected'.w(),
	
	touchStart: function(touch) {
		//sc_super();
		this._touch={
			start: {x: touch.pageX, y: touch.pageY},
		}; // end _touch
		return YES;
	}, // end touchStart()
	
	touchesDragged: function(evt, touches) {
		//sc_super();
		var t=this._touch;
		
		console.log("Dragging");
		var start = t.start.x;
		var current = evt.pageX;
		
		// Detect left-to-right swipe
		if (start < current) {
			SC.Logger.log("Left > Right Swipe Detected: Start "+ start +" End "+ current);
			if (current-start > 60 && this.acceptDrags) {
				this.acceptDrags = false;
				SC.Logger.log("Swipe Exceeded 60px");
				//this.parentView.select();
				content=this.get("content");
				SC.Logger.log("Content: "+ content.get("link"));
				SC.Logger.log("Sending openArticle Action");
				SproutNews.sendAction("openArticle", content.get("link"));
			} // end if
		} // end if
		
	}, // end touchesDragged()
	
	touchEnd: function() {
		//sc_super();
		// Not Required
	}, // end touchEnd()
	
	mouseDown: function(evt) {		
		this.touchStart(evt);
	}, // end mouseDown()
	
	mouseDragged: function(evt) {
		this.touchesDragged(evt);
	}, // end mouseDragged()
	
	mouseUp: function(evt) {
		this.touchEnd(evt);
	}, // end mouseUp()
	
	render: function(context, firstTime) {
		sc_super();
		
		var content = this.get('content');
		var title = content.get('title');
		//var date = content.get('date').toFormattedString("mm/dd/YY");
		var date = content.get('date');
		var author = content.get('author');
		var link = content.get('link');
		var description = content.get('description');
		
		var isSelected = this.get('isSelected');
		
		var standard = !isSelected;
		var selected = isSelected;
		var classes = {'standard': standard, 'selected': selected};
		
		context = context.begin().addClass('top').setClass(classes); // create "top" container for title area
		context = context.begin('h3').addClass('title').push('%@'.fmt(title)).end(); // insert h3 into "top"
		context = context.end(); // close "top"
		
		context = context.begin().addClass('byline').setClass(classes); // create "bottom" container for byline area
		context = context.begin('p').push('by %@ - %@'.fmt(author, date)).end(); // insert content into "bottom"
		context = context.end(); // close "byline"
		
		
	
	} // end render
	

});
