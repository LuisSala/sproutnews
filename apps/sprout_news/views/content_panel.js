// ==========================================================================
// Project:   SproutNews.ContentPanel
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals SproutNews */

/** @class

  (Document Your View Here)

  @extends SC.PanelPane
*/
SproutNews.ContentPanel = SC.PanelPane.extend(SC.Animatable,
/** @scope SproutNews.ContentPanel */ {
  modalPane: SC.ModalPane.extend(SC.Animatable, {
    /*classNames: 'for-sc-panel',*/
    transitions: {
      opacity: 0.25
    },
    style: {opacity: 0.0 }
  }), // end modalPane;

  transitions: { 
    transform: { 
      duration: 0.5, 
      timing: SC.Animatable.TRANSITION_EASE_IN_OUT
    },
    opacity: { 
      duration: 0.5, 
      timing: SC.Animatable.TRANSITION_EASE_IN_OUT,
      action: function(){ 
        if (this.style.opacity === 0) this._call_when_done();
      } 
    }
  }, // end transitions
  
  style: { opacity: 0.0, transform: "scale3d(.1,.1,1)" },
  layout: { width: 250, height: 480 },
  
  append: function() {
    sc_super();
    this.invokeLater("sizeUp", 1);
  }, // end append()
  
  sizeUp: function() {
    this.adjust({
      opacity: 1,
      transform: "scale3d(1,1,1)"
    });
    this.modalPane.adjust("opacity", 0.50);
  }, // end sizeUp()
  
  remove: function() {
    this._call_when_done = arguments.callee.base;
    this.adjust({
      opacity: 0,
      transform: "scale3d(.1,.1,1)"
    });
    this.modalPane.adjust("opacity", 0);
  }, // end remove()
  
  
  defaultResponder: SproutNews,
  layout: { top: 0, bottom: 0, width: 768, centerX: 0 },
  contentView: null,
}); // end ContentPanel

SproutNews.ContentPanel.generateWithContent = function(content, title) {
	SC.Logger.log("Cenerating ContentPanel View");
  return SproutNews.ContentPanel.create({
    contentView: SC.View.design({
      childViews: "topToolbar front".w(),
      init: function() {
        sc_super();
        
      }, // end init()
      


      topToolbar: SC.ToolbarView.design({
        layout: { top: 0, height: 40, left: 0, right: 0 },
        childViews: "close titleLabel".w(),
        close: SC.ButtonView.design({
          layout: { right: 7, centerY: 0, height: 24, width: 100 },
          title: "Close",
          action: "closeItem"
        }), // end close
        
        titleLabel: SC.LabelView.design({
	    	  layout: { centerY: 0, height: 24, left: 7, width:700},
	    	  controlSize: SC.LARGE_CONTROL_SIZE,
	    	  fontWeight: SC.BOLD_WEIGHT,
	    	  value: title
	      }), // end titleLabel

      }), // end topToolbar
           
      front: SC.ScrollView.design(SC.Animatable, {
        //classNames: "flippable".w(),
    	layout: {top: 40},
    	
        transitions: {
          "transform": {
            "duration": 0.5, timing: SC.Animatable.TRANSITION_EASE_IN_OUT
          }
        },
        style: {
          "rotateY": "0deg"
        },
        contentView: SC.StaticContentView.design({
        	"content": content
        }) // end contentView
      }) // end front
    })
  });
};
