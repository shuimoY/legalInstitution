(function() {
 
function PopDialog(label) {
    this.Container_constructor();
    this.label = label;
}
var p = createjs.extend(PopDialog, window.BaseDialog);
 
p.draw = function(ctx, ignoreCache) {
    this.Container_draw(ctx, ignoreCache);
    // add custom logic here.
}
 
window.PopDialog = createjs.promote(PopDialog, "BaseDialog");
}());