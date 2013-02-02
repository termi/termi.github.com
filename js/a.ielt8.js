/* ES6/DOM4 polyfill for IE < 8 | @version 0.8.2 | MIT License | github.com/termi */
void function(q,j){var l=void 0,m=!0,p=null,s=!1;function $(){return function(){}};function u(a){if(!("__isFixed"in a||a.isTrusted===s)){var b="button"in a&&a.button;a.__isFixed=m;if("click"===a.type||"dblclick"===a.type)a.detail===l&&(a.detail="click"===a.type?1:2),!a.button&&u.b!==l&&(b=u.b);q(a,L);a.defaultPrevented||(a.defaultPrevented=s);a.target||(a.target=a.srcElement||document);a.relatedTarget===l&&a.fromElement&&(a.relatedTarget=a.fromElement==a.target?a.toElement:a.fromElement);"clientX"in a&&a.pageX==p&&(a.pageX=a.clientX+aa()-(t.clientLeft||0),a.pageY=
a.clientY+ba()-(t.clientTop||0));!a.which&&b&&(a.which=b&1?1:b&2?3:b&4?2:0);"timeStamp"in a||(a.timeStamp=+new za);"eventPhase"in a||(a.eventPhase=a.target==this?2:3);"currentTarget"in a||(a.currentTarget=this);a.keyCode||(a.keyCode=a.charCode||a.which);!a.attrName&&a.propertyName&&(a.attrName=ia.call(a.propertyName,".")[0]);return a}}function ca(a){if(u!==l){var b=this._,d,f,h,c,da,z,g,j;if(!b.__stop_events__){d=[];f=[];c="_e_8vj"+(Ta?"-":"");if(!b||!b[c])if("__dom0__"in a)b||(b={}),b[c]||(b[c]=
{});else return;a||(a=e.event);if("__custom_event"in a)h=a;else if(!(h=a.__customEvent__))a.bubbles==l&&(a.bubbles=m),a.cancelable==l&&(a.cancelable=m),h=a.__customEvent__=new D(a),h.initEvent(a.type,a.bubbles,a.cancelable),u.call(this,h),h.k=m,h.__custom_event=p;h.ietl9_event=a;a.currentTarget=this;"__dom0__"in a&&(z=a.__dom0__);if((b=b[c][h.type])||z)da=b?ja.call(b):[],z&&da.unshift(z);if(da&&da.length){for(;z=da.shift();)if(z&&(!(j=z[O])||"_"+j in b)){"object"===typeof z&&(g=z,z=z.handleEvent);
try{if(z&&(h.result=I.call(z,g||this,h))===s)h.preventDefault(),h.stopPropagation()}catch(n){d.push(n),f.push(n.message)}if(h.__stopNow)break}a.returnValue=h.returnValue;a.cancelBubble=h.cancelBubble;1==d.length?V(d[0]):1<d.length&&(f=Error("Multiple errors thrown : "+h.type+" :  : "+f.join("|")),f.errors=d,V(f))}this===document&&(!h.cancelBubble&&3===h.eventPhase)&&(ca.call(this.defaultView,h),a.cancelBubble=m)}}}function ka(a){var b=this.__orig__createElement__(a);if(Aa.test(a))return b;~W.indexOf("|"+
a+"|")||(la.push(a),W+=a+"|",(J.__orig__createElement__||J.createElement)(a));return J.appendChild(b)}function ma(a){var b=-1;if(a.createElement){for(;++b<la.length;)a.createElement(la[b]);a.createElement!==ka&&!("ielt9"in a.createElement)&&(a.__orig__createElement__=a.createElement,a.createElement=ka)}return a}function Ba(a,b,d,f,h,e){var c=a.match(Ua);a=d||[];var z=!!h,g=z&&(b={})||(!b?document:"length"in b&&!("nodeType"in b)&&!("childNodes"in b)?b[0]:b),j,n=0,k,A,q=Va[c[1]||""]||0,w=2<q,u=c[2],
x=!!u,D=c[3],H=!!D,J=c[4],G=!!J,K="*"===u,F,M,r,N,C,y,v,E,Q,T,L,P,B,O,R,S;x&&(u=K?l:u.replace("|",":").toUpperCase());G&&(J=J.replace(Ca," "),Q=RegExp(J.replace(na,oa)));if(T=c[5]){T=ia.call(T,"][");for(F=-1;N=T[++F];)if(N=T[F]=N.match(Wa),N[2]=Xa[N[2]],(B=N[3])&&" i"==B.substr(-2))B.substr(0,B.length-2),N[4]=m}if(c=c[6])c=c.match(Ya),y=Za[c[1]],2>y&&c[2]&&(C=/\D/.test(c[2])?"even"===c[2]?[p,2]:"odd"===c[2]?[p,2,"%",1]:c[2].match($a):[p,0,"%",c[2]],O=y?"nodeIndexLast":"nodeIndex",R=y?"lastChild":
"firstChild",S=y?"previousSibling":"nextSibling");z&&(q=0);if(1==q)if(H){h=document.getElementsByName(D);L=[];for(F=-1;k=h[++F];)k.id==D&&L.push(k);h=H=x=p}else u||(u="*",K=!G),x=s;z=(!("length"in b)||1===b.length)&&!f&&!T&&!c&&!x&&!G&&!H;do{switch(q){case 0:k=h[0];break;case 1:if(D)if(h=[],L.length)for(F=-1;k=L[++F];){if(g===document||g.contains(k))h.push(k),L.splice(F--,1)}else return a;else"BODY"===u&&9===g.nodeType?(h=[g.body],G=!!J,z=z&&!G):h=g.getElementsByTagName(u);k=h[0];break;case 2:h=g.children;
k=h[0];break;case 3:j=b[n+1];case 4:if(!(k=pa(g)))continue}if(z)return h;g=0;if(k){do if((!K||1===k.nodeType)&&!(f&&(M=k.sourceIndex)in d)){if(r=!(x&&(A=k.nodeName.toUpperCase())!==u||H&&k.id!==D||G&&(!k.className||!Q.test(k.className)))){if(T)for(F=-1;r&&(N=T[++F]);)if(P=N[2],B=k,v=N[1],v=v.toLowerCase(),v=U[v]!==l?B[U[v]]:fa[v]!==l?B.__getAttribute__(v,2):ab[v]!==l?B.__getAttribute__(v)?v:p:(B=B.getAttributeNode(v))&&B.value,v===p){if(!(r=8==P))r=s}else switch(N[4]&&(v=v.toUpperCase()),E=N[3],P){case 1:r=
!!v||""===v;break;case 2:r=v===E;break;case 3:case 8:r=RegExp("(^| +)"+E+"($| +)").test(v);8==P&&(r=!r);break;case 4:case 5:case 6:B=v.indexOf(E);r=6===P?~B:5===P?B==v.length-E.length:!B;break;case 7:r=v===E||!!~v.indexOf(E+"-");break;case 9:r=!!~(" "+v.replace(bb," ")+" ").indexOf(" "+E+" ")}if(r&&c)switch(y){case 0:case 1:if(!C[1]&&!C[3])break;F=k[O]||0;P=C[3]?("%"===C[2]?-1:1)*C[3]:0;B=C[1];if(F)r=!B?!(F+P):!((F+P)%B);else{r=s;A=k.parentNode[R];do if(1==A.nodeType&&(A[O]=++F)&&k===A&&(!B?!(F+P):
!((F+P)%B)))r=m;while(!r&&(A=A[S]))}break;case 2:case 3:for(A=k;(A=A.previousSibling)&&1!==A.nodeType;);r=!A;if(!r||3==y)break;case 4:r=!pa(k);break;case 5:r="HTML"==(A||k.nodeName.toUpperCase());break;case 6:r=!k.firstChild;break;case 7:r=!!k.checked;break;case 8:r=k.lang==C||t.lang==C;break;case 9:case 10:r="disabled"in k&&"form"in k&&(10==y?k.disabled===m&&"hidden"!==k.type:k.disabled===s);break;case 11:r=k.parentNode.selectedIndex&&!!k.selected;break;case 12:r=!!~(k.textContent||k.data||k.innerText||
k.nodeValue||k.value||"").indexOf(c[2]);break;case 13:case 14:r=ga.call(k,c[2]);13==y&&(r=!r);break;case 15:case 16:A||(A=k.nodeName.toUpperCase()),r=("INPUT"==A||"TEXTAREA"==A||I.call(k,k.__getAttribute__||k.getAttribute,"contenteditable")!==p)&&!k.v,16==y&&(r=!r)}}if(r){if(e)return[k];f?a[M]=k:a.push(k)}A=l}while(k=w?4===q?l:k===j?l:pa(k):h[++g])}k=l}while(g=b[++n]);return a}function qa(a,b,d){d||(d=this);a=Da.call(a.replace(cb,"$1"));var f=[],h,e,c,g=m,j=s,n,q=a.replace(db,"@=").replace(eb,"-child\\($1%$2\\)").match(fb);
for(h=d;a=q.shift();){e=q[0];c=!e||","===e.charAt(0);if(!j)if(g&&"nodeType"in d&&9===d.nodeType&&"BODY"===a.toUpperCase())h=[d.body],c&&(f=h);else if(g&&":root"===a)h=[t],c&&(f=h);else if(h&&(!(d=h)||0===h.length))h=p,j=m;else{if(g=!(!c||!n&&!(e||1<d.length)))n=m;h=Ba(a,d,c?f:[],g,p,b&&c)}if(g=c)!f.length&&h&&(n=s,f=Ea(h)),h=p,d=this,j=s;if(!e||","===e)break}return n?Ea(f):f}function ga(a){if(!a)return s;if("*"===a||this===t&&":root"===a||this===document.body&&"BODY"===a.toUpperCase())return m;var b,
d,f=s,h;a=Da.call(a);if(b=a.match(gb))switch(a.charAt(0)){case "#":return this.id===a.slice(1);default:return(f=!(d=b[2])||this.className&&RegExp(d.replace(Ca," ").replace(na,oa)).test(this.className))&&!(d=b[1])||this.tagName&&this.tagName.toUpperCase()===d.toUpperCase()}else{if(hb.test(a)){d=qa.call(this.ownerDocument,a);for(h in d)if(ha(d,h)&&(f=d[h]===this))return m;return s}d=Ba(a,p,s,p,[this],m);return d[0]===this}}function Fa(){document.removeEventListener("DOMContentLoaded",Fa);ra&&(document.readyState=
"interactive");Q&&Q()}function Ga(){e.detachEvent("onload",Ga);ra&&(document.readyState="complete");Q&&Q()}var e=this,ea=e.eval&&e.eval("/*@cc_on 1;@*/")&&+((/msie (\d+)/i.exec(navigator.userAgent)||[])[1]||0)||p;if(9>ea){e.Element||((e.Element=e.ActiveXObject).prototype.ie=m);e.HTMLElement||(e.HTMLElement=e.Element);e.Node||(e.Node=e.Element);var sa;e.DocumentFragment||(e.DocumentFragment=e.Document||e.HTMLDocument||(sa=$(),sa.prototype={},sa));e.Document||(e.Document=e.DocumentFragment);e._={ielt9shims:[],
orig_:e._,isObject:function(a){return"[object Object]"===Ha.call(a)&&"function"===typeof a.constructor&&"[object Function]"===Ha.call(a.constructor)}};var G=e._.ielt9shims,ta=document.createDocumentFragment,ua=document.createElement,Ia=document.createTextNode,t=document.documentElement,V=function(a){throw a instanceof Error?a:Error(a);},Ja=function(a){var b=Object.create(DOMException.prototype);b.code=DOMException[a];b.message=a+": DOM Exception "+b.code;throw b;},Ka=function(a,b){for(var d in b)if(ha(b,
d)&&a[d]!==b[d])try{a[d]=b[d]}catch(f){}},Da=String.prototype.trim||function(){for(var a=this.replace(ib,""),b=a.length;jb.test(a.charAt(--b)););return a.slice(0,b+1)},ia=String.prototype.split,kb=String.prototype.substr,ja=Array.prototype.slice,lb=Array.prototype.splice,mb=Function.prototype.apply,I=Function.prototype.call,K=Function.prototype.bind||function(a,b){var d=this,f=ja.call(arguments,1);return function(){return mb.call(d,a,f.concat(ja.call(arguments)))}},M,Ha=Object.prototype.toString,
ha=K.call(I,Object.prototype.hasOwnProperty),H=document.createElement("p"),g=e.Node.prototype,n=e.Element.prototype,nb=H.contains||g.contains,za=Date,ob=/^\<([\w\:\-]*)[\>\ ]/i,ib=/^\s+/,jb=/\s/,va,c,C,pb=/alpha\(opacity=([^\)]+)\)/,La=function(){var a=(this.filter||"").match(pb);return a?parseInt(a[1])/100+"":""},Ma={getPropertyValue:function(a){return this.getAttribute(a)},removeProperty:function(a){this.removeAttribute(a)},setProperty:function(a,b,d){"important"!=d?this.setAttribute(a,b):(d=RegExp(a+
"\\s*:\\s*(\\S+)\\s*(?:[$;]|(?:(!important)\\s*[$;]))","i"),a=";"+a+":"+b+" !important;",this.cssText=d.test(this.cssText)?this.cssText.replace(d,a):this.cssText+a)},getPropertyPriority:function(a){return((this.cssText||"").match(RegExp(a+"\\s*:\\s*(\\S+)\\s*(?:[$;]|(?:(!important)\\s*[$;]))","i"))||[])[2]||""},item:$()},U={"for":"htmlFor","class":"className",value:"defaultValue"},fa={action:p,cite:p,codebase:p,data:p,href:p,longdesc:p,lowsrc:p,src:p,usemap:p},R={id:m,value:m,checked:m,disabled:m,
ismap:m,multiple:m,readonly:m,selected:m},ab={checked:p,disabled:p,ismap:p,multiple:p,readonly:p,selected:p},D,S,L,O="uuid"+(Math.random()+"").substr(2),qb=1,rb=$(),Ta=s,Na,W="abbr|article|aside|audio|canvas|command|datalist|details|figure|figcaption|footer|header|hgroup|keygen|mark|meter|main|nav|output|progress|section|source|summary|time|video",la=W.split("|"),Aa=/^<|^(?:a|b|button|code|div|fieldset|form|map|h1|h2|h3|h4|h5|h6|i|object|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul|optgroup)$/i,
wa,J,X,Oa,aa,ba;c=document.createElement("iframe");c.style.display="none";(document.body||t).appendChild(c);c.contentWindow.document.write("<script>parent._.NodeList=Array;parent._.EMP=Object.prototype\x3c/script>");M=e._.EMP;delete e._.EMP;delete M.constructor;delete M.hasOwnProperty;delete M.propertyIsEnumerable;delete M.isPrototypeOf;delete M.toLocaleString;delete M.toString;delete M.valueOf;M.__proto__=p;G.push(function(){var a=Object.create;Object.create=function(b){b===p&&(arguments[0]=M);a.apply(this,
arguments)}});"CSS1Compat"===document.compatMode?(aa=function(){return t.scrollLeft},ba=function(){return t.scrollTop}):(aa=function(){return document.body.scrollTop},ba=function(){return document.body.scrollLeft});document.head||(document.head=document.getElementsByTagName("head")[0]);"defaultView"in document||(document.defaultView=document.parentWindow);c=s;try{c=isNaN.apply(p,{})}catch(vb){}c||(Function.prototype.originalApply=Function.prototype.apply,Function.prototype.apply=j);"b"!=="ab".substr(-1)&&
(String.prototype.substr=function(a,b){return kb.call(this,0>a?0>(a=this.length+a)?0:a:a,b)});if("te".split(/(s)*/)[1]!=l||3!="1_1".split(/(_)/).length)va=/()??/.exec("")[1]===l,String.prototype.split=function(a,b){var d=this;if(!(a instanceof RegExp))return a===l&&0===b?[]:ia.call(d,a,b);var f=[],h=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.extended?"x":"")+(a.sticky?"y":""),e=0,c,g,j;a=RegExp(a.source,h+"g");d+="";va||(c=RegExp("^"+a.source+"$(?!\\s)",h));b=b===l?4294967295:b>>>0;if(!b)return[];
for(;g=a.exec(d);){h=g.index+g[0].length;if(h>e&&(f.push(d.slice(e,g.index)),!va&&1<g.length&&g[0].replace(c,function(){for(var a=1,b=arguments.length-2;a<b;a++)arguments[a]===l&&(g[a]=l)}),1<g.length&&g.index<d.length&&f.push.apply(f,g.slice(1)),j=g[0].length,e=h,f.length>=b))break;a.lastIndex===g.index&&a.lastIndex++}e===d.length?(j||!a.test(""))&&f.push(""):f.push(d.slice(e));return f.length>b?f.slice(0,b):f};e.DOMException||(c=(e.DOMException=$()).prototype=Error(),c.INDEX_SIZE_ERR=1,c.HIERARCHY_REQUEST_ERR=
3,c.WRONG_DOCUMENT_ERR=4,c.INVALID_CHARACTER_ERR=5,c.NO_MODIFICATION_ALLOWED_ERR=7,c.NOT_FOUND_ERR=8,c.NOT_SUPPORTED_ERR=9,c.INVALID_STATE_ERR=11,c.SYNTAX_ERR=12,c.INVALID_MODIFICATION_ERR=13,c.NAMESPACE_ERR=14,c.INVALID_ACCESS_ERR=15);"pageXOffset"in e||G.push(function(){Object.defineProperty(e,"pageXOffset",{get:aa});Object.defineProperty(e,"pageYOffset",{get:ba})});C=e.Event=function(){V("")};S={initEvent:function(a,b,d){(a==l||b==l||d==l)&&V("WRONG_ARGUMENTS_ERR");this.type=a;this.bubbles=b;this.cancelable=
d;this.k=s;this.target=p;this.timeStamp||(this.timeStamp=+new za)},initCustomEvent:function(a,b,d,f){S.initEvent.call(this,a,b,d);this.detail=f},initUIEvent:function(a,b,d,f,h){S.initCustomEvent.call(this,a,b,d,h);this.view=f},initMouseEvent:function(a,b,d,f,h,e,c,g,j,n,q,k,A,t,u){S.initUIEvent.call(this,a,b,d,f,h);this.screenX=e;this.screenY=c;this.clientX=g;this.clientY=j;this.ctrlKey=n;this.altKey=q;this.shiftKey=k;this.metaKey=A;this.button=t;this.relatedTarget=u}};L=C.prototype={constructor:C,
preventDefault:function(){this.cancelable!==s&&(D.a.call(this).returnValue=this.returnValue=s,D.f.call(this),this.defaultPrevented=m)},stopPropagation:function(){D.a.call(this).cancelBubble=this.cancelBubble=m;D.f.call(this)}};L.stopImmediatePropagation=function(){this.__stopNow=m;this.stopPropagation()};L.defaultPrevented=s;for(c in S)ha(S,c)&&(L[c]=function(){S[arguments.callee.name].apply(this,arguments);Ka(this.ietl9_event,this)},L[c].name=c);D=function(a){this.ietl9_event=a;a.returnValue=m;Ka(this,
a)};D.a=function(){var a=this.ietl9_event;a===l?V("WRONG_THIS_ERR"):a===p&&(a=D.a.j);return a};D.a.j={};D.f=function(){this.ietl9_event&&(this.ietl9_event=p)};C=$();C.prototype=L;C=new C;C.constructor=D;D.prototype=C;H.addEventListener||((e.Text&&e.Text.prototype||g).addEventListener=g.addEventListener=t.addEventListener=e.addEventListener=document.addEventListener=function(a,b,d){if("function"==typeof b||"object"===typeof b&&b.handleEvent){var f=this,h=f._,c=s;f==e&&(!("_"in document)||!("_e_8vj"in
document._)||!(a in document._._e_8vj))&&document.addEventListener(a,rb,d);h||(h=f._={});switch(a){case "DOMContentLoaded":if("complete"==document.readyState)return;f===e&&(f=document);c=m;if(!Na){Na=m;var g=function(){try{document.documentElement.doScroll("left")}catch(b){setTimeout(g,50);return}ca.call(f,{type:a,isTrusted:m,__custom_event:l})};if("createEventObject"in document&&"doScroll"in document.documentElement)try{e.frameElement||g()}catch(j){}}break;case "load":"tagName"in f&&-1!="SCRIPT|IFRAME".indexOf(f.tagName.toUpperCase())&&
(c=m,f.onreadystatechange=function(){"loaded"===f.readyState&&(f.onreadystatechange=p,f.attachEvent("onreadystatechange",K.call(ca,f,{type:a})))},a="readystatechange");break;case "DOMMouseScroll":a="mousewheel"}f.setInterval&&(f!=e&&!f.frameElement)&&(f=e);b[O]||(b[O]=++qb);if(!(d=h._h_9e2))d=h._h_9e2=K.call(ca,f);h._e_8vj||(h._e_8vj={});a in h._e_8vj?h=h._e_8vj[a]:(h=h._e_8vj[a]=[],c||f.attachEvent("on"+a,d));"_"+b[O]in h||(h.push(b),h["_"+b[O]]=p)}},g.addEventListener.__shim__=m,(e.Text&&e.Text.prototype||
g).removeEventListener=g.removeEventListener=t.removeEventListener=e.removeEventListener=document.removeEventListener=function(a,b){var d=this._,f,h,e,c,g;if(!("function"!==typeof b&&!("object"===typeof b&&b.handleEvent)||!b[O]||!d))if(f=d._h_9e2){h=d._e_8vj&&d._e_8vj[a];for(c=0;g=h[c++];)if(g===b){lb.call(h,c-1,1);delete h["_"+b[O]];break}if(!h.length){this.detachEvent("on"+a,f);delete d._e_8vj[a];for(e in d._e_8vj)if(ha(d._e_8vj,e))return;delete d._e_8vj;delete d._h_9e2}}},g.removeEventListener.__shim__=
m,document.attachEvent("onmousedown",function(){u.b=event.button}),document.attachEvent("onclick",function(){u.b=l}));H.dispatchEvent||((e.Text&&e.Text.prototype||g).dispatchEvent=g.dispatchEvent=t.dispatchEvent=e.dispatchEvent=document.dispatchEvent=function(a){if(!a.type)return m;a.returnValue||(a.returnValue=m);a.cancelBubble&&(a.cancelBubble=s);delete a.__stopNow;try{return this.fireEvent("on"+a.type,a)}catch(b){if(-2147024809===b.number||this===e||-2146827850===b.number&&!(a.bubbles=s)){a.__custom_event=
m;for(var d=a.target=this,f="on"+a.type;!a.cancelBubble&&d;)(f in d&&"function"==typeof d[f]&&(a.__dom0__=d[f])||"_"in d&&"_e_8vj"in d._)&&ca.call(d,a),d=a.bubbles?d===document?document.defaultView:d.parentNode:p,"__dom0__"in a&&(a.__dom0__=l,delete a.__dom0__);return!a.cancelBubble}V(b)}},g.dispatchEvent.__shim__=m);document.createEvent||(document.createEvent=function(){return new D(document.createEventObject())});G.push(function(){function a(a){var b,d=this.nodeName.toUpperCase(),f,e,c,g,k,j,n,
q;if(!("INPUT"!=d&&"TEXTAREA"!=d)){"unknown"!=typeof document.activeElement&&(j=document.activeElement);b=document.selection;this._&&(n=this._.__stop_events__,this._.__stop_events__=m);j&&j._&&(q=j._.__stop_events__,j._.__stop_events__=m);try{this.focus(),f=b.createRange(),e=f.duplicate(),"TEXTAREA"==d?(c=this.value,f=e,a?(f.moveEnd("character",c.length),k=""==f.text?c.length:c.lastIndexOf(f.text)):(f.moveStart("character",-c.length),k=f.text.length)):(e.moveToElementText(this),e.setEndPoint("EndToEnd",
f),g=e.text.length-f.text.length,k=a?g:g+f.text.length),j&&j.focus&&j.focus()}catch(t){k=l}this._&&!n&&delete this._.__stop_events__;j&&(j._&&!q)&&delete j._.__stop_events__;return k}}function b(a,b){if(a!=l){b==l&&(b=a);var d=this.nodeName.toUpperCase();"INPUT"!=d&&"TEXTAREA"!=d||(d=this.createTextRange(),d.collapse(m),d.moveStart("character",a),d.moveEnd("character",b-a),d.select())}}var d=e.HTMLTextAreaElement&&e.HTMLTextAreaElement.prototype,f={setSelectionRange:{value:b},selectionStart:{get:function(){return a.call(this,
m)},set:function(d){b.call(this,d,a.call(this));return d}},selectionEnd:{get:function(){return a.call(this)},set:function(d){b.call(this,a.call(this,m),d);return d}}};Object.defineProperties(e.HTMLInputElement&&e.HTMLInputElement.prototype||n,f);d&&Object.defineProperties(d,f)});document.doctype===p&&7<ea&&G.push(function(){var a=document.childNodes[0];Object.defineProperty(a,"nodeType",{get:function(){return 10}});Object.defineProperty(document,"doctype",{configurable:m,enumerable:s,get:function(){return a}})});
g.contains||(g.contains=nb);I.call(Ia,document,"").contains||(e.Text&&e.Text.prototype?G.push(K.call(q,p,Text.prototype,g)):document.createTextNode=function(a){a=I.call(Ia,this,a);a.contains=g.contains;return a});!I.call(ta,document).contains&&(e.HTMLDocument&&e.HTMLDocument.prototype)&&G.push(K.call(q,p,e.HTMLDocument.prototype,g));"children"in H||G.push(function(){Object.defineProperty(n,"children",{get:function(){for(var a=[],b=this.firstChild;b;)1==b.nodeType&&a.push(b),b=b.nextSibling;return a}})});
G.push(function(){function a(a,d){var f;try{a:{var e=a;"element"in e&&("defaults"in e&&"document"in e)&&(e=e.element);var c=e.getBoundingClientRect(),g,j,n;if((n=e.ownerDocument)!==document){if(g=n&&n.body,j=n&&n.documentElement,!g||!j){f=d?c.left:c.top;break a}}else g=document.body,j=t;f=d?c.left+aa()-(j.clientLeft||g.clientLeft||0):c.top+ba()-(j.clientTop||g.clientTop||0)}}catch(q){f=a;e=0;for(c=d?"offsetLeft":"offsetTop";f;)e+=parseInt(f[c],10),f=f.offsetParent;f=e}return f}Object.defineProperties(n,
{offsetLeft:{get:function(){return a(this,m)}},offsetTop:{get:function(){return a(this)}}})});H.childElementCount==l&&G.push(function(){Object.defineProperties(n,{firstElementChild:{get:function(){var a;for(a=this.firstChild;a&&1!=a.nodeType;)a=a.nextSibling;return a}},lastElementChild:{get:function(){var a;for(a=this.lastChild;a&&1!=a.nodeType;)a=a.previousSibling;return a}},nextElementSibling:{get:function(){for(var a=this;(a=a.nextSibling)&&1!=a.nodeType;);return a}},previousElementSibling:{get:function(){for(var a=
this;(a=a.previousSibling)&&1!=a.nodeType;);return a}}})});document.ELEMENT_NODE||(c={ELEMENT_NODE:1,TEXT_NODE:3,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11},q(document,c),q(g,c),q(e.Node,c));"textContent"in H||G.push(function(){Object.defineProperty(g,"textContent",{get:function(){if("innerText"in this)return this.innerText;if("data"in this&&this.appendData)return this.data},set:function(a){"innerText"in this?this.innerText=a:"data"in
this&&this.replaceData&&this.replaceData(0,this.length,a);return a}})});"isEqualNode"in H||(document.isEqualNode=t.isEqualNode=g.isEqualNode=function(a){var b,d;if(a===p||a.nodeType!==this.nodeType||10===a.nodeType&&(this.name!==a.name||this.publicId!==a.publicId||this.systemId!==a.systemId))return s;if(1===a.nodeType){if(this.namespaceURI!=a.namespaceURI||this.prefix!=a.prefix||this.localName!=a.localName)return s;b=0;for(d=this.attributes.length;b<d;b++){var f=this.attributes[length],e=a.getAttributeNS(f.namespaceURI,
f.localName);if(e===p||e.value!==f.value)return s}}if(7===a.nodeType&&(this.target!==a.target||this.data!==a.data)||(3===a.nodeType||8===a.nodeType)&&this.data!==a.data||a.childNodes.length!==this.childNodes.length)return s;b=0;for(d=a.childNodes.length;b<d;b++)if(a.childNodes[b].isEqualNode(this.childNodes[b])===s)return s;return m});document.importNode||(document.importNode=function(a,b){switch(a.nodeType){case 1:var d=document.createElement(a.nodeName),f=a.attributes,e,c,g;if(f&&0<f.length){c=
0;for(g=f.length;c<g;)f=a.attributes[c++],d.setAttribute(f.nodeName,a.getAttribute(f.nodeName))}if(b&&(e=a.childNodes)&&0<e.length){c=0;for(g=e.length;c<g;)d.appendChild(document.importNode(e[c++],b))}return d;case 3:case 4:case 8:return document.createTextNode(a.nodeValue)}Ja("NOT_SUPPORTED_ERR");return p},document.importNode.shim=m);c="compareDocumentPosition";if(!(c in document)){var w,x=w||"DOCUMENT_POSITION_";t[c]=document[c]=g[c]=function(a){return this.contains?(this!=a&&this.contains(a)&&
16)+(this!=a&&a.contains(this)&&8)+(0<=this.sourceIndex&&0<=a.sourceIndex?(this.sourceIndex<a.sourceIndex&&4)+(this.sourceIndex>a.sourceIndex&&2):1)+0:0};w="DISCONNECTED";t[x+w]=document[x+w]=g[x+w]=1;w="PRECEDING";t[x+w]=document[x+w]=g[x+w]=2;w="FOLLOWING";t[x+w]=document[x+w]=g[x+w]=4;w="CONTAINS";t[x+w]=document[x+w]=g[x+w]=8;w="CONTAINED_BY";t[x+w]=document[x+w]=g[x+w]=16}e.getComputedStyle||(e.getComputedStyle=function(a){var b=a.currentStyle||a.runtimeStyle;"getPropertyValue"in b||(a.runtimeStyle.getPropertyValue=
K.call(Ma.getPropertyValue,a),a.runtimeStyle.setProperty=a.runtimeStyle.removeProperty=e.getComputedStyle.i,a.runtimeStyle.getPropertyPriority=e.getComputedStyle.h,a.runtimeStyle.item=Ma.item);var d,f,c;(f=e.CSSStyleDeclaration)&&(f=f.prototype)&&(!("float"in b)||!("opacity"in b))?("float"in b||((d=Object.getOwnPropertyDescriptor(f,"float"))&&delete f["float"],c=K.call(e.getComputedStyle.d,a),Object.defineProperty(a.runtimeStyle,"float",{value:{valueOf:c,toString:c},configurable:m,writable:m}),d&&
Object.defineProperty(f,"float",d)),"opacity"in b||((d=Object.getOwnPropertyDescriptor(f,"opacity"))&&delete f.opacity,c=K.call(e.getComputedStyle.e,a),Object.defineProperty(a.runtimeStyle,"opacity",{value:{valueOf:c,toString:c},configurable:m,writable:m}),d&&Object.defineProperty(f,"opacity",d))):("float"in b||(c=K.call(e.getComputedStyle.d,a),a.runtimeStyle["float"]={valueOf:c,toString:c}),"opacity"in b||(c=K.call(e.getComputedStyle.e,a),a.runtimeStyle.opacity={valueOf:c,toString:c}));return a.currentStyle},
e.getComputedStyle.e=function(){return this.runtimeStyle.msOpacity||this.style.msOpacity||La.call(this.style)||La.call(this.runtimeStyle)},e.getComputedStyle.d=function(){return this.runtimeStyle.styleFloat||this.style.styleFloat},e.getComputedStyle.i=function(){Ja("NO_MODIFICATION_ALLOWED_ERR")},e.getComputedStyle.h=function(){return""});document.createDocumentFragment=function(){var a=I.call(ta,this);e.DocumentFragment===e.Document&&q(a,e.DocumentFragment.prototype);return ma(a)};wa=(H.innerHTML=
"<x-x></x-x>",1===H.childNodes.length&&1===H.childNodes[0].nodeType);W="|"+W+"|";ka.ielt9=m;J=ma(I.call(ta,document));wa||(ma(document),document.head.insertAdjacentHTML("beforeend","<br><style>article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}</style>"));0===I.call(ua,document,"x-x").cloneNode().outerHTML.indexOf("<:x-x>")&&(X=J.appendChild("createElement"in J&&J.createElement("div")||J.ownerDocument.createElement("div")),Oa=8===ea?H.cloneNode:
8>ea?g.cloneNode:l,g.cloneNode=function(a){var b,d;Aa.test(this.nodeName)?b=I.call(this.__nativeCloneNode__||Oa,this,a):(X.innerHTML="",d=a?this.outerHTML:this.outerHTML.replace(/<(\w+)([^>]*)>[\W\w]*$/,"<$1$2></$1>"),X.innerHTML=d.replace(/^\<\:/,"<").replace(/\<\/\:([\w\-]*\>)$/,"<$1"),b=X.firstChild,!b&&!a&&((d=d.match(ob))&&(d=d[1]),d&&(J.createElement(d),X.innerHTML=d,b=X.firstChild)));return J.appendChild(b)});H=c=C=nodeList_methods_fromArray=wa=p;if(g.ie||!(7<ea)){var sb=Array.prototype.unshift,
ra=!document.readyState,Y=["/a.ielt8.htc"],Z="{behavior:",Pa=[],Qa,Ra,Sa,Q,tb=e.scrollTo,ub=e.scrollBy;for(c=Y.length;0<=--c;)Z+=' url("'+Y[c]+'")';Z+="}";ra&&(document.readyState="uninitialized");g.ielt8=m;e.__ielt8__wontfix=Pa;var na=/\s*(\S+)\s*/g,oa="(?=(^|.*\\s)$1(\\s|$))",gb=/^([\w\-\|]+)?((?:\.(?:[\w-]+))+)?$|^#([\w-]+$)/,cb=/\s*([,>+~ ])\s*/g,db=/\~\=/g,fb=/(^[>+~ ]?|,|\>|\+|~| ).*?(?=[,>+~ ]|$)/g,Ca=/\./g,bb=/\s/g,Ua=/^([,>+~ ])?([\|\*\w-]*)\#?([\w-]*)((?:\.?[\w-])*)(\[.+\])?(?:\:(.+))?$/,
Wa=/^\[?['"]?(.*?)['"]?(?:([\*~&\^\$\@!]?=)['"]?(.*?)['"]?)?\]?$/,Ya=/^([^(]+)(?:\((.+)\))?$/,eb=/\-child\((\dn)\+(\d)\)/g,$a=/(?:([-]?\d*)n)?(?:(%|-)(\d*))?/,hb=/([,>+~ ])/,Va={"":1," ":1,",":1,">":2,"~":3,"+":4},Xa={"":1,"=":2,"&=":3,"^=":4,"$=":5,"*=":6,"|=":7,"!=":8,"@=":9},Za={"nth-child":0,"nth-last-child":1,"only-child":2,"first-child":3,"last-child":4,root:5,empty:6,checked:7,lang:8,enabled:9,disabled:10,selected:11,contains:12,not:13,matches:14,"read-only":15,"read-write":16},Ea=function(a){for(var b=
a.length>>>0,d=[],c=0;c<b;c++)c in a&&d.push(a[c]);return d},pa=function(a){for(;(a=a.nextSibling)&&1!=a.nodeType;);return a};c="matchesSelector";t[c]||(n[c]=t[c]=ga);c="matches";t[c]||(n[c]=t[c]=ga);c="querySelectorAll";document[c]||(n[c]=t[c]=document[c]=function(a,b){return qa.call(this,a,s,b)});c="querySelector";document[c]||(n[c]=t[c]=document[c]=function(a,b){return qa.call(this,a,m,b)[0]||p});c="getElementsByClassName";document[c]||(n[c]=t[c]=document[c]=function(a){a=RegExp(a.replace(na,oa));
for(var b=this.all,d,c=-1,e=[];d=b[++c];)d.className&&a.test(d.className)&&e.push(d);return e});R.g={};R.c=function(a,b){if(b in this)return this[b];var d=a.nodeName;if(!(a=R.g[d]))a=R.g[d]=ua(d);return this[b]=a.getAttribute(b)!==p};n.setAttribute=function(a,b,d){if(d==l){var c=a.toLowerCase();d=1;U[c]!==l?a=U[c]:fa[c]!==l?d=2:0!==c.indexOf("data-")&&!R.c(this,c)&&(a=a.toUpperCase());b+=""}return I.call(this.__setAttribute__,this,a,b,d)};n.getAttribute=function(a,b){var d;d=a.toLowerCase();var c,
e;if(e=b==l)b=1;if(U[d]!==l)d=U[d];else{if(fa[d]!==l)return I.call(this.__getAttribute__,this,a,2);d=0!==d.indexOf("data-")&&!R.c(this,d)?a.toUpperCase():a}c=I.call(this.__getAttribute__,this,d,b);c!==p?e&&(c+=""):!(d in this)&&"string"===typeof this[a]?(c=this[d]=this[a],this.__removeAttribute__(a),c+=""):c=p;return c};n.removeAttribute=function(a,b){var d,c;b==l&&(b=1,c=a.toLowerCase(),U[c]!==l?d=U[c]:fa[c]!==l?b=2:0!==c.indexOf("data-")&&!R.c(this,c)&&(d=a.toUpperCase()));return I.call(this.__removeAttribute__,
this,d||a,b)};g.hasAttribute||(g.hasAttribute=function(a){return this.getAttribute(a)!==p});var y=function(a){return function(){return a}};g.l=y(1);g.p=y(2);g.q=y(3);g.r=y(4);g.s=y(7);g.t=y(8);g.u=y(9);g.m=y(10);g.n=y(11);g.o=y(16);g.__ielt8__element_init__=function(){var a=this;a.element&&(a=a.element);"prepend"in a||(a.after=n.after,a.before=n.before,a.append=n.append,a.prepend=n.prepend,a.replace=n.replace,a.remove=n.remove);"isEqualNode"in a||(a.isEqualNode=g.isEqualNode);"compareDocumentPosition"in
a||(a.compareDocumentPosition=g.compareDocumentPosition);"getElementsByClassName"in a||(a.getElementsByClassName=n.getElementsByClassName);"addEventListener"in a||(a.addEventListener=e.addEventListener,a.removeEventListener=e.removeEventListener,a.dispatchEvent=e.dispatchEvent);"querySelector"in a||(a.querySelectorAll=n.querySelectorAll,a.querySelector=n.querySelector);"matchesSelector"in a||(a.matchesSelector=a.matches=ga);"hasAttribute"in a||(a.hasAttribute=n.hasAttribute);"setSelectionRange"in
a||(a.setSelectionRange=n.setSelectionRange);try{this.setAttribute!=n.setAttribute&&(this.__setAttribute__=this.setAttribute,this.__getAttribute__=this.getAttribute,this.__removeAttribute__=this.removeAttribute,this.setAttribute=n.setAttribute,this.getAttribute=n.getAttribute,this.removeAttribute=n.removeAttribute),a.cloneNode!==g.cloneNode&&(a.__nativeCloneNode__=a.cloneNode,a.cloneNode=g.cloneNode),g.contains&&(a.contains=g.contains)}catch(b){Pa.push(a)}};Sa=g.__ielt8_Node_behavior_apply=function(a){for(c=
Y.length;0<=--c;)try{a.addBehavior(Y[c])}catch(b){}};Ra=g.cloneNode;g.cloneNode=function(a){a=I.call(Ra||this.__nativeCloneNode__,this,a);Sa(a);return a};1!=[].unshift(0)&&(Array.prototype.unshift=function(){sb.apply(this,arguments);return this.length});Qa=document.createElement;document.createElement=function(a){a=I.call(Qa,document,a);for(c=Y.length;0<=--c;)try{a.addBehavior(Y[c])}catch(b){}return a};e.XMLHttpRequest||(e.XMLHttpRequest=function(){var a;try{a=new ActiveXObject("Msxml2.XMLHTTP")}catch(b){a=
new ActiveXObject("Microsoft.XMLHTTP")}var c=a.send;a.send=function(){this.setRequestHeader("If-Modified-Since","Sat, 1 Jan 2000 00:00:00 GMT");c.apply(this,arguments)}});!("pageXOffset"in e)&&e.attachEvent&&(e.pageXOffset=e.pageYOffset=0,Q="CSS1Compat"===document.compatMode?function(){e.scrollX=e.pageXOffset=document.body.parentNode.scrollLeft;e.scrollY=e.pageYOffset=document.body.parentNode.scrollTop}:function(){e.scrollX=e.pageXOffset=document.body.scrollLeft;e.scrollY=e.pageYOffset=document.body.scrollTop},
e.attachEvent("onscroll",Q),e.scroll=e.scrollTo=function(a,b){tb(a,b);Q()},e.scrollBy=function(a,b){ub(a,b);Q()});document.addEventListener("DOMContentLoaded",Fa);e.attachEvent("onload",Ga);var xa=Z,E=document.getElementById("ielt8_style_prev_for_behaviour"),ya="";E&&(ya=E.getAttribute("data-url")||"",E.id="");ya&&xa.replace(" url("," url("+ya+") url(");E=ua("style");E.id="ielt8_style_prev_for_behaviour";E.type="text/css";E.setAttribute("data-url",xa.replace("{behavior:","").replace(")}",")"));E.styleSheet.cssText=
"*"+xa;document.head.appendChild(E);Z=c=p}}}.call(window,function(q,j){for(var u in j)Object.prototype.hasOwnProperty.call(j,u)&&!Object.prototype.hasOwnProperty.call(q,u)&&(q[u]=j[u]);return q},function(q,j){var u;if(!j||!(u=+j.length))return this.call(q);if("object"!==typeof j||0>u||"callee"in j&&"caller"in j||"[object Array]"==Object.prototype.toString.call(j))return this.apply(q,j);switch(u){case 1:return this.call(q,j[0]);case 2:return this.call(q,j[0],j[1]);case 3:return this.call(q,j[0],j[1],
j[2]);case 4:return this.call(q,j[0],j[1],j[2],j[3]);case 5:return this.call(q,j[0],j[1],j[2],j[3],j[4]);case 6:return this.call(q,j[0],j[1],j[2],j[3],j[4],j[5]);case 7:return this.call(q,j[0],j[1],j[2],j[3],j[4],j[5],j[6])}return this.origanApply(q,Array.from(j))});
