// ==========================================================================
// Project:   SproutNews - mainPage
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals SproutNews */

// This page describes the main user interface for your application.  
SproutNews.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
	  
	defaultResponder: SproutNews.DEFAULT,
	
    childViews: 'topView centerView'.w(),
    
    topView: SC.ToolbarView.design({
      layout: { centerX: 0, centerY: 0, right:0, height:36 },
      childViews: 'lblTitle'.w(),
      anchorLocation: SC.ANCHOR_TOP,
      
      lblTitle: SC.LabelView.design({
    	  layout: {centerY: 0, height: 24, left: 8, width: 200},
    	  controlSize: SC.LARGE_CONTROL_SIZE,
    	  fontWeight: SC.BOLD_WEIGHT,
    	  value: 'News Reader'
      }), // end lblTitle
      
      
    }), // end topView
    
    centerView: SC.ScrollView.design({
    	hasHorizontalScroller: NO,
    	layout: {top: 36, bottom: 0, left: 0, right: 0},
    	backgroundColor: 'white',
    	contentView: SC.ListView.design({
    		contentBinding: 'SproutNews.itemController.arrangedObjects',
    		selectionBinding: 'SproutNews.itemController.selection',
    		contentValueKey: 'title',
    		exampleView: SproutNews.CustomItemListView, // use custom list view    		
    		rowHeight: 50,
    		rowSpacing: 3,
    		isSelectable: YES,
    		selectOnMouseDown: YES,
    		target: "SproutNews.itemController",
    		action: "openItem"
    	}) // end leftView.contentView
    	
    }), // end leftView
    
    bottomView: SC.ToolbarView.design({
    	layout: {bottom: 0, left: 0, right: 0, height:32 },
    	anchorLocation: SC.ANCHOR_BOTTOM
    }) // end bottomView
    
  }) // end mainPane

});
