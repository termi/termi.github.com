/* ES6/DOM4 polyfill for IE < 8 | @version 0.8.2 | MIT License | github.com/termi */
void function(A){var l=void 0,m=!0,n=null,s=!1;function aa(){return function(){}};function E(a){if(!("__isFixed"in a)){var c="button"in a&&a.button;a.__isFixed=m;if("click"===a.type||"dblclick"===a.type)a.detail===l&&(a.detail="click"===a.type?1:2),!a.button&&E.b!==l&&(c=E.b);A(a,L);a.defaultPrevented||(a.defaultPrevented=s);a.target||(a.target=a.srcElement||document);a.relatedTarget===l&&a.fromElement&&(a.relatedTarget=a.fromElement==a.target?a.toElement:a.fromElement);"clientX"in a&&a.pageX==n&&(a.pageX=a.clientX+ba()-(r.clientLeft||0),a.pageY=a.clientY+ca()-
(r.clientTop||0));!a.which&&c&&(a.which=c&1?1:c&2?3:c&4?2:0);"timeStamp"in a||(a.timeStamp=+new za);"eventPhase"in a||(a.eventPhase=a.target==this?2:3);"currentTarget"in a||(a.currentTarget=this);a.keyCode||(a.keyCode=a.charCode||a.which);!a.attrName&&a.propertyName&&(a.attrName=ia.call(a.propertyName,".")[0]);return a}}function G(a){if(E!==l){var c=this._,d,g,h,b,U,e;if(!c.__stop_events__){d=[];g=[];b="_e_8vj"+(Ua?"-":"");if(!c||!c[b])if("__dom0__"in a)c||(c={}),c[b]||(c[b]={});else return;a||(a=
window.event);if("__custom_event"in a)h=a;else if(!(h=a.__customEvent__))a.bubbles==l&&(a.bubbles=m),a.cancelable==l&&(a.cancelable=m),h=a.__customEvent__=new H(a),h.initEvent(a.type,a.bubbles,a.cancelable),E.call(this,h),h.k=m,h.__custom_event=l;h.ietl9_event=a;a.currentTarget=this;b=c[b][h.type];"__dom0__"in a&&(U=a.__dom0__);if(b){c=0;do{"object"===typeof U&&(e=U,U=U.handleEvent);try{if(U&&(h.result=I.call(U,e||this,h))===s)h.preventDefault(),h.stopPropagation()}catch(f){d.push(f),g.push(f.message)}if(h.__stopNow)break}while(U=
b[c++]);a.returnValue=h.returnValue;a.cancelBubble=h.cancelBubble;1==d.length?T(d[0]):1<d.length&&(g=Error("Multiple errors thrown : "+h.type+" :  : "+g.join("|")),g.errors=d,T(g))}this===document&&(!h.cancelBubble&&3===h.eventPhase)&&(G.call(this.defaultView,h),a.cancelBubble=m)}}}function W(){}function ja(a){var c=this.__orig__createElement__(a);if(Aa.test(a))return c;~X.indexOf("|"+a+"|")||(ka.push(a),X+=a+"|",(F.__orig__createElement__||F.createElement)(a));return F.appendChild(c)}function la(a){var c=
-1;if(a.createElement){for(;++c<ka.length;)a.createElement(ka[c]);a.createElement!==ja&&!("ielt9"in a.createElement)&&(a.__orig__createElement__=a.createElement,a.createElement=ja)}return a}function Ba(a,c,d,g,h,b){var e=a.match(Va);a=d||[];var f=!!h,J=f&&(c={})||(!c?document:"length"in c?c[0]:c),j,p=0,k,w,v=Wa[e[1]||""]||0,H=2<v,t=e[2],A=!!t,E=e[3],G=!!E,F=e[4],D=!!F,K="*"===t,B,M,q,N,y,R,u,z,O,C,L,P,x,Q,S,T;A&&(t=K?l:t.replace("|",":").toUpperCase());D&&(F=F.replace(Ca," "),O=RegExp(F.replace(ma,
na)));if(C=e[5]){C=ia.call(C,"][");for(B=-1;N=C[++B];)if(N=C[B]=N.match(Xa),N[2]=Ya[N[2]],(x=N[3])&&" i"==x.substr(-2))x.substr(0,x.length-2),N[4]=m}if(e=e[6])e=e.match(Za),R=$a[e[1]],2>R&&e[2]&&(y=/\D/.test(e[2])?"even"===e[2]?[n,2]:"odd"===e[2]?[n,2,"%",1]:e[2].match(ab):[n,0,"%",e[2]],Q=R?"nodeIndexLast":"nodeIndex",S=R?"lastChild":"firstChild",T=R?"previousSibling":"nextSibling");f&&(v=0);if(1==v)if(G){h=document.getElementsByName(E);L=[];for(B=-1;k=h[++B];)k.id==E&&L.push(k);h=G=A=n}else t||
(t="*",K=!D),A=s;f=(!("length"in c)||1===c.length)&&!g&&!C&&!e&&!A&&!D&&!G;do{switch(v){case 0:k=h[0];break;case 1:if(E)if(h=[],L.length)for(B=-1;k=L[++B];){if(J===document||J.contains(k))h.push(k),L.splice(B--,1)}else return a;else"BODY"===t&&9===J.nodeType?(h=[J.body],D=!!F,f=f&&!D):h=J.getElementsByTagName(t);k=h[0];break;case 2:h=J.children;k=h[0];break;case 3:j=c[p+1];case 4:if(!(k=oa(J)))continue}if(f)return h;J=0;if(k){do if((!K||1===k.nodeType)&&!(g&&(M=k.sourceIndex)in d)){if(q=!(A&&(w=k.nodeName.toUpperCase())!==
t||G&&k.id!==E||D&&(!k.className||!O.test(k.className)))){if(C)for(B=-1;q&&(N=C[++B]);)if(P=N[2],x=k,u=N[1],u=u.toLowerCase(),u=V[u]!==l?x[V[u]]:ea[u]!==l?x.__getAttribute__(u,2):bb[u]!==l?x.__getAttribute__(u)?u:n:(x=x.getAttributeNode(u))&&x.value,u===n){if(!(q=8==P))q=s}else switch(N[4]&&(u=u.toUpperCase()),z=N[3],P){case 1:q=!!u||""===u;break;case 2:q=u===z;break;case 3:case 8:q=RegExp("(^| +)"+z+"($| +)").test(u);8==P&&(q=!q);break;case 4:case 5:case 6:x=u.indexOf(z);q=6===P?~x:5===P?x==u.length-
z.length:!x;break;case 7:q=u===z||!!~u.indexOf(z+"-");break;case 9:q=!!~(" "+u.replace(cb," ")+" ").indexOf(" "+z+" ")}if(q&&e)switch(R){case 0:case 1:if(!y[1]&&!y[3])break;B=k[Q]||0;P=y[3]?("%"===y[2]?-1:1)*y[3]:0;x=y[1];if(B)q=!x?!(B+P):!((B+P)%x);else{q=s;w=k.parentNode[S];do if(1==w.nodeType&&(w[Q]=++B)&&k===w&&(!x?!(B+P):!((B+P)%x)))q=m;while(!q&&(w=w[T]))}break;case 2:case 3:for(w=k;(w=w.previousSibling)&&1!==w.nodeType;);q=!w;if(!q||3==R)break;case 4:q=!oa(k);break;case 5:q="HTML"==(w||k.nodeName.toUpperCase());
break;case 6:q=!k.firstChild;break;case 7:q=!!k.checked;break;case 8:q=k.lang==y||r.lang==y;break;case 9:case 10:q="disabled"in k&&"form"in k&&(10==R?k.disabled===m&&"hidden"!==k.type:k.disabled===s);break;case 11:q=k.parentNode.selectedIndex&&!!k.selected;break;case 12:q=!!~(k.textContent||k.data||k.innerText||k.nodeValue||k.value||"").indexOf(e[2]);break;case 13:case 14:q=fa.call(k,e[2]);13==R&&(q=!q);break;case 15:case 16:w||(w=k.nodeName.toUpperCase()),q=("INPUT"==w||"TEXTAREA"==w||I.call(k,k.__getAttribute__||
k.getAttribute,"contenteditable")!==n)&&!k.v,16==R&&(q=!q)}}if(q){if(b)return[k];g?a[M]=k:a.push(k)}w=l}while(k=H?4===v?l:k===j?l:oa(k):h[++J])}k=l}while(J=c[++p]);return a}function pa(a,c,d){d||(d=this);a=Da.call(a.replace(db,"$1"));var g=[],h,b,e,f=m,J=s,j,p=a.replace(eb,"@=").replace(fb,"-child\\($1%$2\\)").match(gb);for(h=d;a=p.shift();){b=p[0];e=!b||","===b.charAt(0);if(!J)if(f&&"nodeType"in d&&9===d.nodeType&&"BODY"===a.toUpperCase())h=[d.body],e&&(g=h);else if(f&&":root"===a)h=[r],e&&(g=h);
else if(h&&(!(d=h)||0===h.length))h=n,J=m;else{if(f=!(!e||!j&&!(b||1<d.length)))j=m;h=Ba(a,d,e?g:[],f,n,c&&e)}if(f=e)!g.length&&h&&(j=s,g=Ea(h)),h=n,d=this,J=s;if(!b||","===b)break}return j?Ea(g):g}function fa(a){if(!a)return s;if("*"===a||this===r&&":root"===a||this===document.body&&"BODY"===a.toUpperCase())return m;var c,d,g=s,h;a=Da.call(a);if(c=a.match(hb))switch(a.charAt(0)){case "#":return this.id===a.slice(1);default:return(g=!(d=c[2])||this.className&&RegExp(d.replace(Ca," ").replace(ma,na)).test(this.className))&&
!(d=c[1])||this.tagName&&this.tagName.toUpperCase()===d.toUpperCase()}else{if(ib.test(a)){d=pa.call(this.ownerDocument,a);for(h in d)if(ga(d,h)&&(g=d[h]===this))return m;return s}d=Ba(a,n,s,n,this,m);return d[0]===this}}function Fa(){document.removeEventListener("DOMContentLoaded",Fa);qa&&(document.readyState="interactive");C&&C()}function Ga(){b.detachEvent("onload",Ga);qa&&(document.readyState="complete");C&&C()}var b=this,da=window.eval&&window.eval("/*@cc_on 1;@*/")&&+((/msie (\d+)/i.exec(navigator.userAgent)||
[])[1]||0)||n;if(9>da){b.Element||((b.Element=window.ActiveXObject).prototype.ie=m);b.HTMLElement||(b.HTMLElement=b.Element);b.Node||(b.Node=b.Element);var ra;b.DocumentFragment||(b.DocumentFragment=b.Document||b.HTMLDocument||(ra=aa(),ra.prototype={},ra));b.Document||(b.Document=b.DocumentFragment);b._={ielt9shims:[],orig_:b._,isObject:function(a){return"[object Object]"===Ha.call(a)&&"function"===typeof a.constructor&&"[object Function]"===Ha.call(a.constructor)}};var D=b._.ielt9shims,sa=document.createDocumentFragment,
ta=document.createElement,Ia=document.createTextNode,r=document.documentElement,T=function(a){throw a instanceof Error?a:Error(a);},Ja=function(a){var c=Object.create(DOMException.prototype);c.code=DOMException[a];c.message=a+": DOM Exception "+c.code;throw c;},Ka=function(a,c){for(var d in c)if(ga(c,d)&&a[d]!==c[d])try{a[d]=c[d]}catch(g){}},Da=String.prototype.trim||function(){for(var a=this.replace(jb,""),c=a.length;kb.test(a.charAt(--c)););return a.slice(0,c+1)},ia=String.prototype.split,lb=String.prototype.substr,
La=Array.prototype.slice,mb=Array.prototype.splice,ha=Function.prototype.apply,I=Function.prototype.call,z=Function.prototype.bind||function(a,c){var d=this,g=La.call(arguments,1);return function(){return ha.call(d,a,g.concat(La.call(arguments)))}},K,Ha=Object.prototype.toString,ga=z.call(Function.prototype.call,Object.prototype.hasOwnProperty),t=document.createElement("p"),f=b.Node.prototype,j=b.Element.prototype,nb=t.contains||f.contains,za=Date,ob=/^\<([\w\:\-]*)[\>\ ]/i,jb=/^\s+/,kb=/\s/,ua,e,
M,va,pb=/alpha\(opacity=([^\)]+)\)/,Ma=function(){var a=(this.filter||"").match(pb);return a?parseInt(a[1])/100+"":""},Na={getPropertyValue:function(a){return this.getAttribute(a)},removeProperty:function(a){this.removeAttribute(a)},setProperty:function(a,c,d){"important"!=d?this.setAttribute(a,c):(d=RegExp(a+"\\s*:\\s*(\\S+)\\s*(?:[$;]|(?:(!important)\\s*[$;]))","i"),a=";"+a+":"+c+" !important;",this.cssText=d.test(this.cssText)?this.cssText.replace(d,a):this.cssText+a)},getPropertyPriority:function(a){return((this.cssText||
"").match(RegExp(a+"\\s*:\\s*(\\S+)\\s*(?:[$;]|(?:(!important)\\s*[$;]))","i"))||[])[2]||""},item:aa()},V={"for":"htmlFor","class":"className",value:"defaultValue"},ea={action:n,cite:n,codebase:n,data:n,href:n,longdesc:n,lowsrc:n,src:n,usemap:n},Q={id:m,value:m,checked:m,disabled:m,ismap:m,multiple:m,readonly:m,selected:m},bb={checked:n,disabled:n,ismap:n,multiple:n,readonly:n,selected:n},H,S,L,qb=1,rb=aa(),Ua=s,Oa,X="abbr|article|aside|audio|canvas|command|datalist|details|figure|figcaption|footer|header|hgroup|keygen|mark|meter|main|nav|output|progress|section|source|summary|time|video",
ka=X.split("|"),Aa=/^<|^(?:a|b|button|code|div|fieldset|form|map|h1|h2|h3|h4|h5|h6|i|object|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul|optgroup)$/i,wa,F,Y,Pa,ba,ca;e=document.createElement("iframe");e.style.display="none";(document.body||r).appendChild(e);e.contentWindow.document.write("<script>parent._.NodeList=Array;parent._.EMP=Object.prototype\x3c/script>");va=b._.NodeList;delete b._.NodeList;K=b._.EMP;delete b._.EMP;
delete K.constructor;delete K.hasOwnProperty;delete K.propertyIsEnumerable;delete K.isPrototypeOf;delete K.toLocaleString;delete K.toString;delete K.valueOf;K.__proto__=n;D.push(function(){var a=Object.create;Object.create=function(c){c===n&&(arguments[0]=K);a.apply(this,arguments)}});"CSS1Compat"===document.compatMode?(ba=function(){return r.scrollLeft},ca=function(){return r.scrollTop}):(ba=function(){return document.body.scrollTop},ca=function(){return document.body.scrollLeft});document.head||
(document.head=document.getElementsByTagName("head")[0]);"defaultView"in document||(document.defaultView=document.parentWindow);e=s;try{e=isNaN.apply(n,{})}catch(vb){}e||(Function.prototype.apply=function(a,c){return!c?ha.call(this,a):"object"!==typeof c||c instanceof Array||!("length"in c)?ha.call(this,a,c):ha.call(this,a,Array.from(c))});"b"!=="ab".substr(-1)&&(String.prototype.substr=function(a,c){return lb.call(this,0>a?0>(a=this.length+a)?0:a:a,c)});if("te".split(/(s)*/)[1]!=l||3!="1_1".split(/(_)/).length)ua=
/()??/.exec("")[1]===l,String.prototype.split=function(a,c){var d=this;if(!(a instanceof RegExp))return a===l&&0===c?[]:ia.call(d,a,c);var g=[],h=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.extended?"x":"")+(a.sticky?"y":""),b=0,e,f,j;a=RegExp(a.source,h+"g");d+="";ua||(e=RegExp("^"+a.source+"$(?!\\s)",h));c=c===l?4294967295:c>>>0;if(!c)return[];for(;f=a.exec(d);){h=f.index+f[0].length;if(h>b&&(g.push(d.slice(b,f.index)),!ua&&1<f.length&&f[0].replace(e,function(){for(var a=1,c=arguments.length-
2;a<c;a++)arguments[a]===l&&(f[a]=l)}),1<f.length&&f.index<d.length&&g.push.apply(g,f.slice(1)),j=f[0].length,b=h,g.length>=c))break;a.lastIndex===f.index&&a.lastIndex++}b===d.length?(j||!a.test(""))&&g.push(""):g.push(d.slice(b));return g.length>c?g.slice(0,c):g};b.DOMException||(e=(b.DOMException=aa()).prototype=Error(),e.INDEX_SIZE_ERR=1,e.HIERARCHY_REQUEST_ERR=3,e.WRONG_DOCUMENT_ERR=4,e.INVALID_CHARACTER_ERR=5,e.NO_MODIFICATION_ALLOWED_ERR=7,e.NOT_FOUND_ERR=8,e.NOT_SUPPORTED_ERR=9,e.INVALID_STATE_ERR=
11,e.SYNTAX_ERR=12,e.INVALID_MODIFICATION_ERR=13,e.NAMESPACE_ERR=14,e.INVALID_ACCESS_ERR=15);"pageXOffset"in b||D.push(function(){Object.defineProperty(b,"pageXOffset",{get:ba});Object.defineProperty(b,"pageYOffset",{get:ca})});M=b.Event=function(){T("")};S={initEvent:function(a,c,d){(a==l||c==l||d==l)&&T("WRONG_ARGUMENTS_ERR");this.type=a;this.bubbles=c;this.cancelable=d;this.k=s;this.target=n;this.timeStamp||(this.timeStamp=+new za)},initCustomEvent:function(a,c,d,g){S.initEvent.call(this,a,c,d);
this.detail=g},initUIEvent:function(a,c,d,g,h){S.initCustomEvent.call(this,a,c,d,h);this.view=g},initMouseEvent:function(a,c,d,g,h,b,e,f,j,p,r,k,w,t,v){S.initUIEvent.call(this,a,c,d,g,h);this.screenX=b;this.screenY=e;this.clientX=f;this.clientY=j;this.ctrlKey=p;this.altKey=r;this.shiftKey=k;this.metaKey=w;this.button=t;this.relatedTarget=v}};L=M.prototype={constructor:M,preventDefault:function(){this.cancelable!==s&&(H.a.call(this).returnValue=this.returnValue=s,H.f.call(this),this.defaultPrevented=
m)},stopPropagation:function(){H.a.call(this).cancelBubble=this.cancelBubble=m;H.f.call(this)}};L.stopImmediatePropagation=function(){this.__stopNow=m;this.stopPropagation()};L.defaultPrevented=s;for(e in S)ga(S,e)&&(L[e]=function(){S[arguments.callee.name].apply(this,arguments);Ka(this.ietl9_event,this)},L[e].name=e);H=function(a){this.ietl9_event=a;a.returnValue=m;Ka(this,a)};H.a=function(){var a=this.ietl9_event;a===l?T("WRONG_THIS_ERR"):a===n&&(a=H.a.j);return a};H.a.j={};H.f=function(){this.ietl9_event&&
(this.ietl9_event=n)};M=aa();M.prototype=L;M=new M;M.constructor=H;H.prototype=M;t.addEventListener||((b.Text&&b.Text.prototype||f).addEventListener=f.addEventListener=r.addEventListener=b.addEventListener=document.addEventListener=function(a,c,d){if("function"==typeof c||"object"===typeof c&&c.handleEvent){var g=this,h=g._,e=s;g==b&&(!("_"in document)||!("_e_8vj"in document._)||!(a in document._._e_8vj))&&document.addEventListener(a,rb,d);h||(h=g._={});switch(a){case "DOMContentLoaded":if("complete"==
document.readyState)return;g===b&&(g=document);e=m;if(!Oa){Oa=m;var f=function(){try{document.documentElement.doScroll("left")}catch(c){setTimeout(f,50);return}G.call(g,{type:a,isTrusted:m,__custom_event:l})};if("createEventObject"in document&&"doScroll"in document.documentElement)try{b.frameElement||f()}catch(j){}}break;case "load":"tagName"in g&&-1!="SCRIPT|IFRAME".indexOf(g.tagName.toUpperCase())&&(e=m,g.onreadystatechange=function(){"loaded"===g.readyState&&(g.onreadystatechange=n,g.attachEvent("onreadystatechange",
z.call(G,g,{type:a})))},a="readystatechange");break;case "DOMMouseScroll":a="mousewheel"}g.setInterval&&(g!=b&&!g.frameElement)&&(g=b);c.uuid||(c.uuid=++qb);if(!(d=h._h_9e2))d=h._h_9e2=z.call(G,g);h._e_8vj||(h._e_8vj={});a in h._e_8vj?h=h._e_8vj[a]:(h=h._e_8vj[a]=[],e||g.attachEvent("on"+a,d));"_"+c.uuid in h||(h.push(c),h["_"+c.uuid]=n)}},f.addEventListener.__shim__=m,(b.Text&&b.Text.prototype||f).removeEventListener=f.removeEventListener=r.removeEventListener=b.removeEventListener=document.removeEventListener=
function(a,c){var d=this._,g,h,b,e,f;if(!("function"!==typeof c&&!("object"===typeof c&&c.handleEvent)||!c.uuid||!d))if(g=d._h_9e2){h=d._e_8vj&&d._e_8vj[a];for(e=0;f=h[e++];)if(f===c){mb.call(h,e-1,1);delete h["_"+c.uuid];break}if(!h.length){this.detachEvent("on"+a,g);delete d._e_8vj[a];for(b in d._e_8vj)if(ga(d._e_8vj,b))return;delete d._e_8vj;delete d._h_9e2}}},f.removeEventListener.__shim__=m,document.attachEvent("onmousedown",function(){E.b=event.button}),document.attachEvent("onclick",function(){E.b=
l}));t.dispatchEvent||((b.Text&&b.Text.prototype||f).dispatchEvent=f.dispatchEvent=r.dispatchEvent=b.dispatchEvent=document.dispatchEvent=function(a){if(!a.type)return m;a.returnValue||(a.returnValue=m);a.cancelBubble&&(a.cancelBubble=s);delete a.__stopNow;try{return this.fireEvent("on"+a.type,a)}catch(c){if(-2147024809===c.number||this===b||-2146827850===c.number&&!(a.bubbles=s)){a.__custom_event=m;for(var d=a.target=this,g="on"+a.type;!a.cancelBubble&&d;)(g in d&&"function"==typeof d[g]&&(a.__dom0__=
d[g])||"_"in d&&"_e_8vj"in d._)&&G.call(d,a),d=a.bubbles?d===document?document.defaultView:d.parentNode:n,"__dom0__"in a&&(a.__dom0__=l,delete a.__dom0__);return!a.cancelBubble}T(c)}},f.dispatchEvent.__shim__=m);document.createEvent||(document.createEvent=function(){return new H(document.createEventObject())});D.push(function(){function a(a){var c,d=this.nodeName.toUpperCase(),g,b,e,f,k,j,p,r;if(!("INPUT"!=d&&"TEXTAREA"!=d)){"unknown"!=typeof document.activeElement&&(j=document.activeElement);c=document.selection;
this._&&(p=this._.__stop_events__,this._.__stop_events__=m);j&&j._&&(r=j._.__stop_events__,j._.__stop_events__=m);try{this.focus(),g=c.createRange(),b=g.duplicate(),"TEXTAREA"==d?(e=this.value,g=b,a?(g.moveEnd("character",e.length),k=""==g.text?e.length:e.lastIndexOf(g.text)):(g.moveStart("character",-e.length),k=g.text.length)):(b.moveToElementText(this),b.setEndPoint("EndToEnd",g),f=b.text.length-g.text.length,k=a?f:f+g.text.length),j&&j.focus&&j.focus()}catch(t){k=l}this._&&!p&&delete this._.__stop_events__;
j&&(j._&&!r)&&delete j._.__stop_events__;return k}}function c(a,c){if(a!=l){c==l&&(c=a);var d=this.nodeName.toUpperCase();"INPUT"!=d&&"TEXTAREA"!=d||(d=this.createTextRange(),d.collapse(m),d.moveStart("character",a),d.moveEnd("character",c-a),d.select())}}var d=b.HTMLTextAreaElement&&b.HTMLTextAreaElement.prototype,g={setSelectionRange:{value:c},selectionStart:{get:function(){return a.call(this,m)},set:function(d){c.call(this,d,a.call(this));return d}},selectionEnd:{get:function(){return a.call(this)},
set:function(d){c.call(this,a.call(this,m),d);return d}}};Object.defineProperties(b.HTMLInputElement&&b.HTMLInputElement.prototype||j,g);d&&Object.defineProperties(d,g)});W.prototype=[];e=new W;e.push(1);e.length?(b.NodeList=W,va=n):W=b.NodeList=va;W.prototype.item=function(a){return this[a]};document.doctype===n&&7<da&&D.push(function(){var a=document.childNodes[0];Object.defineProperty(a,"nodeType",{get:function(){return 10}});Object.defineProperty(document,"doctype",{configurable:m,enumerable:s,
get:function(){return a}})});f.contains||(f.contains=nb);I.call(Ia,document,"").contains||(b.Text&&b.Text.prototype?D.push(z.call(A,n,Text.prototype,f)):document.createTextNode=function(a){a=I.call(Ia,this,a);a.contains=f.contains;return a});!I.call(sa,document).contains&&(b.HTMLDocument&&b.HTMLDocument.prototype)&&D.push(z.call(A,n,b.HTMLDocument.prototype,f));"children"in t||D.push(function(){Object.defineProperty(j,"children",{get:function(){for(var a=[],c=this.firstChild;c;)1==c.nodeType&&a.push(c),
c=c.nextSibling;return a}})});D.push(function(){function a(a,d){var g;try{a:{var b=a;"element"in b&&("defaults"in b&&"document"in b)&&(b=b.element);var e=b.getBoundingClientRect(),f,j,p;if((p=b.ownerDocument)!==document){if(f=p&&p.body,j=p&&p.documentElement,!f||!j){g=d?e.left:e.top;break a}}else f=document.body,j=r;g=d?e.left+ba()-(j.clientLeft||f.clientLeft||0):e.top+ca()-(j.clientTop||f.clientTop||0)}}catch(t){g=a;b=0;for(e=d?"offsetLeft":"offsetTop";g;)b+=parseInt(g[e],10),g=g.offsetParent;g=
b}return g}Object.defineProperties(j,{offsetLeft:{get:function(){return a(this,m)}},offsetTop:{get:function(){return a(this)}}})});t.childElementCount==l&&D.push(function(){Object.defineProperties(j,{firstElementChild:{get:function(){var a;for(a=this.firstChild;a&&1!=a.nodeType;)a=a.nextSibling;return a}},lastElementChild:{get:function(){var a;for(a=this.lastChild;a&&1!=a.nodeType;)a=a.previousSibling;return a}},nextElementSibling:{get:function(){for(var a=this;(a=a.nextSibling)&&1!=a.nodeType;);
return a}},previousElementSibling:{get:function(){for(var a=this;(a=a.previousSibling)&&1!=a.nodeType;);return a}}})});document.ELEMENT_NODE||(e={ELEMENT_NODE:1,TEXT_NODE:3,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11},A(document,e),A(f,e),A(b.Node,e));"textContent"in t||D.push(function(){Object.defineProperty(f,"textContent",{get:function(){if("innerText"in this)return this.innerText;if("data"in this&&this.appendData)return this.data},
set:function(a){"innerText"in this?this.innerText=a:"data"in this&&this.replaceData&&this.replaceData(0,this.length,a);return a}})});"isEqualNode"in t||(document.isEqualNode=r.isEqualNode=f.isEqualNode=function(a){var c,d;if(a===n||a.nodeType!==this.nodeType||10===a.nodeType&&(this.name!==a.name||this.publicId!==a.publicId||this.systemId!==a.systemId))return s;if(1===a.nodeType){if(this.namespaceURI!=a.namespaceURI||this.prefix!=a.prefix||this.localName!=a.localName)return s;c=0;for(d=this.attributes.length;c<
d;c++){var b=this.attributes[length],e=a.getAttributeNS(b.namespaceURI,b.localName);if(e===n||e.value!==b.value)return s}}if(7===a.nodeType&&(this.target!==a.target||this.data!==a.data)||(3===a.nodeType||8===a.nodeType)&&this.data!==a.data||a.childNodes.length!==this.childNodes.length)return s;c=0;for(d=a.childNodes.length;c<d;c++)if(a.childNodes[c].isEqualNode(this.childNodes[c])===s)return s;return m});document.importNode||(document.importNode=function(a,c){switch(a.nodeType){case 1:var d=document.createElement(a.nodeName),
b=a.attributes,e,f,j;if(b&&0<b.length){f=0;for(j=b.length;f<j;)b=a.attributes[f++],d.setAttribute(b.nodeName,a.getAttribute(b.nodeName))}if(c&&(e=a.childNodes)&&0<e.length){f=0;for(j=e.length;f<j;)d.appendChild(document.importNode(e[f++],c))}return d;case 3:case 4:case 8:return document.createTextNode(a.nodeValue)}Ja("NOT_SUPPORTED_ERR");return n},document.importNode.shim=m);e="compareDocumentPosition";if(!(e in document)){var p,v=p||"DOCUMENT_POSITION_";r[e]=document[e]=f[e]=function(a){return this.contains?
(this!=a&&this.contains(a)&&16)+(this!=a&&a.contains(this)&&8)+(0<=this.sourceIndex&&0<=a.sourceIndex?(this.sourceIndex<a.sourceIndex&&4)+(this.sourceIndex>a.sourceIndex&&2):1)+0:0};p="DISCONNECTED";r[v+p]=document[v+p]=f[v+p]=1;p="PRECEDING";r[v+p]=document[v+p]=f[v+p]=2;p="FOLLOWING";r[v+p]=document[v+p]=f[v+p]=4;p="CONTAINS";r[v+p]=document[v+p]=f[v+p]=8;p="CONTAINED_BY";r[v+p]=document[v+p]=f[v+p]=16}b.getComputedStyle||(b.getComputedStyle=function(a){var c=a.currentStyle||a.runtimeStyle;"getPropertyValue"in
c||(a.runtimeStyle.getPropertyValue=Na.getPropertyValue.bind(a),a.runtimeStyle.setProperty=a.runtimeStyle.removeProperty=b.getComputedStyle.i,a.runtimeStyle.getPropertyPriority=b.getComputedStyle.h,a.runtimeStyle.item=Na.item);var d,e,f;(e=b.CSSStyleDeclaration)&&(e=e.prototype)&&(!("float"in c)||!("opacity"in c))?("float"in c||((d=Object.getOwnPropertyDescriptor(e,"float"))&&delete e["float"],f=z.call(b.getComputedStyle.d,a),Object.defineProperty(a.runtimeStyle,"float",{value:{valueOf:f,toString:f},
configurable:m,writable:m}),d&&Object.defineProperty(e,"float",d)),"opacity"in c||((d=Object.getOwnPropertyDescriptor(e,"opacity"))&&delete e.opacity,f=z.call(b.getComputedStyle.e,a),Object.defineProperty(a.runtimeStyle,"opacity",{value:{valueOf:f,toString:f},configurable:m,writable:m}),d&&Object.defineProperty(e,"opacity",d))):("float"in c||(f=z.call(b.getComputedStyle.d,a),a.runtimeStyle["float"]={valueOf:f,toString:f}),"opacity"in c||(f=z.call(b.getComputedStyle.e,a),a.runtimeStyle.opacity={valueOf:f,
toString:f}));return a.currentStyle},b.getComputedStyle.e=function(){return this.runtimeStyle.msOpacity||this.style.msOpacity||Ma.call(this.style)||Ma.call(this.runtimeStyle)},b.getComputedStyle.d=function(){return this.runtimeStyle.styleFloat||this.style.styleFloat},b.getComputedStyle.i=function(){Ja("NO_MODIFICATION_ALLOWED_ERR")},b.getComputedStyle.h=function(){return""});document.createDocumentFragment=function(){var a=I.call(sa,this);b.DocumentFragment===b.Document&&A(a,b.DocumentFragment.prototype);
return la(a)};wa=(t.innerHTML="<x-x></x-x>",1===t.childNodes.length&&1===t.childNodes[0].nodeType);X="|"+X+"|";ja.ielt9=m;F=la(I.call(sa,document));wa||(la(document),document.head.insertAdjacentHTML("beforeend","<br><style>article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}</style>"));0===I.call(ta,document,"x-x").cloneNode().outerHTML.indexOf("<:x-x>")&&(Y=F.appendChild("createElement"in F&&F.createElement("div")||F.ownerDocument.createElement("div")),
Pa=8===da?t.cloneNode:8>da?f.cloneNode:l,f.cloneNode=function(a){var c,d;Aa.test(this.nodeName)?c=I.call(this.__nativeCloneNode__||Pa,this,a):(Y.innerHTML="",d=a?this.outerHTML:this.outerHTML.replace(/<(\w+)([^>]*)>[\W\w]*$/,"<$1$2></$1>"),Y.innerHTML=d.replace(/^\<\:/,"<").replace(/\<\/\:([\w\-]*\>)$/,"<$1"),c=Y.firstChild,!c&&!a&&((d=d.match(ob))&&(d=d[1]),d&&(F.createElement(d),Y.innerHTML=d,c=Y.firstChild)));return F.appendChild(c)});t=e=M=nodeList_methods_fromArray=wa=n;if(f.ie||!(7<da)){var sb=
Array.prototype.unshift,qa=!document.readyState,Z=["/a.ielt8.htc"],$="{behavior:",Qa=[],Ra,Sa,Ta,C,tb=b.scrollTo,ub=b.scrollBy;for(e=Z.length;0<=--e;)$+=' url("'+Z[e]+'")';$+="}";qa&&(document.readyState="uninitialized");f.ielt8=m;b.__ielt8__wontfix=Qa;var ma=/\s*(\S+)\s*/g,na="(?=(^|.*\\s)$1(\\s|$))",hb=/^([\w\-\|]+)?((?:\.(?:[\w-]+))+)?$|^#([\w-]+$)/,db=/\s*([,>+~ ])\s*/g,eb=/\~\=/g,gb=/(^[>+~ ]?|,|\>|\+|~| ).*?(?=[,>+~ ]|$)/g,Ca=/\./g,cb=/\s/g,Va=/^([,>+~ ])?([\|\*\w-]*)\#?([\w-]*)((?:\.?[\w-])*)(\[.+\])?(?:\:(.+))?$/,
Xa=/^\[?['"]?(.*?)['"]?(?:([\*~&\^\$\@!]?=)['"]?(.*?)['"]?)?\]?$/,Za=/^([^(]+)(?:\((.+)\))?$/,fb=/\-child\((\dn)\+(\d)\)/g,ab=/(?:([-]?\d*)n)?(?:(%|-)(\d*))?/,ib=/([,>+~ ])/,Wa={"":1," ":1,",":1,">":2,"~":3,"+":4},Ya={"":1,"=":2,"&=":3,"^=":4,"$=":5,"*=":6,"|=":7,"!=":8,"@=":9},$a={"nth-child":0,"nth-last-child":1,"only-child":2,"first-child":3,"last-child":4,root:5,empty:6,checked:7,lang:8,enabled:9,disabled:10,selected:11,contains:12,not:13,matches:14,"read-only":15,"read-write":16},Ea=function(a){for(var c=
a.length>>>0,d=new W,b=0;b<c;b++)b in a&&d.push(a[b]);return d},oa=function(a){for(;(a=a.nextSibling)&&1!=a.nodeType;);return a};e="matchesSelector";r[e]||(j[e]=r[e]=fa);e="matches";r[e]||(j[e]=r[e]=fa);e="querySelectorAll";document[e]||(j[e]=r[e]=document[e]=function(a,c){return pa.call(this,a,s,c)});e="querySelector";document[e]||(j[e]=r[e]=document[e]=function(a,c){return pa.call(this,a,m,c)[0]||n});e="getElementsByClassName";document[e]||(j[e]=r[e]=document[e]=function(a){a=RegExp(a.replace(ma,
na));for(var c=this.all,d,b=-1,e=[];d=c[++b];)d.className&&a.test(d.className)&&e.push(d);return e});Q.g={};Q.c=function(a,c){if(c in this)return this[c];var d=a.nodeName;if(!(a=Q.g[d]))a=Q.g[d]=ta(d);return this[c]=a.getAttribute(c)!==n};j.setAttribute=function(a,c,d){if(d==l){var b=a.toLowerCase();d=1;V[b]!==l?a=V[b]:ea[b]!==l?d=2:0!==b.indexOf("data-")&&!Q.c(this,b)&&(a=a.toUpperCase());c+=""}return Function.prototype.call.call(this.__setAttribute__,this,a,c,d)};j.getAttribute=function(a,c){var d;
d=a.toLowerCase();var b,e;if(e=c==l)c=1;if(V[d]!==l)d=V[d];else{if(ea[d]!==l)return I.call(this.__getAttribute__,this,a,2);d=0!==d.indexOf("data-")&&!Q.c(this,d)?a.toUpperCase():a}b=I.call(this.__getAttribute__,this,d,c);b!==n?e&&(b+=""):!(d in this)&&"string"===typeof this[a]?(b=this[d]=this[a],this.__removeAttribute__(a),b+=""):b=n;return b};j.removeAttribute=function(a,c){var b,e;c==l&&(c=1,e=a.toLowerCase(),V[e]!==l?b=V[e]:ea[e]!==l?c=2:0!==e.indexOf("data-")&&!Q.c(this,e)&&(b=a.toUpperCase()));
return I.call(this.__removeAttribute__,this,b||a,c)};f.hasAttribute||(f.hasAttribute=function(a){return this.getAttribute(a)!==n});var y=function(a){return function(){return a}};f.l=y(1);f.p=y(2);f.q=y(3);f.r=y(4);f.s=y(7);f.t=y(8);f.u=y(9);f.m=y(10);f.n=y(11);f.o=y(16);f.__ielt8__element_init__=function(){var a=this;a.element&&(a=a.element);"prepend"in a||(a.after=j.after,a.before=j.before,a.append=j.append,a.prepend=j.prepend,a.replace=j.replace,a.remove=j.remove);"isEqualNode"in a||(a.isEqualNode=
f.isEqualNode);"compareDocumentPosition"in a||(a.compareDocumentPosition=f.compareDocumentPosition);"getElementsByClassName"in a||(a.getElementsByClassName=j.getElementsByClassName);"addEventListener"in a||(a.addEventListener=b.addEventListener,a.removeEventListener=b.removeEventListener,a.dispatchEvent=b.dispatchEvent);"querySelector"in a||(a.querySelectorAll=j.querySelectorAll,a.querySelector=j.querySelector);"matchesSelector"in a||(a.matchesSelector=a.matches=fa);"hasAttribute"in a||(a.hasAttribute=
j.hasAttribute);"setSelectionRange"in a||(a.setSelectionRange=j.setSelectionRange);try{this.setAttribute!=j.setAttribute&&(this.__setAttribute__=this.setAttribute,this.__getAttribute__=this.getAttribute,this.__removeAttribute__=this.removeAttribute,this.setAttribute=j.setAttribute,this.getAttribute=j.getAttribute,this.removeAttribute=j.removeAttribute),a.cloneNode!==f.cloneNode&&(a.__nativeCloneNode__=a.cloneNode,a.cloneNode=f.cloneNode),f.contains&&(a.contains=f.contains)}catch(c){Qa.push(a)}};Ta=
f.__ielt8_Node_behavior_apply=function(a){for(e=Z.length;0<=--e;)try{a.addBehavior(Z[e])}catch(c){}};Sa=f.cloneNode;f.cloneNode=function(a){a=I.call(Sa||this.__nativeCloneNode__,this,a);Ta(a);return a};1!=[].unshift(0)&&(Array.prototype.unshift=function(){sb.apply(this,arguments);return this.length});Ra=document.createElement;document.createElement=function(a){a=I.call(Ra,document,a);for(e=Z.length;0<=--e;)try{a.addBehavior(Z[e])}catch(c){}return a};b.XMLHttpRequest||(b.XMLHttpRequest=function(){var a;
try{a=new ActiveXObject("Msxml2.XMLHTTP")}catch(c){a=new ActiveXObject("Microsoft.XMLHTTP")}var b=a.send;a.send=function(){this.setRequestHeader("If-Modified-Since","Sat, 1 Jan 2000 00:00:00 GMT");b.apply(this,arguments)}});!("pageXOffset"in b)&&b.attachEvent&&(b.pageXOffset=b.pageYOffset=0,C="CSS1Compat"===document.compatMode?function(){b.scrollX=b.pageXOffset=document.body.parentNode.scrollLeft;b.scrollY=b.pageYOffset=document.body.parentNode.scrollTop}:function(){b.scrollX=b.pageXOffset=document.body.scrollLeft;
b.scrollY=b.pageYOffset=document.body.scrollTop},b.attachEvent("onscroll",C),b.scroll=b.scrollTo=function(a,b){tb(a,b);C()},b.scrollBy=function(a,b){ub(a,b);C()});document.addEventListener("DOMContentLoaded",Fa);b.attachEvent("onload",Ga);var xa=$,O=document.getElementById("ielt8_style_prev_for_behaviour"),ya="";O&&(ya=O.getAttribute("data-url")||"",O.id="");ya&&xa.replace(" url("," url("+ya+") url(");O=ta("style");O.id="ielt8_style_prev_for_behaviour";O.type="text/css";O.setAttribute("data-url",
xa.replace("{behavior:","").replace(")}",")"));O.styleSheet.cssText="*"+xa;document.head.appendChild(O);$=e=n}}}.call(window,function(A,E){for(var G in E)Object.prototype.hasOwnProperty.call(E,G)&&!Object.prototype.hasOwnProperty.call(A,G)&&(A[G]=E[G]);return A});
