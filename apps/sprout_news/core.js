// ==========================================================================
// Project:   SproutNews
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals SproutNews */

/** @namespace

  My cool new app.  Describe your application.
  
  @extends SC.Object
*/
SproutNews = SC.Application.create(
  /** @scope SproutNews.prototype */ {

  NAMESPACE: 'SproutNews',
  VERSION: '0.1.0',

  // This is your application store.  You will use this store to access all
  // of your model data.  You can also set a data source on this store to
  // connect to a backend server.  The default setup below connects the store
  // to any fixtures you define.
  store: SC.Store.create({commitRecordsAutomatically: YES}).from('SproutNews.ItemDataSource'),
  
  // TODO: Add global constants or singleton objects needed by your app here.

  DEFAULT_FEED: '/pipes/pipe.run?_id=cfe79b93ed2e40b787f985c48c28826e&_render=json&url=http%3A%2F%2Fwww.mashable.com'

}) ;
