// ==========================================================================
// Project:   SproutNews.CustomItemListView
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals SproutNews */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
SproutNews.CustomItemListView = SC.View.extend(SC.ContentDisplay, 
/** @scope SproutNews.CustomItemListView.prototype */ {

  // TODO: Add your own code here.
	
	classNames: ['custom-item-list-view'],
	
	contentDisplayProperties: 'title author date link description'.w(),
	
	displayProperties: 'isSelected'.w(),
	
	render: function(context, firstTime) {
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
		
		sc_super();
	
	} // end render
	

});
