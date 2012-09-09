/** DelegateListener similar jQuery.delegate | @version 1 | MIT License | github.com/termi  */
;(function(){"use strict";
function d(b,a){if(!(this instanceof d))return new d(b,a);a&&a.handleEvent&&(this.b=a,a=a.handleEvent);this.filter=b;this.a=a}d.prototype.handleEvent=function(b){var a=b.target,c=b.currentTarget,e;do 1===a.nodeType&&this.match(a,this.filter)&&(b.currentTarget=c,b.currentTarget!==c&&(delete b.currentTarget,b.currentTarget=c),b.target=a,b.target!==a&&(delete b.target,b.target=a),this.a&&(e=this.a.call(this.b||c,b)));while(!1!==e&&a!=c&&(a=a.parentNode));return e};
d.prototype.match=function(b,a){switch(typeof a){case "string":return b.matchesSelector(a);case "object":return Object.keys(a).every(function(c){return void 0!==a[c]?b.getAttribute(c)===a[c]:b.hasAttribute(c)});case "function":return a(b)}};"undefined"!==typeof module&&module.exports?module.exports=d:"undefined"!==typeof this&&(this.DelegateListener=d);
})();
