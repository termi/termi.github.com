/* MIT License (c) copyright Egor Halimonenko (termi1uc1@gmail.com) */
;(function() {
var f=void 0,h=!0,i=null,j=!1,k=window;function l(a,b){for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&!Object.prototype.hasOwnProperty.call(a,c)&&(a[c]=b[c]);return a}
function o(a){var b="button"in a&&a.button;a.__isFixed=h;if("click"===a.type||"dblclick"===a.type)if(a.detail===f&&(a.detail="click"===a.type?1:2),!a.button&&o.a!==f)b=o.a;l(a,p);a.defaultPrevented||(a.defaultPrevented=j);"target"in a||(a.target=a.srcElement||document);a.relatedTarget===f&&a.fromElement&&(a.relatedTarget=a.fromElement==a.target?a.toElement:a.fromElement);"clientX"in a&&a.pageX==i&&(a.pageX=a.clientX+q()-(r.clientLeft||0),a.pageY=a.clientY+s()-(r.clientTop||0));!a.which&&b&&(a.which=
b&1?1:b&2?3:b&4?2:0);"timeStamp"in a||(a.timeStamp=+new aa);"eventPhase"in a||(a.eventPhase=a.target==this?2:3);"currentTarget"in a||(a.currentTarget=this);!a.attrName&&a.propertyName&&(a.attrName=ba.call(a.propertyName,".")[0]);return a}
function t(a){if(o!==f){var b,c,d,e,g;b=this._;c=[];d=[];g="_e_8vj"+(ca?"-":"");if(!b||!b[g])if("__dom0__"in a)b||(b={}),b[g]||(b[g]={});else return;a||(a=window.event);if("__custom_event"in a)e=a;else if(!(e=a.__customEvent__))a.bubbles==f&&(a.bubbles=h),a.cancelable==f&&(a.cancelable=h),e=a.__customEvent__=new u(a),e.initEvent(a.type,a.bubbles,a.cancelable),e.d=h,e.__custom_event=f;e.ietl9_event=a;a.currentTarget=this;"__isFixed"in a||(a=o.call(this,a));b=b[g][e.type];"__dom0__"in a&&((b||(b=[]))[0]=
a.__dom0__);if(b){for(var m in b)if(v(b,m)){g=b[m];var A;"object"===typeof g&&(A=g,g=g.handleEvent);try{if((e.result=w.call(g,A||this,e))===j)e.preventDefault(),e.stopPropagation()}catch(n){c.push(n),d.push(n.message),console&&console.error(n)}if(e.__stopNow)break}b[0]=f;delete b[0];a.returnValue=e.returnValue;a.cancelBubble=e.cancelBubble;1==c.length?x(c[0]):1<c.length&&(d=Error("Multiple errors thrown : "+e.type+" :  : "+d.join("|")),d.e=c,x(d))}this===document&&(!e.cancelBubble&&3===e.eventPhase)&&
(t.call(this.defaultView,e),a.cancelBubble=h)}}function y(){}function z(a){var b=this.__orig__createElement__(a);if(da.test(a))return b;~B.indexOf("|"+a+"|")||(C.push(a),B+=a+"|",(D.__orig__createElement__||D.createElement)(a));return D.appendChild(b)}function E(a){var b=-1;if(a.createElement){for(;++b<C.length;)a.createElement(C[b]);a.createElement!==z&&!("ielt9"in a.createElement)&&(a.__orig__createElement__=a.createElement,a.createElement=z)}return a}var F;
F=(F=/msie (\d+)/i.exec(navigator.userAgent))&&+F[1]||f;k.Element||((k.Element=ActiveXObject).prototype.ie=h);k.HTMLElement||(k.HTMLElement=k.Element);k.Node||(k.Node=k.Element);var G;k.DocumentFragment||(k.DocumentFragment=k.Document||k.HTMLDocument||(G={},G.prototype={},G));k.Document||(k.Document=k.DocumentFragment);k._={ielt9shims:[],orig_:k._};var H=k._.ielt9shims,ea={},I=document.createDocumentFragment,fa=document.createElement,ga=document.createTextNode,r=document.documentElement;
function x(a){throw a instanceof Error?a:Error(a);}function ha(a,b){for(var c in b)if(v(b,c)&&a[c]!==b[c])try{a[c]=b[c]}catch(d){}}
var ka=String.prototype.trim||function(){for(var a=this.replace(ia,""),b=a.length;ja.test(a.charAt(--b)););return a.slice(0,b+1)},ba=String.prototype.split,la=String.prototype.substr,ma=Array.prototype.slice,J=Function.prototype.apply,w=Function.prototype.call,K=Function.prototype.bind||function(a,b){var c=this,d=ma.call(arguments,1);return function(){return J.call(c,a,d.concat(ma.call(arguments)))}},v=K.call(Function.prototype.call,Object.prototype.hasOwnProperty),L=document.createElement("p"),M=
k.Node.prototype,N=k.Element.prototype,na=L.contains||M.contains,aa=Date,oa=/^\<([\w\:\-]*)[\>\ ]/i,ia=/^\s+/,ja=/\s/,O,P,R,S="every filter forEach indexOf join lastIndexOf map reduce reduceRight reverse slice some toString".split(" "),u,T,p,pa=1;function qa(){}
var ca=j,B="abbr|article|aside|audio|canvas|command|datalist|details|figure|figcaption|footer|header|hgroup|keygen|mark|meter|nav|output|progress|section|source|summary|time|video",C=B.split("|"),da=/^<|^(?:a|b|button|code|div|fieldset|form|map|h1|h2|h3|h4|h5|h6|i|object|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul|optgroup)$/i,U,D,V,ra,q,s;
"CSS1Compat"===document.compatMode?(q=function(){return r.scrollLeft},s=function(){return r.scrollTop}):(q=function(){return document.body.scrollTop},s=function(){return document.body.scrollLeft});document.head||(document.head=document.getElementsByTagName("head")[0]);"defaultView"in document||(document.defaultView=document.parentWindow);w.call(fa,document,"div")instanceof ActiveXObject||console.error("DOMElement is not an ActiveXObject. Probably you in IE > 8 'compatible mode'. <element> instanceof [Node|Element|HTMLElement] wouldn't work");
P=j;try{P=isNaN.apply(i,{})}catch(sa){}P||(Function.prototype.apply=function(a,b){try{return b!=f?J.call(this,a,b):J.call(this,a)}catch(c){(c.number!=-2146823260||b.length===f||typeof b==="string")&&x(c);return J.call(this,a,Array.from(b))}});"b"!=="ab".substr(-1)&&(String.prototype.substr=function(a,b){return la.call(this,a<0?(a=this.length+a)<0?0:a:a,b)});
if("te".split(/(s)*/)[1]!=f||3!="1_1".split(/(_)/).length)O=/()??/.exec("")[1]===f,String.prototype.split=function(a,b){var c=this;if(!(a instanceof RegExp))return a===f&&b===0?[]:ba.call(c,a,b);var d=[],e=0,g=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.f?"y":""),m=RegExp(a.source,g+"g"),A=i,n,Q,c=c+"";O||(A=RegExp("^"+m.source+"$(?!\\s)",g));if(b===f||+b<0)b=Infinity;else{b=Math.floor(+b);if(!b)return[]}for(;n=m.exec(c);){g=n.index+n[0].length;if(g>e){d.push(c.slice(e,n.index));!O&&n.length>1&&
n[0].replace(A,function(){for(var a=1,b=arguments,c=b.length-2;a<c;a++)b[a]===f&&(n[a]=f)});n.length>1&&n.index<c.length&&d.push.apply(d,n.slice(1));Q=n[0].length;e=g;if(d.length>=b)break}m.lastIndex===n.index&&m.lastIndex++}e===c.length?(Q||!m.test(""))&&d.push(""):d.push(c.slice(e));return d.length>b?d.slice(0,b):d};
if(!k.DOMException){var W=(k.DOMException=function(){}).prototype=Error();W.INDEX_SIZE_ERR=1;W.HIERARCHY_REQUEST_ERR=3;W.WRONG_DOCUMENT_ERR=4;W.INVALID_CHARACTER_ERR=5;W.NO_MODIFICATION_ALLOWED_ERR=7;W.NOT_FOUND_ERR=8;W.NOT_SUPPORTED_ERR=9;W.INVALID_STATE_ERR=11;W.SYNTAX_ERR=12;W.INVALID_MODIFICATION_ERR=13;W.NAMESPACE_ERR=14;W.INVALID_ACCESS_ERR=15;W.TYPE_MISMATCH_ERR=17}"pageXOffset"in k||H.push(function(){Object.defineProperty(k,"pageXOffset",{get:q});Object.defineProperty(k,"pageYOffset",{get:s})});
if(9>F){R=k.Event=function(){x("")};T={initEvent:function(a,b,c){(a==f||b==f||c==f)&&x("WRONG_ARGUMENTS_ERR");this.type=a;this.bubbles=b;this.cancelable=c;this.d=j;this.target=i;if(!this.timeStamp)this.timeStamp=+new aa},initCustomEvent:function(a,b,c,d){T.initEvent.call(this,a,b,c);this.detail=d},initUIEvent:function(a,b,c,d,e){T.initCustomEvent.call(this,a,b,c,e);this.view=d},initMouseEvent:function(a,b,c,d,e,g,m,A,n,Q,ua,va,wa,xa,ya){T.initUIEvent.call(this,a,b,c,d,e);this.screenX=g;this.screenY=
m;this.clientX=A;this.clientY=n;this.ctrlKey=Q;this.altKey=ua;this.shiftKey=va;this.metaKey=wa;this.button=xa;this.relatedTarget=ya}};p=R.prototype={constructor:R,preventDefault:function(){u.c.call(this).returnValue=j;u.b.call(this);this.defaultPrevented=h},stopPropagation:function(){u.c.call(this).cancelBubble=h;u.b.call(this)}};for(P in T)v(T,P)&&(p[P]=function(){T[arguments.callee.name].apply(this,arguments);ha(this.ietl9_event,this)},p[P].name=P);u=function(a){this.ietl9_event=a;a.returnValue=
h;ha(this,a)};u.c=function(){var a=this.ietl9_event;a||x("WRONG_THIS_ERR");return a};u.b=function(){if(this.ietl9_event){this.ietl9_event=f;delete this.ietl9_event}};R=function(){};R.prototype=p;R=new R;R.constructor=u;u.prototype=R}
document.addEventListener||(M.addEventListener=k.addEventListener=document.addEventListener=function(a,b,c){if(typeof b=="function"||typeof b==="object"&&b.handleEvent){var d=this,e=d._,g=j;d==k&&(!("_"in document)||!("_e_8vj"in document._)||!(a in document._._e_8vj))&&document.addEventListener(a,qa,c);e||(e=d._={});if(a==="DOMContentLoaded"){if(document.readyState=="complete")return;d===k&&(d=document);g=h;if(!ea[a]){ea[a]=h;var m=function(){try{document.documentElement.doScroll("left")}catch(b){setTimeout(m,
50);return}t.call(d,{type:a,isTrusted:h,__custom_event:f})};if("createEventObject"in document&&"doScroll"in document.documentElement)try{k.frameElement||m()}catch(A){}}}else if(a==="load"&&"tagName"in d&&d.tagName.toUpperCase()==="SCRIPT"){g=h;d.onreadystatechange=function(){if(d.readyState==="loaded"){d.onreadystatechange=i;d.attachEvent("onreadystatechange",K.call(t,d,{type:a}))}};a="readystatechange"}else a==="DOMMouseScroll"&&(a="mousewheel");d.setInterval&&(d!=k&&!d.frameElement)&&(d=k);b.uuid||
(b.uuid=++pa);if(!(c=e._h_9e2))c=e._h_9e2=K.call(t,d);e._e_8vj||(e._e_8vj={});if(!e._e_8vj[a]){e._e_8vj[a]={};g||d.attachEvent("on"+a,c)}e._e_8vj[a][b.uuid]=b}},M.addEventListener.__shim__=h,M.removeEventListener=k.removeEventListener=document.removeEventListener=function(a,b){var c=this._,d,e,g;if(!(typeof b!="function"||!b.uuid||!c))if(d=c._h_9e2){e=c._e_8vj&&c._e_8vj[a];delete e[b.uuid];for(g in e)if(v(e,g))return;this.detachEvent("on"+a,d);delete c._e_8vj[a];for(g in c._e_8vj)if(v(c._e_8vj,g))return;
delete c._e_8vj}},M.removeEventListener.__shim__=h,document.attachEvent("onmousedown",function(){o.a=event.button}),document.attachEvent("onclick",function(){o.a=f}));
document.dispatchEvent||(M.dispatchEvent=k.dispatchEvent=document.dispatchEvent=function(a){if(!a.type)return h;if(!a.returnValue)a.returnValue=h;if(a.cancelBubble)a.cancelBubble=j;try{return this.fireEvent("on"+a.type,a)}catch(b){if(b.number===-2147024809||this===k||b.number===-2146827850&&!(a.bubbles=j)){a.__custom_event=h;for(var c=a.target=this,d="on"+a.type;!a.cancelBubble&&c;){(d in c&&typeof c[d]=="function"&&(a.__dom0__=c[d])||"_"in c&&"_e_8vj"in c._)&&t.call(c,a);c=a.bubbles?c===document?
document.defaultView:c.parentNode:i;"__dom0__"in a&&(a.__dom0__=f)}return!a.cancelBubble}x(b)}},M.dispatchEvent.__shim__=h);document.createEvent||(document.createEvent=function(){return new u(document.createEventObject())});y.prototype=[];P=new y;P.push(1);P.length?k.NodeList=y:(P=document.createElement("iframe"),P.style.display="none",document.body.appendChild(P),P.contentWindow.document.write("<script>parent.NodeList=Array;<\/script>"),y=k.NodeList);y.prototype.item=function(a){return this[a]};
if(document.querySelectorAll){var X=document.querySelectorAll("#z").constructor.prototype;if(X&&X!==Array.prototype)for(var Y in S)v(Y,S)&&(X[Y]||(X[Y]=function(){return J.call(Array.prototype[Y],Array.from(this),arguments)}))}document.doctype===i&&7<F&&H.push(function(){var a=document.childNodes[0];Object.defineProperty(a,"nodeType",{get:function(){return 10}});Object.defineProperty(document,"doctype",{configurable:h,enumerable:j,get:function(){return a}})});M.contains||(M.contains=na);
w.call(ga,document,"").contains||(k.Text&&k.Text.prototype?H.push(K.call(l,i,Text.prototype,M)):document.createTextNode=function(a){a=w.call(ga,this,a);a.contains=M.contains;return a});!w.call(I,document).contains&&(k.HTMLDocument&&k.HTMLDocument.prototype)&&H.push(K.call(l,i,k.HTMLDocument.prototype,M));(!("children"in L)||9>F)&&H.push(function(){Object.defineProperty(N,"children",{get:function(){for(var a=[],b=this.firstChild;b;){b.nodeType==1&&a.push(b);b=b.nextSibling}return a}})});
9>F&&H.push(function(){function a(a,c){var d;try{var e=a.getBoundingClientRect(),g=document.body;d=!r.contains(a)?c?e.left:e.top:c?e.left+q()-(r.clientLeft||g.clientLeft||0):e.top+s()-(r.clientTop||g.clientTop||0)}catch(m){d=a;e=0;for(g=c?"offsetLeft":"offsetTop";d;){e=e+parseInt(d[g],10);d=d.offsetParent}d=e}return d}Object.defineProperties(N,{offsetLeft:{get:function(){return a(this,h)}},offsetTop:{get:function(){return a(this)}}})});
L.childElementCount==f&&H.push(function(){Object.defineProperties(N,{firstElementChild:{get:function(){var a;for(a=this.firstChild;a&&a.nodeType!=1;)a=a.nextSibling;return a}},lastElementChild:{get:function(){var a;for(a=this.lastChild;a&&a.nodeType!=1;)a=a.previousSibling;return a}},nextElementSibling:{get:function(){for(var a=this;a=a.nextSibling;)if(a.nodeType==1)break;return a}},previousElementSibling:{get:function(){for(var a=this;a=a.previousSibling;)if(a.nodeType==1)break;return a}}})});
document.ELEMENT_NODE||(P={ELEMENT_NODE:1,TEXT_NODE:3,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11},l(document,P),l(M,P),l(k.Node,P));!("textContent"in L)&&(!("innerText"in L)&&(!("data"in L)||!L.appendData))&&x("IE is too old");
"textContent"in L||H.push(function(){Object.defineProperty(M,"textContent",{get:function(){if("innerText"in this)return this.innerText;if("data"in this&&this.appendData)return this.data},set:function(a){"innerText"in this?this.innerText=a:"data"in this&&this.replaceData&&this.replaceData(0,this.length,a);return a}})});
"isEqualNode"in L||(document.isEqualNode=r.isEqualNode=M.isEqualNode=function(a){var b,c;if(a===i||a.nodeType!==this.nodeType||a.nodeType===10&&(this.name!==a.name||this.publicId!==a.publicId||this.systemId!==a.systemId))return j;if(a.nodeType===1){if(this.namespaceURI!=a.namespaceURI||this.prefix!=a.prefix||this.localName!=a.localName)return j;b=0;for(c=this.attributes.length;b<c;b++){var d=this.attributes[length],e=a.getAttributeNS(d.namespaceURI,d.localName);if(e===i||e.value!==d.value)return j}}if(a.nodeType===
7&&(this.target!==a.target||this.data!==a.data)||(a.nodeType===3||a.nodeType===8)&&this.data!==a.data||a.childNodes.length!==this.childNodes.length)return j;b=0;for(c=a.childNodes.length;b<c;b++)if(a.childNodes[b].isEqualNode(this.childNodes[b])===j)return j;return h});
document.importNode||(document.importNode=function(a,b){switch(a.nodeType){case 1:var c=document.createElement(a.nodeName),d=a.attributes,e,g,m;if(d&&d.length>0){g=0;for(m=d.length;g<m;){d=a.attributes[g++];c.setAttribute(d.nodeName,a.getAttribute(d.nodeName))}}if(b&&(e=a.childNodes)&&e.length>0){g=0;for(m=e.length;g<m;)c.appendChild(document.importNode(e[g++],b))}return c;case 3:case 4:case 8:return document.createTextNode(a.nodeValue)}c=Object.create(DOMException.prototype);c.code=DOMException.NOT_SUPPORTED_ERR;
c.message="NOT_SUPPORTED_ERR: DOM Exception "+c.code;throw c;},document.importNode.shim=h);P="compareDocumentPosition";
if(!(P in document)){var Z,$=Z||"DOCUMENT_POSITION_";r[P]=document[P]=M[P]=function(a){return this.contains?(this!=a&&this.contains(a)&&16)+(this!=a&&a.contains(this)&&8)+(this.sourceIndex>=0&&a.sourceIndex>=0?(this.sourceIndex<a.sourceIndex&&4)+(this.sourceIndex>a.sourceIndex&&2):1)+0:0};Z="DISCONNECTED";r[$+Z]=document[$+Z]=M[$+Z]=1;Z="PRECEDING";r[$+Z]=document[$+Z]=M[$+Z]=2;Z="FOLLOWING";r[$+Z]=document[$+Z]=M[$+Z]=4;Z="CONTAINS";r[$+Z]=document[$+Z]=M[$+Z]=8;Z="CONTAINED_BY";r[$+Z]=document[$+
Z]=M[$+Z]=16}k.getComputedStyle||(k.getComputedStyle=function(a){return a.currentStyle});9>F&&(document.createDocumentFragment=function(){var a=w.call(I,this);k.DocumentFragment===k.Document&&l(a,k.DocumentFragment.prototype);return E(a)});U=(L.innerHTML="<x-x></x-x>",1===L.childNodes.length&&1===L.childNodes[0].nodeType);B="|"+B+"|";z.ielt9=h;D=E(w.call(I,document));U||(E(document),document.head.insertAdjacentHTML("beforeend","<br><style>article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}</style>"));
0===w.call(fa,document,"x-x").cloneNode().outerHTML.indexOf("<:x-x>")&&(V=D.appendChild("createElement"in D&&D.createElement("div")||D.ownerDocument.createElement("div")),ra=8===F?L.cloneNode:8>F?M.cloneNode:f,M.cloneNode=function(a){var b,c;if(da.test(this.nodeName))b=w.call(this.__nativeCloneNode__||ra,this,a);else{V.innerHTML="";c=a?this.outerHTML:this.outerHTML.replace(this.innerHTML,"");V.innerHTML=c.replace(/^\<\:/,"<").replace(/\<\/\:([\w\-]*\>)$/,"<$1");b=V.firstChild;if(!b&&!a){(c=c.match(oa))&&
(c=c[1]);if(c){D.createElement(c);V.innerHTML=c;b=V.firstChild}}}return D.appendChild(b)});P="getElementsByClassName";!N[P]&&document.querySelectorAll&&(N[P]=r[P]=document[P]=function(a){return!a||!(a=ka.call(a))?new y:w.call(this.querySelectorAll||document.querySelectorAll,this,a.replace(/\s+(?=\S)|^/g,"."))});
if(!("opacity"in r.style)){var ta=/alpha\(opacity=([^\)]+)\)/;Object.defineProperty(CSSStyleDeclaration.prototype,"opacity",{get:function(){var a=(this.filter||"").match(ta);return a?parseInt(a[1])/100+"":""},set:function(a){a="alpha(opacity="+(a>=0.9999?"100":a<0?0:~~(a*100))+")";this.filter=ta.test(this.filter)?this.filter.replace(ta,a):this.filter+(" "+a)}})}var za=document.querySelectorAll,Aa=document.querySelector,Ba=N.querySelectorAll,Ca=N.querySelector;
function Da(a){for(var b=a.length>>>0,c=new y,d=0;d<b;d++)d in a&&c.push(a[d]);return c}document.querySelectorAll=function(){return Da(za.apply(this,arguments))};document.querySelector=function(){return Aa.apply(this,arguments)};N.querySelectorAll=function(){return Da(Ba.apply(this,arguments))};N.querySelector=function(){return Ca.apply(this,arguments)};L=P=R=S=U=f;
})();
