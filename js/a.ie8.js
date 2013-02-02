/* ES6/DOM4 polyfill for IE8 | @version 0.8.2 | MIT License | github.com/termi */
void function(w){var k=void 0,m=!0,n=null,t=!1;function N(){return function(){}};function x(a){if(!("__isFixed"in a)){var b="button"in a&&a.button;a.__isFixed=m;if("click"===a.type||"dblclick"===a.type)a.detail===k&&(a.detail="click"===a.type?1:2),!a.button&&x.b!==k&&(b=x.b);w(a,E);a.defaultPrevented||(a.defaultPrevented=t);a.target||(a.target=a.srcElement||document);a.relatedTarget===k&&a.fromElement&&(a.relatedTarget=a.fromElement==a.target?a.toElement:a.fromElement);"clientX"in a&&a.pageX==n&&(a.pageX=a.clientX+O()-(q.clientLeft||0),a.pageY=a.clientY+P()-(q.clientTop||
0));!a.which&&b&&(a.which=b&1?1:b&2?3:b&4?2:0);"timeStamp"in a||(a.timeStamp=+new ea);"eventPhase"in a||(a.eventPhase=a.target==this?2:3);"currentTarget"in a||(a.currentTarget=this);a.keyCode||(a.keyCode=a.charCode||a.which);!a.attrName&&a.propertyName&&(a.attrName=fa.call(a.propertyName,".")[0]);return a}}function y(a){if(x!==k){var b=this._,c,f,h,d,e,r;if(!b.__stop_events__){c=[];f=[];d="_e_8vj"+(pa?"-":"");if(!b||!b[d])if("__dom0__"in a)b||(b={}),b[d]||(b[d]={});else return;a||(a=window.event);
if("__custom_event"in a)h=a;else if(!(h=a.__customEvent__))a.bubbles==k&&(a.bubbles=m),a.cancelable==k&&(a.cancelable=m),h=a.__customEvent__=new v(a),h.initEvent(a.type,a.bubbles,a.cancelable),x.call(this,h),h.k=m,h.__custom_event=k;h.ietl9_event=a;a.currentTarget=this;d=b[d][h.type];"__dom0__"in a&&(e=a.__dom0__);if(d){b=0;do{"object"===typeof e&&(r=e,e=e.handleEvent);try{if(e&&(h.result=C.call(e,r||this,h))===t)h.preventDefault(),h.stopPropagation()}catch(g){c.push(g),f.push(g.message)}if(h.__stopNow)break}while(e=
d[b++]);a.returnValue=h.returnValue;a.cancelBubble=h.cancelBubble;1==c.length?I(c[0]):1<c.length&&(f=Error("Multiple errors thrown : "+h.type+" :  : "+f.join("|")),f.errors=c,I(f))}this===document&&(!h.cancelBubble&&3===h.eventPhase)&&(y.call(this.defaultView,h),a.cancelBubble=m)}}}function F(){}function T(a){var b=this.__orig__createElement__(a);if(ga.test(a))return b;~J.indexOf("|"+a+"|")||(U.push(a),J+=a+"|",(z.__orig__createElement__||z.createElement)(a));return z.appendChild(b)}function V(a){var b=
-1;if(a.createElement){for(;++b<U.length;)a.createElement(U[b]);a.createElement!==T&&!("ielt9"in a.createElement)&&(a.__orig__createElement__=a.createElement,a.createElement=T)}return a}var d=this,u=window.eval&&window.eval("/*@cc_on 1;@*/")&&+((/msie (\d+)/i.exec(navigator.userAgent)||[])[1]||0)||n;if(9>u){d.Element||((d.Element=window.ActiveXObject).prototype.ie=m);d.HTMLElement||(d.HTMLElement=d.Element);d.Node||(d.Node=d.Element);var p;d.DocumentFragment||(d.DocumentFragment=d.Document||d.HTMLDocument||
(p=N(),p.prototype={},p));d.Document||(d.Document=d.DocumentFragment);d._={ielt9shims:[],orig_:d._,isObject:function(a){return"[object Object]"===ha.call(a)&&"function"===typeof a.constructor&&"[object Function]"===ha.call(a.constructor)}};var g=d._.ielt9shims,W=document.createDocumentFragment,ia=document.createElement,ja=document.createTextNode,q=document.documentElement,I=function(a){throw a instanceof Error?a:Error(a);},ka=function(a){var b=Object.create(DOMException.prototype);b.code=DOMException[a];
b.message=a+": DOM Exception "+b.code;throw b;},la=function(a,b){for(var c in b)if(Q(b,c)&&a[c]!==b[c])try{a[c]=b[c]}catch(f){}},sa=String.prototype.trim||function(){for(var a=this.replace(qa,""),b=a.length;ra.test(a.charAt(--b)););return a.slice(0,b+1)},fa=String.prototype.split,ta=String.prototype.substr,K=Array.prototype.slice,X=Array.prototype.splice,R=Function.prototype.apply,C=Function.prototype.call,D=Function.prototype.bind||function(a,b){var c=this,f=K.call(arguments,1);return function(){return R.call(c,
a,f.concat(K.call(arguments)))}},A,ha=Object.prototype.toString,Q=D.call(Function.prototype.call,Object.prototype.hasOwnProperty);p=document.createElement("p");var l=d.Node.prototype,s=d.Element.prototype,ua=p.contains||l.contains,ea=Date,va=/^\<([\w\:\-]*)[\>\ ]/i,qa=/^\s+/,ra=/\s/,Y,e,B,Z,$=/alpha\(opacity=([^\)]+)\)/,S=function(){var a=(this.filter||"").match($);return a?parseInt(a[1])/100+"":""},aa={getPropertyValue:function(a){return this.getAttribute(a)},removeProperty:function(a){this.removeAttribute(a)},
setProperty:function(a,b,c){"important"!=c?this.setAttribute(a,b):(c=RegExp(a+"\\s*:\\s*(\\S+)\\s*(?:[$;]|(?:(!important)\\s*[$;]))","i"),a=";"+a+":"+b+" !important;",this.cssText=c.test(this.cssText)?this.cssText.replace(c,a):this.cssText+a)},getPropertyPriority:function(a){return((this.cssText||"").match(RegExp(a+"\\s*:\\s*(\\S+)\\s*(?:[$;]|(?:(!important)\\s*[$;]))","i"))||[])[2]||""},item:N()},L={"for":"htmlFor","class":"className",value:"defaultValue"},ba={action:n,cite:n,codebase:n,data:n,href:n,
longdesc:n,lowsrc:n,src:n,usemap:n},G={id:m,value:m,checked:m,disabled:m,ismap:m,multiple:m,readonly:m,selected:m},v,H,E,wa=1,xa=N(),pa=t,ma,J="abbr|article|aside|audio|canvas|command|datalist|details|figure|figcaption|footer|header|hgroup|keygen|mark|meter|main|nav|output|progress|section|source|summary|time|video",U=J.split("|"),ga=/^<|^(?:a|b|button|code|div|fieldset|form|map|h1|h2|h3|h4|h5|h6|i|object|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul|optgroup)$/i,
j,z,M,na,O,P;e=document.createElement("iframe");e.style.display="none";(document.body||q).appendChild(e);e.contentWindow.document.write("<script>parent._.NodeList=Array;parent._.EMP=Object.prototype\x3c/script>");Z=d._.NodeList;delete d._.NodeList;A=d._.EMP;delete d._.EMP;delete A.constructor;delete A.hasOwnProperty;delete A.propertyIsEnumerable;delete A.isPrototypeOf;delete A.toLocaleString;delete A.toString;delete A.valueOf;A.__proto__=n;g.push(function(){var a=Object.create;Object.create=function(b){b===
n&&(arguments[0]=A);a.apply(this,arguments)}});"CSS1Compat"===document.compatMode?(O=function(){return q.scrollLeft},P=function(){return q.scrollTop}):(O=function(){return document.body.scrollTop},P=function(){return document.body.scrollLeft});document.head||(document.head=document.getElementsByTagName("head")[0]);"defaultView"in document||(document.defaultView=document.parentWindow);e=t;try{e=isNaN.apply(n,{})}catch(Ea){}e||(Function.prototype.apply=function(a,b){return!b?R.call(this,a):"object"!==
typeof b||b instanceof Array||!("length"in b)?R.call(this,a,b):R.call(this,a,Array.from(b))});"b"!=="ab".substr(-1)&&(String.prototype.substr=function(a,b){return ta.call(this,0>a?0>(a=this.length+a)?0:a:a,b)});if("te".split(/(s)*/)[1]!=k||3!="1_1".split(/(_)/).length)Y=/()??/.exec("")[1]===k,String.prototype.split=function(a,b){var c=this;if(!(a instanceof RegExp))return a===k&&0===b?[]:fa.call(c,a,b);var f=[],h=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.extended?"x":"")+(a.sticky?"y":""),d=0,
e,r,g;a=RegExp(a.source,h+"g");c+="";Y||(e=RegExp("^"+a.source+"$(?!\\s)",h));b=b===k?4294967295:b>>>0;if(!b)return[];for(;r=a.exec(c);){h=r.index+r[0].length;if(h>d&&(f.push(c.slice(d,r.index)),!Y&&1<r.length&&r[0].replace(e,function(){for(var a=1,b=arguments.length-2;a<b;a++)arguments[a]===k&&(r[a]=k)}),1<r.length&&r.index<c.length&&f.push.apply(f,r.slice(1)),g=r[0].length,d=h,f.length>=b))break;a.lastIndex===r.index&&a.lastIndex++}d===c.length?(g||!a.test(""))&&f.push(""):f.push(c.slice(d));return f.length>
b?f.slice(0,b):f};d.DOMException||(e=(d.DOMException=N()).prototype=Error(),e.INDEX_SIZE_ERR=1,e.HIERARCHY_REQUEST_ERR=3,e.WRONG_DOCUMENT_ERR=4,e.INVALID_CHARACTER_ERR=5,e.NO_MODIFICATION_ALLOWED_ERR=7,e.NOT_FOUND_ERR=8,e.NOT_SUPPORTED_ERR=9,e.INVALID_STATE_ERR=11,e.SYNTAX_ERR=12,e.INVALID_MODIFICATION_ERR=13,e.NAMESPACE_ERR=14,e.INVALID_ACCESS_ERR=15);"pageXOffset"in d||g.push(function(){Object.defineProperty(d,"pageXOffset",{get:O});Object.defineProperty(d,"pageYOffset",{get:P})});B=d.Event=function(){I("")};
H={initEvent:function(a,b,c){(a==k||b==k||c==k)&&I("WRONG_ARGUMENTS_ERR");this.type=a;this.bubbles=b;this.cancelable=c;this.k=t;this.target=n;this.timeStamp||(this.timeStamp=+new ea)},initCustomEvent:function(a,b,c,f){H.initEvent.call(this,a,b,c);this.detail=f},initUIEvent:function(a,b,c,f,h){H.initCustomEvent.call(this,a,b,c,h);this.view=f},initMouseEvent:function(a,b,c,f,h,d,e,r,g,l,j,p,q,s,u){H.initUIEvent.call(this,a,b,c,f,h);this.screenX=d;this.screenY=e;this.clientX=r;this.clientY=g;this.ctrlKey=
l;this.altKey=j;this.shiftKey=p;this.metaKey=q;this.button=s;this.relatedTarget=u}};E=B.prototype={constructor:B,preventDefault:function(){this.cancelable!==t&&(v.a.call(this).returnValue=this.returnValue=t,v.f.call(this),this.defaultPrevented=m)},stopPropagation:function(){v.a.call(this).cancelBubble=this.cancelBubble=m;v.f.call(this)}};E.stopImmediatePropagation=function(){this.__stopNow=m;this.stopPropagation()};E.defaultPrevented=t;for(e in H)Q(H,e)&&(E[e]=function(){H[arguments.callee.name].apply(this,
arguments);la(this.ietl9_event,this)},E[e].name=e);v=function(a){this.ietl9_event=a;a.returnValue=m;la(this,a)};v.a=function(){var a=this.ietl9_event;a===k?I("WRONG_THIS_ERR"):a===n&&(a=v.a.j);return a};v.a.j={};v.f=function(){this.ietl9_event&&(this.ietl9_event=n)};B=N();B.prototype=E;B=new B;B.constructor=v;v.prototype=B;p.addEventListener||((d.Text&&d.Text.prototype||l).addEventListener=l.addEventListener=q.addEventListener=d.addEventListener=document.addEventListener=function(a,b,c){if("function"==
typeof b||"object"===typeof b&&b.handleEvent){var f=this,h=f._,e=t;f==d&&(!("_"in document)||!("_e_8vj"in document._)||!(a in document._._e_8vj))&&document.addEventListener(a,xa,c);h||(h=f._={});switch(a){case "DOMContentLoaded":if("complete"==document.readyState)return;f===d&&(f=document);e=m;if(!ma){ma=m;var g=function(){try{document.documentElement.doScroll("left")}catch(b){setTimeout(g,50);return}y.call(f,{type:a,isTrusted:m,__custom_event:k})};if("createEventObject"in document&&"doScroll"in document.documentElement)try{d.frameElement||
g()}catch(r){}}break;case "load":"tagName"in f&&-1!="SCRIPT|IFRAME".indexOf(f.tagName.toUpperCase())&&(e=m,f.onreadystatechange=function(){"loaded"===f.readyState&&(f.onreadystatechange=n,f.attachEvent("onreadystatechange",D.call(y,f,{type:a})))},a="readystatechange");break;case "DOMMouseScroll":a="mousewheel"}f.setInterval&&(f!=d&&!f.frameElement)&&(f=d);b.uuid||(b.uuid=++wa);if(!(c=h._h_9e2))c=h._h_9e2=D.call(y,f);h._e_8vj||(h._e_8vj={});a in h._e_8vj?h=h._e_8vj[a]:(h=h._e_8vj[a]=[],e||f.attachEvent("on"+
a,c));"_"+b.uuid in h||(h.push(b),h["_"+b.uuid]=n)}},l.addEventListener.__shim__=m,(d.Text&&d.Text.prototype||l).removeEventListener=l.removeEventListener=q.removeEventListener=d.removeEventListener=document.removeEventListener=function(a,b){var c=this._,f,h,d,e,r;if(!("function"!==typeof b&&!("object"===typeof b&&b.handleEvent)||!b.uuid||!c))if(f=c._h_9e2){h=c._e_8vj&&c._e_8vj[a];for(e=0;r=h[e++];)if(r===b){X.call(h,e-1,1);delete h["_"+b.uuid];break}if(!h.length){this.detachEvent("on"+a,f);delete c._e_8vj[a];
for(d in c._e_8vj)if(Q(c._e_8vj,d))return;delete c._e_8vj;delete c._h_9e2}}},l.removeEventListener.__shim__=m,document.attachEvent("onmousedown",function(){x.b=event.button}),document.attachEvent("onclick",function(){x.b=k}));p.dispatchEvent||((d.Text&&d.Text.prototype||l).dispatchEvent=l.dispatchEvent=q.dispatchEvent=d.dispatchEvent=document.dispatchEvent=function(a){if(!a.type)return m;a.returnValue||(a.returnValue=m);a.cancelBubble&&(a.cancelBubble=t);delete a.__stopNow;try{return this.fireEvent("on"+
a.type,a)}catch(b){if(-2147024809===b.number||this===d||-2146827850===b.number&&!(a.bubbles=t)){a.__custom_event=m;for(var c=a.target=this,f="on"+a.type;!a.cancelBubble&&c;)(f in c&&"function"==typeof c[f]&&(a.__dom0__=c[f])||"_"in c&&"_e_8vj"in c._)&&y.call(c,a),c=a.bubbles?c===document?document.defaultView:c.parentNode:n,"__dom0__"in a&&(a.__dom0__=k,delete a.__dom0__);return!a.cancelBubble}I(b)}},l.dispatchEvent.__shim__=m);document.createEvent||(document.createEvent=function(){return new v(document.createEventObject())});
g.push(function(){function a(a){var b,c=this.nodeName.toUpperCase(),f,d,e,g,l,j,p,q;if(!("INPUT"!=c&&"TEXTAREA"!=c)){"unknown"!=typeof document.activeElement&&(j=document.activeElement);b=document.selection;this._&&(p=this._.__stop_events__,this._.__stop_events__=m);j&&j._&&(q=j._.__stop_events__,j._.__stop_events__=m);try{this.focus(),f=b.createRange(),d=f.duplicate(),"TEXTAREA"==c?(e=this.value,f=d,a?(f.moveEnd("character",e.length),l=""==f.text?e.length:e.lastIndexOf(f.text)):(f.moveStart("character",
-e.length),l=f.text.length)):(d.moveToElementText(this),d.setEndPoint("EndToEnd",f),g=d.text.length-f.text.length,l=a?g:g+f.text.length),j&&j.focus&&j.focus()}catch(s){l=k}this._&&!p&&delete this._.__stop_events__;j&&(j._&&!q)&&delete j._.__stop_events__;return l}}function b(a,b){if(a!=k){b==k&&(b=a);var c=this.nodeName.toUpperCase();"INPUT"!=c&&"TEXTAREA"!=c||(c=this.createTextRange(),c.collapse(m),c.moveStart("character",a),c.moveEnd("character",b-a),c.select())}}var c=d.HTMLTextAreaElement&&d.HTMLTextAreaElement.prototype,
f={setSelectionRange:{value:b},selectionStart:{get:function(){return a.call(this,m)},set:function(c){b.call(this,c,a.call(this));return c}},selectionEnd:{get:function(){return a.call(this)},set:function(c){b.call(this,a.call(this,m),c);return c}}};Object.defineProperties(d.HTMLInputElement&&d.HTMLInputElement.prototype||s,f);c&&Object.defineProperties(c,f)});F.prototype=[];e=new F;e.push(1);e.length?(d.NodeList=F,Z=n):F=d.NodeList=Z;F.prototype.item=function(a){return this[a]};document.doctype===
n&&7<u&&g.push(function(){var a=document.childNodes[0];Object.defineProperty(a,"nodeType",{get:function(){return 10}});Object.defineProperty(document,"doctype",{configurable:m,enumerable:t,get:function(){return a}})});l.contains||(l.contains=ua);C.call(ja,document,"").contains||(d.Text&&d.Text.prototype?g.push(D.call(w,n,Text.prototype,l)):document.createTextNode=function(a){a=C.call(ja,this,a);a.contains=l.contains;return a});!C.call(W,document).contains&&(d.HTMLDocument&&d.HTMLDocument.prototype)&&
g.push(D.call(w,n,d.HTMLDocument.prototype,l));"children"in p||g.push(function(){Object.defineProperty(s,"children",{get:function(){for(var a=[],b=this.firstChild;b;)1==b.nodeType&&a.push(b),b=b.nextSibling;return a}})});g.push(function(){function a(a,c){var f;try{a:{var d=a;"element"in d&&("defaults"in d&&"document"in d)&&(d=d.element);var e=d.getBoundingClientRect(),g,j,l;if((l=d.ownerDocument)!==document){if(g=l&&l.body,j=l&&l.documentElement,!g||!j){f=c?e.left:e.top;break a}}else g=document.body,
j=q;f=c?e.left+O()-(j.clientLeft||g.clientLeft||0):e.top+P()-(j.clientTop||g.clientTop||0)}}catch(p){f=a;d=0;for(e=c?"offsetLeft":"offsetTop";f;)d+=parseInt(f[e],10),f=f.offsetParent;f=d}return f}Object.defineProperties(s,{offsetLeft:{get:function(){return a(this,m)}},offsetTop:{get:function(){return a(this)}}})});p.childElementCount==k&&g.push(function(){Object.defineProperties(s,{firstElementChild:{get:function(){var a;for(a=this.firstChild;a&&1!=a.nodeType;)a=a.nextSibling;return a}},lastElementChild:{get:function(){var a;
for(a=this.lastChild;a&&1!=a.nodeType;)a=a.previousSibling;return a}},nextElementSibling:{get:function(){for(var a=this;(a=a.nextSibling)&&1!=a.nodeType;);return a}},previousElementSibling:{get:function(){for(var a=this;(a=a.previousSibling)&&1!=a.nodeType;);return a}}})});document.ELEMENT_NODE||(e={ELEMENT_NODE:1,TEXT_NODE:3,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11},w(document,e),w(l,e),w(d.Node,e));"textContent"in p||g.push(function(){Object.defineProperty(l,
"textContent",{get:function(){if("innerText"in this)return this.innerText;if("data"in this&&this.appendData)return this.data},set:function(a){"innerText"in this?this.innerText=a:"data"in this&&this.replaceData&&this.replaceData(0,this.length,a);return a}})});"isEqualNode"in p||(document.isEqualNode=q.isEqualNode=l.isEqualNode=function(a){var b,c;if(a===n||a.nodeType!==this.nodeType||10===a.nodeType&&(this.name!==a.name||this.publicId!==a.publicId||this.systemId!==a.systemId))return t;if(1===a.nodeType){if(this.namespaceURI!=
a.namespaceURI||this.prefix!=a.prefix||this.localName!=a.localName)return t;b=0;for(c=this.attributes.length;b<c;b++){var d=this.attributes[length],e=a.getAttributeNS(d.namespaceURI,d.localName);if(e===n||e.value!==d.value)return t}}if(7===a.nodeType&&(this.target!==a.target||this.data!==a.data)||(3===a.nodeType||8===a.nodeType)&&this.data!==a.data||a.childNodes.length!==this.childNodes.length)return t;b=0;for(c=a.childNodes.length;b<c;b++)if(a.childNodes[b].isEqualNode(this.childNodes[b])===t)return t;
return m});document.importNode||(document.importNode=function(a,b){switch(a.nodeType){case 1:var c=document.createElement(a.nodeName),d=a.attributes,e,g,j;if(d&&0<d.length){g=0;for(j=d.length;g<j;)d=a.attributes[g++],c.setAttribute(d.nodeName,a.getAttribute(d.nodeName))}if(b&&(e=a.childNodes)&&0<e.length){g=0;for(j=e.length;g<j;)c.appendChild(document.importNode(e[g++],b))}return c;case 3:case 4:case 8:return document.createTextNode(a.nodeValue)}ka("NOT_SUPPORTED_ERR");return n},document.importNode.shim=
m);e="compareDocumentPosition";e in document||(g=j||"DOCUMENT_POSITION_",q[e]=document[e]=l[e]=function(a){return this.contains?(this!=a&&this.contains(a)&&16)+(this!=a&&a.contains(this)&&8)+(0<=this.sourceIndex&&0<=a.sourceIndex?(this.sourceIndex<a.sourceIndex&&4)+(this.sourceIndex>a.sourceIndex&&2):1)+0:0},j="DISCONNECTED",q[g+j]=document[g+j]=l[g+j]=1,j="PRECEDING",q[g+j]=document[g+j]=l[g+j]=2,j="FOLLOWING",q[g+j]=document[g+j]=l[g+j]=4,j="CONTAINS",q[g+j]=document[g+j]=l[g+j]=8,j="CONTAINED_BY",
q[g+j]=document[g+j]=l[g+j]=16);d.getComputedStyle||(d.getComputedStyle=function(a){var b=a.currentStyle||a.runtimeStyle;"getPropertyValue"in b||(a.runtimeStyle.getPropertyValue=aa.getPropertyValue.bind(a),a.runtimeStyle.setProperty=a.runtimeStyle.removeProperty=d.getComputedStyle.i,a.runtimeStyle.getPropertyPriority=d.getComputedStyle.h,a.runtimeStyle.item=aa.item);var c,f,e;(f=d.CSSStyleDeclaration)&&(f=f.prototype)&&(!("float"in b)||!("opacity"in b))?("float"in b||((c=Object.getOwnPropertyDescriptor(f,
"float"))&&delete f["float"],e=D.call(d.getComputedStyle.d,a),Object.defineProperty(a.runtimeStyle,"float",{value:{valueOf:e,toString:e},configurable:m,writable:m}),c&&Object.defineProperty(f,"float",c)),"opacity"in b||((c=Object.getOwnPropertyDescriptor(f,"opacity"))&&delete f.opacity,e=D.call(d.getComputedStyle.e,a),Object.defineProperty(a.runtimeStyle,"opacity",{value:{valueOf:e,toString:e},configurable:m,writable:m}),c&&Object.defineProperty(f,"opacity",c))):("float"in b||(e=D.call(d.getComputedStyle.d,
a),a.runtimeStyle["float"]={valueOf:e,toString:e}),"opacity"in b||(e=D.call(d.getComputedStyle.e,a),a.runtimeStyle.opacity={valueOf:e,toString:e}));return a.currentStyle},d.getComputedStyle.e=function(){return this.runtimeStyle.msOpacity||this.style.msOpacity||S.call(this.style)||S.call(this.runtimeStyle)},d.getComputedStyle.d=function(){return this.runtimeStyle.styleFloat||this.style.styleFloat},d.getComputedStyle.i=function(){ka("NO_MODIFICATION_ALLOWED_ERR")},d.getComputedStyle.h=function(){return""});
document.createDocumentFragment=function(){var a=C.call(W,this);d.DocumentFragment===d.Document&&w(a,d.DocumentFragment.prototype);return V(a)};j=(p.innerHTML="<x-x></x-x>",1===p.childNodes.length&&1===p.childNodes[0].nodeType);J="|"+J+"|";T.ielt9=m;z=V(C.call(W,document));j||(V(document),document.head.insertAdjacentHTML("beforeend","<br><style>article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}</style>"));0===C.call(ia,document,"x-x").cloneNode().outerHTML.indexOf("<:x-x>")&&
(M=z.appendChild("createElement"in z&&z.createElement("div")||z.ownerDocument.createElement("div")),na=8===u?p.cloneNode:8>u?l.cloneNode:k,l.cloneNode=function(a){var b,c;ga.test(this.nodeName)?b=C.call(this.__nativeCloneNode__||na,this,a):(M.innerHTML="",c=a?this.outerHTML:this.outerHTML.replace(/<(\w+)([^>]*)>[\W\w]*$/,"<$1$2></$1>"),M.innerHTML=c.replace(/^\<\:/,"<").replace(/\<\/\:([\w\-]*\>)$/,"<$1"),b=M.firstChild,!b&&!a&&((c=c.match(va))&&(c=c[1]),c&&(z.createElement(c),M.innerHTML=c,b=M.firstChild)));
return z.appendChild(b)});p=function(a){for(var b=[];a--;)b.unshift(a);return b};u=[];u.splice.bind(u,0,0).apply(n,p(20));u.splice.bind(u,0,0).apply(n,p(26));p=u.length;u.splice(5,0,"XXX");u=p+1==u.length?m:k;u||(Array.prototype.splice=function(a,b){var c,d=K.call(arguments,2);c=d.length;if(!arguments.length)return[];a===k&&(a=0);b===k&&(b=this.length-a);if(0<c){if(0>=b){if(a==this.length)return this.push.apply(this,d),[];if(0==a)return this.unshift.apply(this,d),[]}c=K.call(this,a,a+b);d.push.apply(d,
K.call(this,a+b,this.length));d.unshift.apply(d,K.call(this,0,a));d.unshift(0,this.length);X.apply(this,d);return c}return X.call(this,a,b)});var ya=/\s+(?=\S)|^/g,ca=s.getAttribute,za=s.setAttribute,da=s.removeAttribute;G.g={};G.c=function(a,b){if(b in this)return this[b];var c=a.nodeName;if(!(a=G.g[c]))a=G.g[c]=ia(c);c=ca.call(a,b)!==n;c||(c=(c=a.constructor)&&(c=c.prototype)&&(c=Object.getOwnPropertyDescriptor(c,b))&&/\[native\scode\]/.test(c.get+""));return this[b]=c};s.setAttribute=function(a,
b){var c=a.toLowerCase();L[c]!==k?a=L[c]:ba[c]===k&&(0!==c.indexOf("data-")&&!G.c(this,c))&&(a=a.toUpperCase());return za.call(this,a,b+"")};s.getAttribute=function(a){var b;b=a.toLowerCase();var c;if(L[b]!==k)return ca.call(this,L[b]);if(ba[b]!==k)return(c=this.attributes)&&(c=c[b])&&(c=c.nodeValue)&&c+""||n;if(0!==b.indexOf("data-")&&!G.c(this,b))b=a.toUpperCase();else return ca.call(this,a);c=this[b];c||(!(b in this)&&"string"===typeof this[a]?(c=this[b]=this[a],delete this[a]):c=k);return c!==
k?c+"":n};s.removeAttribute=function(a){var b;b=a.toLowerCase();var c;if(L[b]!==k)return da.call(this,L[b]);if(ba[b]===k&&0!==b.indexOf("data-")&&!G.c(this,b))b=a.toUpperCase();else return da.call(this,a);if((c=b in this)||this.getAttribute(a)!==n)da.call(this,b),b in this&&delete this[b];return c};e="getElementsByClassName";!s[e]&&document.querySelectorAll&&(s[e]=q[e]=document[e]=function(a){return!a||!(a=sa.call(a))?new F:C.call(this.querySelectorAll||document.querySelectorAll,this,a.replace(ya,
"."))});if(e=d.CSSStyleDeclaration)"opacity"in q.style||(Object.defineProperty(e.prototype,"opacity",{get:S,set:function(a){"object"==typeof a&&(a=a.valueOf());this.opacity!==S.call(this)&&delete this.opacity;a=a&&"alpha(opacity="+(0.9999<=a?"100":0>a?0:~~(100*a))+")"||"";this.filter=$.test(this.filter)?this.filter.replace($,a):this.filter+(" "+a);this.msOpacity=this.opacity}}),Object.defineProperty(e.prototype,"msOpacity",{value:""})),"float"in q.style||Object.defineProperty(e.prototype,"float",
{get:function(){return this.styleFloat},set:function(a){return this.styleFloat=a}}),"getPropertyValue"in e||function(a){for(var b in a)Q.call(a,b)&&(this[b]=a[b])}.call(e,aa);if((e=d.TextRectangle)&&(e=e.prototype))Object.defineProperty(e,"width",{get:function(){return this.right-this.left}}),Object.defineProperty(e,"height",{get:function(){return this.bottom-this.top}});var Aa=document.querySelectorAll,Ba=document.querySelector,Ca=s.querySelectorAll,Da=s.querySelector,oa=function(a){for(var b=a.length>>>
0,c=new F,d=0;d<b;d++)d in a&&c.push(a[d]);return c};document.querySelectorAll=function(){return oa(Aa.apply(this,arguments))};document.querySelector=function(){return Ba.apply(this,arguments)};s.querySelectorAll=function(){return oa(Ca.apply(this,arguments))};s.querySelector=function(){return Da.apply(this,arguments)};p=e=B=j=n}}.call(window,function(w,x){for(var y in x)Object.prototype.hasOwnProperty.call(x,y)&&!Object.prototype.hasOwnProperty.call(w,y)&&(w[y]=x[y]);return w});
