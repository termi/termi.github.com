/* ES6/DOM4 polyfill | @version 0.7 alpha-1 | MIT License | github.com/termi */
;(function() {"use strict";
var i=void 0,j=!0,k=null,l=!1,n=window,o,p=Object.prototype,aa=Function.prototype.apply,q=Array.prototype.slice,r=String.prototype.split,ba=Array.prototype.splice,s,ca,da,t=Function.prototype.bind||function(a,b){var c=this,d=q.call(arguments,1);return function(){return aa.call(c,a,d.concat(q.call(arguments)))}},u=t.call(Function.prototype.call,p.hasOwnProperty);function v(a,b,c){return aa.call(a,b,q.call(arguments,2))}
function w(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c],e;for(e in d)u(d,e)&&!u(a,e)&&(a[e]=d[e])}return a}var ea="a"!=Object("a")[0]||!(0 in Object("a"));function x(a,b){if(a==k&&!b)throw new TypeError;return ea&&"string"==typeof a&&a?r.call(a,""):Object(a)}var fa=p.toString;function ga(a){var b=Object.create(DOMException.prototype);b.code=DOMException[a];b.message=a+": DOM Exception "+b.code;throw b;}function ha(){return l}function ia(a){return a}
var ja="every filter forEach indexOf join lastIndexOf map reduce reduceRight reverse slice some toString".split(" "),y=n.Element&&n.Element.prototype||{},z=t.call(document.__orig__createElement__||document.createElement,document),A=z("p"),B,ka=/\s+$/g,la=/\s+/g,C=1,D,E,ma=/^(\w+)?((?:\.(?:[\w\-]+))+)?$|^#([\w\-]+$)/,na=/\s*([,>+~ ])\s*/g,oa,F,H,I,J,K,L,pa,qa,ra,sa,M,ta,N,O="\t\n\x0B\f\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff",
ua,va,wa,xa,ya,za,Q,R,Aa,S,T,U=n.Date,V,Ba,W,X,Ca,Fa,Y;o=(o=/msie (\d+)/i.exec(navigator.userAgent)||[])&&+o[1]||i;n.HTMLDocument||(n.HTMLDocument=n.Document);n.Document||(n.Document=n.HTMLDocument);Object.append=w;Object.extend||(Object.extend=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c],e;for(e in d)u(d,e)&&(a[e]=d[e])}return a});
Object.inherits=function(a,b){a.prototype=Object.create((a.superclass=b).prototype,(a.prototype&&Object.getOwnPropertyNames(a.prototype)||[]).reduce(function(a,b){a[b]=Object.getOwnPropertyDescriptor(this,b);return a}.bind(a.prototype),{constructor:{value:a,enumerable:l}}))};
Function.prototype.bind||(Function.prototype.bind=function(a,b){function c(){return aa.call(d,this instanceof c?this:a,e.concat(q.call(arguments)))}if("function"!=typeof this&&(!o||0!==N.call(this+"").indexOf("function")))throw new TypeError("Function.prototype.bind called on incompatible "+this);var d=this,e=q.call(arguments,1);d.prototype&&(c.prototype=Object.create(d.prototype));return c});
var Z="toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor".split(" "),Ga=!{toString:k}.propertyIsEnumerable(Z[0]),Ha=Z.length;
w(Object,{keys:function(a){if(typeof a!="object"&&typeof a!="function"||a===k)throw new TypeError("Object.keys called on a non-object");var b=[],c;for(c in a)u(a,c)&&b.push(c);if(Ga)for(c=0;c<Ha;c++)u(a,Z[c])&&b.push(Z[c]);return b},getOwnPropertyNames:function(a){return Object.keys(a)},seal:ia,freeze:ia,preventExtensions:ia,isSealed:ha,isFrozen:ha,isExtensible:function(a){if(Object(a)!==a)throw new TypeError;for(var b="";u(a,b);)b=b+"?";a[b]=j;var c=u(a,b);delete a[b];return c},getPrototypeOf:function(a){return a.__proto__||
(a.constructor?a.constructor.prototype:p)},create:function(a,b){var c;if(a===k)c={__proto__:k};else{if(typeof a!="object")throw new TypeError("typeof prototype["+typeof a+"] != 'object'");c=function(){};c.prototype=a;c=new c;c.__proto__=a}b&&Object.defineProperties(c,b);return c},is:function(a,b){return a===b?a===0?1/a===1/b:j:a!==a&&b!==b},isnt:function(a,b){return!Object.is(a,b)}});
if(Object.defineProperty&&(wa=function(a){try{Object.defineProperty(a,"sentinel",{});return"sentinel"in a}catch(b){return l}},ya=wa({}),za=wa(A),!ya||!za))Q=Object.defineProperty,R=Object.defineProperties;
if(!Object.defineProperty||Q)Object.defineProperty=function(a,b,c){if(typeof a!="object"&&typeof a!="function"||a===k)throw new TypeError("Object.defineProperty called on non-object: "+a);if(typeof c!="object"&&typeof c!="function"||c===k)throw new TypeError("Property description must be an object: "+c);if(Q)try{return Q.call(Object,a,b,c)}catch(d){if(d.number===-2146823252){c.enumerable=l;try{return Q.call(Object,a,b,c)}catch(e){}}}if(c.value!==i)if(a.__defineGetter__&&(a.__lookupGetter__(b)||a.__lookupSetter__(b))){var f=
a.__proto__;a.__proto__=p;delete a[b];a[b]=c.value;a.__proto__=f}else a[b]=c.value;else if(a.__defineGetter__){c.get!==i&&a.__defineGetter__(b,c.get);c.set!==i&&a.__defineSetter__(b,c.set)}else if(Object.defineProperty.ielt8){c.get!==i&&(a["get"+b]=c.get);c.set!==i&&(a["set"+b]=c.set)}else throw new TypeError("getters & setters not supported");return a};y.ie&&8>o&&(y.ielt8=Object.defineProperty.ielt8=j);
if(!Object.defineProperties||R)Object.defineProperties=function(a,b){if(R)try{return R.call(Object,a,b)}catch(c){}for(var d in b)u(b,d)&&Object.defineProperty(a,d,b[d]);return a};if(Object.getOwnPropertyDescriptor){xa=function(a){try{a.sentinel2=0;return Object.getOwnPropertyDescriptor(a,"sentinel2").value===0}catch(b){return l}};Aa=xa({});if((S=xa(A))&&document.__proto__)try{S=!!Object.getOwnPropertyDescriptor(document.__proto__,"firstChild")}catch(Ia){S=l}if(!S||!Aa)T=Object.getOwnPropertyDescriptor}
if(!Object.getOwnPropertyDescriptor||T)Object.getOwnPropertyDescriptor=function(a,b){if(typeof a!="object"&&typeof a!="function"||a===k)throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object: "+a);if(T)try{return T.call(Object,a,b)}catch(c){}if(u(a,b)){var d={enumerable:j,configurable:j},e,f;if(a.__defineGetter__){var h=a.__proto__;a.__proto__=p;e=a.__lookupGetter__(b);f=a.__lookupSetter__(b);a.__proto__=h}else if(Object.defineProperty.ielt8){e=a["get"+b];f=a["set"+b]}if(e||f){if(e)d.get=
e;if(f)d.set=f;return d}d.value=a[b];return d}};if(!Object.d||T){var Ja=Object.d;Object.d=function(a,b){if(Ja)try{return Ja.call(Object,a,b)}catch(c){}for(var d=Object.getOwnPropertyDescriptor(a,b),e=a;!d&&(e=Object.getPrototypeOf(e));)d=Object.getOwnPropertyDescriptor(e,b);return d}}2!=[1,2].splice(0).length&&(Array.prototype.splice=function(a,b){return a===i&&b===i?[]:ba.apply(this,[a===i?0:a,b===i?this.length-a:b].concat(q.call(arguments,2)))});
da=function(a){if(a instanceof Array||Array.isArray(a))return a;if(a.m)return a.m();var a=x(a,j),b=a.length>>>0,c;try{c=q.call(a)}catch(d){}if(c&&c.length===b)return c;c=[];for(var e=0;e<b;e++)e in a&&(c[e]=a[e]);return c};w(Array,{isArray:function(a){return fa.call(a)=="[object Array]"},from:da,of:function(a){return q.call(arguments)}});
w(Array.prototype,{reduce:function(a,b){var c=x(this),d=c.length>>>0,e=0;if(d===0&&arguments.length<=1)throw new TypeError("Array length is 0 and no second argument");for(b===i&&(b=(++e,c[0]));e<d;++e)e in c&&(b=v(a,i,b,c[e],e,c));return b},reduceRight:function(a,b){var c=x(this),d=c.length>>>0;if(d===0&&arguments.length<=1)throw new TypeError("Array length is 0 and no second argument");--d;for(b===i&&(b=(--d,c[d+1]));d>=0;--d)d in c&&(b=v(a,i,b,c[d],d,c));return b},forEach:function(a,b){for(var c=
x(this),d=c.length>>>0,e=-1;++e<d;)e in c&&v(a,b,c[e],e,c)},indexOf:function(a,b){var c=x(this),d=c.length>>>0;if((b=~~b)>d)return-1;for(b=(d+b)%d;b<d&&(!(b in c)||c[b]!==a);b++);return b^d?b:-1},lastIndexOf:function(a,b){var c=x(this),d=c.length>>>0,e;if(!d)return-1;e=d-1;b!==i&&(e=Math.min(e,Number.toInteger(b)));for(e=e>=0?e:d-Math.abs(e);e>=0;e--)if(e in c&&c[e]===a)return e;return-1},every:function(a,b,c){c===i&&(c=j);var d=c;M(this,function(e,f){d==c&&(d=!!v(a,b,e,f,this))},this);return d},
some:function(a,b){return ta.call(this,a,b,l)},filter:function(a,b){for(var c=x(this),d=c.length>>>0,e=[],f,h=0;h<d;h++)if(h in c){f=c[h];v(a,b,f,h,c)&&e.push(f)}return e},map:function(a,b){for(var c=x(this),d=c.length>>>0,e=[],f=0;f<d;f++)f in c&&(e[f]=v(a,b,c[f],f,this));return e},contains:function(a){return!!~this.indexOf(a)}});M=t.call(Function.prototype.call,Array.prototype.forEach);ca=Array.prototype.map;ta=Array.prototype.every;
if(!String.prototype.trim||O.trim())O="["+O+"]",ua=RegExp("^"+O+O+"*"),va=RegExp(O+O+"*$"),String.prototype.trim=function(){return String(this).replace(ua,"").replace(va,"")};N=String.prototype.trim;"0".split(i,0).length&&(String.prototype.split=function(a,b){return a===i&&b===0?[]:r.call(this,a,b)});s=function(a,b){return!!~this.indexOf(a,b|0)};
w(String.prototype,{repeat:function(a){if(a<0)return"";for(var b="",c=this;a;){a&1&&(b=b+c);if(a=a>>1)c=c+c}return b},startsWith:function(a,b){return this.lastIndexOf(a,b)===(b|0)},endsWith:function(a,b){a=a+"";return this.substr(-a.length-(b|0),b)==a},contains:s,toArray:function(){return r.call(this,"")},reverse:function(){return Array.prototype.reverse.call(r.call(this+"","")).join("")}});
w(Number,{isFinite:function(a){return typeof a==="number"&&n.j(a)},isInteger:function(a){return Number.isFinite(a)&&a>=-9007199254740992&&a<=9007199254740992&&Math.floor(a)===a},isNaN:function(a){return Object.is(a,NaN)},toInteger:function(a){a=+a;return Number.isNaN(a)?0:a===0||!n.j(a)?a:(a<0?-1:1)*Math.floor(Math.abs(a))}});F=function(a,b){var c=document.createEvent("Events"),b=b||{};c.initEvent(a,b.bubbles||l,b.cancelable||l);if(!("isTrusted"in c))c.k=l;return c};
try{I=Event.prototype,new Event("click")}catch(Ka){n.Event=F,I?F.prototype=I:I=F.prototype}H=function(a,b){var c,d;try{c=document.createEvent("CustomEvent")}catch(e){c=document.createEvent("Event")}b=b||{};d=b.detail!==i?b.detail:k;(c.initCustomEvent||(c.detail=d,c.initEvent)).call(c,a,b.bubbles||l,b.cancelable||l,d);if(!("isTrusted"in c))c.k=l;return c};try{J=(n.CustomEvent||Event).prototype,new CustomEvent("magic")}catch(La){if(n.CustomEvent=H,J||I)H.prototype=J||I}
I.stopImmediatePropagation||(K=function(a){var b=this.g,c=this.h;if(typeof b!=="function")if("handleEvent"in b){c=b;b=b.handleEvent}else return;if(a.timeStamp&&a.__stopNow===a.timeStamp)a.stopPropagation();else return b.apply(c,arguments)},I.stopImmediatePropagation=function(){this.__stopNow=this.timeStamp||(this.timeStamp=(new Date).getTime())});
if("addEventListener"in A&&!A.addEventListener.__shim__){D=0;try{E=function(){D++},A.addEventListener("click",E),A.addEventListener("click",E),A.click?A.click():A.dispatchEvent(new F("click"))}catch(Ma){}if(0==D||2==D||K){var Na=2==D;M([n.HTMLDocument&&n.HTMLDocument.prototype||n.document,n.Window&&n.Window.prototype||n,y],function(a){if(a){var b=a.addEventListener,c=a.removeEventListener;if(b){a.addEventListener=function(a,c,f){var h,g,f=f||l;if(Na||K){g="_e_8vj"+(f?"-":"")+(c.__UUID__||(c.__UUID__=
++C))+a;if(!(h=this._))h=this._={};if(g in h)return;c=K?h[g]=t.call(K,{g:c,h:this}):h[g]=i;c}return b.call(this,a,c,f)};if(c)a.removeEventListener=function(a,b,f){var h,g,f=f||l;if(Na||K)if((h=this._)&&h[g="_e_8vj"+(f?"-":"")+b.__UUID__+a]){b=h[g];delete h[g]}return c.call(this,a,b,f)}}}})}}L=function(a,b,c){this.f=a;this.a=b;this.c=c;this.length=0;this.value="";this.b("1")};
pa=function(a,b){var c=b||"",d=!!a.length;if(d){for(;a.length>0;)delete a[--a.length];a.value=""}if(c){(c=N.call(c))&&r.call(c,la).forEach(qa,a);a.value=b}d&&a.a&&a.a.call(a.c,a.value)};qa=function(a){this[this.length++]=a};
w(L.prototype,{b:function(a){var b=this.f.call(this.c);b!=this.value&&pa(this,b);a===""&&ga("SYNTAX_ERR");s.call(a+""," ")&&ga("INVALID_CHARACTER_ERR")},add:function(a){var b=this.value;if(!this.contains(a)){this.value=this.value+((b&&!b.match(ka)?" ":"")+a);this[this.length++]=a;this.a&&this.a.call(this.c,this.value)}},remove:function(a){this.b(a);var b;this.value=this.value.replace(RegExp("((?: +|^)"+a+"(?: +|$))","g"),function(a,b,e,f){return e&&a.length+e<f.length?" ":""});b=r.call(this.value,
" ");for(a=this.length-1;a>0;--a)if(!(this[a]=b[a])){this.length--;delete this[a]}this.a&&this.a.call(this.c,this.value)},contains:function(a){this.b(a);return s.call(" "+this.value+" "," "+a+" ")},item:function(a){this.b("1");return this[a]||k},toggle:function(a){var b=thisObj.contains(a);this[b?"add":"remove"](a);return b}});L.prototype.toString=function(){return this.value||""};n.DOMStringCollection=L;I.AT_TARGET||(I.AT_TARGET=2,I.BUBBLING_PHASE=3,I.CAPTURING_PHASE=1);
Event.AT_TARGET||(Event.AT_TARGET=2,Event.BUBBLING_PHASE=3,Event.CAPTURING_PHASE=1);try{n.getComputedStyle(A)}catch(Oa){n.getComputedStyle=t(function(a,b){return this.call(n,a,b||k)},n.getComputedStyle)}"classList"in A||(sa=function(a){this.className=a},ra=function(){return this.className},Object.defineProperty(y,"classList",{get:function(){if(this.tagName){var a=this._||(this._={});a._ccl_||(a._ccl_=new L(ra,sa,this));return a._ccl_}}}));
"parentElement"in A||Object.defineProperty(y,"parentElement",{get:function(){var a=this.parentNode;return a&&a.nodeType===1?a:k}});"contains"in A||(n.Node.prototype.contains=function(a){return!!(this.compareDocumentPosition(a)&16)});
"insertAdjacentHTML"in A||(n.HTMLElement.prototype.insertAdjacentHTML=function(a,b){var c=this.ownerDocument.createElement("_"),d={beforebegin:"before",afterbegin:"prepend",beforeend:"append",afterend:"after"},e;c.innerHTML=b;(c=c.childNodes)&&(c.length&&(e=this[d[a]]))&&e.apply(this,c)});if(document.importNode&&!document.importNode.shim)try{document.importNode(A)}catch(Pa){var Qa=document.importNode;delete document.importNode;document.importNode=function(a,b){b===i&&(b=j);return Qa.call(this,a,b)}}
try{A.cloneNode()}catch(Ra){[Node.prototype,Comment&&Comment.prototype,y,ProcessingInstruction&&ProcessingInstruction.prototype,Document.prototype,DocumentType&&DocumentType.prototype,DocumentFragment.prototype].forEach(function(a){if(a){var b=a.cloneNode;delete a.cloneNode;a.cloneNode=function(a){a===i&&(a=j);return b.call(this,a)}}})}
y.matchesSelector||(y.matchesSelector=y.webkitMatchesSelector||y.mozMatchesSelector||y.msMatchesSelector||y.oMatchesSelector||function(a,b){if(!a)return l;if(a==="*")return j;var c,d,e,f=0,h,g,m;if(b)if("length"in b)c=b[0];else{c=b;b=i}else c=this;do{m=l;c===document.documentElement?m=a===":root":c===document.body&&(m=a.toUpperCase()==="BODY");if(!m){a=N.call(a.replace(na,"$1"));if(h=a.match(ma))switch(a.charAt(0)){case "#":m=c.id===a.slice(1);break;default:if((m=!h[1]||!("tagName"in c)||c.tagName.toUpperCase()===
h[1].toUpperCase())&&h[2]){e=-1;g=h[2].slice(1).split(".");for(h=" "+c.className+" ";g[++e]&&m;)m=s.call(h," "+g[e]+" ")}}if(!/([,>+~ ])/.test(a)&&(d=c.parentNode)&&d.querySelector)m=d.querySelector(a)===c;if(!m&&(d=c.ownerDocument)){g=d.querySelectorAll(a);for(e=-1;!m&&g[++e];)m=g[e]===c}}}while(m&&b&&(c=b[++f]));return b&&"length"in b?m&&b.length==f:m});document.documentElement.matchesSelector||(document.documentElement.matchesSelector=y.matchesSelector);
"matches"in y||(y.matches=document.documentElement.matches=y.matchesSelector);
A.prepend||(B=function(a){var b=k,c=0,d=a.length,a=ca.call(a,B.l);if(d===1)return a[0];b=document.createDocumentFragment();a=Array.from(a);for(c=0;c<d;++c)b.appendChild(a[c]);return b},B.l=function(){return typeof node==="string"?document.createTextNode(node):node},y.after=function(){this.parentNode&&this.parentNode.insertBefore(B(arguments),this.nextSibling)},y.before=function(){this.parentNode&&this.parentNode.insertBefore(B(arguments),this)},y.append=function(){this.appendChild(B(arguments))},
y.prepend=function(){this.insertBefore(B(arguments),this.firstChild)},y.replace=function(){this.parentNode&&this.parentNode.replaceChild(B(arguments),this)},y.remove=function(){this.parentNode&&this.parentNode.removeChild(this)},"prepend"in document||(document.prepend=function(){y.prepend.apply(this.documentElement,arguments)},document.append=function(){y.append.apply(this.documentElement,arguments)}));
"find"in document||(oa=/(\:scope)(?=[ >~+])/,document.find=DocumentFragment.prototype.find=function(a,b){b&&("length"in b||(b=[b]))||(b=[this]);var c,d=0,e=b.length,f;do{f=b[d];a=a.replace(oa,f.nodeType==9?":root":function(){return"#"+(f.id||(f.id="find"+ ++C))});c=f.querySelector(a)}while(!c&&++d<e);return c||k},document.findAll=DocumentFragment.prototype.findAll=function(a,b){b&&("length"in b||(b=[b]))||(b=[this]);var c=[],d=0,e=b.length,f,h,g,m,$,P={},G;do{f=b[d];a=a.replace(oa,f.nodeType==9?":root":
function(){return"#"+(f.id||(f.id="find"+ ++C))});h=f.querySelectorAll(a);m=0;for($=h.length;m<$;++m){g=h[m];G=l;g=g.__UUID__||(G=j,g.__UUID__=++C);if(G||!(g in P)){P[g]=i;c.push(h[m])}}}while(++d<e);return c});"find"in y||(y.find=y.querySelector,y.findAll=y.querySelectorAll);
"labels"in z("input")||Object.defineProperty(y,"labels",{enumerable:j,get:function(){if(s.call(" INPUT BUTTON KEYGEN METER OUTPUT PROGRESS TEXTAREA SELECT "," "+this.nodeName.toUpperCase()+" ")){for(var a=this,b=this.id?da(document.querySelectorAll("label[for='"+this.id+"']")):[],c=b.length-1;(a=a.parentNode)&&(!a.i||a.i===this);)if(a.nodeName.toUpperCase()==="LABEL"){for(;b[c]&&b[c].compareDocumentPosition(a)&2;)c--;ba.call(b,c+1,0,a)}return b}}});
"control"in z("label")||(Ca=function(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c],f=b(e);if(f)return f;if(e.childNodes&&e.childNodes.length>0)if(f=Ca(e.childNodes,b))return f}},Object.defineProperty(n.HTMLLabelElement&&n.HTMLLabelElement.prototype||y,"control",{enumerable:j,get:function(){return this.nodeName.toUpperCase()!=="LABEL"?i:this.hasAttribute("for")?document.getElementById(this.htmlFor):Ca(this.childNodes,function(a){if(s.call(" INPUT BUTTON KEYGEN METER OUTPUT PROGRESS TEXTAREA SELECT ",
" "+a.nodeName.toUpperCase()+" "))return a})||k}}));
"reversed"in z("ol")||(Fa=function(a){var b=a.getAttribute("reversed"),c=a._,d,e;c||(c=a._={});if(!("olreversed"in c&&c.olreversed==(b!==k))){d=a.children;e=a.getAttribute("start");if(e!==k){e=Number(e);isNaN(e)&&(e=k)}if(b!==k){c.olreversed=j;if(e===k)e=d.length;M(d,function(a){a.value=e--})}else{c.olreversed=l;d[0]&&(d[0].value=e||0);M(d,function(a){a.removeAttribute("value")})}}},Object.defineProperty(n.HTMLOListElement&&n.HTMLOListElement.prototype||y,"reversed",{get:function(){return(this.nodeName||
"").toUpperCase()!=="OL"?i:this.getAttribute("reversed")!==k},set:function(a){if((this.nodeName||"").toUpperCase()==="OL"){this[(a?"set":"remove")+"Attribute"]("reversed","");Fa(this);return a}}}),Y=function(){document.removeEventListener("DOMContentLoaded",Y,l);Y=i;M(document.getElementsByTagName("ol"),Fa)},"complete"==document.readyState?Y():document.addEventListener("DOMContentLoaded",Y,l));
[document.getElementsByClassName&&document.getElementsByClassName("")||{},document.querySelectorAll&&document.querySelectorAll("#z")||{}].forEach(function(a){(a=a.__proto__||a.constructor.prototype)&&a!==Array.prototype&&ja.forEach(function(b){a[b]||(a[b]=Array.prototype[b])})});D=document.createElement("form");D.innerHTML="<input type=radio name=t value=1><input type=radio checked name=t value=2>";
if(!(D.e&&2===D.e.value)){D=D.e.constructor.prototype;Object.defineProperty(D,"value",{get:function(){if(this[0]&&"form"in this[0])for(var a=this.length,b;b=this[--a];)if(b.checked)return b.value},set:function(a){if(this[0]&&"form"in this[0])for(var b=this.length,c;c=this[--b];)if(c.checked){c.value=a;return c.value}},configurable:j});if(!U.prototype.toISOString||s.call((new U(-621987552E5)).toISOString(),"-000001")||"1969-12-31T23:59:59.999Z"!==(new U(-1)).toISOString())U.prototype.toISOString=function(){var a,
b,c,d;if(!isFinite(this))throw new RangeError("Date.prototype.toISOString called on non-finite value.");d=this.getUTCFullYear();a=this.getUTCMonth();d=d+~~(a/12);a=[(a%12+12)%12+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()];d=(d<0?"-":d>9999?"+":"")+("00000"+Math.abs(d)).slice(0<=d&&d<=9999?-4:-6);for(b=a.length;b--;){c=a[b];c<10&&(a[b]="0"+c)}return d+"-"+a.slice(0,2).join("-")+"T"+a.slice(2).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"};U.now||
(U.now=function(){return(new U).getTime()});var Sa;if(!(Sa=!U.prototype.toJSON)){var Ta;if(!(Ta=s.call((new U(-621987552E5)).toJSON(),"-000001"))){var Ua;a:{try{Ua=U.prototype.toJSON.call({toISOString:function(){return-1}});break a}catch(Va){}Ua=i}Ta=~Ua}Sa=Ta}Sa&&(U.prototype.toJSON=function(){return v(this.toISOString,this)});if(!U.parse){V=function(a,b,c,d,e,f,h){var g=arguments.length;if(this instanceof U){g=g==1&&String(a)===a?new U(V.parse(a)):g>=7?new U(a,b,c,d,e,f,h):g>=6?new U(a,b,c,d,e,
f):g>=5?new U(a,b,c,d,e):g>=4?new U(a,b,c,d):g>=3?new U(a,b,c):g>=2?new U(a,b):g>=1?new U(a):new U;g.constructor=V;return g}return U.apply(this,arguments)};Ba=RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:\\.(\\d{3}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$");W=[0,31,59,90,120,151,181,212,243,273,304,334,365];X=function(a){return Math.ceil(a/4)-Math.ceil(a/100)+Math.ceil(a/400)};for(D in U)V[D]=U[D];V.now=U.now;V.UTC=U.UTC;V.prototype=U.prototype;V.prototype.constructor=
V;V.parse=function(a){var b=Ba.exec(a);if(b){var c=Number(b[1]),d=Number(b[2]||1),e=Number(b[3]||1),f=Number(b[4]||0),h=Number(b[5]||0),g=Number(b[6]||0),m=Number(b[7]||0),$=b[8]?0:Number(new Date(1970,0)),P=b[9]==="-"?1:-1,G=Number(b[10]||0),b=Number(b[11]||0),Da=X(c),Ea=X(c+1);if(f<(h>0||g>0||m>0?24:25)&&h<60&&g<60&&m<1E3&&G<24&&b<60&&d>0&&d<13&&e>0&&e<1+W[d]-W[d-1]+(d===2?Ea-Da:0)){c=365*(c-1970)+(d>2?Ea:Da)-X(1970)+W[d-1]+e-1;c=(((c*24+f+G*P)*60+h+b*P)*60+g)*1E3+m+$;if(-864E13<=c&&c<=864E13)return c}return NaN}return U.parse.apply(this,
arguments)};n.Date=V}if((D=n._)&&D.ielt9shims)D.ielt9shims.forEach(v),n._=D.orig_;w=D=A=ja=z=F=H=I=J=E=y=V=ha=ya=za=i};
})();
