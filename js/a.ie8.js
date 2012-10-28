/* ES6/DOM4 polyfill for IE8 | @version 0.7 alpha-3 | MIT License | github.com/termi */
;(function() {
var k=void 0,l=!0,p=null,r=!1;function J(){return function(){}}
(function(d,t){function u(a){if(!("__isFixed"in a)){var b="button"in a&&a.button;a.__isFixed=l;if("click"===a.type||"dblclick"===a.type)a.detail===k&&(a.detail="click"===a.type?1:2),!a.button&&u.b!==k&&(b=u.b);t(a,A);a.defaultPrevented||(a.defaultPrevented=r);a.target||(a.target=a.srcElement||document);a.relatedTarget===k&&a.fromElement&&(a.relatedTarget=a.fromElement==a.target?a.toElement:a.fromElement);"clientX"in a&&a.pageX==p&&(a.pageX=a.clientX+K()-(m.clientLeft||0),a.pageY=a.clientY+L()-(m.clientTop||
0));!a.which&&b&&(a.which=b&1?1:b&2?3:b&4?2:0);"timeStamp"in a||(a.timeStamp=+new Y);"eventPhase"in a||(a.eventPhase=a.target==this?2:3);"currentTarget"in a||(a.currentTarget=this);!a.attrName&&a.propertyName&&(a.attrName=Z.call(a.propertyName,".")[0]);return a}}function M(a){if(u!==k){var b=this._,c,f,h,d;if(!b.__stop_events__){c=[];f=[];d="_e_8vj"+(ha?"-":"");if(!b||!b[d])if("__dom0__"in a)b||(b={}),b[d]||(b[d]={});else return;a||(a=window.event);if("__custom_event"in a)h=a;else if(!(h=a.__customEvent__))a.bubbles==
k&&(a.bubbles=l),a.cancelable==k&&(a.cancelable=l),h=a.__customEvent__=new s(a),h.initEvent(a.type,a.bubbles,a.cancelable),u.call(this,h),h.e=l,h.__custom_event=k;h.ietl9_event=a;a.currentTarget=this;b=b[d][h.type];"__dom0__"in a&&((b||(b=[]))[0]=a.__dom0__);if(b){for(var e in b)if(B(b,e)){d=b[e];var g;"object"===typeof d&&(g=d,d=d.handleEvent);try{if(d&&(h.result=y.call(d,g||this,h))===r)h.preventDefault(),h.stopPropagation()}catch(q){c.push(q),f.push(q.message),console&&console.error(q)}if(h.__stopNow)break}b[0]=
k;delete b[0];a.returnValue=h.returnValue;a.cancelBubble=h.cancelBubble;1==c.length?C(c[0]):1<c.length&&(f=Error("Multiple errors thrown : "+h.type+" :  : "+f.join("|")),f.f=c,C(f))}this===document&&(!h.cancelBubble&&3===h.eventPhase)&&(M.call(this.defaultView,h),a.cancelBubble=l)}}}function D(){}function ia(){var a=document.querySelectorAll("#z").constructor.prototype;if(a&&a!==Array.prototype)for(var b in Q)B(b,Q)&&(a[b]||(a[b]=function(){return N.call(Array.prototype[b],Array.from(this),arguments)}))}
function R(a){var b=this.__orig__createElement__(a);if($.test(a))return b;~F.indexOf("|"+a+"|")||(S.push(a),F+=a+"|",(v.__orig__createElement__||v.createElement)(a));return v.appendChild(b)}function T(a){var b=-1;if(a.createElement){for(;++b<S.length;)a.createElement(S[b]);a.createElement!==R&&!("ielt9"in a.createElement)&&(a.__orig__createElement__=a.createElement,a.createElement=R)}return a}var P=window.eval&&eval("/*@cc_on 1;@*/")&&+((/msie (\d+)/i.exec(navigator.userAgent)||[])[1]||0)||k;if(9>
P){d.Element||((d.Element=ActiveXObject).prototype.ie=l);d.HTMLElement||(d.HTMLElement=d.Element);d.Node||(d.Node=d.Element);var O;d.DocumentFragment||(d.DocumentFragment=d.Document||d.HTMLDocument||(O=J(),O.prototype={},O));d.Document||(d.Document=d.DocumentFragment);d._={ielt9shims:[],orig_:d._};var g=d._.ielt9shims,U=document.createDocumentFragment;O=document.createElement;var aa=document.createTextNode,m=document.documentElement,C=function(a){throw a instanceof Error?a:Error(a);},ba=function(a){var b=
Object.create(DOMException.prototype);b.code=DOMException[a];b.message=a+": DOM Exception "+b.code;throw b;},ca=function(a,b){for(var c in b)if(B(b,c)&&a[c]!==b[c])try{a[c]=b[c]}catch(f){}},la=String.prototype.trim||function(){for(var a=this.replace(ja,""),b=a.length;ka.test(a.charAt(--b)););return a.slice(0,b+1)},Z=String.prototype.split,ma=String.prototype.substr,da=Array.prototype.slice,N=Function.prototype.apply,y=Function.prototype.call,z=Function.prototype.bind||function(a,b){var c=this,f=da.call(arguments,
1);return function(){return N.call(c,a,f.concat(da.call(arguments)))}},B=z.call(Function.prototype.call,Object.prototype.hasOwnProperty),w=document.createElement("p"),j=d.Node.prototype,n=d.Element.prototype,na=w.contains||j.contains,Y=Date,oa=/^\<([\w\:\-]*)[\>\ ]/i,ja=/^\s+/,ka=/\s/,V,e,x,Q="every filter forEach indexOf join lastIndexOf map reduce reduceRight reverse slice some toString".split(" "),W=/alpha\(opacity=([^\)]+)\)/,G=function(){var a=(this.filter||"").match(W);return a?parseInt(a[1])/
100+"":""},X={getPropertyValue:function(a){return this.getAttribute(a)},removeProperty:function(a){this.removeAttribute(a)},setProperty:function(a,b,c){"important"!=c?this.setAttribute(a,b):(c=RegExp(a+"\\s*:\\s*(\\S+)\\s*(?:[$;]|(?:(!important)\\s*[$;]))","i"),a=";"+a+":"+b+" !important;",this.cssText=c.test(this.cssText)?this.cssText.replace(c,a):this.cssText+a)},getPropertyPriority:function(a){return((this.cssText||"").match(RegExp(a+"\\s*:\\s*(\\S+)\\s*(?:[$;]|(?:(!important)\\s*[$;]))","i"))||
[])[2]||""},item:J()},H={"for":"htmlFor","class":"className",value:"defaultValue"},s,E,A,pa=1,qa=J(),ha=r,ea,F="abbr|article|aside|audio|canvas|command|datalist|details|figure|figcaption|footer|header|hgroup|keygen|mark|meter|nav|output|progress|section|source|summary|time|video",S=F.split("|"),$=/^<|^(?:a|b|button|code|div|fieldset|form|map|h1|h2|h3|h4|h5|h6|i|object|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul|optgroup)$/i,
i,v,I,fa,K,L;"CSS1Compat"===document.compatMode?(K=function(){return m.scrollLeft},L=function(){return m.scrollTop}):(K=function(){return document.body.scrollTop},L=function(){return document.body.scrollLeft});document.head||(document.head=document.getElementsByTagName("head")[0]);"defaultView"in document||(document.defaultView=document.parentWindow);e=r;try{e=isNaN.apply(p,{})}catch(ua){}e||(Function.prototype.apply=function(a,b){try{return b!=k?N.call(this,a,b):N.call(this,a)}catch(c){return(-2146823260!=
c.number||b.length===k||"string"===typeof b)&&C(c),N.call(this,a,Array.from(b))}});"b"!=="ab".substr(-1)&&(String.prototype.substr=function(a,b){return ma.call(this,0>a?0>(a=this.length+a)?0:a:a,b)});if("te".split(/(s)*/)[1]!=k||3!="1_1".split(/(_)/).length)V=/()??/.exec("")[1]===k,String.prototype.split=function(a,b){var c=this;if(!(a instanceof RegExp))return a===k&&0===b?[]:Z.call(c,a,b);var f=[],h=0,d=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.g?"y":""),e=RegExp(a.source,d+"g"),g=p,q,i,c=c+
"";V||(g=RegExp("^"+e.source+"$(?!\\s)",d));if(b===k||0>+b)b=Infinity;else if(b=Math.floor(+b),!b)return[];for(;q=e.exec(c);){d=q.index+q[0].length;if(d>h&&(f.push(c.slice(h,q.index)),!V&&1<q.length&&q[0].replace(g,function(){for(var a=1,b=arguments,c=b.length-2;a<c;a++)b[a]===k&&(q[a]=k)}),1<q.length&&q.index<c.length&&f.push.apply(f,q.slice(1)),i=q[0].length,h=d,f.length>=b))break;e.lastIndex===q.index&&e.lastIndex++}h===c.length?(i||!e.test(""))&&f.push(""):f.push(c.slice(h));return f.length>b?
f.slice(0,b):f};d.DOMException||(e=(d.DOMException=J()).prototype=Error(),e.INDEX_SIZE_ERR=1,e.HIERARCHY_REQUEST_ERR=3,e.WRONG_DOCUMENT_ERR=4,e.INVALID_CHARACTER_ERR=5,e.NO_MODIFICATION_ALLOWED_ERR=7,e.NOT_FOUND_ERR=8,e.NOT_SUPPORTED_ERR=9,e.INVALID_STATE_ERR=11,e.SYNTAX_ERR=12,e.INVALID_MODIFICATION_ERR=13,e.NAMESPACE_ERR=14,e.INVALID_ACCESS_ERR=15,e.TYPE_MISMATCH_ERR=17);"pageXOffset"in d||g.push(function(){Object.defineProperty(d,"pageXOffset",{get:K});Object.defineProperty(d,"pageYOffset",{get:L})});
x=d.Event=function(){C("")};E={initEvent:function(a,b,c){(a==k||b==k||c==k)&&C("WRONG_ARGUMENTS_ERR");this.type=a;this.bubbles=b;this.cancelable=c;this.e=r;this.target=p;this.timeStamp||(this.timeStamp=+new Y)},initCustomEvent:function(a,b,c,f){E.initEvent.call(this,a,b,c);this.detail=f},initUIEvent:function(a,b,c,f,h){E.initCustomEvent.call(this,a,b,c,h);this.view=f},initMouseEvent:function(a,b,c,f,h,d,e,g,q,i,j,m,n,s,t){E.initUIEvent.call(this,a,b,c,f,h);this.screenX=d;this.screenY=e;this.clientX=
g;this.clientY=q;this.ctrlKey=i;this.altKey=j;this.shiftKey=m;this.metaKey=n;this.button=s;this.relatedTarget=t}};A=x.prototype={constructor:x,preventDefault:function(){this.cancelable!==r&&(s.a.call(this).returnValue=this.returnValue=r,s.c.call(this),this.defaultPrevented=l)},stopPropagation:function(){s.a.call(this).cancelBubble=this.cancelBubble=l;s.c.call(this)}};A.stopImmediatePropagation=function(){this.__stopNow=l;this.stopPropagation()};A.defaultPrevented=r;for(e in E)B(E,e)&&(A[e]=function(){E[arguments.callee.name].apply(this,
arguments);ca(this.ietl9_event,this)},A[e].name=e);s=function(a){this.ietl9_event=a;a.returnValue=l;ca(this,a)};s.a=function(){var a=this.ietl9_event;a===k?C("WRONG_THIS_ERR"):a===p&&(a=s.a.d);return a};s.a.d={};s.c=function(){this.ietl9_event&&(this.ietl9_event=p)};x=J();x.prototype=A;x=new x;x.constructor=s;s.prototype=x;document.addEventListener||(j.addEventListener=m.addEventListener=d.addEventListener=document.addEventListener=function(a,b,c){if("function"==typeof b||"object"===typeof b&&b.handleEvent){var f=
this,h=f._,e=r;f==d&&(!("_"in document)||!("_e_8vj"in document._)||!(a in document._._e_8vj))&&document.addEventListener(a,qa,c);h||(h=f._={});switch(a){case "DOMContentLoaded":if("complete"==document.readyState)return;f===d&&(f=document);e=l;if(!ea){ea=l;var g=function(){try{document.documentElement.doScroll("left")}catch(b){setTimeout(g,50);return}M.call(f,{type:a,isTrusted:l,__custom_event:k})};if("createEventObject"in document&&"doScroll"in document.documentElement)try{d.frameElement||g()}catch(i){}}break;
case "load":"tagName"in f&&"SCRIPT"===f.tagName.toUpperCase()&&(e=l,f.onreadystatechange=function(){"loaded"===f.readyState&&(f.onreadystatechange=p,f.attachEvent("onreadystatechange",z.call(M,f,{type:a})))},a="readystatechange");break;case "DOMMouseScroll":a="mousewheel"}f.setInterval&&(f!=d&&!f.frameElement)&&(f=d);b.uuid||(b.uuid=++pa);if(!(c=h._h_9e2))c=h._h_9e2=z.call(M,f);h._e_8vj||(h._e_8vj={});h._e_8vj[a]||(h._e_8vj[a]={},e||f.attachEvent("on"+a,c));h._e_8vj[a][b.uuid]=b}},j.addEventListener.__shim__=
l,j.removeEventListener=m.removeEventListener=d.removeEventListener=document.removeEventListener=function(a,b){var c=this._,f,h,d;if(!("function"!=typeof b||!b.uuid||!c))if(f=c._h_9e2){h=c._e_8vj&&c._e_8vj[a];delete h[b.uuid];for(d in h)if(B(h,d))return;this.detachEvent("on"+a,f);delete c._e_8vj[a];for(d in c._e_8vj)if(B(c._e_8vj,d))return;delete c._e_8vj}},j.removeEventListener.__shim__=l,document.attachEvent("onmousedown",function(){u.b=event.button}),document.attachEvent("onclick",function(){u.b=
k}));document.dispatchEvent||(j.dispatchEvent=m.dispatchEvent=d.dispatchEvent=document.dispatchEvent=function(a){if(!a.type)return l;a.returnValue||(a.returnValue=l);a.cancelBubble&&(a.cancelBubble=r);delete a.__stopNow;try{return this.fireEvent("on"+a.type,a)}catch(b){if(-2147024809===b.number||this===d||-2146827850===b.number&&!(a.bubbles=r)){a.__custom_event=l;for(var c=a.target=this,f="on"+a.type;!a.cancelBubble&&c;)(f in c&&"function"==typeof c[f]&&(a.__dom0__=c[f])||"_"in c&&"_e_8vj"in c._)&&
M.call(c,a),c=a.bubbles?c===document?document.defaultView:c.parentNode:p,"__dom0__"in a&&(a.__dom0__=k);return!a.cancelBubble}C(b)}},j.dispatchEvent.__shim__=l);document.createEvent||(document.createEvent=function(){return new s(document.createEventObject())});g.push(function(){function a(a){var b,c=this.nodeName.toUpperCase(),f,d,e,g,i,j,m,n;if(!("INPUT"!=c&&"TEXTAREA"!=c)){j=document.activeElement;b=document.selection;this._&&(m=this._.__stop_events__,this._.__stop_events__=l);j._&&(n=j._.__stop_events__,
j._.__stop_events__=l);try{this.focus(),f=b.createRange(),d=f.duplicate(),"TEXTAREA"==c?(e=this.value,f=d,a?(f.moveEnd("character",e.length),i=""==f.text?e.length:e.lastIndexOf(f.text)):(f.moveStart("character",-e.length),i=f.text.length)):(d.moveToElementText(this),d.setEndPoint("EndToEnd",f),g=d.text.length-f.text.length,i=a?g:g+f.text.length),j&&j.focus&&j.focus()}catch(s){i=k}this._&&!m&&delete this._.__stop_events__;j._&&!n&&delete j._.__stop_events__;return i}}function b(a,b){if(a!=k){b==k&&
(b=a);var c=this.nodeName.toUpperCase();"INPUT"!=c&&"TEXTAREA"!=c||(c=this.createTextRange(),c.collapse(l),c.moveStart("character",a),c.moveEnd("character",b-a),c.select())}}var c=d.HTMLTextAreaElement&&d.HTMLTextAreaElement.prototype,f={setSelectionRange:{value:b},selectionStart:{get:function(){return a.call(this,l)},set:function(c){b.call(this,c,a.call(this));return c}},selectionEnd:{get:function(){return a.call(this)},set:function(c){b.call(this,a.call(this,l),c);return c}}};Object.defineProperties(d.HTMLInputElement&&
d.HTMLInputElement.prototype||n,f);c&&Object.defineProperties(c,f)});D.prototype=[];e=new D;e.push(1);e.length?d.NodeList=D:(e=document.createElement("iframe"),e.style.display="none",(document.body||m).appendChild(e),e.contentWindow.document.write("<script>parent.NodeList=Array;<\/script>"),D=d.NodeList);D.prototype.item=function(a){return this[a]};document.querySelectorAll&&ia();document.doctype===p&&7<P&&g.push(function(){var a=document.childNodes[0];Object.defineProperty(a,"nodeType",{get:function(){return 10}});
Object.defineProperty(document,"doctype",{configurable:l,enumerable:r,get:function(){return a}})});j.contains||(j.contains=na);y.call(aa,document,"").contains||(d.Text&&d.Text.prototype?g.push(z.call(t,p,Text.prototype,j)):document.createTextNode=function(a){a=y.call(aa,this,a);a.contains=j.contains;return a});!y.call(U,document).contains&&(d.HTMLDocument&&d.HTMLDocument.prototype)&&g.push(z.call(t,p,d.HTMLDocument.prototype,j));"children"in w||g.push(function(){Object.defineProperty(n,"children",
{get:function(){for(var a=[],b=this.firstChild;b;)1==b.nodeType&&a.push(b),b=b.nextSibling;return a}})});g.push(function(){function a(a,c){var f;try{var d=a;"element"in d&&("defaults"in d&&"document"in d)&&(d=d.element);var e=d.getBoundingClientRect(),g=document.body;f=!m.contains(d)?c?e.left:e.top:c?e.left+K()-(m.clientLeft||g.clientLeft||0):e.top+L()-(m.clientTop||g.clientTop||0)}catch(i){f=a;d=0;for(e=c?"offsetLeft":"offsetTop";f;)d+=parseInt(f[e],10),f=f.offsetParent;f=d}return f}Object.defineProperties(n,
{offsetLeft:{get:function(){return a(this,l)}},offsetTop:{get:function(){return a(this)}}})});w.childElementCount==k&&g.push(function(){Object.defineProperties(n,{firstElementChild:{get:function(){var a;for(a=this.firstChild;a&&1!=a.nodeType;)a=a.nextSibling;return a}},lastElementChild:{get:function(){var a;for(a=this.lastChild;a&&1!=a.nodeType;)a=a.previousSibling;return a}},nextElementSibling:{get:function(){for(var a=this;(a=a.nextSibling)&&1!=a.nodeType;);return a}},previousElementSibling:{get:function(){for(var a=
this;(a=a.previousSibling)&&1!=a.nodeType;);return a}}})});document.ELEMENT_NODE||(e={ELEMENT_NODE:1,TEXT_NODE:3,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11},t(document,e),t(j,e),t(d.Node,e));"textContent"in w||g.push(function(){Object.defineProperty(j,"textContent",{get:function(){if("innerText"in this)return this.innerText;if("data"in this&&this.appendData)return this.data},set:function(a){"innerText"in this?this.innerText=a:"data"in
this&&this.replaceData&&this.replaceData(0,this.length,a);return a}})});"isEqualNode"in w||(document.isEqualNode=m.isEqualNode=j.isEqualNode=function(a){var b,c;if(a===p||a.nodeType!==this.nodeType||10===a.nodeType&&(this.name!==a.name||this.publicId!==a.publicId||this.systemId!==a.systemId))return r;if(1===a.nodeType){if(this.namespaceURI!=a.namespaceURI||this.prefix!=a.prefix||this.localName!=a.localName)return r;b=0;for(c=this.attributes.length;b<c;b++){var d=this.attributes[length],e=a.getAttributeNS(d.namespaceURI,
d.localName);if(e===p||e.value!==d.value)return r}}if(7===a.nodeType&&(this.target!==a.target||this.data!==a.data)||(3===a.nodeType||8===a.nodeType)&&this.data!==a.data||a.childNodes.length!==this.childNodes.length)return r;b=0;for(c=a.childNodes.length;b<c;b++)if(a.childNodes[b].isEqualNode(this.childNodes[b])===r)return r;return l});document.importNode||(document.importNode=function(a,b){switch(a.nodeType){case 1:var c=document.createElement(a.nodeName),d=a.attributes,e,g,i;if(d&&0<d.length){g=
0;for(i=d.length;g<i;)d=a.attributes[g++],c.setAttribute(d.nodeName,a.getAttribute(d.nodeName))}if(b&&(e=a.childNodes)&&0<e.length){g=0;for(i=e.length;g<i;)c.appendChild(document.importNode(e[g++],b))}return c;case 3:case 4:case 8:return document.createTextNode(a.nodeValue)}ba("NOT_SUPPORTED_ERR");return p},document.importNode.shim=l);e="compareDocumentPosition";e in document||(g=i||"DOCUMENT_POSITION_",m[e]=document[e]=j[e]=function(a){return this.contains?(this!=a&&this.contains(a)&&16)+(this!=
a&&a.contains(this)&&8)+(0<=this.sourceIndex&&0<=a.sourceIndex?(this.sourceIndex<a.sourceIndex&&4)+(this.sourceIndex>a.sourceIndex&&2):1)+0:0},i="DISCONNECTED",m[g+i]=document[g+i]=j[g+i]=1,i="PRECEDING",m[g+i]=document[g+i]=j[g+i]=2,i="FOLLOWING",m[g+i]=document[g+i]=j[g+i]=4,i="CONTAINS",m[g+i]=document[g+i]=j[g+i]=8,i="CONTAINED_BY",m[g+i]=document[g+i]=j[g+i]=16);d.getComputedStyle||(d.getComputedStyle=function(a){var b=a.currentStyle||a.runtimeStyle;"getPropertyValue"in b||(a.runtimeStyle.getPropertyValue=
X.getPropertyValue.bind(a),a.runtimeStyle.setProperty=a.runtimeStyle.removeProperty=function(){ba("NO_MODIFICATION_ALLOWED_ERR")},a.runtimeStyle.getPropertyPriority=function(){return""},a.runtimeStyle.item=X.item);var c,f;(f=d.CSSStyleDeclaration)&&(f=f.prototype)&&(!("float"in b)||!("opacity"in b))?("float"in b||((c=Object.getOwnPropertyDescriptor(f,"float"))&&delete f["float"],Object.defineProperty(a.runtimeStyle,"float",{value:{valueOf:z.call(function(){return this.runtimeStyle.styleFloat||this.style.styleFloat},
a)}}),c&&Object.defineProperty(f,"float",c)),"opacity"in b||((c=Object.getOwnPropertyDescriptor(f,"opacity"))&&delete f.opacity,Object.defineProperty(a.runtimeStyle,"opacity",{value:{valueOf:z.call(function(){return this.runtimeStyle.msOpacity||this.style.msOpacity||G.call(this.style)||G.call(this.runtimeStyle)},a)}}),c&&Object.defineProperty(f,"opacity",c))):("float"in b||(a.runtimeStyle["float"]={valueOf:z.call(function(){return this.runtimeStyle.styleFloat||this.style.styleFloat},a)}),"opacity"in
b||(a.runtimeStyle.opacity={valueOf:z.call(function(){return this.runtimeStyle.msOpacity||this.style.msOpacity||G.call(this.style)||G.call(this.runtimeStyle)},a)}));return a.currentStyle});document.createDocumentFragment=function(){var a=y.call(U,this);d.DocumentFragment===d.Document&&t(a,d.DocumentFragment.prototype);return T(a)};i=(w.innerHTML="<x-x></x-x>",1===w.childNodes.length&&1===w.childNodes[0].nodeType);F="|"+F+"|";R.ielt9=l;v=T(y.call(U,document));i||(T(document),document.head.insertAdjacentHTML("beforeend",
"<br><style>article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}</style>"));0===y.call(O,document,"x-x").cloneNode().outerHTML.indexOf("<:x-x>")&&(I=v.appendChild("createElement"in v&&v.createElement("div")||v.ownerDocument.createElement("div")),fa=8===P?w.cloneNode:8>P?j.cloneNode:k,j.cloneNode=function(a){var b,c;$.test(this.nodeName)?b=y.call(this.__nativeCloneNode__||fa,this,a):(I.innerHTML="",c=a?this.outerHTML:this.outerHTML.replace(this.innerHTML,
""),I.innerHTML=c.replace(/^\<\:/,"<").replace(/\<\/\:([\w\-]*\>)$/,"<$1"),b=I.firstChild,!b&&!a&&((c=c.match(oa))&&(c=c[1]),c&&(v.createElement(c),I.innerHTML=c,b=I.firstChild)));return v.appendChild(b)});var ra=/\s+(?=\S)|^/g,sa=n.getAttribute,ta=n.setAttribute,ga=n.removeAttribute;n.setAttribute=function(a,b){a=H[a]!==k?H[a]:a.toUpperCase();return ta.call(this,a,b+"")};n.getAttribute=function(a){var b,c;if(H[a]!==k)return sa.call(this,H[a]);b=a.toUpperCase();c=this[b];c||(!(b in this)&&"string"===
typeof this[a]?(c=this[b]=this[a],delete this[a]):c=k);return c?c+"":p};n.removeAttribute=function(a){var b,c;if(H[a]!==k)return ga.call(this,H[a]);b=a.toUpperCase();if((c=b in this)||this.getAttribute(a)!==p)ga.call(this,b),delete this[b];return c};e="getElementsByClassName";!n[e]&&document.querySelectorAll&&(n[e]=m[e]=document[e]=function(a){return!a||!(a=la.call(a))?new D:y.call(this.querySelectorAll||document.querySelectorAll,this,a.replace(ra,"."))});if(e=d.CSSStyleDeclaration)"opacity"in m.style||
(Object.defineProperty(e.prototype,"opacity",{get:G,set:function(a){"object"==typeof a&&(a=a.valueOf());this.opacity!==G.call(this)&&delete this.opacity;a=a&&"alpha(opacity="+(0.9999<=a?"100":0>a?0:~~(100*a))+")"||"";this.filter=W.test(this.filter)?this.filter.replace(W,a):this.filter+(" "+a);this.msOpacity=this.opacity}}),Object.defineProperty(e.prototype,"msOpacity",{value:""})),"float"in m.style||Object.defineProperty(e.prototype,"float",{get:function(){return this.styleFloat},set:function(a){return this.styleFloat=
a}}),"getPropertyValue"in e||function(a){for(var b in a)B.call(a,b)&&(this[b]=a[b])}.call(e,X);(function(a,b,c,d){function e(a){for(var b=a.length>>>0,c=new D,d=0;d<b;d++)d in a&&c.push(a[d]);return c}document.querySelectorAll=function(){return e(a.apply(this,arguments))};document.querySelector=function(){return b.apply(this,arguments)};n.querySelectorAll=function(){return e(c.apply(this,arguments))};n.querySelector=function(){return d.apply(this,arguments)}})(document.querySelectorAll,document.querySelector,
n.querySelectorAll,n.querySelector);w=e=x=Q=i=k}})(window,function(d,t){for(var u in t)Object.prototype.hasOwnProperty.call(t,u)&&!Object.prototype.hasOwnProperty.call(d,u)&&(d[u]=t[u]);return d});
})();
