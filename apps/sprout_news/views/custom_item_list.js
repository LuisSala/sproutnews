// ==========================================================================
// Project:   SproutNews.CustomItemListView
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals SproutNews */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
SproutNews.CustomItemListView = SC.ListItemView.extend(SC.ContentDisplay, SproutNews.TouchHelper,
/** @scope SproutNews.CustomItemListView.prototype */ {

	acceptsMultitouch: YES,
	
	_lastTouch: Date.now(),
	
	articleOpen: NO,
	
	_scale: 1,
	
	classNames: ['custom-item-list-view'],
	
	contentDisplayProperties: 'title author date link description'.w(),
	
	displayProperties: 'isSelected'.w(),
	
	captureTouch: function(){
		return YES;
	},
	
	touchStart: function(touch) {
		this.recomputeTouchStatus(touch, YES);
		return YES;
	}, // end touchStart()
	
	touchesDragged: function(evt, touches) {
		//sc_super();
		// TODO Explore using touch.captureTouch() as shown in Hedwig main_page.js
		SC.Logger.log("touchesDragged() Called");
		var t=this._touch;
		
		// TODO  Detect Swipes vs. Pinches/Zooms
		var avg = evt.averagedTouchesForView(this);
		SC.Logger.log("Dragged Touches: "+evt.touches);
		if (avg != null && t.start.d != 0) {
			//Multitouch pinch/zoom
			SC.Logger.log("Multitouch Detected. Start Distance: "+t.start.d + " - Current Distance: " + avg.d);			
			
			SC.Logger.log("Debug: x:"+avg.x+" y:"+avg.y+" d:"+avg.d);
			
			SC.Logger.log("Pinch Detected: Scale "+ this._scale + " average distance: "+avg.d);
			if (t.start.d > 1) {
				this._scale= t.scale * (avg.d/t.start.d);
			}
			
			if (this._scale > 1.4 && !this.articleOpen) {
				    //evt.stopPropagation();
				    this.set("articleOpen", YES);
					SC.Logger.log("Zoom Exceeded 1.4: "+this._scale);				
					content=this.get("content");
					SC.Logger.log("Sending openArticle Action");
					SproutNews.sendAction("openArticle", content.get("link"));
			} // end if
		} else {
			// Drag/swipe
			SC.Logger.log("Drag/Swipe Detected");
			var start = t.start.x;
			var current = evt.pageX;
			
			// Detect left-to-right swipe
			if (start < current) {
				SC.Logger.log("Left > Right Swipe Detected: Start "+ start +" End "+ current);
				if (current-start > 60 && !this.articleOpen) {
					//evt.stopPropagation();
					this.set("articleOpen", YES);
					this.set("articleOpen", YES);
					SC.Logger.log("Swipe Exceeded 60px");
					content=this.get("content");
					SC.Logger.log("Content: "+ content.get("link"));
					SC.Logger.log("Sending openArticle Action");
					SproutNews.sendAction("openArticle", content.get("link"));
				} // end if
			} // end if
		} // end if-else (Zoom/Swipe Detection
		

		
	}, // end touchesDragged()
	
	recomputeTouchStatus: function(touch, considerTouch) {
		var avg=touch.averagedTouchesForView(this, considerTouch);
		SC.Logger.log("I've been touched! Touches: "+ touch.touches);
		if (avg!=null) {			
			SC.Logger.log("recomputeTouchStatus() Touch Action Debug: x:"+avg.x+" y:"+avg.y+" d:"+avg.d);			
			this._touch = {
				start: {x: avg.x, y: avg.y, d: avg.d},
				scale: this._scale
			};
		} else {
			SC.Logger.log("recomputeTouchStatus() Mouse Action Debug: x:"+ touch.pageX + " y:" + touch.pageY);
			this._touch = {					
					start: {x: touch.pageX, y: touch.pageY, d: null}
			};
		} // end if-else
		
	}, // end recomputeTouchStatus()
	
	touchEnd: function(touch) {
		
		var couldBe = this.mapTouch(touch);
	    if (couldBe.tap) {
	      // first, try to see if anyone else wants it
	      if (SC.typeOf(touch) == "SC.Event")
	    	  touch.captureTouch(this, YES);
	      var key = this.get("contentIndex");
	      this.parentView.select(key, NO);
	      SC.Logger.log("Current Touch: " + touch.timeStamp + " - Previous Touch: " + this._lastTouch);
	      lastTouch = this._lastTouch;
	      this._lastTouch = touch.timeStamp;
	      // This is a double-tap
	      if ((touch.timeStamp-lastTouch < 500)) {	    	  
	    	  if (touch.touchResponder && touch.touchResponder !== this) touch.end();
		      if (touch.touchResponder === this || !touch.touchResponder) {
		        // otherwise, do what we want
		        this.tap();
		      } // end if
	      }
	    } // end if
	}, // end touchEnd()
	
	tap: function() {
		this.set("articleOpen", YES);
		SC.Logger.log("Tap Detected");
		content=this.get("content");
		SC.Logger.log("Content: "+ content.get("link"));
		SC.Logger.log("Sending openArticle Action");
		SproutNews.sendAction("openArticle", content.get("link"));
	}, // end tap()
	
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
		//var classes = {'standard': standard, 'selected': selected};
		var classes = {'standard': standard};
		
		context = context.begin().addClass('top').setClass(classes); // create "top" container for title area
		context = context.begin('h3').addClass('title').push('%@'.fmt(title)).end(); // insert h3 into "top"
		context = context.end(); // close "top"
		
		context = context.begin().addClass('byline').setClass(classes); // create "bottom" container for byline area
		context = context.begin('p').push('by %@ - %@'.fmt(author, date)).end(); // insert content into "bottom"
		context = context.end(); // close "byline"
		
		
	
	} // end render
	

});
