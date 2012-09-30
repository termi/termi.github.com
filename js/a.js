/* ES6/DOM4 polyfill | @version 0.7 alpha-3 | MIT License | github.com/termi */
;(function() {"use strict";
var g=void 0,j=!0,k=null,l=!1,m=window,p,q=Object.prototype,ba=Function.prototype.apply,r=Array.prototype.slice,s=String.prototype.split,ca=Array.prototype.splice,t,da,ea,u=Function.prototype.bind||function(a,b){var c=this,d=r.call(arguments,1);return function(){return ba.call(c,a,d.concat(r.call(arguments)))}},v=u.call(Function.prototype.call,q.hasOwnProperty);function w(a,b,c){return ba.call(a,b,r.call(arguments,2))}
function x(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c],e;for(e in d)v(d,e)&&!v(a,e)&&(a[e]=d[e])}return a}var fa="a"!=Object("a")[0]||!(0 in Object("a"));function y(a,b){if(a==k&&!b)throw new TypeError;return fa&&"string"==typeof a&&a?s.call(a,""):Object(a)}var ga=q.toString;function ha(a){var b=Object.create(DOMException.prototype);b.code=DOMException[a];b.message=a+": DOM Exception "+b.code;throw b;}function ia(){return l}function ja(a){return a}
var ka="every filter forEach indexOf join lastIndexOf map reduce reduceRight reverse slice some toString".split(" "),z=m.Element&&m.Element.prototype||{},A=u.call(document.__orig__createElement__||document.createElement,document),B=A("p"),C,la=/\s+$/g,ma=/\s+/g,D=1,E,F,na=/^(\w+)?((?:\.(?:[\w\-]+))+)?$|^#([\w\-]+$)/,oa=/\s*([,>+~ ])\s*/g,pa,G,I,J,K,L,M,qa,ra,sa,ta,N,ua,O,P="\t\n\x0B\f\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff",
va,wa,xa,ya,za,Aa,R,S,Ba,T,U,V=m.Date,W,Ca,X,Y,Da,Ga,Z;p=(p=/msie (\d+)/i.exec(navigator.userAgent)||[])&&+p[1]||g;m.HTMLDocument||(m.HTMLDocument=m.Document);m.Document||(m.Document=m.HTMLDocument);m.DocumentFragment||(m.DocumentFragment=m.HTMLDocument);Object.append=x;Object.extend||(Object.extend=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c],e;for(e in d)v(d,e)&&(a[e]=d[e])}return a});
Object.inherits=function(a,b){a.prototype=Object.create((a.superclass=b).prototype,(a.prototype&&Object.getOwnPropertyNames(a.prototype)||[]).reduce(function(a,b){a[b]=Object.getOwnPropertyDescriptor(this,b);return a}.bind(a.prototype),{constructor:{value:a,enumerable:l}}))};
Function.prototype.bind||(Function.prototype.bind=function(a,b){function c(){return ba.call(d,this instanceof c?this:a,e.concat(r.call(arguments)))}if("function"!=typeof this&&(!p||0!==O.call(this+"").indexOf("function")))throw new TypeError("Function.prototype.bind called on incompatible "+this);var d=this,e=r.call(arguments,1);d.prototype&&(c.prototype=Object.create(d.prototype));return c});
var $="toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor".split(" "),Ha=!{toString:k}.propertyIsEnumerable($[0]),Ia=$.length;
x(Object,{keys:function(a){if("object"!=typeof a&&"function"!=typeof a||a===k)throw new TypeError("Object.keys called on a non-object");var b=[],c;for(c in a)v(a,c)&&b.push(c);if(Ha)for(c=0;c<Ia;c++)v(a,$[c])&&b.push($[c]);return b},getOwnPropertyNames:function(a){return Object.keys(a)},seal:ja,freeze:ja,preventExtensions:ja,isSealed:ia,isFrozen:ia,isExtensible:function(a){if(Object(a)!==a)throw new TypeError;for(var b="";v(a,b);)b+="?";a[b]=j;var c=v(a,b);delete a[b];return c},getPrototypeOf:function(a){return a.__proto__||
(a.constructor?a.constructor.prototype:q)},create:function(a,b){var c;if(a===k)c={__proto__:k};else{if("object"!=typeof a)throw new TypeError("typeof prototype["+typeof a+"] != 'object'");c=function(){};c.prototype=a;c=new c;c.__proto__=a}b&&Object.defineProperties(c,b);return c},is:function(a,b){return a===b?0===a?1/a===1/b:j:a!==a&&b!==b},isnt:function(a,b){return!Object.is(a,b)}});
if(Object.defineProperty&&(xa=function(a){try{return Object.defineProperty(a,"sentinel",{}),"sentinel"in a}catch(b){return l}},za=xa({}),Aa=xa(B),!za||!Aa))R=Object.defineProperty,S=Object.defineProperties;
if(!Object.defineProperty||R)Object.defineProperty=function(a,b,c){if("object"!=typeof a&&"function"!=typeof a||a===k)throw new TypeError("Object.defineProperty called on non-object: "+a);if("object"!=typeof c&&"function"!=typeof c||c===k)throw new TypeError("Property description must be an object: "+c);if(R)try{return R.call(Object,a,b,c)}catch(d){if(-2146823252===d.number){c.enumerable=l;try{return R.call(Object,a,b,c)}catch(e){}}}if(c.value!==g)if(a.__defineGetter__&&(a.__lookupGetter__(b)||a.__lookupSetter__(b))){var f=
a.__proto__;a.__proto__=q;delete a[b];a[b]=c.value;a.__proto__=f}else a[b]=c.value;else if(a.__defineGetter__)c.get!==g&&a.__defineGetter__(b,c.get),c.set!==g&&a.__defineSetter__(b,c.set);else if(Object.defineProperty.ielt8)c.get!==g&&(a["get"+b]=c.get),c.set!==g&&(a["set"+b]=c.set);else throw new TypeError("getters & setters not supported");return a};z.ie&&8>p&&(z.ielt8=Object.defineProperty.ielt8=j);
if(!Object.defineProperties||S)Object.defineProperties=function(a,b){if(S)try{return S.call(Object,a,b)}catch(c){}for(var d in b)v(b,d)&&Object.defineProperty(a,d,b[d]);return a};if(Object.getOwnPropertyDescriptor){ya=function(a){try{return a.sentinel2=0,0===Object.getOwnPropertyDescriptor(a,"sentinel2").value}catch(b){return l}};Ba=ya({});if((T=ya(B))&&document.__proto__)try{T=!!Object.getOwnPropertyDescriptor(document.__proto__,"firstChild")}catch(Ja){T=l}if(!T||!Ba)U=Object.getOwnPropertyDescriptor}
if(!Object.getOwnPropertyDescriptor||U)Object.getOwnPropertyDescriptor=function(a,b){if("object"!=typeof a&&"function"!=typeof a||a===k)throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object: "+a);if(U)try{return U.call(Object,a,b)}catch(c){}if(v(a,b)){var d={enumerable:j,configurable:j},e,f;if(a.__defineGetter__){var i=a.__proto__;a.__proto__=q;e=a.__lookupGetter__(b);f=a.__lookupSetter__(b);a.__proto__=i}else Object.defineProperty.ielt8&&(e=a["get"+b],f=a["set"+b]);if(e||f)return e&&
(d.get=e),f&&(d.set=f),d;d.value=a[b];return d}};if(!Object.d||U){var Ka=Object.d;Object.d=function(a,b){if(Ka)try{return Ka.call(Object,a,b)}catch(c){}for(var d=Object.getOwnPropertyDescriptor(a,b),e=a;!d&&(e=Object.getPrototypeOf(e));)d=Object.getOwnPropertyDescriptor(e,b);return d}}2!=[1,2].splice(0).length&&(Array.prototype.splice=function(a,b){return a===g&&b===g?[]:ca.apply(this,[a===g?0:a,b===g?this.length-a:b].concat(r.call(arguments,2)))});
ea=function(a){if(a instanceof Array||Array.isArray(a))return a;if(a.l)return a.l();var a=y(a,j),b=a.length>>>0,c;try{c=r.call(a)}catch(d){}if(c&&c.length===b)return c;c=[];for(var e=0;e<b;e++)e in a&&(c[e]=a[e]);return c};x(Array,{isArray:function(a){return"[object Array]"==ga.call(a)},from:ea,of:function(a){return r.call(arguments)}});
x(Array.prototype,{reduce:function(a,b){var c=y(this),d=c.length>>>0,e=0;if(0===d&&1>=arguments.length)throw new TypeError("Array length is 0 and no second argument");for(b===g&&(b=(++e,c[0]));e<d;++e)e in c&&(b=w(a,g,b,c[e],e,c));return b},reduceRight:function(a,b){var c=y(this),d=c.length>>>0;if(0===d&&1>=arguments.length)throw new TypeError("Array length is 0 and no second argument");--d;for(b===g&&(b=(--d,c[d+1]));0<=d;--d)d in c&&(b=w(a,g,b,c[d],d,c));return b},forEach:function(a,b){for(var c=
y(this),d=c.length>>>0,e=-1;++e<d;)e in c&&w(a,b,c[e],e,c)},indexOf:function(a,b){var c=y(this),d=c.length>>>0;if((b=~~b)>d)return-1;for(b=(d+b)%d;b<d&&(!(b in c)||c[b]!==a);b++);return b^d?b:-1},lastIndexOf:function(a,b){var c=y(this),d=c.length>>>0,e;if(!d)return-1;e=d-1;b!==g&&(e=Math.min(e,Number.toInteger(b)));for(e=0<=e?e:d-Math.abs(e);0<=e;e--)if(e in c&&c[e]===a)return e;return-1},every:function(a,b,c){c===g&&(c=j);var d=c;N(this,function(e,f){d==c&&(d=!!w(a,b,e,f,this))},this);return d},
some:function(a,b){return ua.call(this,a,b,l)},filter:function(a,b){for(var c=y(this),d=c.length>>>0,e=[],f,i=0;i<d;i++)i in c&&(f=c[i],w(a,b,f,i,c)&&e.push(f));return e},map:function(a,b){for(var c=y(this),d=c.length>>>0,e=[],f=0;f<d;f++)f in c&&(e[f]=w(a,b,c[f],f,this));return e},contains:function(a){return!!~this.indexOf(a)}});N=u.call(Function.prototype.call,Array.prototype.forEach);da=Array.prototype.map;ua=Array.prototype.every;
if(!String.prototype.trim||P.trim())P="["+P+"]",va=RegExp("^"+P+P+"*"),wa=RegExp(P+P+"*$"),String.prototype.trim=function(){return String(this).replace(va,"").replace(wa,"")};O=String.prototype.trim;"0".split(g,0).length&&(String.prototype.split=function(a,b){return a===g&&0===b?[]:s.call(this,a,b)});t=function(a,b){return!!~this.indexOf(a,b|0)};
x(String.prototype,{repeat:function(a){if(0>a)return"";for(var b="",c=this;a;)if(a&1&&(b+=c),a>>=1)c+=c;return b},startsWith:function(a,b){return this.indexOf(a,b|=0)===b},endsWith:function(a,b){return this.lastIndexOf(a,b)===(0<=b?b|0:this.length-1)},contains:t,toArray:function(){return s.call(this,"")},reverse:function(){return Array.prototype.reverse.call(s.call(this+"","")).join("")}});
x(Number,{isFinite:function(a){return"number"===typeof a&&m.i(a)},isInteger:function(a){return Number.isFinite(a)&&-9007199254740992<=a&&9007199254740992>=a&&Math.floor(a)===a},isNaN:function(a){return Object.is(a,NaN)},toInteger:function(a){a=+a;return Number.isNaN(a)?0:0===a||!m.i(a)?a:(0>a?-1:1)*Math.floor(Math.abs(a))}});G=function(a,b){var c=document.createEvent("Events"),b=b||{};c.initEvent(a,b.bubbles||l,b.cancelable||l);"isTrusted"in c||(c.j=l);return c};
try{J=Event.prototype,new Event("click")}catch(La){m.Event=G,J?G.prototype=J:J=G.prototype}I=function(a,b){var c,d;try{c=document.createEvent("CustomEvent")}catch(e){c=document.createEvent("Event")}b=b||{};d=b.detail!==g?b.detail:k;(c.initCustomEvent||(c.detail=d,c.initEvent)).call(c,a,b.bubbles||l,b.cancelable||l,d);"isTrusted"in c||(c.j=l);return c};try{K=(m.CustomEvent||Event).prototype,new CustomEvent("magic")}catch(Ma){if(m.CustomEvent=I,K||J)I.prototype=K||J}
J.stopImmediatePropagation||(L=function(a){var b=this.f,c=this.g;if("function"!==typeof b)if("handleEvent"in b)c=b,b=b.handleEvent;else return;if(a.timeStamp&&a.__stopNow===a.timeStamp)a.stopPropagation();else return b.apply(c,arguments)},J.stopImmediatePropagation=function(){this.__stopNow=this.timeStamp||(this.timeStamp=(new Date).getTime())});
if("addEventListener"in B&&!B.addEventListener.__shim__){E=0;try{F=function(){E++},B.addEventListener("click",F),B.addEventListener("click",F),B.click?B.click():B.dispatchEvent(new G("click"))}catch(Na){}if(0==E||2==E||L){var Oa=2==E;N([m.HTMLDocument&&m.HTMLDocument.prototype||m.document,m.Window&&m.Window.prototype||m,z],function(a){if(a){var b=a.addEventListener,c=a.removeEventListener;b&&(a.addEventListener=function(a,c,f){var i,h,f=f||l;if(Oa||L){h="_e_8vj"+(f?"-":"")+(c.__UUID__||(c.__UUID__=
++D))+a;if(!(i=this._))i=this._={};if(h in i)return;c=L?i[h]=u.call(L,{f:c,g:this}):i[h]=g;c}return b.call(this,a,c,f)},c&&(a.removeEventListener=function(a,b,f){var i,h,f=f||l;if(Oa||L)if((i=this._)&&i[h="_e_8vj"+(f?"-":"")+b.__UUID__+a])b=i[h],delete i[h];return c.call(this,a,b,f)}))}})}}M=function(a,b,c){this.e=a;this.a=b;this.c=c;this.length=0;this.value="";this.b("1")};
qa=function(a,b){var c=b||"",d=!!a.length;if(d){for(;0<a.length;)delete a[--a.length];a.value=""}c&&((c=O.call(c))&&s.call(c,ma).forEach(ra,a),a.value=b);d&&a.a&&a.a.call(a.c,a.value)};ra=function(a){this[this.length++]=a};
x(M.prototype,{b:function(a){var b=this.e.call(this.c);b!=this.value&&qa(this,b);""===a&&ha("SYNTAX_ERR");t.call(a+""," ")&&ha("INVALID_CHARACTER_ERR")},add:function(a){var b=this.value;this.contains(a)||(this.value+=(b&&!b.match(la)?" ":"")+a,this[this.length++]=a,this.a&&this.a.call(this.c,this.value))},remove:function(a){this.b(a);var b;this.value=this.value.replace(RegExp("((?: +|^)"+a+"(?: +|$))","g"),function(a,b,e,f){return e&&a.length+e<f.length?" ":""});b=s.call(this.value," ");for(a=this.length-
1;0<a;--a)if(!(this[a]=b[a]))this.length--,delete this[a];this.a&&this.a.call(this.c,this.value)},contains:function(a){this.b(a);return t.call(" "+this.value+" "," "+a+" ")},item:function(a){this.b("1");return this[a]||k},toggle:function(a){var b=thisObj.contains(a);this[b?"add":"remove"](a);return b}});M.prototype.toString=function(){return this.value||""};m.DOMStringCollection=M;J.AT_TARGET||(J.AT_TARGET=2,J.BUBBLING_PHASE=3,J.CAPTURING_PHASE=1);
Event.AT_TARGET||(Event.AT_TARGET=2,Event.BUBBLING_PHASE=3,Event.CAPTURING_PHASE=1);try{m.getComputedStyle(B)}catch(Pa){m.getComputedStyle=u(function(a,b){return this.call(m,a,b||k)},m.getComputedStyle)}"classList"in B||(ta=function(a){this.className=a},sa=function(){return this.className},Object.defineProperty(z,"classList",{get:function(){if(this.tagName){var a=this._||(this._={});a._ccl_||(a._ccl_=new M(sa,ta,this));return a._ccl_}}}));
"parentElement"in B||Object.defineProperty(z,"parentElement",{get:function(){var a=this.parentNode;return a&&1===a.nodeType?a:k}});"contains"in B||(m.Node.prototype.contains=function(a){return!!(this.compareDocumentPosition(a)&16)});
"insertAdjacentHTML"in B||(m.HTMLElement.prototype.insertAdjacentHTML=function(a,b){var c=this.ownerDocument.createElement("_"),d={beforebegin:"before",afterbegin:"prepend",beforeend:"append",afterend:"after"},e;c.innerHTML=b;(c=c.childNodes)&&(c.length&&(e=this[d[a]]))&&e.apply(this,c)});if(document.importNode&&!document.importNode.shim)try{document.importNode(B)}catch(Qa){var Ra=document.importNode;delete document.importNode;document.importNode=function(a,b){b===g&&(b=j);return Ra.call(this,a,b)}}
try{B.cloneNode()}catch(Sa){[Node.prototype,Comment&&Comment.prototype,z,ProcessingInstruction&&ProcessingInstruction.prototype,Document.prototype,DocumentType&&DocumentType.prototype,DocumentFragment.prototype].forEach(function(a){if(a){var b=a.cloneNode;delete a.cloneNode;a.cloneNode=function(a){a===g&&(a=j);return b.call(this,a)}}})}
z.matchesSelector||(z.matchesSelector=z.webkitMatchesSelector||z.mozMatchesSelector||z.msMatchesSelector||z.oMatchesSelector||function(a,b){if(!a)return l;if("*"===a)return j;var c,d,e,f=0,i,h,n;b?"length"in b?c=b[0]:(c=b,b=g):c=this;do if(n=l,c===document.documentElement?n=":root"===a:c===document.body&&(n="BODY"===a.toUpperCase()),!n){a=O.call(a.replace(oa,"$1"));if(i=a.match(na))switch(a.charAt(0)){case "#":n=c.id===a.slice(1);break;default:if((n=!i[1]||!("tagName"in c)||c.tagName.toUpperCase()===
i[1].toUpperCase())&&i[2]){e=-1;h=i[2].slice(1).split(".");for(i=" "+c.className+" ";h[++e]&&n;)n=t.call(i," "+h[e]+" ")}}if(!/([,>+~ ])/.test(a)&&(d=c.parentNode)&&d.querySelector)n=d.querySelector(a)===c;if(!n&&(d=c.ownerDocument)){h=d.querySelectorAll(a);for(e=-1;!n&&h[++e];)n=h[e]===c}}while(n&&b&&(c=b[++f]));return b&&"length"in b?n&&b.length==f:n});document.documentElement.matchesSelector||(document.documentElement.matchesSelector=z.matchesSelector);
"matches"in z||(z.matches=document.documentElement.matches=z.matchesSelector);
B.prepend||(C=function(a){var b=k,c=0,d=a.length,a=da.call(a,C.k);if(1===d)return a[0];b=document.createDocumentFragment();a=Array.from(a);for(c=0;c<d;++c)b.appendChild(a[c]);return b},C.k=function(a){return"string"===typeof a?document.createTextNode(a):a},z.after=function(){this.parentNode&&this.parentNode.insertBefore(C(arguments),this.nextSibling)},z.before=function(){this.parentNode&&this.parentNode.insertBefore(C(arguments),this)},z.append=function(){this.appendChild(C(arguments))},z.prepend=
function(){this.insertBefore(C(arguments),this.firstChild)},z.replace=function(){this.parentNode&&this.parentNode.replaceChild(C(arguments),this)},z.remove=function(){this.parentNode&&this.parentNode.removeChild(this)},"prepend"in document||(document.prepend=function(){z.prepend.apply(this.documentElement,arguments)},document.append=function(){z.append.apply(this.documentElement,arguments)}));
"find"in document||(pa=/(\:scope)(?=[ >~+])/,document.find=m.Document.prototype.find=m.DocumentFragment.prototype.find=function(a,b){b&&("length"in b||(b=[b]))||(b=[this]);var c,d=0,e=b.length,f;do f=b[d],a=a.replace(pa,9==f.nodeType?":root":function(){return"#"+(f.id||(f.id="find"+ ++D))}),c=f.querySelector(a);while(!c&&++d<e);return c||k},document.findAll=m.Document.prototype.findAll=m.DocumentFragment.prototype.findAll=function(a,b){b&&("length"in b||(b=[b]))||(b=[this]);var c=[],d=0,e=b.length,
f,i,h,n,aa,Q={},H;do{f=b[d];a=a.replace(pa,9==f.nodeType?":root":function(){return"#"+(f.id||(f.id="find"+ ++D))});i=f.querySelectorAll(a);n=0;for(aa=i.length;n<aa;++n)if(h=i[n],H=l,h=h.__UUID__||(H=j,h.__UUID__=++D),H||!(h in Q))Q[h]=g,c.push(i[n])}while(++d<e);return c});"find"in z||(z.find=z.querySelector,z.findAll=z.querySelectorAll);
"labels"in A("input")||Object.defineProperty(z,"labels",{enumerable:j,get:function(){if(t.call(" INPUT BUTTON KEYGEN METER OUTPUT PROGRESS TEXTAREA SELECT "," "+this.nodeName.toUpperCase()+" ")){for(var a=this,b=this.id?ea(document.querySelectorAll("label[for='"+this.id+"']")):[],c=b.length-1;(a=a.parentNode)&&(!a.h||a.h===this);)if("LABEL"===a.nodeName.toUpperCase()){for(;b[c]&&b[c].compareDocumentPosition(a)&2;)c--;ca.call(b,c+1,0,a)}return b}}});
"control"in A("label")||(Da=function(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c],f=b(e);if(f||e.childNodes&&0<e.childNodes.length&&(f=Da(e.childNodes,b)))return f}},Object.defineProperty(m.HTMLLabelElement&&m.HTMLLabelElement.prototype||z,"control",{enumerable:j,get:function(){return"LABEL"!==this.nodeName.toUpperCase()?g:this.hasAttribute("for")?document.getElementById(this.htmlFor):Da(this.childNodes,function(a){if(t.call(" INPUT BUTTON KEYGEN METER OUTPUT PROGRESS TEXTAREA SELECT "," "+a.nodeName.toUpperCase()+
" "))return a})||k}}));
"reversed"in A("ol")||(Ga=function(a){var b=a.getAttribute("reversed"),c=a._,d,e;c||(c=a._={});"olreversed"in c&&c.olreversed==(b!==k)||(d=a.children,e=a.getAttribute("start"),e!==k&&(e=Number(e),isNaN(e)&&(e=k)),b!==k?(c.olreversed=j,e===k&&(e=d.length),N(d,function(a){a.value=e--})):(c.olreversed=l,d[0]&&(d[0].value=e||0),N(d,function(a){a.removeAttribute("value")})))},Object.defineProperty(m.HTMLOListElement&&m.HTMLOListElement.prototype||z,"reversed",{get:function(){return"OL"!==(this.nodeName||
"").toUpperCase()?g:this.getAttribute("reversed")!==k},set:function(a){if("OL"===(this.nodeName||"").toUpperCase())return this[(a?"set":"remove")+"Attribute"]("reversed",""),Ga(this),a}}),Z=function(){document.removeEventListener("DOMContentLoaded",Z,l);Z=g;N(document.getElementsByTagName("ol"),Ga)},"complete"==document.readyState?Z():document.addEventListener("DOMContentLoaded",Z,l));
[document.getElementsByClassName&&document.getElementsByClassName("")||{},document.querySelectorAll&&document.querySelectorAll("#z")||{}].forEach(function(a){(a=a.__proto__||a.constructor.prototype)&&a!==Array.prototype&&ka.forEach(function(b){a[b]||(a[b]=Array.prototype[b])})});E=document.createElement("form");E.innerHTML="<input type=radio name=t value=1><input type=radio checked name=t value=2>";
E.t&&2!==E.t.value&&(E=(E=E.t)&&(E=E.constructor)&&E.prototype||(E=m.NodeList)&&E.prototype)&&E!==Object.prototype&&Object.defineProperty(E,"value",{get:function(){if(this[0]&&"form"in this[0])for(var a=this.length,b;b=this[--a];)if(b.checked)return b.value},set:function(a){if(this[0]&&"form"in this[0])for(var b=this.length,c;c=this[--b];)if(c.checked)return c.value=a,c.value},configurable:j});
if(!V.prototype.toISOString||t.call((new V(-621987552E5)).toISOString(),"-000001")||"1969-12-31T23:59:59.999Z"!==(new V(-1)).toISOString())V.prototype.toISOString=function(){var a,b,c,d;if(!isFinite(this))throw new RangeError("Date.prototype.toISOString called on non-finite value.");d=this.getUTCFullYear();a=this.getUTCMonth();d+=~~(a/12);a=[(a%12+12)%12+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()];d=(0>d?"-":9999<d?"+":"")+("00000"+Math.abs(d)).slice(0<=d&&9999>=
d?-4:-6);for(b=a.length;b--;)c=a[b],10>c&&(a[b]="0"+c);return d+"-"+a.slice(0,2).join("-")+"T"+a.slice(2).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"};V.now||(V.now=function(){return(new V).getTime()});var Ta;if(!(Ta=!V.prototype.toJSON)){var Ua;if(!(Ua=t.call((new V(-621987552E5)).toJSON(),"-000001"))){var Va;a:{try{Va=V.prototype.toJSON.call({toISOString:function(){return-1}});break a}catch(Wa){}Va=g}Ua=~Va}Ta=Ua}Ta&&(V.prototype.toJSON=function(){return w(this.toISOString,this)});
if(!V.parse){W=function(a,b,c,d,e,f,i){var h=arguments.length;return this instanceof V?(h=1==h&&String(a)===a?new V(W.parse(a)):7<=h?new V(a,b,c,d,e,f,i):6<=h?new V(a,b,c,d,e,f):5<=h?new V(a,b,c,d,e):4<=h?new V(a,b,c,d):3<=h?new V(a,b,c):2<=h?new V(a,b):1<=h?new V(a):new V,h.constructor=W,h):V.apply(this,arguments)};Ca=RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:\\.(\\d{3}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$");X=[0,31,59,90,120,151,181,212,243,273,
304,334,365];Y=function(a){return Math.ceil(a/4)-Math.ceil(a/100)+Math.ceil(a/400)};for(E in V)W[E]=V[E];W.now=V.now;W.UTC=V.UTC;W.prototype=V.prototype;W.prototype.constructor=W;W.parse=function(a){var b=Ca.exec(a);if(b){var c=Number(b[1]),d=Number(b[2]||1),e=Number(b[3]||1),f=Number(b[4]||0),i=Number(b[5]||0),h=Number(b[6]||0),n=Number(b[7]||0),aa=b[8]?0:Number(new Date(1970,0)),Q="-"===b[9]?1:-1,H=Number(b[10]||0),b=Number(b[11]||0),Ea=Y(c),Fa=Y(c+1);if(f<(0<i||0<h||0<n?24:25)&&60>i&&60>h&&1E3>
n&&24>H&&60>b&&0<d&&13>d&&0<e&&e<1+X[d]-X[d-1]+(2===d?Fa-Ea:0))if(c=365*(c-1970)+(2<d?Fa:Ea)-Y(1970)+X[d-1]+e-1,c=1E3*(60*(60*(24*c+f+H*Q)+i+b*Q)+h)+n+aa,-864E13<=c&&864E13>=c)return c;return NaN}return V.parse.apply(this,arguments)};m.Date=W}if((E=m._)&&E.ielt9shims)E.ielt9shims.forEach(w),m._=E.orig_;x=E=B=ka=A=G=I=J=K=F=z=W=ia=za=Aa=g;
})();
