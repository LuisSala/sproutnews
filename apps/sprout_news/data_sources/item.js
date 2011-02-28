// ==========================================================================
// Project:   SproutNews.ItemDataSource
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals SproutNews */


sc_require('models/item');

//SproutNews.ITEM_QUERY = SC.Query.local(SproutNews.Item);
SproutNews.ITEM_QUERY = SC.Query.remote(SproutNews.Item, {query: ""});

/** @class

  (Document Your Data Source Here)

  @extends SC.DataSource
*/
SproutNews.ItemDataSource = SC.DataSource.extend(
/** @scope SproutNews.ItemDataSource.prototype */ {

  // ..........................................................
  // QUERY SUPPORT
  // 

  fetch: function(store, query) {

    // TODO: Add handlers to fetch data for specific queries.  
    // call store.dataSourceDidFetchQuery(query) when done.

	SC.Request.getUrl('/pipes/pipe.run?_id=cfe79b93ed2e40b787f985c48c28826e&_render=json&url=http%3A%2F%2Fwww.wired.com').header({'Accept':'application/json'}).json().notify(this, 'didFetchFeed', store, query).send();
	
    return YES ; // return YES if you handled the query
  },

  // ..........................................................
  // RECORD SUPPORT
  // 
  
  retrieveRecord: function(store, storeKey) {
    
    // TODO: Add handlers to retrieve an individual record's contents
    // call store.dataSourceDidComplete(storeKey) when done.
    
    return NO ; // return YES if you handled the storeKey
  },
  
  createRecord: function(store, storeKey) {
    
    // TODO: Add handlers to submit new records to the data source.
    // call store.dataSourceDidComplete(storeKey) when done.
    
    return NO ; // return YES if you handled the storeKey
  },
  
  updateRecord: function(store, storeKey) {
    
    // TODO: Add handlers to submit modified record to the data source
    // call store.dataSourceDidComplete(storeKey) when done.

    return NO ; // return YES if you handled the storeKey
  },
  
  destroyRecord: function(store, storeKey) {
    
    // TODO: Add handlers to destroy records on the data source.
    // call store.dataSourceDidDestroy(storeKey) when done
    
    return NO ; // return YES if you handled the storeKey
  },
  
  didFetchFeed: function(response, store, query) {
	  
	  if (SC.ok(response)) {
		  
		  var results = [];
		  
		  var results = response.get('body');
		  
		  var storeKeys = SC.SparseArray.array();
		  
		  console.log("didFetchFeed: count = "+ results.count)
		  
		  for (var i=0; i< results.count; i++) {
			  var item = results.value.items[i];
			  console.log("didFetchFeed: Item "+i+"-"+item.title);
			  storeKeys.pushObject(store.createRecord(SproutNews.Item,{
				  title: item.title,
				  link: item.link,
				  author: item['dc:creator'],
				  date: item['y:published']['month']+'-'+item['y:published']['day']+'-'+item['y:published']['year'],
				  description: item.description,
				  content: "Content Not Assigned"
			  }, item.link).storeKey);
		  } // end for		  
		    
		  store.loadQueryResults(query, storeKeys);
	    
		  store.dataSourceDidFetchQuery(query);
	  } else {
		  store.dataSourceDidErrorQuery(query, response);
	  }// end if-else
  } // end didFetchFeed()
}) ;
