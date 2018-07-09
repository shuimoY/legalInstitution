(function() {
 
function ToolTip(width_, height_, strokeColor_, fillColor_, shadowColor_, text_) {
    this.Container_constructor();
    this.label = null;
    this.text = text_ ? text_ : "tooltips";
    this.tri = null;
    this.circularRect = null;
    this.fillColor = fillColor_ ? fillColor_ : "#FFFFFF";
    this.strokeColor = strokeColor_ ? strokeColor_ : "#FFA200";
    this.shadowColor = shadowColor_ ? shadowColor_ : "#FFE8BF";
    this.width = width_ ? width_ : 256;
    this.height = height_ ? height_ : 99;
    
    this.drawBG();
    this.initText();
}
var p = createjs.extend(ToolTip, createjs.Container);
 
p.draw = function(ctx, ignoreCache) {
    this.Container_draw(ctx, ignoreCache);
    // add custom logic here.
    
}
p.initText = function(){
	this.label = new createjs.Text(this.text, "20px SimSun", "#000");
	this.label.lineWidth = this.width - 40;
	this.label.lineHeight = 30;
	this.label.x = 20;
	this.label.y = 20;
	this.addChild(this.label);
}
p.drawBG = function(){
	var g;
	if(!this.circularRect){
		this.circularRect = new createjs.Shape();
		g = this.circularRect.graphics;
	    g.setStrokeStyle(2);
	    g.beginStroke(this.strokeColor);
	    g.beginFill(this.fillColor);
	    this.circularRect.x = 0;
		this.circularRect.y = 0;
	    this.addChild(this.circularRect);
	}
//  g.clear();
    g.drawRoundRect(0, 0, this.width, this.height, 20);
    g.endFill();
    this.circularRect.shadow = new createjs.Shadow(this.shadowColor, 2, 2, 4);
    
    
    if(!this.tri){
    		this.tri = new createjs.Shape();
	    this.tri.x = 20;
	    this.tri.y = this.circularRect.height;
	    
	    g = g;
	    g.setStrokeStyle(2);
	    g.beginStroke(this.strokeColor);
	    g.beginFill(this.fillColor);
	    g.moveTo(0, 0)
	            .lineTo(15, 20)
	            .lineTo(30, 0)
//	            .lineTo(0, 0);
	            
	    g.setStrokeStyle(2);
	    g.beginStroke(this.fillColor);
	    g.moveTo(0, 0)
	            .lineTo(30, 0);
        g.endFill();
	    this.tri.x = 30;
	    this.addChild(this.tri);
    }
    this.tri.y = this.height - 2;
}
p.show = function(stage_){
	
	stage_.addChild(this);
	
	
}
p.setText = function(text_, color_, font_){
	this.text = text_;
	this.label.text = this.text;
	if(color_){
		this.label.color = color_;
	}
}
//p.setWidthAndHeight = function(width_, height_){
//	this.width = width_;
//	this.height = height_;
//	this.drawBG();
//}
//p.setStrokeAndColor = function(strokeColor_, fillColor_){
//	this.strokeColor = strokeColor_;
//	this.fillColor = fillColor_;
//}
 
window.ToolTip = createjs.promote(ToolTip, "Container");
}());