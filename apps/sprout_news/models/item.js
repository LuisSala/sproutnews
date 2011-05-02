// ==========================================================================
// Project:   SproutNews.Item
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals SproutNews */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
SproutNews.Item = SC.Record.extend(
/** @scope SproutNews.Item.prototype */ {
  // If attribute is not eplicitly defined in the Record then the value will be looked up from the dataHash and returned WITHOUT coercion. Still best to be explicit.
  primaryKey: "link",

  title: SC.Record.attr(String),

  //options hash can be used to define the mapping key.
  //date: SC.Record.attr(SC.DateTime, {format: 'YY-mm-dd'}),
  publishedDate: SC.Record.attr(Object, { key: 'y:published' }),

  date: function(){
      var published = this.get("publishedDate");
      return published['month']+'/'+published['day']+'/'+published['year'];
  }.property().cacheable(),
  author: SC.Record.attr(String, { key: 'dc:creator' }),
  link: SC.Record.attr(String, {key:'feedburner:origLink'}),
  description: SC.Record.attr(String, { key: 'description' }),
  content: SC.Record.attr(String, { key: 'description' })
  // TODO: Define guid or id property and map that to corresponding feed GUID

  // TODO: Computed properties that pull things like the permalink, then make cacheable.
  // all SC.Records have a dataHash property that cn be accessed via readAttribute

}) ;
