// ==========================================================================
// Project:   Todos.tasksController
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Todos */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/
Todos.tasksController = SC.ArrayController.create(
		
	SC.CollectionViewDelegate,
/** @scope Todos.tasksController.prototype */ {

	summary: function() {
	    var len = this.get('length'), ret ;
	 
	    if (len && len > 0) {
	      ret = len === 1 ? "1 task" : "%@ tasks".fmt(len);
	    } else ret = "No tasks";
	  
	    return ret;
    }.property('length').cacheable(), // end summary()
    
    collectionViewDeleteContent: function(view, content, indexes) {
    	
    	// Destroy records
    	var records = indexes.map(function(idx){
    		return this.objectAt(idx);
    	}, this); // end function(idx)
    	
    	records.invoke('destroy');
    	
    	var selIndex = indexes.get('min')-1;
    	
    	if (selIndex < 0)
    		selIndex = 0;
    	
    	this.selectObject(this.objectAt(selIndex));
    	
    }, // end collectionViewDeleteContent()

    
    addTask: function() {
    	var task;
    	
    	// Create a new task record in the store
    	task = Todos.store.createRecord(Todos.Task, {
    		"description": "New Task",
    		"isDone": false
    	});
    	
    	// Select new task in UI
    	this.selectObject(task);
    	
    	this.invokeLater(function() {
    		var contentIndex = this.indexOf(task);
    		var list = Todos.mainPage.getPath('mainPane.middleView.contentView');
    		var listItem = list.itemViewForContentIndex(contentIndex);
    		listItem.beginEditing();
    	});
    }, // end addTask()

    toggleDone: function() {
    	var sel = this.get('selection');
    	sel.setEach('isDone', !sel.everyProperty('isDone'));
    	return YES;
    } // end toggleDone()
}) ;
