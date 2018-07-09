(function() {
 
function BaseDialog(label) {
    this.Container_constructor();
}
var p = createjs.extend(BaseDialog, createjs.Container);
 
p.draw = function(ctx, ignoreCache) {
    this.Container_draw(ctx, ignoreCache);
    // add custom logic here.
}
p.click = function(btn_, callback_){
	btn_.mouseChild = false;
	btn_.cursor = "pointer";
	btn_.addEventListener("click", function(e){
		e.stopPropagation();
		if(callback_){
			callback_(e)
;		}
	})
}
 
window.BaseDialog = createjs.promote(BaseDialog, "Container");
}());