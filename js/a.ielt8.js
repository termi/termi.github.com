/* ES6/DOM4 polyfill for IE < 8 | @version 0.8.2 | MIT License | github.com/termi */
var l=void 0,m=!0,n=null,s=!1;function aa(){return function(){}}
void function(D){function G(a){if(!("__isFixed"in a||a.isTrusted===s)){var b="button"in a&&a.button;a.__isFixed=m;if("click"===a.type||"dblclick"===a.type)a.detail===l&&(a.detail="click"===a.type?1:2),!a.button&&G.b!==l&&(b=G.b);D(a,L);a.defaultPrevented||(a.defaultPrevented=s);a.target||(a.target=a.srcElement||document);a.relatedTarget===l&&a.fromElement&&(a.relatedTarget=a.fromElement==a.target?a.toElement:a.fromElement);"clientX"in a&&a.pageX==n&&(a.pageX=a.clientX+ba()-(q.clientLeft||0),a.pageY=
a.clientY+ca()-(q.clientTop||0));!a.which&&b&&(a.which=b&1?1:b&2?3:b&4?2:0);"timeStamp"in a||(a.timeStamp=+new Ba);"eventPhase"in a||(a.eventPhase=a.target==this?2:3);"currentTarget"in a||(a.currentTarget=this);a.keyCode||(a.keyCode=a.charCode||a.which);!a.attrName&&a.propertyName&&(a.attrName=ha.call(a.propertyName,".")[0]);return a}}function I(a){if(G!==l){var b=this._,d,g,h,c,e,y,f,j;if(!b.__stop_events__){d=[];g=[];c="_e_8vj"+(Ua?"-":"");if(!b||!b[c])if("__dom0__"in a)b||(b={}),b[c]||(b[c]={});
else return;a||(a=window.event);if("__custom_event"in a)h=a;else if(!(h=a.__customEvent__))a.bubbles==l&&(a.bubbles=m),a.cancelable==l&&(a.cancelable=m),h=a.__customEvent__=new J(a),h.initEvent(a.type,a.bubbles,a.cancelable),G.call(this,h),h.k=m,h.__custom_event=n;h.ietl9_event=a;a.currentTarget=this;"__dom0__"in a&&(y=a.__dom0__);if((b=b[c][h.type])||y)e=b?ia.call(b):[],y&&e.unshift(y);if(e&&e.length){for(;y=e.shift();)if(y&&(!(j=y[O])||"_"+j in b)){"object"===typeof y&&(f=y,y=y.handleEvent);try{if(y&&
(h.result=p.call(y,f||this,h))===s)h.preventDefault(),h.stopPropagation()}catch(q){d.push(q),g.push(q.message)}if(h.__stopNow)break}a.returnValue=h.returnValue;a.cancelBubble=h.cancelBubble;1==d.length?V(d[0]):1<d.length&&(g=Error("Multiple errors thrown : "+h.type+" :  : "+g.join("|")),g.errors=d,V(g))}this===document&&(!h.cancelBubble&&3===h.eventPhase)&&(I.call(this.defaultView,h),a.cancelBubble=m)}}}function W(){}function ja(a){var b=this.__orig__createElement__(a);if(Ca.test(a))return b;~X.indexOf("|"+
a+"|")||(ka.push(a),X+=a+"|",(H.__orig__createElement__||H.createElement)(a));return H.appendChild(b)}function la(a){var b=-1;if(a.createElement){for(;++b<ka.length;)a.createElement(ka[b]);a.createElement!==ja&&!("ielt9"in a.createElement)&&(a.__orig__createElement__=a.createElement,a.createElement=ja)}return a}function Da(a,b,d,g,h,c){var e=a.match(Va);a=d||[];var y=!!h,f=y&&(b={})||(!b?document:"length"in b&&!("nodeType"in b)&&!("childNodes"in b)?b[0]:b),j,t=0,k,z,w=Wa[e[1]||""]||0,J=2<w,v=e[2],
D=!!v,G=e[3],I=!!G,H=e[4],F=!!H,K="*"===v,E,M,r,N,B,x,u,C,Q,T,L,P,A,O,R,S;D&&(v=K?l:v.replace("|",":").toUpperCase());F&&(H=H.replace(Ea," "),Q=RegExp(H.replace(ma,na)));if(T=e[5]){T=ha.call(T,"][");for(E=-1;N=T[++E];)if(N=T[E]=N.match(Xa),N[2]=Ya[N[2]],(A=N[3])&&" i"==A.substr(-2))A.substr(0,A.length-2),N[4]=m}if(e=e[6])e=e.match(Za),x=$a[e[1]],2>x&&e[2]&&(B=/\D/.test(e[2])?"even"===e[2]?[n,2]:"odd"===e[2]?[n,2,"%",1]:e[2].match(ab):[n,0,"%",e[2]],O=x?"nodeIndexLast":"nodeIndex",R=x?"lastChild":
"firstChild",S=x?"previousSibling":"nextSibling");y&&(w=0);if(1==w)if(I){h=document.getElementsByName(G);L=[];for(E=-1;k=h[++E];)k.id==G&&L.push(k);h=I=D=n}else v||(v="*",K=!F),D=s;y=(!("length"in b)||1===b.length)&&!g&&!T&&!e&&!D&&!F&&!I;do{switch(w){case 0:k=h[0];break;case 1:if(G)if(h=[],L.length)for(E=-1;k=L[++E];){if(f===document||f.contains(k))h.push(k),L.splice(E--,1)}else return a;else"BODY"===v&&9===f.nodeType?(h=[f.body],F=!!H,y=y&&!F):h=f.getElementsByTagName(v);k=h[0];break;case 2:h=f.children;
k=h[0];break;case 3:j=b[t+1];case 4:if(!(k=oa(f)))continue}if(y)return h;f=0;if(k){do if((!K||1===k.nodeType)&&!(g&&(M=k.sourceIndex)in d)){if(r=!(D&&(z=k.nodeName.toUpperCase())!==v||I&&k.id!==G||F&&(!k.className||!Q.test(k.className)))){if(T)for(E=-1;r&&(N=T[++E]);)if(P=N[2],A=k,u=N[1],u=u.toLowerCase(),u=U[u]!==l?A[U[u]]:ea[u]!==l?A.__getAttribute__(u,2):bb[u]!==l?A.__getAttribute__(u)?u:n:(A=A.getAttributeNode(u))&&A.value,u===n){if(!(r=8==P))r=s}else switch(N[4]&&(u=u.toUpperCase()),C=N[3],P){case 1:r=
!!u||""===u;break;case 2:r=u===C;break;case 3:case 8:r=RegExp("(^| +)"+C+"($| +)").test(u);8==P&&(r=!r);break;case 4:case 5:case 6:A=u.indexOf(C);r=6===P?~A:5===P?A==u.length-C.length:!A;break;case 7:r=u===C||!!~u.indexOf(C+"-");break;case 9:r=!!~(" "+u.replace(cb," ")+" ").indexOf(" "+C+" ")}if(r&&e)switch(x){case 0:case 1:if(!B[1]&&!B[3])break;E=k[O]||0;P=B[3]?("%"===B[2]?-1:1)*B[3]:0;A=B[1];if(E)r=!A?!(E+P):!((E+P)%A);else{r=s;z=k.parentNode[R];do if(1==z.nodeType&&(z[O]=++E)&&k===z&&(!A?!(E+P):
!((E+P)%A)))r=m;while(!r&&(z=z[S]))}break;case 2:case 3:for(z=k;(z=z.previousSibling)&&1!==z.nodeType;);r=!z;if(!r||3==x)break;case 4:r=!oa(k);break;case 5:r="HTML"==(z||k.nodeName.toUpperCase());break;case 6:r=!k.firstChild;break;case 7:r=!!k.checked;break;case 8:r=k.lang==B||q.lang==B;break;case 9:case 10:r="disabled"in k&&"form"in k&&(10==x?k.disabled===m&&"hidden"!==k.type:k.disabled===s);break;case 11:r=k.parentNode.selectedIndex&&!!k.selected;break;case 12:r=!!~(k.textContent||k.data||k.innerText||
k.nodeValue||k.value||"").indexOf(e[2]);break;case 13:case 14:r=fa.call(k,e[2]);13==x&&(r=!r);break;case 15:case 16:z||(z=k.nodeName.toUpperCase()),r=("INPUT"==z||"TEXTAREA"==z||p.call(k,k.__getAttribute__||k.getAttribute,"contenteditable")!==n)&&!k.v,16==x&&(r=!r)}}if(r){if(c)return[k];g?a[M]=k:a.push(k)}z=l}while(k=J?4===w?l:k===j?l:oa(k):h[++f])}k=l}while(f=b[++t]);return a}function pa(a,b,d){d||(d=this);a=Fa.call(a.replace(db,"$1"));var g=[],h,c,e,f=m,j=s,p,t=a.replace(eb,"@=").replace(fb,"-child\\($1%$2\\)").match(gb);
for(h=d;a=t.shift();){c=t[0];e=!c||","===c.charAt(0);if(!j)if(f&&"nodeType"in d&&9===d.nodeType&&"BODY"===a.toUpperCase())h=[d.body],e&&(g=h);else if(f&&":root"===a)h=[q],e&&(g=h);else if(h&&(!(d=h)||0===h.length))h=n,j=m;else{if(f=!(!e||!p&&!(c||1<d.length)))p=m;h=Da(a,d,e?g:[],f,n,b&&e)}if(f=e)!g.length&&h&&(p=s,g=Ga(h)),h=n,d=this,j=s;if(!c||","===c)break}return p?Ga(g):g}function fa(a){if(!a)return s;if("*"===a||this===q&&":root"===a||this===document.body&&"BODY"===a.toUpperCase())return m;var b,
d,g=s,h;a=Fa.call(a);if(b=a.match(hb))switch(a.charAt(0)){case "#":return this.id===a.slice(1);default:return(g=!(d=b[2])||this.className&&RegExp(d.replace(Ea," ").replace(ma,na)).test(this.className))&&!(d=b[1])||this.tagName&&this.tagName.toUpperCase()===d.toUpperCase()}else{if(ib.test(a)){d=pa.call(this.ownerDocument,a);for(h in d)if(ga(d,h)&&(g=d[h]===this))return m;return s}d=Da(a,n,s,n,[this],m);return d[0]===this}}function Ha(){document.removeEventListener("DOMContentLoaded",Ha);qa&&(document.readyState=
"interactive");Q&&Q()}function Ia(){c.detachEvent("onload",Ia);qa&&(document.readyState="complete");Q&&Q()}var c=this,da=window.eval&&window.eval("/*@cc_on 1;@*/")&&+((/msie (\d+)/i.exec(navigator.userAgent)||[])[1]||0)||n;if(9>da){c.Element||((c.Element=window.ActiveXObject).prototype.ie=m);c.HTMLElement||(c.HTMLElement=c.Element);c.Node||(c.Node=c.Element);var ra;c.DocumentFragment||(c.DocumentFragment=c.Document||c.HTMLDocument||(ra=aa(),ra.prototype={},ra));c.Document||(c.Document=c.DocumentFragment);
c._={ielt9shims:[],orig_:c._,isObject:function(a){return"[object Object]"===sa.call(a)&&"function"===typeof a.constructor&&"[object Function]"===sa.call(a.constructor)}};var F=c._.ielt9shims,ta=document.createDocumentFragment,ua=document.createElement,Ja=document.createTextNode,q=document.documentElement,V=function(a){throw a instanceof Error?a:Error(a);},Ka=function(a){var b=Object.create(DOMException.prototype);b.code=DOMException[a];b.message=a+": DOM Exception "+b.code;throw b;},La=function(a,
b){for(var d in b)if(ga(b,d)&&a[d]!==b[d])try{a[d]=b[d]}catch(g){}},Fa=String.prototype.trim||function(){for(var a=this.replace(jb,""),b=a.length;kb.test(a.charAt(--b)););return a.slice(0,b+1)},ha=String.prototype.split,lb=String.prototype.substr,ia=Array.prototype.slice,mb=Array.prototype.splice,va=Function.prototype.apply,p=Function.prototype.call,K=Function.prototype.bind||function(a,b){var d=this,g=ia.call(arguments,1);return function(){return va.call(d,a,g.concat(ia.call(arguments)))}},M,sa=
Object.prototype.toString,ga=K.call(p,Object.prototype.hasOwnProperty),v=document.createElement("p"),f=c.Node.prototype,j=c.Element.prototype,nb=v.contains||f.contains,Ba=Date,ob=/^\<([\w\:\-]*)[\>\ ]/i,jb=/^\s+/,kb=/\s/,wa,e,B,xa,pb=/alpha\(opacity=([^\)]+)\)/,Ma=function(){var a=(this.filter||"").match(pb);return a?parseInt(a[1])/100+"":""},Na={getPropertyValue:function(a){return this.getAttribute(a)},removeProperty:function(a){this.removeAttribute(a)},setProperty:function(a,b,d){"important"!=d?
this.setAttribute(a,b):(d=RegExp(a+"\\s*:\\s*(\\S+)\\s*(?:[$;]|(?:(!important)\\s*[$;]))","i"),a=";"+a+":"+b+" !important;",this.cssText=d.test(this.cssText)?this.cssText.replace(d,a):this.cssText+a)},getPropertyPriority:function(a){return((this.cssText||"").match(RegExp(a+"\\s*:\\s*(\\S+)\\s*(?:[$;]|(?:(!important)\\s*[$;]))","i"))||[])[2]||""},item:aa()},U={"for":"htmlFor","class":"className",value:"defaultValue"},ea={action:n,cite:n,codebase:n,data:n,href:n,longdesc:n,lowsrc:n,src:n,usemap:n},
R={id:m,value:m,checked:m,disabled:m,ismap:m,multiple:m,readonly:m,selected:m},bb={checked:n,disabled:n,ismap:n,multiple:n,readonly:n,selected:n},J,S,L,O="uuid"+(Math.random()+"").substr(2),qb=1,rb=aa(),Ua=s,Oa,X="abbr|article|aside|audio|canvas|command|datalist|details|figure|figcaption|footer|header|hgroup|keygen|mark|meter|main|nav|output|progress|section|source|summary|time|video",ka=X.split("|"),Ca=/^<|^(?:a|b|button|code|div|fieldset|form|map|h1|h2|h3|h4|h5|h6|i|object|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul|optgroup)$/i,
ya,H,Y,Pa,ba,ca;e=document.createElement("iframe");e.style.display="none";(document.body||q).appendChild(e);e.contentWindow.document.write("<script>parent._.NodeList=Array;parent._.EMP=Object.prototype\x3c/script>");xa=c._.NodeList;delete c._.NodeList;M=c._.EMP;delete c._.EMP;delete M.constructor;delete M.hasOwnProperty;delete M.propertyIsEnumerable;delete M.isPrototypeOf;delete M.toLocaleString;delete M.toString;delete M.valueOf;M.__proto__=n;F.push(function(){var a=Object.create;Object.create=function(b){b===
n&&(arguments[0]=M);a.apply(this,arguments)}});"CSS1Compat"===document.compatMode?(ba=function(){return q.scrollLeft},ca=function(){return q.scrollTop}):(ba=function(){return document.body.scrollTop},ca=function(){return document.body.scrollLeft});document.head||(document.head=document.getElementsByTagName("head")[0]);"defaultView"in document||(document.defaultView=document.parentWindow);e=s;try{e=isNaN.apply(n,{})}catch(vb){}e||(Function.prototype.apply=function(a,b){var d;if(!b||!(d=+b.length))return p.call(this,
a);if("object"!==typeof b||0>d||"callee"in b&&"caller"in b||"[object Array]"==sa.call(b))return va.call(this,a,b);switch(d){case 1:return p.call(this,a,b[0]);case 2:return p.call(this,a,b[0],b[1]);case 3:return p.call(this,a,b[0],b[1],b[2]);case 4:return p.call(this,a,b[0],b[1],b[2],b[3]);case 5:return p.call(this,a,b[0],b[1],b[2],b[3],b[4]);case 6:return p.call(this,a,b[0],b[1],b[2],b[3],b[4],b[5]);case 7:return p.call(this,a,b[0],b[1],b[2],b[3],b[4],b[5],b[6])}return va.call(this,a,Array.from(b))});
"b"!=="ab".substr(-1)&&(String.prototype.substr=function(a,b){return lb.call(this,0>a?0>(a=this.length+a)?0:a:a,b)});if("te".split(/(s)*/)[1]!=l||3!="1_1".split(/(_)/).length)wa=/()??/.exec("")[1]===l,String.prototype.split=function(a,b){var d=this;if(!(a instanceof RegExp))return a===l&&0===b?[]:ha.call(d,a,b);var g=[],h=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.extended?"x":"")+(a.sticky?"y":""),c=0,e,f,j;a=RegExp(a.source,h+"g");d+="";wa||(e=RegExp("^"+a.source+"$(?!\\s)",h));b=b===l?4294967295:
b>>>0;if(!b)return[];for(;f=a.exec(d);){h=f.index+f[0].length;if(h>c&&(g.push(d.slice(c,f.index)),!wa&&1<f.length&&f[0].replace(e,function(){for(var a=1,b=arguments.length-2;a<b;a++)arguments[a]===l&&(f[a]=l)}),1<f.length&&f.index<d.length&&g.push.apply(g,f.slice(1)),j=f[0].length,c=h,g.length>=b))break;a.lastIndex===f.index&&a.lastIndex++}c===d.length?(j||!a.test(""))&&g.push(""):g.push(d.slice(c));return g.length>b?g.slice(0,b):g};c.DOMException||(e=(c.DOMException=aa()).prototype=Error(),e.INDEX_SIZE_ERR=
1,e.HIERARCHY_REQUEST_ERR=3,e.WRONG_DOCUMENT_ERR=4,e.INVALID_CHARACTER_ERR=5,e.NO_MODIFICATION_ALLOWED_ERR=7,e.NOT_FOUND_ERR=8,e.NOT_SUPPORTED_ERR=9,e.INVALID_STATE_ERR=11,e.SYNTAX_ERR=12,e.INVALID_MODIFICATION_ERR=13,e.NAMESPACE_ERR=14,e.INVALID_ACCESS_ERR=15);"pageXOffset"in c||F.push(function(){Object.defineProperty(c,"pageXOffset",{get:ba});Object.defineProperty(c,"pageYOffset",{get:ca})});B=c.Event=function(){V("")};S={initEvent:function(a,b,d){(a==l||b==l||d==l)&&V("WRONG_ARGUMENTS_ERR");this.type=
a;this.bubbles=b;this.cancelable=d;this.k=s;this.target=n;this.timeStamp||(this.timeStamp=+new Ba)},initCustomEvent:function(a,b,d,g){S.initEvent.call(this,a,b,d);this.detail=g},initUIEvent:function(a,b,d,g,h){S.initCustomEvent.call(this,a,b,d,h);this.view=g},initMouseEvent:function(a,b,d,g,h,c,e,f,j,q,p,k,z,t,v){S.initUIEvent.call(this,a,b,d,g,h);this.screenX=c;this.screenY=e;this.clientX=f;this.clientY=j;this.ctrlKey=q;this.altKey=p;this.shiftKey=k;this.metaKey=z;this.button=t;this.relatedTarget=
v}};L=B.prototype={constructor:B,preventDefault:function(){this.cancelable!==s&&(J.a.call(this).returnValue=this.returnValue=s,J.f.call(this),this.defaultPrevented=m)},stopPropagation:function(){J.a.call(this).cancelBubble=this.cancelBubble=m;J.f.call(this)}};L.stopImmediatePropagation=function(){this.__stopNow=m;this.stopPropagation()};L.defaultPrevented=s;for(e in S)ga(S,e)&&(L[e]=function(){S[arguments.callee.name].apply(this,arguments);La(this.ietl9_event,this)},L[e].name=e);J=function(a){this.ietl9_event=
a;a.returnValue=m;La(this,a)};J.a=function(){var a=this.ietl9_event;a===l?V("WRONG_THIS_ERR"):a===n&&(a=J.a.j);return a};J.a.j={};J.f=function(){this.ietl9_event&&(this.ietl9_event=n)};B=aa();B.prototype=L;B=new B;B.constructor=J;J.prototype=B;v.addEventListener||((c.Text&&c.Text.prototype||f).addEventListener=f.addEventListener=q.addEventListener=c.addEventListener=document.addEventListener=function(a,b,d){if("function"==typeof b||"object"===typeof b&&b.handleEvent){var g=this,h=g._,e=s;g==c&&(!("_"in
document)||!("_e_8vj"in document._)||!(a in document._._e_8vj))&&document.addEventListener(a,rb,d);h||(h=g._={});switch(a){case "DOMContentLoaded":if("complete"==document.readyState)return;g===c&&(g=document);e=m;if(!Oa){Oa=m;var f=function(){try{document.documentElement.doScroll("left")}catch(b){setTimeout(f,50);return}I.call(g,{type:a,isTrusted:m,__custom_event:l})};if("createEventObject"in document&&"doScroll"in document.documentElement)try{c.frameElement||f()}catch(j){}}break;case "load":"tagName"in
g&&-1!="SCRIPT|IFRAME".indexOf(g.tagName.toUpperCase())&&(e=m,g.onreadystatechange=function(){"loaded"===g.readyState&&(g.onreadystatechange=n,g.attachEvent("onreadystatechange",K.call(I,g,{type:a})))},a="readystatechange");break;case "DOMMouseScroll":a="mousewheel"}g.setInterval&&(g!=c&&!g.frameElement)&&(g=c);b[O]||(b[O]=++qb);if(!(d=h._h_9e2))d=h._h_9e2=K.call(I,g);h._e_8vj||(h._e_8vj={});a in h._e_8vj?h=h._e_8vj[a]:(h=h._e_8vj[a]=[],e||g.attachEvent("on"+a,d));"_"+b[O]in h||(h.push(b),h["_"+b[O]]=
n)}},f.addEventListener.__shim__=m,(c.Text&&c.Text.prototype||f).removeEventListener=f.removeEventListener=q.removeEventListener=c.removeEventListener=document.removeEventListener=function(a,b){var d=this._,g,h,c,e,f;if(!("function"!==typeof b&&!("object"===typeof b&&b.handleEvent)||!b[O]||!d))if(g=d._h_9e2){h=d._e_8vj&&d._e_8vj[a];for(e=0;f=h[e++];)if(f===b){mb.call(h,e-1,1);delete h["_"+b[O]];break}if(!h.length){this.detachEvent("on"+a,g);delete d._e_8vj[a];for(c in d._e_8vj)if(ga(d._e_8vj,c))return;
delete d._e_8vj;delete d._h_9e2}}},f.removeEventListener.__shim__=m,document.attachEvent("onmousedown",function(){G.b=event.button}),document.attachEvent("onclick",function(){G.b=l}));v.dispatchEvent||((c.Text&&c.Text.prototype||f).dispatchEvent=f.dispatchEvent=q.dispatchEvent=c.dispatchEvent=document.dispatchEvent=function(a){if(!a.type)return m;a.returnValue||(a.returnValue=m);a.cancelBubble&&(a.cancelBubble=s);delete a.__stopNow;try{return this.fireEvent("on"+a.type,a)}catch(b){if(-2147024809===
b.number||this===c||-2146827850===b.number&&!(a.bubbles=s)){a.__custom_event=m;for(var d=a.target=this,g="on"+a.type;!a.cancelBubble&&d;)(g in d&&"function"==typeof d[g]&&(a.__dom0__=d[g])||"_"in d&&"_e_8vj"in d._)&&I.call(d,a),d=a.bubbles?d===document?document.defaultView:d.parentNode:n,"__dom0__"in a&&(a.__dom0__=l,delete a.__dom0__);return!a.cancelBubble}V(b)}},f.dispatchEvent.__shim__=m);document.createEvent||(document.createEvent=function(){return new J(document.createEventObject())});F.push(function(){function a(a){var b,
d=this.nodeName.toUpperCase(),g,c,e,f,k,j,q,p;if(!("INPUT"!=d&&"TEXTAREA"!=d)){"unknown"!=typeof document.activeElement&&(j=document.activeElement);b=document.selection;this._&&(q=this._.__stop_events__,this._.__stop_events__=m);j&&j._&&(p=j._.__stop_events__,j._.__stop_events__=m);try{this.focus(),g=b.createRange(),c=g.duplicate(),"TEXTAREA"==d?(e=this.value,g=c,a?(g.moveEnd("character",e.length),k=""==g.text?e.length:e.lastIndexOf(g.text)):(g.moveStart("character",-e.length),k=g.text.length)):(c.moveToElementText(this),
c.setEndPoint("EndToEnd",g),f=c.text.length-g.text.length,k=a?f:f+g.text.length),j&&j.focus&&j.focus()}catch(t){k=l}this._&&!q&&delete this._.__stop_events__;j&&(j._&&!p)&&delete j._.__stop_events__;return k}}function b(a,b){if(a!=l){b==l&&(b=a);var d=this.nodeName.toUpperCase();"INPUT"!=d&&"TEXTAREA"!=d||(d=this.createTextRange(),d.collapse(m),d.moveStart("character",a),d.moveEnd("character",b-a),d.select())}}var d=c.HTMLTextAreaElement&&c.HTMLTextAreaElement.prototype,g={setSelectionRange:{value:b},
selectionStart:{get:function(){return a.call(this,m)},set:function(d){b.call(this,d,a.call(this));return d}},selectionEnd:{get:function(){return a.call(this)},set:function(d){b.call(this,a.call(this,m),d);return d}}};Object.defineProperties(c.HTMLInputElement&&c.HTMLInputElement.prototype||j,g);d&&Object.defineProperties(d,g)});W.prototype=[];e=new W;e.push(1);e.length?(c.NodeList=W,xa=n):W=c.NodeList=xa;W.prototype.item=function(a){return this[a]};document.doctype===n&&7<da&&F.push(function(){var a=
document.childNodes[0];Object.defineProperty(a,"nodeType",{get:function(){return 10}});Object.defineProperty(document,"doctype",{configurable:m,enumerable:s,get:function(){return a}})});f.contains||(f.contains=nb);p.call(Ja,document,"").contains||(c.Text&&c.Text.prototype?F.push(K.call(D,n,Text.prototype,f)):document.createTextNode=function(a){a=p.call(Ja,this,a);a.contains=f.contains;return a});!p.call(ta,document).contains&&(c.HTMLDocument&&c.HTMLDocument.prototype)&&F.push(K.call(D,n,c.HTMLDocument.prototype,
f));"children"in v||F.push(function(){Object.defineProperty(j,"children",{get:function(){for(var a=[],b=this.firstChild;b;)1==b.nodeType&&a.push(b),b=b.nextSibling;return a}})});F.push(function(){function a(a,d){var g;try{a:{var c=a;"element"in c&&("defaults"in c&&"document"in c)&&(c=c.element);var e=c.getBoundingClientRect(),f,j,p;if((p=c.ownerDocument)!==document){if(f=p&&p.body,j=p&&p.documentElement,!f||!j){g=d?e.left:e.top;break a}}else f=document.body,j=q;g=d?e.left+ba()-(j.clientLeft||f.clientLeft||
0):e.top+ca()-(j.clientTop||f.clientTop||0)}}catch(t){g=a;c=0;for(e=d?"offsetLeft":"offsetTop";g;)c+=parseInt(g[e],10),g=g.offsetParent;g=c}return g}Object.defineProperties(j,{offsetLeft:{get:function(){return a(this,m)}},offsetTop:{get:function(){return a(this)}}})});v.childElementCount==l&&F.push(function(){Object.defineProperties(j,{firstElementChild:{get:function(){var a;for(a=this.firstChild;a&&1!=a.nodeType;)a=a.nextSibling;return a}},lastElementChild:{get:function(){var a;for(a=this.lastChild;a&&
1!=a.nodeType;)a=a.previousSibling;return a}},nextElementSibling:{get:function(){for(var a=this;(a=a.nextSibling)&&1!=a.nodeType;);return a}},previousElementSibling:{get:function(){for(var a=this;(a=a.previousSibling)&&1!=a.nodeType;);return a}}})});document.ELEMENT_NODE||(e={ELEMENT_NODE:1,TEXT_NODE:3,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11},D(document,e),D(f,e),D(c.Node,e));"textContent"in v||F.push(function(){Object.defineProperty(f,
"textContent",{get:function(){if("innerText"in this)return this.innerText;if("data"in this&&this.appendData)return this.data},set:function(a){"innerText"in this?this.innerText=a:"data"in this&&this.replaceData&&this.replaceData(0,this.length,a);return a}})});"isEqualNode"in v||(document.isEqualNode=q.isEqualNode=f.isEqualNode=function(a){var b,d;if(a===n||a.nodeType!==this.nodeType||10===a.nodeType&&(this.name!==a.name||this.publicId!==a.publicId||this.systemId!==a.systemId))return s;if(1===a.nodeType){if(this.namespaceURI!=
a.namespaceURI||this.prefix!=a.prefix||this.localName!=a.localName)return s;b=0;for(d=this.attributes.length;b<d;b++){var c=this.attributes[length],e=a.getAttributeNS(c.namespaceURI,c.localName);if(e===n||e.value!==c.value)return s}}if(7===a.nodeType&&(this.target!==a.target||this.data!==a.data)||(3===a.nodeType||8===a.nodeType)&&this.data!==a.data||a.childNodes.length!==this.childNodes.length)return s;b=0;for(d=a.childNodes.length;b<d;b++)if(a.childNodes[b].isEqualNode(this.childNodes[b])===s)return s;
return m});document.importNode||(document.importNode=function(a,b){switch(a.nodeType){case 1:var d=document.createElement(a.nodeName),c=a.attributes,e,f,j;if(c&&0<c.length){f=0;for(j=c.length;f<j;)c=a.attributes[f++],d.setAttribute(c.nodeName,a.getAttribute(c.nodeName))}if(b&&(e=a.childNodes)&&0<e.length){f=0;for(j=e.length;f<j;)d.appendChild(document.importNode(e[f++],b))}return d;case 3:case 4:case 8:return document.createTextNode(a.nodeValue)}Ka("NOT_SUPPORTED_ERR");return n},document.importNode.shim=
m);e="compareDocumentPosition";if(!(e in document)){var t,w=t||"DOCUMENT_POSITION_";q[e]=document[e]=f[e]=function(a){return this.contains?(this!=a&&this.contains(a)&&16)+(this!=a&&a.contains(this)&&8)+(0<=this.sourceIndex&&0<=a.sourceIndex?(this.sourceIndex<a.sourceIndex&&4)+(this.sourceIndex>a.sourceIndex&&2):1)+0:0};t="DISCONNECTED";q[w+t]=document[w+t]=f[w+t]=1;t="PRECEDING";q[w+t]=document[w+t]=f[w+t]=2;t="FOLLOWING";q[w+t]=document[w+t]=f[w+t]=4;t="CONTAINS";q[w+t]=document[w+t]=f[w+t]=8;t=
"CONTAINED_BY";q[w+t]=document[w+t]=f[w+t]=16}c.getComputedStyle||(c.getComputedStyle=function(a){var b=a.currentStyle||a.runtimeStyle;"getPropertyValue"in b||(a.runtimeStyle.getPropertyValue=K.call(Na.getPropertyValue,a),a.runtimeStyle.setProperty=a.runtimeStyle.removeProperty=c.getComputedStyle.i,a.runtimeStyle.getPropertyPriority=c.getComputedStyle.h,a.runtimeStyle.item=Na.item);var d,e,f;(e=c.CSSStyleDeclaration)&&(e=e.prototype)&&(!("float"in b)||!("opacity"in b))?("float"in b||((d=Object.getOwnPropertyDescriptor(e,
"float"))&&delete e["float"],f=K.call(c.getComputedStyle.d,a),Object.defineProperty(a.runtimeStyle,"float",{value:{valueOf:f,toString:f},configurable:m,writable:m}),d&&Object.defineProperty(e,"float",d)),"opacity"in b||((d=Object.getOwnPropertyDescriptor(e,"opacity"))&&delete e.opacity,f=K.call(c.getComputedStyle.e,a),Object.defineProperty(a.runtimeStyle,"opacity",{value:{valueOf:f,toString:f},configurable:m,writable:m}),d&&Object.defineProperty(e,"opacity",d))):("float"in b||(f=K.call(c.getComputedStyle.d,
a),a.runtimeStyle["float"]={valueOf:f,toString:f}),"opacity"in b||(f=K.call(c.getComputedStyle.e,a),a.runtimeStyle.opacity={valueOf:f,toString:f}));return a.currentStyle},c.getComputedStyle.e=function(){return this.runtimeStyle.msOpacity||this.style.msOpacity||Ma.call(this.style)||Ma.call(this.runtimeStyle)},c.getComputedStyle.d=function(){return this.runtimeStyle.styleFloat||this.style.styleFloat},c.getComputedStyle.i=function(){Ka("NO_MODIFICATION_ALLOWED_ERR")},c.getComputedStyle.h=function(){return""});
document.createDocumentFragment=function(){var a=p.call(ta,this);c.DocumentFragment===c.Document&&D(a,c.DocumentFragment.prototype);return la(a)};ya=(v.innerHTML="<x-x></x-x>",1===v.childNodes.length&&1===v.childNodes[0].nodeType);X="|"+X+"|";ja.ielt9=m;H=la(p.call(ta,document));ya||(la(document),document.head.insertAdjacentHTML("beforeend","<br><style>article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}</style>"));0===p.call(ua,document,
"x-x").cloneNode().outerHTML.indexOf("<:x-x>")&&(Y=H.appendChild("createElement"in H&&H.createElement("div")||H.ownerDocument.createElement("div")),Pa=8===da?v.cloneNode:8>da?f.cloneNode:l,f.cloneNode=function(a){var b,d;Ca.test(this.nodeName)?b=p.call(this.__nativeCloneNode__||Pa,this,a):(Y.innerHTML="",d=a?this.outerHTML:this.outerHTML.replace(/<(\w+)([^>]*)>[\W\w]*$/,"<$1$2></$1>"),Y.innerHTML=d.replace(/^\<\:/,"<").replace(/\<\/\:([\w\-]*\>)$/,"<$1"),b=Y.firstChild,!b&&!a&&((d=d.match(ob))&&(d=
d[1]),d&&(H.createElement(d),Y.innerHTML=d,b=Y.firstChild)));return H.appendChild(b)});v=e=B=nodeList_methods_fromArray=ya=n;if(f.ie||!(7<da)){var sb=Array.prototype.unshift,qa=!document.readyState,Z=["/a.ielt8.htc"],$="{behavior:",Qa=[],Ra,Sa,Ta,Q,tb=c.scrollTo,ub=c.scrollBy;for(e=Z.length;0<=--e;)$+=' url("'+Z[e]+'")';$+="}";qa&&(document.readyState="uninitialized");f.ielt8=m;c.__ielt8__wontfix=Qa;var ma=/\s*(\S+)\s*/g,na="(?=(^|.*\\s)$1(\\s|$))",hb=/^([\w\-\|]+)?((?:\.(?:[\w-]+))+)?$|^#([\w-]+$)/,
db=/\s*([,>+~ ])\s*/g,eb=/\~\=/g,gb=/(^[>+~ ]?|,|\>|\+|~| ).*?(?=[,>+~ ]|$)/g,Ea=/\./g,cb=/\s/g,Va=/^([,>+~ ])?([\|\*\w-]*)\#?([\w-]*)((?:\.?[\w-])*)(\[.+\])?(?:\:(.+))?$/,Xa=/^\[?['"]?(.*?)['"]?(?:([\*~&\^\$\@!]?=)['"]?(.*?)['"]?)?\]?$/,Za=/^([^(]+)(?:\((.+)\))?$/,fb=/\-child\((\dn)\+(\d)\)/g,ab=/(?:([-]?\d*)n)?(?:(%|-)(\d*))?/,ib=/([,>+~ ])/,Wa={"":1," ":1,",":1,">":2,"~":3,"+":4},Ya={"":1,"=":2,"&=":3,"^=":4,"$=":5,"*=":6,"|=":7,"!=":8,"@=":9},$a={"nth-child":0,"nth-last-child":1,"only-child":2,
"first-child":3,"last-child":4,root:5,empty:6,checked:7,lang:8,enabled:9,disabled:10,selected:11,contains:12,not:13,matches:14,"read-only":15,"read-write":16},Ga=function(a){for(var b=a.length>>>0,d=new W,c=0;c<b;c++)c in a&&d.push(a[c]);return d},oa=function(a){for(;(a=a.nextSibling)&&1!=a.nodeType;);return a};e="matchesSelector";q[e]||(j[e]=q[e]=fa);e="matches";q[e]||(j[e]=q[e]=fa);e="querySelectorAll";document[e]||(j[e]=q[e]=document[e]=function(a,b){return pa.call(this,a,s,b)});e="querySelector";
document[e]||(j[e]=q[e]=document[e]=function(a,b){return pa.call(this,a,m,b)[0]||n});e="getElementsByClassName";document[e]||(j[e]=q[e]=document[e]=function(a){a=RegExp(a.replace(ma,na));for(var b=this.all,d,c=-1,e=[];d=b[++c];)d.className&&a.test(d.className)&&e.push(d);return e});R.g={};R.c=function(a,b){if(b in this)return this[b];var d=a.nodeName;if(!(a=R.g[d]))a=R.g[d]=ua(d);return this[b]=a.getAttribute(b)!==n};j.setAttribute=function(a,b,d){if(d==l){var c=a.toLowerCase();d=1;U[c]!==l?a=U[c]:
ea[c]!==l?d=2:0!==c.indexOf("data-")&&!R.c(this,c)&&(a=a.toUpperCase());b+=""}return p.call(this.__setAttribute__,this,a,b,d)};j.getAttribute=function(a,b){var d;d=a.toLowerCase();var c,e;if(e=b==l)b=1;if(U[d]!==l)d=U[d];else{if(ea[d]!==l)return p.call(this.__getAttribute__,this,a,2);d=0!==d.indexOf("data-")&&!R.c(this,d)?a.toUpperCase():a}c=p.call(this.__getAttribute__,this,d,b);c!==n?e&&(c+=""):!(d in this)&&"string"===typeof this[a]?(c=this[d]=this[a],this.__removeAttribute__(a),c+=""):c=n;return c};
j.removeAttribute=function(a,b){var d,c;b==l&&(b=1,c=a.toLowerCase(),U[c]!==l?d=U[c]:ea[c]!==l?b=2:0!==c.indexOf("data-")&&!R.c(this,c)&&(d=a.toUpperCase()));return p.call(this.__removeAttribute__,this,d||a,b)};f.hasAttribute||(f.hasAttribute=function(a){return this.getAttribute(a)!==n});var x=function(a){return function(){return a}};f.l=x(1);f.p=x(2);f.q=x(3);f.r=x(4);f.s=x(7);f.t=x(8);f.u=x(9);f.m=x(10);f.n=x(11);f.o=x(16);f.__ielt8__element_init__=function(){var a=this;a.element&&(a=a.element);
"prepend"in a||(a.after=j.after,a.before=j.before,a.append=j.append,a.prepend=j.prepend,a.replace=j.replace,a.remove=j.remove);"isEqualNode"in a||(a.isEqualNode=f.isEqualNode);"compareDocumentPosition"in a||(a.compareDocumentPosition=f.compareDocumentPosition);"getElementsByClassName"in a||(a.getElementsByClassName=j.getElementsByClassName);"addEventListener"in a||(a.addEventListener=c.addEventListener,a.removeEventListener=c.removeEventListener,a.dispatchEvent=c.dispatchEvent);"querySelector"in a||
(a.querySelectorAll=j.querySelectorAll,a.querySelector=j.querySelector);"matchesSelector"in a||(a.matchesSelector=a.matches=fa);"hasAttribute"in a||(a.hasAttribute=j.hasAttribute);"setSelectionRange"in a||(a.setSelectionRange=j.setSelectionRange);try{this.setAttribute!=j.setAttribute&&(this.__setAttribute__=this.setAttribute,this.__getAttribute__=this.getAttribute,this.__removeAttribute__=this.removeAttribute,this.setAttribute=j.setAttribute,this.getAttribute=j.getAttribute,this.removeAttribute=j.removeAttribute),
a.cloneNode!==f.cloneNode&&(a.__nativeCloneNode__=a.cloneNode,a.cloneNode=f.cloneNode),f.contains&&(a.contains=f.contains)}catch(b){Qa.push(a)}};Ta=f.__ielt8_Node_behavior_apply=function(a){for(e=Z.length;0<=--e;)try{a.addBehavior(Z[e])}catch(b){}};Sa=f.cloneNode;f.cloneNode=function(a){a=p.call(Sa||this.__nativeCloneNode__,this,a);Ta(a);return a};1!=[].unshift(0)&&(Array.prototype.unshift=function(){sb.apply(this,arguments);return this.length});Ra=document.createElement;document.createElement=function(a){a=
p.call(Ra,document,a);for(e=Z.length;0<=--e;)try{a.addBehavior(Z[e])}catch(b){}return a};c.XMLHttpRequest||(c.XMLHttpRequest=function(){var a;try{a=new ActiveXObject("Msxml2.XMLHTTP")}catch(b){a=new ActiveXObject("Microsoft.XMLHTTP")}var c=a.send;a.send=function(){this.setRequestHeader("If-Modified-Since","Sat, 1 Jan 2000 00:00:00 GMT");c.apply(this,arguments)}});!("pageXOffset"in c)&&c.attachEvent&&(c.pageXOffset=c.pageYOffset=0,Q="CSS1Compat"===document.compatMode?function(){c.scrollX=c.pageXOffset=
document.body.parentNode.scrollLeft;c.scrollY=c.pageYOffset=document.body.parentNode.scrollTop}:function(){c.scrollX=c.pageXOffset=document.body.scrollLeft;c.scrollY=c.pageYOffset=document.body.scrollTop},c.attachEvent("onscroll",Q),c.scroll=c.scrollTo=function(a,b){tb(a,b);Q()},c.scrollBy=function(a,b){ub(a,b);Q()});document.addEventListener("DOMContentLoaded",Ha);c.attachEvent("onload",Ia);var za=$,C=document.getElementById("ielt8_style_prev_for_behaviour"),Aa="";C&&(Aa=C.getAttribute("data-url")||
"",C.id="");Aa&&za.replace(" url("," url("+Aa+") url(");C=ua("style");C.id="ielt8_style_prev_for_behaviour";C.type="text/css";C.setAttribute("data-url",za.replace("{behavior:","").replace(")}",")"));C.styleSheet.cssText="*"+za;document.head.appendChild(C);$=e=n}}}.call(window,function(D,G){for(var I in G)Object.prototype.hasOwnProperty.call(G,I)&&!Object.prototype.hasOwnProperty.call(D,I)&&(D[I]=G[I]);return D});
