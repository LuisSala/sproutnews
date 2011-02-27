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

  title: SC.Record.attr(String),
  //date: SC.Record.attr(SC.DateTime, {format: 'YY-mm-dd'}),
  date: SC.Record.attr(String),
  author: SC.Record.attr(String),
  link: SC.Record.attr(String),
  description: SC.Record.attr(String),
  content: SC.Record.attr(String)

}) ;
