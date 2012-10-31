/* ES6/DOM4 polyfill for IE < 8 | @version 0.7 final | MIT License | github.com/termi */
;(function() {
var k=void 0,l=!0,s=null,t=!1;function Y(){return function(){}}
(function(d,z){function B(a){if(!("__isFixed"in a)){var b="button"in a&&a.button;a.__isFixed=l;if("click"===a.type||"dblclick"===a.type)a.detail===k&&(a.detail="click"===a.type?1:2),!a.button&&B.b!==k&&(b=B.b);z(a,N);a.defaultPrevented||(a.defaultPrevented=t);a.target||(a.target=a.srcElement||document);a.relatedTarget===k&&a.fromElement&&(a.relatedTarget=a.fromElement==a.target?a.toElement:a.fromElement);"clientX"in a&&a.pageX==s&&(a.pageX=a.clientX+Z()-(p.clientLeft||0),a.pageY=a.clientY+$()-(p.clientTop||
0));!a.which&&b&&(a.which=b&1?1:b&2?3:b&4?2:0);"timeStamp"in a||(a.timeStamp=+new qa);"eventPhase"in a||(a.eventPhase=a.target==this?2:3);"currentTarget"in a||(a.currentTarget=this);!a.attrName&&a.propertyName&&(a.attrName=fa.call(a.propertyName,".")[0]);return a}}function aa(a){if(B!==k){var b=this._,e,h,g,d;if(!b.__stop_events__){e=[];h=[];d="_e_8vj"+(La?"-":"");if(!b||!b[d])if("__dom0__"in a)b||(b={}),b[d]||(b[d]={});else return;a||(a=window.event);if("__custom_event"in a)g=a;else if(!(g=a.__customEvent__))a.bubbles==
k&&(a.bubbles=l),a.cancelable==k&&(a.cancelable=l),g=a.__customEvent__=new v(a),g.initEvent(a.type,a.bubbles,a.cancelable),B.call(this,g),g.e=l,g.__custom_event=k;g.ietl9_event=a;a.currentTarget=this;b=b[d][g.type];"__dom0__"in a&&((b||(b=[]))[0]=a.__dom0__);if(b){for(var c in b)if(E(b,c)){d=b[c];var f;"object"===typeof d&&(f=d,d=d.handleEvent);try{if(d&&(g.result=D.call(d,f||this,g))===t)g.preventDefault(),g.stopPropagation()}catch(q){e.push(q),h.push(q.message),console&&console.error(q)}if(g.__stopNow)break}b[0]=
k;delete b[0];a.returnValue=g.returnValue;a.cancelBubble=g.cancelBubble;1==e.length?J(e[0]):1<e.length&&(h=Error("Multiple errors thrown : "+g.type+" :  : "+h.join("|")),h.f=e,J(h))}this===document&&(!g.cancelBubble&&3===g.eventPhase)&&(aa.call(this.defaultView,g),a.cancelBubble=l)}}}function Q(){}function Ma(){var a=document.querySelectorAll("#z").constructor.prototype;if(a&&a!==Array.prototype)for(var b in ga)E(b,ga)&&(a[b]||(a[b]=function(){return ba.call(Array.prototype[b],Array.from(this),arguments)}))}
function ha(a){var b=this.__orig__createElement__(a);if(ra.test(a))return b;~R.indexOf("|"+a+"|")||(ia.push(a),R+=a+"|",(C.__orig__createElement__||C.createElement)(a));return C.appendChild(b)}function ja(a){var b=-1;if(a.createElement){for(;++b<ia.length;)a.createElement(ia[b]);a.createElement!==ha&&!("ielt9"in a.createElement)&&(a.__orig__createElement__=a.createElement,a.createElement=ha)}return a}function Na(a){var b=document.getElementById("ielt8_style_prev_for_behaviour"),e="";b&&(e=b.getAttribute("data-url")||
"",b.id="");e&&a.replace(" url("," url("+e+") url(");b=sa("style");b.id="ielt8_style_prev_for_behaviour";b.type="text/css";b.setAttribute("data-url",a.replace("{behavior:","").replace(")}",")"));b.styleSheet.cssText="*"+a;document.head.appendChild(b)}function ta(a,b,e,h,g,d){var c=a.match(Oa),a=e||[],f=!!g,q=f&&(b={})||(!b?document:"length"in b?b[0]:b),m,r=0,i,w,j=Pa[c[1]||""]||0,u=2<j,v=c[2],y=!!v,z=c[3],B=!!z,C=c[4],A=!!C,G="*"===v,O,L,n,H,S,P,x,T,N,U,E,K,F,I,J,M,Q,R;y&&(v=G?k:v.replace("|",":").toUpperCase());
A&&(C=C.replace(ua," "),N=RegExp(C.replace(ka,la)));if(U=c[5]){U=fa.call(U,"][");for(O=-1;H=U[++O];)if(H=U[O]=H.match(Qa),H[2]=Ra[H[2]],(F=H[3])&&" i"==F.substr(-2))F.substr(0,F.length-2),H[4]=l}if(c=c[6])c=c.match(Sa),P=Ta[c[1]],2>P&&c[2]&&(S=/\D/.test(c[2])?"even"===c[2]?[s,2]:"odd"===c[2]?[s,2,"%",1]:c[2].match(Ua):[s,0,"%",c[2]],M=P?"nodeIndexLast":"nodeIndex",Q=P?"lastChild":"firstChild",R=P?"previousSibling":"nextSibling");f&&(j=0);if(1==j)if(B){g=document.getElementsByName(z);E=[];for(O=-1;i=
g[++O];)i.id==z&&E.push(i);g=B=y=k}else v||(v="*",G=!A),y=t;f=(!("length"in b)||1===b.length)&&!h&&!U&&!c&&!y&&!A&&!B;do{switch(j){case 0:i=g[0];break;case 1:if(z)if(g=[],E.length)for(O=-1;i=E[++O];){if(q===document||q.contains(i))g.push(i),E.splice(O--,1)}else return a;else"BODY"===v&&9===q.nodeType?(g=[q.body],A=!!C,f=f&&!A):g=q.getElementsByTagName(v);i=g[0];break;case 2:g=q.children;i=g[0];break;case 3:m=b[r+1];case 4:if(!(i=ma(q)))continue}if(f)return g;q=0;if(i){do if((!G||1===i.nodeType)&&
!(h&&(L=i.sourceIndex)in e)){if(n=!(y&&(w=i.nodeName.toUpperCase())!==v||B&&i.id!==z||A&&(!i.className||!N.test(i.className)))){if(U){O=-1;for(J=i.attributes;n&&(H=U[++O])&&(n=(I=H[1])in J);)if(x=I in va?va[I](i):(x=J[I])&&(x.specified||I in Va)&&""!==x.nodeValue?x.nodeValue:s,K=H[2],x===s){if(!(n=8==K))n=t}else switch(H[4]&&(x=x.toUpperCase()),T=H[3],K){case 1:n=!!x||""===x;break;case 2:n=x===T;break;case 3:case 8:n=RegExp("(^| +)"+T+"($| +)").test(x);8==K&&(n=!n);break;case 4:case 5:case 6:F=x.indexOf(T);
n=6===K?~F:5===K?F==x.length-T.length:!F;break;case 7:n=x===T||!!~x.indexOf(T+"-");break;case 9:n=!!~(" "+x.replace(Wa," ")+" ").indexOf(" "+T+" ")}}if(n&&c)switch(P){case 0:case 1:if(!S[1]&&!S[3])break;I=i[M]||0;K=S[3]?("%"===S[2]?-1:1)*S[3]:0;F=S[1];if(I)n=!F?!(I+K):!((I+K)%F);else{n=t;w=i.parentNode[Q];do if(1==w.nodeType&&(w[M]=++I)&&i===w&&(!F?!(I+K):!((I+K)%F)))n=l;while(!n&&(w=w[R]))}break;case 2:case 3:for(w=i;(w=w.previousSibling)&&1!==w.nodeType;);n=!w;if(!n||3==P)break;case 4:n=!ma(i);
break;case 5:n="HTML"==(w||i.nodeName.toUpperCase());break;case 6:n=!i.firstChild;break;case 7:n=!!i.checked;break;case 8:n=i.lang==S||p.lang==S;break;case 9:case 10:n="disabled"in i&&"form"in i&&(10==P?i.disabled===l&&"hidden"!==i.type:i.disabled===t);break;case 11:n=i.parentNode.selectedIndex&&!!i.selected;break;case 12:n=!!~(i.textContent||i.data||i.innerText||i.nodeValue||i.value||"").indexOf(c[2]);break;case 13:case 14:n=ca.call(i,c[2]);13==P&&(n=!n);break;case 15:case 16:w||(w=i.nodeName.toUpperCase()),
n=("INPUT"==w||"TEXTAREA"==w||D.call(i,i.__getAttribute__||i.getAttribute,"contenteditable")!==s)&&!i.q,16==P&&(n=!n)}}if(n){if(d)return[i];h?a[L]=i:a.push(i)}w=k}while(i=u?4===j?k:i===m?k:ma(i):g[++q])}i=k}while(q=b[++r]);return a}function na(a,b,e){e||(e=this);var a=wa.call(a.replace(Xa,"$1")),h=[],g,d,c,f=l,q=t,j,m=a.replace(Ya,"@=").replace(Za,"-child\\($1%$2\\)").match($a);for(g=e;a=m.shift();){d=m[0];c=!d||","===d.charAt(0);if(!q)if(f&&"nodeType"in e&&9===e.nodeType&&"BODY"===a.toUpperCase())g=
[e.body],c&&(h=g);else if(f&&":root"===a)g=[p],c&&(h=g);else if(g&&(!(e=g)||0===g.length))g=s,q=l;else{if(f=!(!c||!j&&!(d||1<e.length)))j=l;g=ta(a,e,c?h:[],f,s,b&&c)}if(f=c)!h.length&&g&&(j=t,h=xa(g)),g=s,e=this,q=t;if(!d||","===d)break}return j?xa(h):h}function ca(a){if(!a)return t;if("*"===a||this===p&&":root"===a||this===document.body&&"BODY"===a.toUpperCase())return l;var b,e,h=t,g,a=wa.call(a);if(b=a.match(ab))switch(a.charAt(0)){case "#":return this.id===a.slice(1);default:return(h=!(e=b[2])||
this.className&&RegExp(e.replace(ua," ").replace(ka,la)).test(this.className))&&!(e=b[1])||this.tagName&&this.tagName.toUpperCase()===e.toUpperCase()}else{if(bb.test(a)){e=na.call(this.ownerDocument,a);for(g in e)if(E(e,g)&&(h=e[g]===this))return l;return t}e=ta(a,s,t,s,this,l);return e[0]===this}}function ya(){document.removeEventListener("DOMContentLoaded",ya);da&&(document.readyState="interactive");L&&L()}function za(){d.detachEvent("onload",za);da&&(document.readyState="complete");L&&L()}var y=
window.eval&&eval("/*@cc_on 1;@*/")&&+((/msie (\d+)/i.exec(navigator.userAgent)||[])[1]||0)||k;if(9>y){d.Element||((d.Element=ActiveXObject).prototype.ie=l);d.HTMLElement||(d.HTMLElement=d.Element);d.Node||(d.Node=d.Element);var r;d.DocumentFragment||(d.DocumentFragment=d.Document||d.HTMLDocument||(r=Y(),r.prototype={},r));d.Document||(d.Document=d.DocumentFragment);d._={ielt9shims:[],orig_:d._};var j=d._.ielt9shims,oa=document.createDocumentFragment,sa=document.createElement,Aa=document.createTextNode,
p=document.documentElement,J=function(a){throw a instanceof Error?a:Error(a);},Ba=function(a){var b=Object.create(DOMException.prototype);b.code=DOMException[a];b.message=a+": DOM Exception "+b.code;throw b;},Ca=function(a,b){for(var e in b)if(E(b,e)&&a[e]!==b[e])try{a[e]=b[e]}catch(h){}},wa=String.prototype.trim||function(){for(var a=this.replace(cb,""),b=a.length;db.test(a.charAt(--b)););return a.slice(0,b+1)},fa=String.prototype.split,eb=String.prototype.substr,Da=Array.prototype.slice,ba=Function.prototype.apply,
D=Function.prototype.call,G=Function.prototype.bind||function(a,b){var e=this,h=Da.call(arguments,1);return function(){return ba.call(e,a,h.concat(Da.call(arguments)))}},E=G.call(Function.prototype.call,Object.prototype.hasOwnProperty);r=document.createElement("p");var f=d.Node.prototype,m=d.Element.prototype,fb=r.contains||f.contains,qa=Date,gb=/^\<([\w\:\-]*)[\>\ ]/i,cb=/^\s+/,db=/\s/,pa,c,A,ga="every filter forEach indexOf join lastIndexOf map reduce reduceRight reverse slice some toString".split(" "),
hb=/alpha\(opacity=([^\)]+)\)/,ea=function(){var a=(this.filter||"").match(hb);return a?parseInt(a[1])/100+"":""},Ea={getPropertyValue:function(a){return this.getAttribute(a)},removeProperty:function(a){this.removeAttribute(a)},setProperty:function(a,b,e){"important"!=e?this.setAttribute(a,b):(e=RegExp(a+"\\s*:\\s*(\\S+)\\s*(?:[$;]|(?:(!important)\\s*[$;]))","i"),a=";"+a+":"+b+" !important;",this.cssText=e.test(this.cssText)?this.cssText.replace(e,a):this.cssText+a)},getPropertyPriority:function(a){return((this.cssText||
"").match(RegExp(a+"\\s*:\\s*(\\S+)\\s*(?:[$;]|(?:(!important)\\s*[$;]))","i"))||[])[2]||""},item:Y()},V={"for":"htmlFor","class":"className",value:"defaultValue"},v,M,N,ib=1,jb=Y(),La=t,Fa,R="abbr|article|aside|audio|canvas|command|datalist|details|figure|figcaption|footer|header|hgroup|keygen|mark|meter|nav|output|progress|section|source|summary|time|video",ia=R.split("|"),ra=/^<|^(?:a|b|button|code|div|fieldset|form|map|h1|h2|h3|h4|h5|h6|i|object|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul|optgroup)$/i,
u,C,W,Ga,Z,$;"CSS1Compat"===document.compatMode?(Z=function(){return p.scrollLeft},$=function(){return p.scrollTop}):(Z=function(){return document.body.scrollTop},$=function(){return document.body.scrollLeft});document.head||(document.head=document.getElementsByTagName("head")[0]);"defaultView"in document||(document.defaultView=document.parentWindow);c=t;try{c=isNaN.apply(s,{})}catch(mb){}c||(Function.prototype.apply=function(a,b){try{return b!=k?ba.call(this,a,b):ba.call(this,a)}catch(e){return(-2146823260!=
e.number||b.length===k||"string"===typeof b)&&J(e),ba.call(this,a,Array.from(b))}});"b"!=="ab".substr(-1)&&(String.prototype.substr=function(a,b){return eb.call(this,0>a?0>(a=this.length+a)?0:a:a,b)});if("te".split(/(s)*/)[1]!=k||3!="1_1".split(/(_)/).length)pa=/()??/.exec("")[1]===k,String.prototype.split=function(a,b){var e=this;if(!(a instanceof RegExp))return a===k&&0===b?[]:fa.call(e,a,b);var h=[],g=0,d=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.r?"y":""),c=RegExp(a.source,d+"g"),f=s,q,j,
e=e+"";pa||(f=RegExp("^"+c.source+"$(?!\\s)",d));if(b===k||0>+b)b=Infinity;else if(b=Math.floor(+b),!b)return[];for(;q=c.exec(e);){d=q.index+q[0].length;if(d>g&&(h.push(e.slice(g,q.index)),!pa&&1<q.length&&q[0].replace(f,function(){for(var a=1,b=arguments,e=b.length-2;a<e;a++)b[a]===k&&(q[a]=k)}),1<q.length&&q.index<e.length&&h.push.apply(h,q.slice(1)),j=q[0].length,g=d,h.length>=b))break;c.lastIndex===q.index&&c.lastIndex++}g===e.length?(j||!c.test(""))&&h.push(""):h.push(e.slice(g));return h.length>
b?h.slice(0,b):h};d.DOMException||(c=(d.DOMException=Y()).prototype=Error(),c.INDEX_SIZE_ERR=1,c.HIERARCHY_REQUEST_ERR=3,c.WRONG_DOCUMENT_ERR=4,c.INVALID_CHARACTER_ERR=5,c.NO_MODIFICATION_ALLOWED_ERR=7,c.NOT_FOUND_ERR=8,c.NOT_SUPPORTED_ERR=9,c.INVALID_STATE_ERR=11,c.SYNTAX_ERR=12,c.INVALID_MODIFICATION_ERR=13,c.NAMESPACE_ERR=14,c.INVALID_ACCESS_ERR=15,c.TYPE_MISMATCH_ERR=17);"pageXOffset"in d||j.push(function(){Object.defineProperty(d,"pageXOffset",{get:Z});Object.defineProperty(d,"pageYOffset",{get:$})});
A=d.Event=function(){J("")};M={initEvent:function(a,b,e){(a==k||b==k||e==k)&&J("WRONG_ARGUMENTS_ERR");this.type=a;this.bubbles=b;this.cancelable=e;this.e=t;this.target=s;this.timeStamp||(this.timeStamp=+new qa)},initCustomEvent:function(a,b,e,h){M.initEvent.call(this,a,b,e);this.detail=h},initUIEvent:function(a,b,e,h,g){M.initCustomEvent.call(this,a,b,e,g);this.view=h},initMouseEvent:function(a,b,e,h,g,d,c,f,q,j,m,i,w,p,r){M.initUIEvent.call(this,a,b,e,h,g);this.screenX=d;this.screenY=c;this.clientX=
f;this.clientY=q;this.ctrlKey=j;this.altKey=m;this.shiftKey=i;this.metaKey=w;this.button=p;this.relatedTarget=r}};N=A.prototype={constructor:A,preventDefault:function(){this.cancelable!==t&&(v.a.call(this).returnValue=this.returnValue=t,v.c.call(this),this.defaultPrevented=l)},stopPropagation:function(){v.a.call(this).cancelBubble=this.cancelBubble=l;v.c.call(this)}};N.stopImmediatePropagation=function(){this.__stopNow=l;this.stopPropagation()};N.defaultPrevented=t;for(c in M)E(M,c)&&(N[c]=function(){M[arguments.callee.name].apply(this,
arguments);Ca(this.ietl9_event,this)},N[c].name=c);v=function(a){this.ietl9_event=a;a.returnValue=l;Ca(this,a)};v.a=function(){var a=this.ietl9_event;a===k?J("WRONG_THIS_ERR"):a===s&&(a=v.a.d);return a};v.a.d={};v.c=function(){this.ietl9_event&&(this.ietl9_event=s)};A=Y();A.prototype=N;A=new A;A.constructor=v;v.prototype=A;document.addEventListener||(f.addEventListener=p.addEventListener=d.addEventListener=document.addEventListener=function(a,b,e){if("function"==typeof b||"object"===typeof b&&b.handleEvent){var h=
this,g=h._,c=t;h==d&&(!("_"in document)||!("_e_8vj"in document._)||!(a in document._._e_8vj))&&document.addEventListener(a,jb,e);g||(g=h._={});switch(a){case "DOMContentLoaded":if("complete"==document.readyState)return;h===d&&(h=document);c=l;if(!Fa){Fa=l;var f=function(){try{document.documentElement.doScroll("left")}catch(b){setTimeout(f,50);return}aa.call(h,{type:a,isTrusted:l,__custom_event:k})};if("createEventObject"in document&&"doScroll"in document.documentElement)try{d.frameElement||f()}catch(j){}}break;
case "load":"tagName"in h&&"SCRIPT"===h.tagName.toUpperCase()&&(c=l,h.onreadystatechange=function(){"loaded"===h.readyState&&(h.onreadystatechange=s,h.attachEvent("onreadystatechange",G.call(aa,h,{type:a})))},a="readystatechange");break;case "DOMMouseScroll":a="mousewheel"}h.setInterval&&(h!=d&&!h.frameElement)&&(h=d);b.uuid||(b.uuid=++ib);if(!(e=g._h_9e2))e=g._h_9e2=G.call(aa,h);g._e_8vj||(g._e_8vj={});g._e_8vj[a]||(g._e_8vj[a]={},c||h.attachEvent("on"+a,e));g._e_8vj[a][b.uuid]=b}},f.addEventListener.__shim__=
l,f.removeEventListener=p.removeEventListener=d.removeEventListener=document.removeEventListener=function(a,b){var e=this._,h,g,c;if(!("function"!=typeof b||!b.uuid||!e))if(h=e._h_9e2){g=e._e_8vj&&e._e_8vj[a];delete g[b.uuid];for(c in g)if(E(g,c))return;this.detachEvent("on"+a,h);delete e._e_8vj[a];for(c in e._e_8vj)if(E(e._e_8vj,c))return;delete e._e_8vj}},f.removeEventListener.__shim__=l,document.attachEvent("onmousedown",function(){B.b=event.button}),document.attachEvent("onclick",function(){B.b=
k}));document.dispatchEvent||(f.dispatchEvent=p.dispatchEvent=d.dispatchEvent=document.dispatchEvent=function(a){if(!a.type)return l;a.returnValue||(a.returnValue=l);a.cancelBubble&&(a.cancelBubble=t);delete a.__stopNow;try{return this.fireEvent("on"+a.type,a)}catch(b){if(-2147024809===b.number||this===d||-2146827850===b.number&&!(a.bubbles=t)){a.__custom_event=l;for(var e=a.target=this,c="on"+a.type;!a.cancelBubble&&e;)(c in e&&"function"==typeof e[c]&&(a.__dom0__=e[c])||"_"in e&&"_e_8vj"in e._)&&
aa.call(e,a),e=a.bubbles?e===document?document.defaultView:e.parentNode:s,"__dom0__"in a&&(a.__dom0__=k);return!a.cancelBubble}J(b)}},f.dispatchEvent.__shim__=l);document.createEvent||(document.createEvent=function(){return new v(document.createEventObject())});j.push(function(){function a(a){var b,e=this.nodeName.toUpperCase(),c,d,h,f,i,j,m,p;if(!("INPUT"!=e&&"TEXTAREA"!=e)){j=document.activeElement;b=document.selection;this._&&(m=this._.__stop_events__,this._.__stop_events__=l);j._&&(p=j._.__stop_events__,
j._.__stop_events__=l);try{this.focus(),c=b.createRange(),d=c.duplicate(),"TEXTAREA"==e?(h=this.value,c=d,a?(c.moveEnd("character",h.length),i=""==c.text?h.length:h.lastIndexOf(c.text)):(c.moveStart("character",-h.length),i=c.text.length)):(d.moveToElementText(this),d.setEndPoint("EndToEnd",c),f=d.text.length-c.text.length,i=a?f:f+c.text.length),j&&j.focus&&j.focus()}catch(r){i=k}this._&&!m&&delete this._.__stop_events__;j._&&!p&&delete j._.__stop_events__;return i}}function b(a,b){if(a!=k){b==k&&
(b=a);var e=this.nodeName.toUpperCase();"INPUT"!=e&&"TEXTAREA"!=e||(e=this.createTextRange(),e.collapse(l),e.moveStart("character",a),e.moveEnd("character",b-a),e.select())}}var e=d.HTMLTextAreaElement&&d.HTMLTextAreaElement.prototype,c={setSelectionRange:{value:b},selectionStart:{get:function(){return a.call(this,l)},set:function(e){b.call(this,e,a.call(this));return e}},selectionEnd:{get:function(){return a.call(this)},set:function(e){b.call(this,a.call(this,l),e);return e}}};Object.defineProperties(d.HTMLInputElement&&
d.HTMLInputElement.prototype||m,c);e&&Object.defineProperties(e,c)});Q.prototype=[];c=new Q;c.push(1);c.length?d.NodeList=Q:(c=document.createElement("iframe"),c.style.display="none",(document.body||p).appendChild(c),c.contentWindow.document.write("<script>parent.NodeList=Array;<\/script>"),Q=d.NodeList);Q.prototype.item=function(a){return this[a]};document.querySelectorAll&&Ma();document.doctype===s&&7<y&&j.push(function(){var a=document.childNodes[0];Object.defineProperty(a,"nodeType",{get:function(){return 10}});
Object.defineProperty(document,"doctype",{configurable:l,enumerable:t,get:function(){return a}})});f.contains||(f.contains=fb);D.call(Aa,document,"").contains||(d.Text&&d.Text.prototype?j.push(G.call(z,s,Text.prototype,f)):document.createTextNode=function(a){a=D.call(Aa,this,a);a.contains=f.contains;return a});!D.call(oa,document).contains&&(d.HTMLDocument&&d.HTMLDocument.prototype)&&j.push(G.call(z,s,d.HTMLDocument.prototype,f));"children"in r||j.push(function(){Object.defineProperty(m,"children",
{get:function(){for(var a=[],b=this.firstChild;b;)1==b.nodeType&&a.push(b),b=b.nextSibling;return a}})});j.push(function(){function a(a,e){var c;try{var d=a;"element"in d&&("defaults"in d&&"document"in d)&&(d=d.element);var f=d.getBoundingClientRect(),j=document.body;c=!p.contains(d)?e?f.left:f.top:e?f.left+Z()-(p.clientLeft||j.clientLeft||0):f.top+$()-(p.clientTop||j.clientTop||0)}catch(m){c=a;d=0;for(f=e?"offsetLeft":"offsetTop";c;)d+=parseInt(c[f],10),c=c.offsetParent;c=d}return c}Object.defineProperties(m,
{offsetLeft:{get:function(){return a(this,l)}},offsetTop:{get:function(){return a(this)}}})});r.childElementCount==k&&j.push(function(){Object.defineProperties(m,{firstElementChild:{get:function(){var a;for(a=this.firstChild;a&&1!=a.nodeType;)a=a.nextSibling;return a}},lastElementChild:{get:function(){var a;for(a=this.lastChild;a&&1!=a.nodeType;)a=a.previousSibling;return a}},nextElementSibling:{get:function(){for(var a=this;(a=a.nextSibling)&&1!=a.nodeType;);return a}},previousElementSibling:{get:function(){for(var a=
this;(a=a.previousSibling)&&1!=a.nodeType;);return a}}})});document.ELEMENT_NODE||(c={ELEMENT_NODE:1,TEXT_NODE:3,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11},z(document,c),z(f,c),z(d.Node,c));"textContent"in r||j.push(function(){Object.defineProperty(f,"textContent",{get:function(){if("innerText"in this)return this.innerText;if("data"in this&&this.appendData)return this.data},set:function(a){"innerText"in this?this.innerText=a:"data"in
this&&this.replaceData&&this.replaceData(0,this.length,a);return a}})});"isEqualNode"in r||(document.isEqualNode=p.isEqualNode=f.isEqualNode=function(a){var b,e;if(a===s||a.nodeType!==this.nodeType||10===a.nodeType&&(this.name!==a.name||this.publicId!==a.publicId||this.systemId!==a.systemId))return t;if(1===a.nodeType){if(this.namespaceURI!=a.namespaceURI||this.prefix!=a.prefix||this.localName!=a.localName)return t;b=0;for(e=this.attributes.length;b<e;b++){var c=this.attributes[length],d=a.getAttributeNS(c.namespaceURI,
c.localName);if(d===s||d.value!==c.value)return t}}if(7===a.nodeType&&(this.target!==a.target||this.data!==a.data)||(3===a.nodeType||8===a.nodeType)&&this.data!==a.data||a.childNodes.length!==this.childNodes.length)return t;b=0;for(e=a.childNodes.length;b<e;b++)if(a.childNodes[b].isEqualNode(this.childNodes[b])===t)return t;return l});document.importNode||(document.importNode=function(a,b){switch(a.nodeType){case 1:var e=document.createElement(a.nodeName),c=a.attributes,d,f,j;if(c&&0<c.length){f=
0;for(j=c.length;f<j;)c=a.attributes[f++],e.setAttribute(c.nodeName,a.getAttribute(c.nodeName))}if(b&&(d=a.childNodes)&&0<d.length){f=0;for(j=d.length;f<j;)e.appendChild(document.importNode(d[f++],b))}return e;case 3:case 4:case 8:return document.createTextNode(a.nodeValue)}Ba("NOT_SUPPORTED_ERR");return s},document.importNode.shim=l);c="compareDocumentPosition";c in document||(j=u||"DOCUMENT_POSITION_",p[c]=document[c]=f[c]=function(a){return this.contains?(this!=a&&this.contains(a)&&16)+(this!=
a&&a.contains(this)&&8)+(0<=this.sourceIndex&&0<=a.sourceIndex?(this.sourceIndex<a.sourceIndex&&4)+(this.sourceIndex>a.sourceIndex&&2):1)+0:0},u="DISCONNECTED",p[j+u]=document[j+u]=f[j+u]=1,u="PRECEDING",p[j+u]=document[j+u]=f[j+u]=2,u="FOLLOWING",p[j+u]=document[j+u]=f[j+u]=4,u="CONTAINS",p[j+u]=document[j+u]=f[j+u]=8,u="CONTAINED_BY",p[j+u]=document[j+u]=f[j+u]=16);d.getComputedStyle||(d.getComputedStyle=function(a){var b=a.currentStyle||a.runtimeStyle;"getPropertyValue"in b||(a.runtimeStyle.getPropertyValue=
Ea.getPropertyValue.bind(a),a.runtimeStyle.setProperty=a.runtimeStyle.removeProperty=function(){Ba("NO_MODIFICATION_ALLOWED_ERR")},a.runtimeStyle.getPropertyPriority=function(){return""},a.runtimeStyle.item=Ea.item);var e,c;(c=d.CSSStyleDeclaration)&&(c=c.prototype)&&(!("float"in b)||!("opacity"in b))?("float"in b||((e=Object.getOwnPropertyDescriptor(c,"float"))&&delete c["float"],Object.defineProperty(a.runtimeStyle,"float",{value:{valueOf:G.call(function(){return this.runtimeStyle.styleFloat||this.style.styleFloat},
a)}}),e&&Object.defineProperty(c,"float",e)),"opacity"in b||((e=Object.getOwnPropertyDescriptor(c,"opacity"))&&delete c.opacity,Object.defineProperty(a.runtimeStyle,"opacity",{value:{valueOf:G.call(function(){return this.runtimeStyle.msOpacity||this.style.msOpacity||ea.call(this.style)||ea.call(this.runtimeStyle)},a)}}),e&&Object.defineProperty(c,"opacity",e))):("float"in b||(a.runtimeStyle["float"]={valueOf:G.call(function(){return this.runtimeStyle.styleFloat||this.style.styleFloat},a)}),"opacity"in
b||(a.runtimeStyle.opacity={valueOf:G.call(function(){return this.runtimeStyle.msOpacity||this.style.msOpacity||ea.call(this.style)||ea.call(this.runtimeStyle)},a)}));return a.currentStyle});document.createDocumentFragment=function(){var a=D.call(oa,this);d.DocumentFragment===d.Document&&z(a,d.DocumentFragment.prototype);return ja(a)};u=(r.innerHTML="<x-x></x-x>",1===r.childNodes.length&&1===r.childNodes[0].nodeType);R="|"+R+"|";ha.ielt9=l;C=ja(D.call(oa,document));u||(ja(document),document.head.insertAdjacentHTML("beforeend",
"<br><style>article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}</style>"));0===D.call(sa,document,"x-x").cloneNode().outerHTML.indexOf("<:x-x>")&&(W=C.appendChild("createElement"in C&&C.createElement("div")||C.ownerDocument.createElement("div")),Ga=8===y?r.cloneNode:8>y?f.cloneNode:k,f.cloneNode=function(a){var b,e;ra.test(this.nodeName)?b=D.call(this.__nativeCloneNode__||Ga,this,a):(W.innerHTML="",e=a?this.outerHTML:this.outerHTML.replace(this.innerHTML,
""),W.innerHTML=e.replace(/^\<\:/,"<").replace(/\<\/\:([\w\-]*\>)$/,"<$1"),b=W.firstChild,!b&&!a&&((e=e.match(gb))&&(e=e[1]),e&&(C.createElement(e),W.innerHTML=e,b=W.firstChild)));return C.appendChild(b)});r=c=A=ga=u=k;if(f.ie||!(7<y)){var da=!document.readyState,X=["/a.ielt8.htc"],y="{behavior:",Ha=[],Ia,Ja,Ka,L,kb=d.scrollTo,lb=d.scrollBy;for(c=X.length;0<=--c;)y+=' url("'+X[c]+'")';y+="}";da&&(document.readyState="uninitialized");f.ielt8=l;d.__ielt8__wontfix=Ha;var ka=/\s*(\S+)\s*/g,la="(?=(^|.*\\s)$1(\\s|$))",
ab=/^([\w\-\|]+)?((?:\.(?:[\w-]+))+)?$|^#([\w-]+$)/,Xa=/\s*([,>+~ ])\s*/g,Ya=/\~\=/g,$a=/(^[>+~ ]?|,|\>|\+|~| ).*?(?=[,>+~ ]|$)/g,ua=/\./g,Wa=/\s/g,Oa=/^([,>+~ ])?([\|\*\w-]*)\#?([\w-]*)((?:\.?[\w-])*)(\[.+\])?(?:\:(.+))?$/,Qa=/^\[?['"]?(.*?)['"]?(?:([\*~&\^\$\@!]?=)['"]?(.*?)['"]?)?\]?$/,Sa=/^([^(]+)(?:\((.+)\))?$/,Za=/\-child\((\dn)\+(\d)\)/g,Ua=/(?:([-]?\d*)n)?(?:(%|-)(\d*))?/,bb=/([,>+~ ])/,Pa={"":1," ":1,",":1,">":2,"~":3,"+":4},Ra={"":1,"=":2,"&=":3,"^=":4,"$=":5,"*=":6,"|=":7,"!=":8,"@=":9},
Ta={"nth-child":0,"nth-last-child":1,"only-child":2,"first-child":3,"last-child":4,root:5,empty:6,checked:7,lang:8,enabled:9,disabled:10,selected:11,contains:12,not:13,matches:14,"read-only":15,"read-write":16},va={href:function(a){return D.call(a,a.__getAttribute__||a.getAttribute,"href",2)}},Va={coords:1,id:1,name:1},xa=function(a){for(var b=a.length>>>0,e=new Q,c=0;c<b;c++)c in a&&e.push(a[c]);return e},ma=function(a){for(;(a=a.nextSibling)&&1!=a.nodeType;);return a};c="matchesSelector";p[c]||
(m[c]=p[c]=ca);c="matches";p[c]||(m[c]=p[c]=ca);c="querySelectorAll";document[c]||(m[c]=p[c]=document[c]=function(a,b){return na.call(this,a,t,b)});c="querySelector";document[c]||(m[c]=p[c]=document[c]=function(a,b){return na.call(this,a,l,b)[0]||s});c="getElementsByClassName";document[c]||(m[c]=p[c]=document[c]=function(a){for(var a=RegExp(a.replace(ka,la)),b=this.all,c,d=-1,f=[];c=b[++d];)c.className&&a.test(c.className)&&f.push(c);return f});m.setAttribute=function(a,b,c){c==k&&(a=V[a]!==k?V[a]:
a.toUpperCase(),b+="",c=1);return Function.prototype.call.call(this.__setAttribute__,this,a,b,c)};m.getAttribute=function(a,b){var c,d,f;if(f=b==k)b=1;c=V[a]!==k?V[a]:a.toUpperCase();d=D.call(this.__getAttribute__,this,c,b);d!==s?f&&(d+=""):!(c in this)&&"string"===typeof this[a]?(d=this[c]=this[a],this.__removeAttribute__(a),d+=""):d=s;return d};m.removeAttribute=function(a,b){var c;return b==k&&(b=1,V[a]!==k?a=V[a]:c=a.toUpperCase(),!(c in this)&&this.getAttribute(a)!==s)?(delete this[c],l):D.call(this.__removeAttribute__,
this,c||a,b)};f.hasAttribute||(f.hasAttribute=function(a){return this.getAttribute(a)!==s});r=function(a){return function(){return a}};f.g=r(1);f.k=r(2);f.l=r(3);f.m=r(4);f.n=r(7);f.o=r(8);f.p=r(9);f.h=r(10);f.i=r(11);f.j=r(16);f.__ielt8__element_init__=function(){var a=this;a.element&&(a=a.element);"prepend"in a||(a.after=m.after,a.before=m.before,a.append=m.append,a.prepend=m.prepend,a.replace=m.replace,a.remove=m.remove);"isEqualNode"in a||(a.isEqualNode=f.isEqualNode);"compareDocumentPosition"in
a||(a.compareDocumentPosition=f.compareDocumentPosition);"getElementsByClassName"in a||(a.getElementsByClassName=m.getElementsByClassName);"addEventListener"in a||(a.addEventListener=d.addEventListener,a.removeEventListener=d.removeEventListener,a.dispatchEvent=d.dispatchEvent);"querySelector"in a||(a.querySelectorAll=m.querySelectorAll,a.querySelector=m.querySelector);"matchesSelector"in a||(a.matchesSelector=ca,a.matches=ca);"hasAttribute"in a||(a.hasAttribute=m.hasAttribute);"setSelectionRange"in
a||(a.setSelectionRange=m.setSelectionRange);this.setAttribute!=m.setAttribute&&(this.__setAttribute__=this.setAttribute,this.__getAttribute__=this.getAttribute,this.__removeAttribute__=this.removeAttribute,this.setAttribute=m.setAttribute,this.getAttribute=m.getAttribute,this.removeAttribute=m.removeAttribute);try{a.cloneNode!==f.cloneNode&&(a.__nativeCloneNode__=a.cloneNode,a.cloneNode=f.cloneNode),f.contains&&(a.contains=f.contains)}catch(b){Ha.push(a)}};Ka=f.__ielt8_Node_behavior_apply=function(a){for(c=
X.length;0<=--c;)try{a.addBehavior(X[c])}catch(b){}};Ja=f.cloneNode;f.cloneNode=function(a){a=D.call(Ja||this.__nativeCloneNode__,this,a);Ka(a);return a};Ia=document.createElement;document.createElement=function(a){a=D.call(Ia,document,a);for(c=X.length;0<=--c;)try{a.addBehavior(X[c])}catch(b){}return a};d.XMLHttpRequest||(d.XMLHttpRequest=function(){var a;try{a=new ActiveXObject("Msxml2.XMLHTTP")}catch(b){a=new ActiveXObject("Microsoft.XMLHTTP")}var c=a.send;a.send=function(){this.setRequestHeader("If-Modified-Since",
"Sat, 1 Jan 2000 00:00:00 GMT");c.apply(this,arguments)}});!("pageXOffset"in d)&&d.attachEvent&&(d.pageXOffset=d.pageYOffset=0,L="CSS1Compat"===document.compatMode?function(){d.scrollX=d.pageXOffset=document.body.parentNode.scrollLeft;d.scrollY=d.pageYOffset=document.body.parentNode.scrollTop}:function(){d.scrollX=d.pageXOffset=document.body.scrollLeft;d.scrollY=d.pageYOffset=document.body.scrollTop},d.attachEvent("onscroll",L),d.scroll=d.scrollTo=function(a,b){kb(a,b);L()},d.scrollBy=function(a,
b){lb(a,b);L()});document.addEventListener("DOMContentLoaded",ya);d.attachEvent("onload",za);Na(y);da=y=c=k}}})(window,function(d,z){for(var B in z)Object.prototype.hasOwnProperty.call(z,B)&&!Object.prototype.hasOwnProperty.call(d,B)&&(d[B]=z[B]);return d});
})();
