/* ES6/DOM4 polyfill | @version 0.8 | MIT License | github.com/termi */
;(function() {"use strict";
var f=void 0,h=!0,j=null,m=!1,n=window,p=Object.prototype,q=String.prototype,aa=Function.prototype.apply,s=Array.prototype.slice,ba=Array.prototype.splice,t,u,v=q.split,w=Function.prototype.bind||function(a,b){var c=this,d=s.call(arguments,1);return function(){return aa.call(c,a,d.concat(s.call(arguments)))}},x=w.call(Function.prototype.call,p.hasOwnProperty);function y(a,b,c){return aa.call(a,b,s.call(arguments,2))}
function z(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c],e;for(e in d)x(d,e)&&!x(a,e)&&(a[e]=d[e])}return a}var da="a"!==Object("a")[0]||!(0 in Object("a"));function A(a,b){if(a==j&&!b)throw new TypeError;return da&&"string"==typeof a&&a?v.call(a,""):Object(a)}var ea=p.toString;function fa(a){var b=Object.create(DOMException.prototype);b.code=DOMException[a];b.message=a+": DOM Exception "+b.code;throw b;}function ga(){return m}function ha(a){return a}
var B=n.Element&&n.Element.prototype||{},ia=n.Node&&n.Node.prototype||{},C=w.call(document.__orig__createElement__||document.createElement,document),D=C("p"),E,ja=/\s+$/g,ka=/\s+/g,F=1,G,H,la,ma=/^(\w+)?((?:\.(?:[\w\-]+))+)?$|^#([\w\-]+$)/,na=/\s*([,>+~ ])\s*/g,oa,I,J,K,L,M,pa,O,P,qa,ra,sa,ta,Q,ua,R,S="\t\n\x0B\f\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff",va,wa,xa,ya,za,Aa,U,V,Ba,W,X,Y=n.Date,Z,Ca,Da,Ea,Fa,Ga,$;
(t=(t=/msie (\d+)/i.exec(navigator.userAgent)||[])&&+t[1]||j)&&("eval"in window&&!window.eval("/*@cc_on 1;@*/"))&&(t=j);n.HTMLDocument||(n.HTMLDocument=n.Document);n.Document||(n.Document=n.HTMLDocument);n.DocumentFragment||(n.DocumentFragment=n.HTMLDocument);Object.append=z;Object.extend||(Object.extend=function(a,b){for(var c=1,d=arguments.length,e;c<d;c++)if(e=arguments[c])for(var g in e)x(e,g)&&(a[g]=e[g]);return a});la=function(a,b){a[b]=Object.getOwnPropertyDescriptor(this,b);return a};
Object.inherits=function(a,b){a.prototype=Object.create((a.superclass=b).prototype,(a.prototype&&Object.getOwnPropertyNames(a.prototype)||[]).reduce(la.bind(a.prototype),{constructor:{value:a,enumerable:m}}))};
Function.prototype.bind||(Function.prototype.bind=function(a,b){function c(){return aa.call(d,this instanceof c?this:a,e.concat(s.call(arguments)))}if("function"!=typeof this&&(!t||0!==R.call(this+"").indexOf("function")))throw new TypeError("Function.prototype.bind called on incompatible "+this);var d=this,e=s.call(arguments,1);d.prototype&&(c.prototype=Object.create(d.prototype));return c});
var Ha="toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor".split(" "),Ia=!{toString:j}.propertyIsEnumerable(Ha[0]),Ja=Ha.length;
z(Object,{keys:function(a){if("object"!=typeof a&&"function"!=typeof a||a===j)throw new TypeError("Object.keys called on a non-object");var b=[],c;for(c in a)x(a,c)&&b.push(c);if(Ia)for(c=0;c<Ja;c++)x(a,Ha[c])&&b.push(Ha[c]);return b},getOwnPropertyNames:function(a){return Object.keys(a)},seal:ha,freeze:ha,preventExtensions:ha,isSealed:ga,isFrozen:ga,isExtensible:function(a){if(Object(a)!==a)throw new TypeError;for(var b="";x(a,b);)b+="?";a[b]=h;var c=x(a,b);delete a[b];return c},getPrototypeOf:function(a){return a.__proto__||
(a.constructor?a.constructor.prototype:p)},create:function(a,b){var c;if(a===j)c={__proto__:j};else{if("object"!=typeof a)throw new TypeError("typeof prototype["+typeof a+"] != 'object'");c=function(){};c.prototype=a;c=new c;c.__proto__=a}b&&Object.defineProperties(c,b);return c},is:function(a,b){return a===b?0===a?1/a===1/b:h:a!==a&&b!==b},isnt:function(a,b){return!Object.is(a,b)},isObject:function(a){return"[object Object]"===ea.call(a)}});
if(Object.defineProperty&&(xa=function(a){try{return Object.defineProperty(a,"sentinel",{}),"sentinel"in a}catch(b){return m}},za=xa({}),Aa=xa(D),!za||!Aa))U=Object.defineProperty,V=Object.defineProperties;
if(!Object.defineProperty||U)Object.defineProperty=function(a,b,c){if("object"!=typeof a&&"function"!=typeof a||a===j)throw new TypeError("Object.defineProperty called on non-object: "+a);if("object"!=typeof c&&"function"!=typeof c||c===j)throw new TypeError("Property description must be an object: "+c);if(U)try{return U.call(Object,a,b,c)}catch(d){if(-2146823252===d.number){c.enumerable=m;try{return U.call(Object,a,b,c)}catch(e){}}}if(c.value!==f)if(a.__defineGetter__&&(a.__lookupGetter__(b)||a.__lookupSetter__(b))){var g=
a.__proto__;a.__proto__=p;delete a[b];a[b]=c.value;a.__proto__=g}else a[b]=c.value;else if(a.__defineGetter__)c.get!==f&&a.__defineGetter__(b,c.get),c.set!==f&&a.__defineSetter__(b,c.set);else if(Object.defineProperty.sham)c.get!==f&&(a["get"+b]=c.get),c.set!==f&&(a["set"+b]=c.set);else throw new TypeError("getters & setters not supported");return a};B.ie&&(8>t&&(B.ielt8=h),Object.defineProperty.sham=h);
if(!Object.defineProperties||V)Object.defineProperties=function(a,b){if(V)try{return V.call(Object,a,b)}catch(c){}for(var d in b)x(b,d)&&Object.defineProperty(a,d,b[d]);return a};if(Object.getOwnPropertyDescriptor){ya=function(a){try{return a.sentinel2=0,0===Object.getOwnPropertyDescriptor(a,"sentinel2").value}catch(b){return m}};Ba=ya({});if((W=ya(D))&&document.__proto__)try{W=!!Object.getOwnPropertyDescriptor(document.__proto__,"firstChild")}catch(Ka){W=m}if(!W||!Ba)X=Object.getOwnPropertyDescriptor}
if(!Object.getOwnPropertyDescriptor||X)Object.getOwnPropertyDescriptor=function(a,b){if("object"!=typeof a&&"function"!=typeof a||a===j)throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object: "+a);if(X)try{return X.call(Object,a,b)}catch(c){}if(x(a,b)){var d={enumerable:h,configurable:h},e,g;if(a.__defineGetter__){var k=a.__proto__;a.__proto__=p;e=a.__lookupGetter__(b);g=a.__lookupSetter__(b);a.__proto__=k}else Object.defineProperty.sham&&(e=a["get"+b],g=a["set"+b]);if(e||g)return e&&
(d.get=e),g&&(d.set=g),d;d.value=a[b];return d}};if(!Object.c||X){var La=Object.c;Object.c=function(a,b){if(La)try{return La.call(Object,a,b)}catch(c){}for(var d=Object.getOwnPropertyDescriptor(a,b),e=a;!d&&(e=Object.getPrototypeOf(e));)d=Object.getOwnPropertyDescriptor(e,b);return d}}2!=[1,2].splice(0).length&&(Array.prototype.splice=function(a,b){if(!arguments.length)return[];arguments[0]==f&&(arguments[0]=0);1===arguments.length&&(arguments[1]=this.length-arguments[0]);return ba.apply(this,arguments)});
ta=function(a){if(a.j)return a.j();a=A(a,h);var b=a.length>>>0,c,d;try{c=s.call(a)}catch(e){}if(c&&c.length===b)return c;c=[];for(d=0;d<b;d++)d in a&&(c[d]=a[d]);return c};z(Array,{isArray:function(a){return"[object Array]"===ea.call(a)},from:ta,of:function(a){return s.call(arguments)}});
z(Array.prototype,{reduce:function(a,b){var c=A(this),d=c.length>>>0,e=0;if(0===d&&1>=arguments.length)throw new TypeError("Array length is 0 and no second argument");for(b===f&&(b=(++e,c[0]));e<d;++e)e in c&&(b=y(a,f,b,c[e],e,this));return b},reduceRight:function(a,b){var c=A(this),d=c.length>>>0;if(0===d&&1>=arguments.length)throw new TypeError("Array length is 0 and no second argument");--d;for(b===f&&(b=(--d,c[d+1]));0<=d;--d)d in c&&(b=y(a,f,b,c[d],d,this));return b},forEach:function(a,b){for(var c=
A(this),d=c.length>>>0,e=-1;++e<d;)e in c&&y(a,b,c[e],e,this)},indexOf:function(a,b){var c=A(this),d=c.length>>>0;if(!d||(b=~~b)>=d)return-1;for(b=(d+b)%d;b<d&&(!(b in c)||c[b]!==a);b++);return b^d?b:-1},lastIndexOf:function(a,b){var c=A(this),d=c.length>>>0,e;if(!d)return-1;e=d-1;b!==f&&(e=Math.min(e,Number.toInteger(b)));for(e=0<=e?e:d-Math.abs(e);0<=e;e--)if(e in c&&c[e]===a)return e;return-1},every:function(a,b,c){c===f&&(c=h);var d=c;Q(this,function(e,g){d==c&&(d=!!y(a,b,e,g,this))},this);return d},
some:function(a,b){return ua.call(this,a,b,m)},filter:function(a,b){var c=A(this),d=c.length>>>0,e=[],g,k;for(k=0;k<d;k++)k in c&&(g=c[k],y(a,b,g,k,this)&&e.push(g));return e},map:function(a,b){var c=A(this),d=c.length>>>0,e=[],g;for(g=0;g<d;g++)g in c&&(e[g]=y(a,b,c[g],g,this));return e},contains:function(a){return!!~this.indexOf(a)}});Q=w.call(Function.prototype.call,Array.prototype.forEach);sa=Array.prototype.map;ua=Array.prototype.every;
if(!q.trim||S.trim())S="["+S+"]",va=RegExp("^"+S+S+"*"),wa=RegExp(S+S+"*$"),q.trim=function(){return String(this).replace(va,"").replace(wa,"")};R=q.trim;"0".split(f,0).length&&(q.split=function(a,b){return a===f&&0===b?[]:v.call(this,a,b)});u=q.contains||function(a,b){return!!~this.indexOf(a,b|0)};
z(q,{repeat:function(a){if(0>a)return"";for(var b="",c=this;a;)if(a&1&&(b+=c),a>>=1)c+=c;return b},startsWith:function(a,b){return this.indexOf(a,b|=0)===b},endsWith:function(a,b){return this.lastIndexOf(a,b)===(0<=b?b|0:this.length-1)},contains:u,toArray:function(){return v.call(this,"")},reverse:function(){return Array.prototype.reverse.call(v.call(this+"","")).join("")}});
z(Number,{isFinite:function(a){return"number"===typeof a&&n.d(a)},isInteger:function(a){return Number.isFinite(a)&&-9007199254740992<=a&&9007199254740992>=a&&Math.floor(a)===a},isNumber:function(a){return!n.isNaN(n.l(a))&&n.d(a)},isNaN:function(a){return Object.is(a,NaN)},toInteger:function(a){a=+a;return Number.isNaN(a)?0:0===a||!n.d(a)?a:(0>a?-1:1)*Math.floor(Math.abs(a))}});
I=function(a,b){var c=document.createEvent("Events");b=b||{};c.initEvent(a,b.bubbles||m,b.cancelable||m);"isTrusted"in c||(c.g=m);return c};try{K=Event.prototype,new Event("click")}catch(Ma){n.Event=I,K?I.prototype=K:K=I.prototype}J=function(a,b){var c,d;try{c=document.createEvent("CustomEvent")}catch(e){c=document.createEvent("Event")}b=b||{};d=b.detail!==f?b.detail:j;(c.initCustomEvent||(c.detail=d,c.initEvent)).call(c,a,b.bubbles||m,b.cancelable||m,d);"isTrusted"in c||(c.g=m);return c};
try{L=(n.CustomEvent||Event).prototype,new CustomEvent("magic")}catch(Na){if(n.CustomEvent=J,L||K)J.prototype=L||K}try{G=document.createEvent("Event")}catch(Oa){G={}}"defaultPrevented"in G||(Object.defineProperty(K,"defaultPrevented",{value:m}),pa=K.preventDefault,K.preventDefault=function(){this.defaultPrevented=h;pa.apply(this,arguments)});
"stopImmediatePropagation"in G||(M=function(a){var b=this.e,c=this.f;if("function"!==typeof b)if("handleEvent"in b)c=b,b=b.handleEvent;else return;if(a.timeStamp&&a.__stopNow===a.timeStamp)a.stopPropagation();else return b.apply(c,arguments)},K.stopImmediatePropagation=function(){this.__stopNow=this.timeStamp||(this.timeStamp=(new Date).getTime())});
if("addEventListener"in D&&!D.addEventListener.__shim__){G=0;try{H=function(){G++},D.addEventListener("click",H),D.addEventListener("click",H),D.click?D.click():D.dispatchEvent(new I("click"))}catch(Pa){}if(0==G||2==G||M){var Qa=2==G;Q([n.HTMLDocument&&n.HTMLDocument.prototype||n.document,n.Window&&n.Window.prototype||n,B],function(a){if(a){var b=a.addEventListener,c=a.removeEventListener;b&&(a.addEventListener=function(a,c,g){var k,l;g=g||m;if(Qa||M){l="_e_8vj"+(g?"-":"")+(c.__UUID__||(c.__UUID__=
++F))+a;if(!(k=this._))k=this._={};if(l in k)return;c=M?k[l]=w.call(M,{e:c,f:this}):k[l]=f;c}return b.call(this,a,c,g)},c&&(a.removeEventListener=function(a,b,g){var k,l;g=g||m;if(Qa||M)if((k=this._)&&k[l="_e_8vj"+(g?"-":"")+b.__UUID__+a])b=k[l],delete k[l];return c.call(this,a,b,g)}))}})}}O=function(a,b,c){this.__getter__=w.call(a,c);this.__setter__=w.call(b,c);this.length=0;this.value="";this.b()};
P=function(a,b){var c=b||"",d=!!a.length;if(d){for(;0<a.length;)delete a[--a.length];a.value=""}c&&((c=R.call(c))&&v.call(c,ka).forEach(P.add,a),a.value=b);d&&a.__setter__&&a.__setter__(a.value)};P.add=function(a){this[this.length++]=a};P.h=function(a,b,c,d){return c&&a.length+c<d.length?" ":""};
z(O.prototype,{b:function(){var a=this.__getter__();a!==this.value&&P(this,a)},a:function(a,b){0===b&&fa("WRONG_ARGUMENTS_ERR");""===a&&fa("SYNTAX_ERR");ka.test(a)&&fa("INVALID_CHARACTER_ERR")},add:function(){var a=arguments,b=0,c=a.length,d,e=this.value,g,k=m;this.b();this.a(j,c);do d=a[b],g=this.contains(d),g||(d+="",e+=(0<b||e&&!e.match(ja)?" ":"")+d,this[this.length++]=d,k=h);while(++b<c);k&&(this.value=e,this.__setter__&&this.__setter__(this.value))},remove:function(){var a=arguments,b=0,c=a.length,
d,e=this.value,g=e.length;this.b();this.a(j,c);do d=a[b],this.a(d),e=e.replace(RegExp("((?:\\ +|^)"+d+"(?:\\ +|$))","g"),P.h);while(++b<c);if(g!==e.length){b=v.call(this.value," ");for(a=this.length-1;0<a;--a)if(!(this[a]=b[a]))this.length--,delete this[a];this.value=e;this.__setter__&&this.__setter__(this.value)}},contains:function(a){this.a(a,arguments.length);return u.call(" "+this.value+" "," "+a+" ")},item:function(a){this.a("1",arguments.length);return this[a]||j},toggle:function(a,b){a+="";
var c=this.contains(a),d=c?b!==h&&"remove":b!==m&&"add";if(d)this[d](a);return c}});O.prototype.toString=function(){return this.value||""};n.DOMStringCollection=O;K.AT_TARGET||(K.AT_TARGET=2,K.BUBBLING_PHASE=3,K.CAPTURING_PHASE=1);Event.AT_TARGET||(Event.AT_TARGET=2,Event.BUBBLING_PHASE=3,Event.CAPTURING_PHASE=1);try{n.getComputedStyle(D)}catch(Ra){n.getComputedStyle=w.call(function(a,b){return this.call(n,a,b||j)},n.getComputedStyle)}
G=!("classList"in D)?f:(D.classList.add(1,2),D.classList.contains(2))&&h||m;if(!G)if(G===f)ra=function(a){this.className=a},qa=function(){return this.className},Object.defineProperty(B,"classList",{get:function(){if(this.tagName){var a=this._||(this._={});a._ccl_||(a._ccl_=new O(qa,ra,this));return a._ccl_}}});else if(G===m&&(G=n.DOMTokenList)&&(G=G.prototype)){var Sa=G.add,Ta=G.remove;G.add=function(){Q(arguments,Sa,this)};G.remove=function(){Q(arguments,Ta,this)};G.toggle=O.prototype.toggle}
"parentElement"in D||Object.defineProperty(B,"parentElement",{get:function(){var a=this.parentNode;return a&&1===a.nodeType?a:j}});"contains"in D||(n.Node.prototype.contains=function(a){return!!(this.compareDocumentPosition(a)&16)});
"insertAdjacentHTML"in D||(n.HTMLElement.prototype.insertAdjacentHTML=function(a,b){var c=this.ownerDocument.createElement("_"),d={beforebegin:"before",afterbegin:"prepend",beforeend:"append",afterend:"after"},e;c.innerHTML=b;(c=c.childNodes)&&(c.length&&(e=this[d[a]]))&&e.apply(this,c)});if(document.importNode&&!document.importNode.shim)try{document.importNode(D)}catch(Ua){var Va=document.importNode;delete document.importNode;document.importNode=function(a,b){b===f&&(b=h);return Va.call(this,a,b)}}
try{D.cloneNode()}catch(Wa){[ia,Comment&&Comment.prototype,B,ProcessingInstruction&&ProcessingInstruction.prototype,Document.prototype,DocumentType&&DocumentType.prototype,DocumentFragment.prototype].forEach(function(a){if(a){var b=a.cloneNode;delete a.cloneNode;a.cloneNode=function(a){a===f&&(a=h);return b.call(this,a)}}})}
B.matchesSelector||(B.matchesSelector=B.webkitMatchesSelector||B.mozMatchesSelector||B.msMatchesSelector||B.oMatchesSelector||function(a,b){if(!a)return m;if("*"===a)return h;var c,d,e,g=0,k,l,r;b?"length"in b&&!("nodeType"in b)?c=b[0]:(c=b,b=f):c=this;do if(r=m,c===document.documentElement?r=":root"===a:c===document.body&&(r="BODY"===a.toUpperCase()),!r)if(a=R.call(a.replace(na,"$1")),k=a.match(ma))switch(a.charAt(0)){case "#":r=c.id===a.slice(1);break;default:if((r=!k[1]||!("tagName"in c)||c.tagName.toUpperCase()===
k[1].toUpperCase())&&k[2]){e=-1;l=k[2].slice(1).split(".");for(k=" "+c.className+" ";l[++e]&&r;)r=u.call(k," "+l[e]+" ")}}else{if(!/([,>+~ ])/.test(a)&&(d=c.parentNode)&&d.querySelector)r=d.querySelector(a)===c;if(!r&&(d=c.ownerDocument)){l=d.querySelectorAll(a);for(e=-1;!r&&l[++e];)r=l[e]===c}}while(r&&b&&(c=b[++g]));return b&&"length"in b?r&&b.length==g:r});document.documentElement.matchesSelector||(document.documentElement.matchesSelector=B.matchesSelector);
"matches"in B||(B.matches=document.documentElement.matches=B.matchesSelector);
if(!D.prepend){E=function(a){var b=j,c=0,d=a.length;a=sa.call(a,E.i);if(1===d)return a[0];b=document.createDocumentFragment();a=Array.from(a);for(c=0;c<d;++c)b.appendChild(a[c]);return b};E.i=function(a){return"string"===typeof a?document.createTextNode(a):a};B.after||(B.after=function(){this.parentNode&&this.parentNode.insertBefore(E(arguments),this.nextSibling)});B.before||(B.before=function(){this.parentNode&&this.parentNode.insertBefore(E(arguments),this)});B.append||(B.append=function(){this.appendChild(E(arguments))});
B.prepend||(B.prepend=function(){this.insertBefore(E(arguments),this.firstChild)});B.replace||(B.replace=function(){this.parentNode&&this.parentNode.replaceChild(E(arguments),this)});B.remove||(B.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});if(G=n.CharacterData||n.Text)G=G.prototype;G||(G=ia);G&&(G.after||(G.after=B.after),G.before||(G.before=B.before),G.replace||(G.replace=B.replace),G.remove||(G.remove=B.remove));"prepend"in document||(document.prepend=n.Document.prototype.prepend=
function(){B.prepend.apply(this.documentElement,arguments)},document.append=n.Document.prototype.append=function(){B.append.apply(this.documentElement,arguments)},n.DocumentFragment.prototype.prepend=B.prepend,n.DocumentFragment.prototype.append=B.append)}G=document.createElement("select");G.innerHTML="<option>0</option>";try{G.remove()}catch(Xa){G=m}
if(G===m||!G.childNodes.length)if((G=n.k)&&(G=G.prototype)&&"remove"in G){var Ya=G.remove;G.remove=function(a){arguments.length?Ya.apply(this,arguments):B.remove.call(this)}}
"find"in document||(oa=/(\:scope)(?=[ >~+])/,document.find=n.Document.prototype.find=n.DocumentFragment.prototype.find=function(a,b){b&&("length"in b&&!("nodeType"in b)||(b=[b]))||(b=[this]);var c,d=0,e=b.length,g;do g=b[d],a=a.replace(oa,9==g.nodeType?":root":function(){return"#"+(g.id||(g.id="find"+ ++F))}),c=g.querySelector(a);while(!c&&++d<e);return c||j},document.findAll=n.Document.prototype.findAll=n.DocumentFragment.prototype.findAll=function(a,b){b&&("length"in b&&!("nodeType"in b)||(b=[b]))||
(b=[this]);var c=[],d=0,e=b.length,g,k,l,r,ca,T={},N;do{g=b[d];a=a.replace(oa,9==g.nodeType?":root":function(){return"#"+(g.id||(g.id="find"+ ++F))});k=g.querySelectorAll(a);r=0;for(ca=k.length;r<ca;++r)if(l=k[r],N=m,l=l.__UUID__||(N=h,l.__UUID__=++F),N||!(l in T))T[l]=f,c.push(k[r])}while(++d<e);return c});"find"in B||(B.find=B.querySelector,B.findAll=B.querySelectorAll);
"labels"in C("input")||Object.defineProperty(B,"labels",{enumerable:h,get:function(){if(u.call(" INPUT BUTTON KEYGEN METER OUTPUT PROGRESS TEXTAREA SELECT ",(" "+this.nodeName+" ").toUpperCase())){for(var a=this,b=this.id?ta(document.querySelectorAll("label[for='"+this.id+"']")):[],c=b.length-1;(a=a.parentNode)&&(!a.control||a.control===this);)if("LABEL"===a.nodeName.toUpperCase()){for(;b[c]&&b[c].compareDocumentPosition(a)&2;)c--;ba.call(b,c+1,0,a)}return b}}});
"control"in C("label")||(Fa=function(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c],g=b(e);if(g||e.childNodes&&0<e.childNodes.length&&(g=Fa(e.childNodes,b)))return g}},Object.defineProperty(n.HTMLLabelElement&&n.HTMLLabelElement.prototype||B,"control",{enumerable:h,get:function(){return"LABEL"!==this.nodeName.toUpperCase()?f:this.hasAttribute("for")?document.getElementById(this.htmlFor):Fa(this.childNodes,function(a){if(u.call(" INPUT BUTTON KEYGEN METER OUTPUT PROGRESS TEXTAREA SELECT "," "+a.nodeName.toUpperCase()+
" "))return a})||j}}));
"reversed"in C("ol")||(Ga=function(a){var b=a.getAttribute("reversed"),c=a._,d,e;c||(c=a._={});"olreversed"in c&&c.olreversed==(b!==j)||(d=a.children,e=a.getAttribute("start"),e!==j&&(e=Number(e),isNaN(e)&&(e=j)),b!==j?(c.olreversed=h,e===j&&(e=d.length),Q(d,function(a){a.value=e--})):(c.olreversed=m,d[0]&&(d[0].value=e||0),Q(d,function(a){a.removeAttribute("value")})))},Object.defineProperty(n.HTMLOListElement&&n.HTMLOListElement.prototype||B,"reversed",{get:function(){return"OL"!==(this.nodeName||
"").toUpperCase()?f:this.getAttribute("reversed")!==j},set:function(a){if("OL"===(this.nodeName||"").toUpperCase())return this[(a?"set":"remove")+"Attribute"]("reversed",""),Ga(this),a}}),$=function(){document.removeEventListener("DOMContentLoaded",$,m);$=f;Q(document.getElementsByTagName("ol"),Ga)},"complete"==document.readyState?$():document.addEventListener("DOMContentLoaded",$,m));
[document.getElementsByClassName&&document.getElementsByClassName(""),document.querySelectorAll&&document.querySelectorAll("#z"),document.documentElement.children].forEach(function(a){var b;a&&(b=a.__proto__||a.constructor&&a.constructor.prototype)&&(b!==Array.prototype&&!("map"in a)&&!Array.isArray(a))&&this(b)},[].forEach.bind("join forEach every some map filter reduce reduceRight indexOf lastIndexOf slice".split(" "),function(a){this[a]||(this[a]=Array.prototype[a])}));G=document.createElement("form");
G.innerHTML="<input type=radio name=t value=1><input type=radio checked name=t value=2>";
G.t&&2!==G.t.value&&(G=(G=G.t)&&(G=G.constructor)&&G.prototype||(G=n.NodeList)&&G.prototype)&&G!==Object.prototype&&Object.defineProperty(G,"value",{get:function(){if(this[0]&&"nodeName"in this[0]&&"INPUT"==this[0].nodeName&&"form"in this[0])for(var a=this.length,b;b=this[--a];)if(b.checked)return b.value},set:function(a){if(this[0]&&"nodeName"in this[0]&&"INPUT"==this[0].nodeName&&"form"in this[0])for(var b=this.length,c;c=this[--b];)if(c.checked)return c.value=a,c.value},configurable:h});
if(!Y.prototype.toISOString||"1969-12-31T23:59:59.999Z"!==(new Y(-1)).toISOString()||u.call((new Y(-621987552E5)).toISOString(),"-000001"))Y.prototype.toISOString=function(){var a,b,c,d;if(!isFinite(this))throw new RangeError("Date.prototype.toISOString called on non-finite value.");d=this.getUTCFullYear();a=this.getUTCMonth();d+=~~(a/12);a=[(a%12+12)%12+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()];d=(0>d?"-":9999<d?"+":"")+("00000"+Math.abs(d)).slice(0<=d&&9999>=
d?-4:-6);for(b=a.length;b--;)c=a[b],10>c&&(a[b]="0"+c);return d+"-"+a.slice(0,2).join("-")+"T"+a.slice(2).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"};Y.now||(Y.now=function(){return(new Y).getTime()});var Za;if(!(Za=!Y.prototype.toJSON)){var $a;if(!($a=u.call((new Y(-621987552E5)).toJSON(),"-000001"))){var ab;a:{try{ab=Y.prototype.toJSON.call({toISOString:function(){return-1}});break a}catch(bb){}ab=f}$a=~ab}Za=$a}Za&&(Y.prototype.toJSON=function(){return y(this.toISOString,this)});
Z=function(a,b,c,d,e,g,k){var l=arguments.length;return this instanceof Y?(l=1==l&&String(a)===a?new Y(Date.parse(a)):7<=l?new Y(a,b,c,d,e,g,k):6<=l?new Y(a,b,c,d,e,g):5<=l?new Y(a,b,c,d,e):4<=l?new Y(a,b,c,d):3<=l?new Y(a,b,c):2<=l?new Y(a,b):1<=l?new Y(a):new Y,l.constructor=Z,l):Y.apply(this,arguments)};Ca=RegExp("^(\\d{4}|[\\+\\-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:\\.(\\d{3}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$");
Da=[0,31,59,90,120,151,181,212,243,273,304,334,365];Ea=function(a,b){var c=1<b?1:0;return Da[b]+Math.floor((a-1969+c)/4)-Math.floor((a-1901+c)/100)+Math.floor((a-1601+c)/400)+365*(a-1970)};for(G in Y)Z[G]=Y[G];Z.now=Y.now;Z.UTC=Y.UTC;Z.prototype=Y.prototype;Z.prototype.constructor=Z;
Z.parse=function(a){var b=Ca.exec(a);if(b){var c=Number(b[1]),d=Number(b[2]||1)-1,e=Number(b[3]||1)-1,g=Number(b[4]||0),k=Number(b[5]||0),l=Number(b[6]||0),r=Number(b[7]||0),ca=!b[4]||b[8]?0:Number(new Y(1970,0)),T="-"===b[9]?1:-1,N=Number(b[10]||0),b=Number(b[11]||0);if(g<(0<k||0<l||0<r?24:25)&&60>k&&60>l&&1E3>r&&-1<d&&12>d&&24>N&&60>b&&-1<e&&e<Ea(c,d+1)-Ea(c,d))if(c=60*(24*(Ea(c,d)+e)+g+N*T),c=1E3*(60*(c+k+b*T)+l)+r+ca,-864E13<=c&&864E13>=c)return c;return NaN}return Y.parse.apply(this,arguments)};
n.Date=Z;if((G=n._)&&G.ielt9shims)G.ielt9shims.forEach(y),n._=G.orig_;"anchor big blink bold fixed fontcolor fontsize italics link small strike sub sup".split(" ").forEach(function(a){delete this[a]},q);z=G=D=C=I=J=K=L=H=B=Z=ga=za=Aa=j;
})();
