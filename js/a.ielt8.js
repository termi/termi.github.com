/* ES6/DOM4 polyfill for IE < 8 | @version 0.7 alpha-1 | MIT License | github.com/termi */
;(function(){
var g=void 0,h=!0,j=null,k=!1;function aa(){return function(){}}var m=window;function o(a,b){for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&!Object.prototype.hasOwnProperty.call(a,c)&&(a[c]=b[c]);return a}
function p(a){if(!("__isFixed"in a)){var b="button"in a&&a.button;a.__isFixed=h;if("click"===a.type||"dblclick"===a.type)if(a.detail===g&&(a.detail="click"===a.type?1:2),!a.button&&p.b!==g)b=p.b;o(a,ba);a.defaultPrevented||(a.defaultPrevented=k);a.target||(a.target=a.srcElement||document);a.relatedTarget===g&&a.fromElement&&(a.relatedTarget=a.fromElement==a.target?a.toElement:a.fromElement);"clientX"in a&&a.pageX==j&&(a.pageX=a.clientX+ca()-(q.clientLeft||0),a.pageY=a.clientY+da()-(q.clientTop||0));
!a.which&&b&&(a.which=b&1?1:b&2?3:b&4?2:0);"timeStamp"in a||(a.timeStamp=+new ea);"eventPhase"in a||(a.eventPhase=a.target==this?2:3);"currentTarget"in a||(a.currentTarget=this);!a.attrName&&a.propertyName&&(a.attrName=fa.call(a.propertyName,".")[0]);return a}}
function ga(a){if(p!==g){var b,c,d,f,i;b=this._;c=[];d=[];i="_e_8vj"+(ha?"-":"");if(!b||!b[i])if("__dom0__"in a)b||(b={}),b[i]||(b[i]={});else return;a||(a=window.event);if("__custom_event"in a)f=a;else if(!(f=a.__customEvent__))a.bubbles==g&&(a.bubbles=h),a.cancelable==g&&(a.cancelable=h),f=a.__customEvent__=new t(a),f.initEvent(a.type,a.bubbles,a.cancelable),p(f),f.e=h,f.__custom_event=g;f.ietl9_event=a;a.currentTarget=this;b=b[i][f.type];"__dom0__"in a&&((b||(b=[]))[0]=a.__dom0__);if(b){for(var e in b)if(v(b,
e)){i=b[e];var r;"object"===typeof i&&(r=i,i=i.handleEvent);try{if((f.result=z.call(i,r||this,f))===k)f.preventDefault(),f.stopPropagation()}catch(l){c.push(l),d.push(l.message),console&&console.error(l)}if(f.__stopNow)break}b[0]=g;delete b[0];a.returnValue=f.returnValue;a.cancelBubble=f.cancelBubble;1==c.length?B(c[0]):1<c.length&&(d=Error("Multiple errors thrown : "+f.type+" :  : "+d.join("|")),d.g=c,B(d))}this===document&&(!f.cancelBubble&&3===f.eventPhase)&&(ga.call(this.defaultView,f),a.cancelBubble=
h)}}function E(){}function ia(a){var b=this.__orig__createElement__(a);if(na.test(a))return b;~oa.indexOf("|"+a+"|")||(sa.push(a),oa+=a+"|",(F.__orig__createElement__||F.createElement)(a));return F.appendChild(b)}function ta(a){var b=-1;if(a.createElement){for(;++b<sa.length;)a.createElement(sa[b]);a.createElement!==ia&&!("ielt9"in a.createElement)&&(a.__orig__createElement__=a.createElement,a.createElement=ia)}return a}
function ua(a,b,c,d,f,i){var e=a.match(va),a=c||[],r=!!f,l=r&&(b={})||(!b?document:"length"in b?b[0]:b),D,M=0,s,Y=wa[e[1]||""]||0,Aa=2<Y,N=e[2],pa=!!N,ja=e[3],qa=!!ja,ka=e[4],la=!!ka,Sa="*"===N,H,Ta,n,ra,y,O,I,w,R,Ua,A,ma,x,u,C,Ba,Ca,Va,Wa;pa&&(N=Sa?g:N.replace("|",":").toUpperCase());la&&(ka=ka.replace(xa," "),Ua=RegExp(ka.replace(ya,za)));r&&(Y=0);if(r=e[5]){r=fa.call(r,"][");for(H=-1;y=r[++H];){y=r[H]=y.match(Da);u=y[1];if("'"===(x=u.charAt(0))||'"'===x&&u.substr(-1)===x)y[1]=Ea.call(u,1,u.length-
2);y[2]=Fa[y[2]];if(u=y[3])if(" i"==u.substr(-2)&&(u=u.substr(0,u.length-2),y[4]=h),"'"===(x=u.charAt(0))||'"'===x&&u.substr(-1)===x)y[3]=Ea.call(u,1,u.length-2)}}if(A=e[6])A=A.match(Ga),I=Ha[A[1]],2>I&&A[2]&&(O=/\D/.test(A[2])?"even"===A[2]?[j,2]:"odd"===A[2]?[j,2,"%",1]:A[2].match(Ia):[j,0,"%",A[2]],Ca=I?"nodeIndexLast":"nodeIndex",Va=I?"lastChild":"firstChild",Wa=I?"previousSibling":"nextSibling");if(1==Y)if(qa){f=document.getElementsByName(ja);ma=[];for(H=-1;e=f[++H];)e.id==ja&&ma.push(e);f=qa=
g}else pa=k;ra=(!("length"in b)||1===b.length)&&!d&&!r&&!A&&!pa&&!la&&!qa;do{e=g;switch(Y){case 1:if(ja)if(f=[],ma.length)for(H=-1;e=ma[++H];){if(l===document||l.contains(e))f.push(e),ma.splice(H--,1)}else return a;else"BODY"===N&&9===l.nodeType?(f=[l.body],la=!!ka,ra=ra&&!la):f=l.getElementsByTagName(N||"*");e=f[0];break;case 2:f=l.children;e=f[0];break;case 3:D=b[M+1];case 4:if(!(e=Ja(l)))continue}if(ra)return f;l=0;if(e){do if((!Sa||1===e.nodeType)&&!(d&&(Ta=e.sourceIndex)in c)){if(n=!(pa&&(s=
e.nodeName.toUpperCase())!==N||qa&&e.id!==ja||la&&(!e.className||!Ua.test(e.className)))){if(r){H=-1;for(Ba=e.attributes;n&&(y=r[++H])&&(n=(C=y[1])in Ba);)if(w=C in Ka?Ka[C](e):(w=Ba[C])&&(w.specified||C in La)&&""!==w.nodeValue?w.nodeValue:j,x=y[2],w===j){if(!(n=8==x))n=k}else switch(y[4]&&(w=w.toUpperCase()),R=y[3],x){case 1:n=!!w||""===w;break;case 2:n=w===R;break;case 3:case 8:n=RegExp("(^| +)"+R+"($| +)").test(w);8==x&&(n=!n);break;case 4:case 5:case 6:u=w.indexOf(R);n=6===x?~u:5===x?u==w.length-
R.length:!u;break;case 7:n=w===R||!!~w.indexOf(R+"-");break;case 9:n=!!~(" "+w.replace(Ma," ")+" ").indexOf(" "+R+" ")}}if(n&&A)switch(I){case 0:case 1:if(!O[1]&&!O[3])break;C=e[Ca]||0;x=O[3]?("%"===O[2]?-1:1)*O[3]:0;u=O[1];if(C)n=!u?!(C+x):!((C+x)%u);else{n=k;s=e.parentNode[Va];do if(1==s.nodeType&&(s[Ca]=++C)&&e===s&&(!u?!(C+x):!((C+x)%u)))n=h;while(!n&&(s=s[Wa]))}break;case 2:case 3:for(s=e;(s=s.previousSibling)&&1!==s.nodeType;);n=!s;if(!n||3==I)break;case 4:n=!Ja(e);break;case 5:n="HTML"==(s||
e.nodeName.toUpperCase());break;case 6:n=!e.firstChild;break;case 7:n=!!e.checked;break;case 8:n=e.lang==O||q.lang==O;break;case 9:case 10:n="disabled"in e&&"form"in e&&(10==I?e.disabled===h&&"hidden"!==e.type:e.disabled===k);break;case 11:n=e.parentNode.selectedIndex&&!!e.selected;break;case 12:n=!!~(e.textContent||e.data||e.innerText||e.nodeValue||e.value||"").indexOf(A[2]);break;case 13:case 14:n=Na.call(e,A[2]);13==I&&(n=!n);break;case 15:case 16:s||(s=e.nodeName.toUpperCase()),n=("INPUT"==s||
"TEXTAREA"==s||e.getAttribute("contenteditable")!==j)&&!e.r,16==I&&(n=!n)}}if(n){if(i)return[e];d?a[Ta]=e:a.push(e)}s=g}while(e=Aa?4===Y?g:e===D?g:Ja(e):f[++l])}}while(l=b[++M]);return a}
function Na(a){if(!a)return k;if("*"===a||":root"===a&&this===q||"body"===a&&this===document.body)return h;var b,c,d=k,f,a=Oa.call(a);if(b=a.match(Pa))switch(a.charAt(0)){case "#":return this.id===a.slice(1);default:return(d=!(c=b[2])||this.className&&RegExp(c.replace(xa," ").replace(ya,za)).test(this.className))&&!(c=b[1])||this.tagName&&this.tagName.toUpperCase()===c.toUpperCase()}else{if(Qa.test(a)){c=Ra.call(this.ownerDocument,a);for(f in c)if(v(c,f)&&(d=c[f]===this))return h;return k}c=ua(a,
j,k,j,this,h);return c[0]===this}}function Xa(){document.removeEventListener("DOMContentLoaded",Xa);Ya&&(document.readyState="interactive");G&&G()}function Za(){m.detachEvent("onload",Za);Ya&&(document.readyState="complete");G&&G()}var J;J=(J=/msie (\d+)/i.exec(navigator.userAgent)||[])&&+J[1]||g;m.Element||((m.Element=ActiveXObject).prototype.ie=h);m.HTMLElement||(m.HTMLElement=m.Element);m.Node||(m.Node=m.Element);var $a;
m.DocumentFragment||(m.DocumentFragment=m.Document||m.HTMLDocument||($a=aa(),$a.prototype={},$a));m.Document||(m.Document=m.DocumentFragment);m._={ielt9shims:[],orig_:m._};var K=m._.ielt9shims,ab={},bb=document.createDocumentFragment,cb=document.createElement,db=document.createTextNode,q=document.documentElement;function B(a){throw a instanceof Error?a:Error(a);}function eb(a){var b=Object.create(DOMException.prototype);b.code=DOMException[a];b.message=a+": DOM Exception "+b.code;throw b;}
function fb(a,b){for(var c in b)if(v(b,c)&&a[c]!==b[c])try{a[c]=b[c]}catch(d){}}
var Oa=String.prototype.trim||function(){for(var a=this.replace(gb,""),b=a.length;hb.test(a.charAt(--b)););return a.slice(0,b+1)},fa=String.prototype.split,Ea=String.prototype.substr,ib=Array.prototype.slice,jb=Function.prototype.apply,z=Function.prototype.call,L=Function.prototype.bind||function(a,b){var c=this,d=ib.call(arguments,1);return function(){return jb.call(c,a,d.concat(ib.call(arguments)))}},v=L.call(Function.prototype.call,Object.prototype.hasOwnProperty),P=document.createElement("p"),
Q=m.Node.prototype,S=m.Element.prototype,kb=P.contains||Q.contains,ea=Date,lb=/^\<([\w\:\-]*)[\>\ ]/i,gb=/^\s+/,hb=/\s/,mb,T,U,nb="every filter forEach indexOf join lastIndexOf map reduce reduceRight reverse slice some toString".split(" "),ob=/alpha\(opacity=([^\)]+)\)/;function pb(){var a=(this.filter||"").match(ob);return a?parseInt(a[1])/100+"":""}
var qb={getPropertyValue:function(a){return this.getAttribute(a)},removeProperty:function(a){this.removeAttribute(a)},setProperty:function(a,b,c){if(c!="important")this.setAttribute(a,b);else{c=RegExp(a+"\\s*:\\s*(\\S+)\\s*(?:[$;]|(?:(!important)\\s*[$;]))","i");a=";"+a+":"+b+" !important;";this.cssText=c.test(this.cssText)?this.cssText.replace(c,a):this.cssText+a}},getPropertyPriority:function(a){return((this.cssText||"").match(RegExp(a+"\\s*:\\s*(\\S+)\\s*(?:[$;]|(?:(!important)\\s*[$;]))","i"))||
[])[2]||""},item:aa()},t,V,ba,rb=1;function sb(){}var ha=k,oa="abbr|article|aside|audio|canvas|command|datalist|details|figure|figcaption|footer|header|hgroup|keygen|mark|meter|nav|output|progress|section|source|summary|time|video",sa=oa.split("|"),na=/^<|^(?:a|b|button|code|div|fieldset|form|map|h1|h2|h3|h4|h5|h6|i|object|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul|optgroup)$/i,tb,F,ub,vb,ca,da;
"CSS1Compat"===document.compatMode?(ca=function(){return q.scrollLeft},da=function(){return q.scrollTop}):(ca=function(){return document.body.scrollTop},da=function(){return document.body.scrollLeft});document.head||(document.head=document.getElementsByTagName("head")[0]);"defaultView"in document||(document.defaultView=document.parentWindow);T=k;try{T=isNaN.apply(j,{})}catch(wb){}
T||(Function.prototype.apply=function(a,b){try{return b!=g?jb.call(this,a,b):jb.call(this,a)}catch(c){(c.number!=-2146823260||b.length===g||typeof b==="string")&&B(c);return jb.call(this,a,Array.from(b))}});"b"!=="ab".substr(-1)&&(String.prototype.substr=function(a,b){return Ea.call(this,a<0?(a=this.length+a)<0?0:a:a,b)});
if("te".split(/(s)*/)[1]!=g||3!="1_1".split(/(_)/).length)mb=/()??/.exec("")[1]===g,String.prototype.split=function(a,b){var c=this;if(!(a instanceof RegExp))return a===g&&b===0?[]:fa.call(c,a,b);var d=[],f=0,i=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.s?"y":""),e=RegExp(a.source,i+"g"),r=j,l,D,c=c+"";mb||(r=RegExp("^"+e.source+"$(?!\\s)",i));if(b===g||+b<0)b=Infinity;else{b=Math.floor(+b);if(!b)return[]}for(;l=e.exec(c);){i=l.index+l[0].length;if(i>f){d.push(c.slice(f,l.index));!mb&&l.length>
1&&l[0].replace(r,function(){for(var a=1,b=arguments,c=b.length-2;a<c;a++)b[a]===g&&(l[a]=g)});l.length>1&&l.index<c.length&&d.push.apply(d,l.slice(1));D=l[0].length;f=i;if(d.length>=b)break}e.lastIndex===l.index&&e.lastIndex++}f===c.length?(D||!e.test(""))&&d.push(""):d.push(c.slice(f));return d.length>b?d.slice(0,b):d};
m.DOMException||(T=(m.DOMException=aa()).prototype=Error(),T.INDEX_SIZE_ERR=1,T.HIERARCHY_REQUEST_ERR=3,T.WRONG_DOCUMENT_ERR=4,T.INVALID_CHARACTER_ERR=5,T.NO_MODIFICATION_ALLOWED_ERR=7,T.NOT_FOUND_ERR=8,T.NOT_SUPPORTED_ERR=9,T.INVALID_STATE_ERR=11,T.SYNTAX_ERR=12,T.INVALID_MODIFICATION_ERR=13,T.NAMESPACE_ERR=14,T.INVALID_ACCESS_ERR=15,T.TYPE_MISMATCH_ERR=17);"pageXOffset"in m||K.push(function(){Object.defineProperty(m,"pageXOffset",{get:ca});Object.defineProperty(m,"pageYOffset",{get:da})});
if(9>J){U=m.Event=function(){B("")};V={initEvent:function(a,b,c){(a==g||b==g||c==g)&&B("WRONG_ARGUMENTS_ERR");this.type=a;this.bubbles=b;this.cancelable=c;this.e=k;this.target=j;if(!this.timeStamp)this.timeStamp=+new ea},initCustomEvent:function(a,b,c,d){V.initEvent.call(this,a,b,c);this.detail=d},initUIEvent:function(a,b,c,d,f){V.initCustomEvent.call(this,a,b,c,f);this.view=d},initMouseEvent:function(a,b,c,d,f,i,e,r,l,D,M,s,Y,Aa,N){V.initUIEvent.call(this,a,b,c,d,f);this.screenX=i;this.screenY=e;
this.clientX=r;this.clientY=l;this.ctrlKey=D;this.altKey=M;this.shiftKey=s;this.metaKey=Y;this.button=Aa;this.relatedTarget=N}};ba=U.prototype={constructor:U,preventDefault:function(){t.a.call(this).returnValue=k;t.c.call(this);this.defaultPrevented=h},stopPropagation:function(){t.a.call(this).cancelBubble=h;t.c.call(this)}};for(T in V)v(V,T)&&(ba[T]=function(){V[arguments.callee.name].apply(this,arguments);fb(this.ietl9_event,this)},ba[T].name=T);t=function(a){this.ietl9_event=a;a.returnValue=h;
fb(this,a)};t.a=function(){var a=this.ietl9_event;if(a===g)B("WRONG_THIS_ERR");else if(a===j)a=t.a.d;return a};t.a.d={};t.c=function(){this.ietl9_event&&(this.ietl9_event=j)};U=aa();U.prototype=ba;U=new U;U.constructor=t;t.prototype=U}
document.addEventListener||(Q.addEventListener=q.addEventListener=m.addEventListener=document.addEventListener=function(a,b,c){if(typeof b=="function"||typeof b==="object"&&b.handleEvent){var d=this,f=d._,i=k;d==m&&(!("_"in document)||!("_e_8vj"in document._)||!(a in document._._e_8vj))&&document.addEventListener(a,sb,c);f||(f=d._={});if(a==="DOMContentLoaded"){if(document.readyState=="complete")return;d===m&&(d=document);i=h;if(!ab[a]){ab[a]=h;var e=function(){try{document.documentElement.doScroll("left")}catch(b){setTimeout(e,
50);return}ga.call(d,{type:a,isTrusted:h,__custom_event:g})};if("createEventObject"in document&&"doScroll"in document.documentElement)try{m.frameElement||e()}catch(r){}}}else if(a==="load"&&"tagName"in d&&d.tagName.toUpperCase()==="SCRIPT"){i=h;d.onreadystatechange=function(){if(d.readyState==="loaded"){d.onreadystatechange=j;d.attachEvent("onreadystatechange",L.call(ga,d,{type:a}))}};a="readystatechange"}else a==="DOMMouseScroll"&&(a="mousewheel");d.setInterval&&(d!=m&&!d.frameElement)&&(d=m);b.uuid||
(b.uuid=++rb);if(!(c=f._h_9e2))c=f._h_9e2=L.call(ga,d);f._e_8vj||(f._e_8vj={});if(!f._e_8vj[a]){f._e_8vj[a]={};i||d.attachEvent("on"+a,c)}f._e_8vj[a][b.uuid]=b}},Q.addEventListener.__shim__=h,Q.removeEventListener=q.removeEventListener=m.removeEventListener=document.removeEventListener=function(a,b){var c=this._,d,f,i;if(!(typeof b!="function"||!b.uuid||!c))if(d=c._h_9e2){f=c._e_8vj&&c._e_8vj[a];delete f[b.uuid];for(i in f)if(v(f,i))return;this.detachEvent("on"+a,d);delete c._e_8vj[a];for(i in c._e_8vj)if(v(c._e_8vj,
i))return;delete c._e_8vj}},Q.removeEventListener.__shim__=h,document.attachEvent("onmousedown",function(){p.b=event.button}),document.attachEvent("onclick",function(){p.b=g}));
document.dispatchEvent||(Q.dispatchEvent=q.dispatchEvent=m.dispatchEvent=document.dispatchEvent=function(a){if(!a.type)return h;if(!a.returnValue)a.returnValue=h;if(a.cancelBubble)a.cancelBubble=k;try{return this.fireEvent("on"+a.type,a)}catch(b){if(b.number===-2147024809||this===m||b.number===-2146827850&&!(a.bubbles=k)){a.__custom_event=h;for(var c=a.target=this,d="on"+a.type;!a.cancelBubble&&c;){(d in c&&typeof c[d]=="function"&&(a.__dom0__=c[d])||"_"in c&&"_e_8vj"in c._)&&ga.call(c,a);c=a.bubbles?
c===document?document.defaultView:c.parentNode:j;"__dom0__"in a&&(a.__dom0__=g)}return!a.cancelBubble}B(b)}},Q.dispatchEvent.__shim__=h);document.createEvent||(document.createEvent=function(){return new t(document.createEventObject())});E.prototype=[];T=new E;T.push(1);T.length?m.NodeList=E:(T=document.createElement("iframe"),T.style.display="none",(document.body||q).appendChild(T),T.contentWindow.document.write("<script>parent.NodeList=Array;<\/script>"),E=m.NodeList);E.prototype.item=function(a){return this[a]};
if(document.querySelectorAll){var xb=document.querySelectorAll("#z").constructor.prototype;if(xb&&xb!==Array.prototype)for(var yb in nb)v(yb,nb)&&(xb[yb]||(xb[yb]=function(){return jb.call(Array.prototype[yb],Array.from(this),arguments)}))}document.doctype===j&&7<J&&K.push(function(){var a=document.childNodes[0];Object.defineProperty(a,"nodeType",{get:function(){return 10}});Object.defineProperty(document,"doctype",{configurable:h,enumerable:k,get:function(){return a}})});
Q.contains||(Q.contains=kb);z.call(db,document,"").contains||(m.Text&&m.Text.prototype?K.push(L.call(o,j,Text.prototype,Q)):document.createTextNode=function(a){a=z.call(db,this,a);a.contains=Q.contains;return a});!z.call(bb,document).contains&&(m.HTMLDocument&&m.HTMLDocument.prototype)&&K.push(L.call(o,j,m.HTMLDocument.prototype,Q));(!("children"in P)||9>J)&&K.push(function(){Object.defineProperty(S,"children",{get:function(){for(var a=[],b=this.firstChild;b;){b.nodeType==1&&a.push(b);b=b.nextSibling}return a}})});
9>J&&K.push(function(){function a(a,c){var d;try{var f=a;"element"in f&&("defaults"in f&&"document"in f)&&(f=f.element);var i=f.getBoundingClientRect(),e=document.body;d=!q.contains(f)?c?i.left:i.top:c?i.left+ca()-(q.clientLeft||e.clientLeft||0):i.top+da()-(q.clientTop||e.clientTop||0)}catch(r){d=a;f=0;for(i=c?"offsetLeft":"offsetTop";d;){f=f+parseInt(d[i],10);d=d.offsetParent}d=f}return d}Object.defineProperties(S,{offsetLeft:{get:function(){return a(this,h)}},offsetTop:{get:function(){return a(this)}}})});
P.childElementCount==g&&K.push(function(){Object.defineProperties(S,{firstElementChild:{get:function(){var a;for(a=this.firstChild;a&&a.nodeType!=1;)a=a.nextSibling;return a}},lastElementChild:{get:function(){var a;for(a=this.lastChild;a&&a.nodeType!=1;)a=a.previousSibling;return a}},nextElementSibling:{get:function(){for(var a=this;a=a.nextSibling;)if(a.nodeType==1)break;return a}},previousElementSibling:{get:function(){for(var a=this;a=a.previousSibling;)if(a.nodeType==1)break;return a}}})});
document.ELEMENT_NODE||(T={ELEMENT_NODE:1,TEXT_NODE:3,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11},o(document,T),o(Q,T),o(m.Node,T));
"textContent"in P||K.push(function(){Object.defineProperty(Q,"textContent",{get:function(){if("innerText"in this)return this.innerText;if("data"in this&&this.appendData)return this.data},set:function(a){"innerText"in this?this.innerText=a:"data"in this&&this.replaceData&&this.replaceData(0,this.length,a);return a}})});
"isEqualNode"in P||(document.isEqualNode=q.isEqualNode=Q.isEqualNode=function(a){var b,c;if(a===j||a.nodeType!==this.nodeType||a.nodeType===10&&(this.name!==a.name||this.publicId!==a.publicId||this.systemId!==a.systemId))return k;if(a.nodeType===1){if(this.namespaceURI!=a.namespaceURI||this.prefix!=a.prefix||this.localName!=a.localName)return k;b=0;for(c=this.attributes.length;b<c;b++){var d=this.attributes[length],f=a.getAttributeNS(d.namespaceURI,d.localName);if(f===j||f.value!==d.value)return k}}if(a.nodeType===
7&&(this.target!==a.target||this.data!==a.data)||(a.nodeType===3||a.nodeType===8)&&this.data!==a.data||a.childNodes.length!==this.childNodes.length)return k;b=0;for(c=a.childNodes.length;b<c;b++)if(a.childNodes[b].isEqualNode(this.childNodes[b])===k)return k;return h});
document.importNode||(document.importNode=function(a,b){switch(a.nodeType){case 1:var c=document.createElement(a.nodeName),d=a.attributes,f,i,e;if(d&&d.length>0){i=0;for(e=d.length;i<e;){d=a.attributes[i++];c.setAttribute(d.nodeName,a.getAttribute(d.nodeName))}}if(b&&(f=a.childNodes)&&f.length>0){i=0;for(e=f.length;i<e;)c.appendChild(document.importNode(f[i++],b))}return c;case 3:case 4:case 8:return document.createTextNode(a.nodeValue)}eb("NOT_SUPPORTED_ERR");return j},document.importNode.shim=h);
T="compareDocumentPosition";
if(!(T in document)){var W,X=W||"DOCUMENT_POSITION_";q[T]=document[T]=Q[T]=function(a){return this.contains?(this!=a&&this.contains(a)&&16)+(this!=a&&a.contains(this)&&8)+(this.sourceIndex>=0&&a.sourceIndex>=0?(this.sourceIndex<a.sourceIndex&&4)+(this.sourceIndex>a.sourceIndex&&2):1)+0:0};W="DISCONNECTED";q[X+W]=document[X+W]=Q[X+W]=1;W="PRECEDING";q[X+W]=document[X+W]=Q[X+W]=2;W="FOLLOWING";q[X+W]=document[X+W]=Q[X+W]=4;W="CONTAINS";q[X+W]=document[X+W]=Q[X+W]=8;W="CONTAINED_BY";q[X+W]=document[X+
W]=Q[X+W]=16}
m.getComputedStyle||(m.getComputedStyle=function(a){if(!("getPropertyValue"in a.currentStyle)){a.runtimeStyle.getPropertyValue=function(b){return a.currentStyle.getAttribute(b)};a.runtimeStyle.setProperty=a.runtimeStyle.removeProperty=function(){eb("NO_MODIFICATION_ALLOWED_ERR")};a.runtimeStyle.getPropertyPriority=function(){return""};a.runtimeStyle.item=qb.item}var b,c;if((c=m.f)&&(c=c.prototype)&&!("float"in a.currentStyle)||!("opacity"in a.currentStyle)){if(!("float"in a.currentStyle)){(b=Object.getOwnPropertyDescriptor(c,
"float"))&&delete c["float"];Object.defineProperty(a.runtimeStyle,"float",{value:{valueOf:L.call(function(){return this.runtimeStyle.styleFloat||this.style.styleFloat},a)}});b&&Object.defineProperty(c,"float",b)}if(!("opacity"in a.currentStyle)){(b=Object.getOwnPropertyDescriptor(c,"opacity"))&&delete c.opacity;Object.defineProperty(a.runtimeStyle,"opacity",{value:{valueOf:L.call(function(){return this.runtimeStyle.msOpacity||this.style.msOpacity||pb.call(this.style)||pb.call(this.runtimeStyle)},
a)}});b&&Object.defineProperty(c,"opacity",b)}}else{"float"in a.currentStyle||(a.runtimeStyle["float"]={valueOf:L.call(function(){return this.runtimeStyle.styleFloat||this.style.styleFloat},a)});"opacity"in a.currentStyle||(a.runtimeStyle.opacity={valueOf:L.call(function(){return this.runtimeStyle.msOpacity||this.style.msOpacity||pb.call(this.style)||pb.call(this.runtimeStyle)},a)})}return a.currentStyle});
9>J&&(document.createDocumentFragment=function(){var a=z.call(bb,this);m.DocumentFragment===m.Document&&o(a,m.DocumentFragment.prototype);return ta(a)});
"DOMParser"in m||((m.DOMParser=aa()).prototype.parseFromString=function(a,b){if(!b||b=="text/html"||/xml$/.test(b)){var a=a.replace(/<script[^>]*>[\s\S]*?<\/script>/gi,"").replace(/"/g,'\\"'),c=document.createElement("iframe");c.style.display="none";c.src='javascript:document.write("'+a+'")';document.body.appendChild(c);newHTMLDocument=c.contentDocument||c.contentWindow.document;newHTMLDocument.__destroy__=function(){var a=this.contentWindow.document;a.documentElement.innerHTML="";a._=a.documentElement._=
g;document.body.removeChild(this)}.bind(c);a=c=g;newHTMLDocument.querySelector=document.querySelector;newHTMLDocument.querySelectorAll=document.querySelectorAll;return newHTMLDocument}return j});tb=(P.innerHTML="<x-x></x-x>",1===P.childNodes.length&&1===P.childNodes[0].nodeType);oa="|"+oa+"|";ia.ielt9=h;F=ta(z.call(bb,document));tb||(ta(document),document.head.insertAdjacentHTML("beforeend","<br><style>article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}</style>"));
0===z.call(cb,document,"x-x").cloneNode().outerHTML.indexOf("<:x-x>")&&(ub=F.appendChild("createElement"in F&&F.createElement("div")||F.ownerDocument.createElement("div")),vb=8===J?P.cloneNode:8>J?Q.cloneNode:g,Q.cloneNode=function(a){var b,c;if(na.test(this.nodeName))b=z.call(this.__nativeCloneNode__||vb,this,a);else{ub.innerHTML="";c=a?this.outerHTML:this.outerHTML.replace(this.innerHTML,"");ub.innerHTML=c.replace(/^\<\:/,"<").replace(/\<\/\:([\w\-]*\>)$/,"<$1");b=ub.firstChild;if(!b&&!a){(c=c.match(lb))&&
(c=c[1]);if(c){F.createElement(c);ub.innerHTML=c;b=ub.firstChild}}}return F.appendChild(b)});P=T=U=nb=tb=g;
if(Q.ie||!(7<J)){var Ya=!document.readyState,zb=["/a.ielt8.htc"],Ab="{behavior:",Bb=[],Cb,Db,Eb,G,Fb=m.scrollTo,Gb=m.scrollBy;for(T=zb.length;0<=--T;)Ab+=' url("'+zb[T]+'")';Ab+="}";Ya&&(document.readyState="uninitialized");Q.ielt8=h;m.__ielt8__wontfix=Bb;var ya=/\s*(\S+)\s*/g,za="(?=(^|.*\\s)$1(\\s|$))",Pa=/^([\|\w-]+)?((?:\.(?:[\w-]+))+)?$|^#([\w-]+$)/,Hb=/\s*([,>+~ ])\s*/g,Ib=/\~\=/g,Jb=/(^[>+~ ]?|,|\>|\+|~| ).*?(?=[,>+~ ]|$)/g,xa=/\./g,Ma=/\s/g,va=/^([,>+~ ])?([\|\*\w-]*)\#?([\w-]*)((?:\.?[\w-])*)(\[.+\])?(?:\:(.+))?$/,
Da=/^\[?(.*?)(?:([\*~&\^\$\@!]?=)(.*?))?\]?$/,Ga=/^([^(]+)(?:\(([^)]+)\))?$/,Kb=/\-child\((\dn)\+(\d)\)/g,Ia=/(?:([-]?\d*)n)?(?:(%|-)(\d*))?/,Qa=/([,>+~ ])/,wa={"":1," ":1,",":1,">":2,"~":3,"+":4},Fa={"":1,"=":2,"&=":3,"^=":4,"$=":5,"*=":6,"|=":7,"!=":8,"@=":9},Ha={"nth-child":0,"nth-last-child":1,"only-child":2,"first-child":3,"last-child":4,root:5,empty:6,checked:7,lang:8,enabled:9,disabled:10,selected:11,contains:12,not:13,matches:14,"read-only":15,"read-write":16},Ka={href:function(a){return a.getAttribute("href",
2)}},La={coords:1,id:1,name:1},Lb=function(a){for(var b=a.length>>>0,c=new E,d=0;d<b;d++)d in a&&c.push(a[d]);return c},Ja=function(a){for(;(a=a.nextSibling)&&a.nodeType!=1;);return a},Ra=function(a,b,c){c||(c=this);for(var a=Oa.call(a.replace(Hb,"$1")),d=new E,f,i=-1,e=c,r,l,D=h,M=k,s,a=a.replace(Ib,"@=").replace(Kb,"-child($1%$2)").match(Jb);f=a[++i];){r=a[i+1];l=!r||r.charAt(0)===",";if(!M)if(D&&"nodeType"in c&&c.nodeType===9&&f.toUpperCase()==="BODY"){e=[c.body];l&&(d=e)}else if(D&&f===":root"){e=
[q];l&&(d=e)}else if(e&&(!(c=e)||e.length===0)){e=j;M=h}else if(!M){if(e=!(!l||!s&&!(r||c.length>1)))s=h;e=ua(f,c,l?d:[],e,j,b&&l)}if(D=l){if(!d.length&&e){s=k;d=Lb(e)}e=j;c=this;M=k}if(!r||r===",")break}return s?Lb(d):d};T="matchesSelector";q[T]||(S[T]=q[T]=Na);T="matches";q[T]||(S[T]=q[T]=Na);T="querySelectorAll";document[T]||(S[T]=q[T]=document[T]=function(a,b){return Ra.call(this,a,k,b)});T="querySelector";document[T]||(S[T]=q[T]=document[T]=function(a,b){return Ra.call(this,a,h,b)[0]||j});T=
"getElementsByClassName";document[T]||(S[T]=q[T]=document[T]=function(a){for(var a=RegExp(a.replace(ya,za)),b=this.all,c,d=-1,f=[];c=b[++d];)c.className&&a.test(c.className)&&f.push(c);return f});S.setAttribute=function(a,b,c){if(c==g){a=a.toUpperCase();b=b+"";c=1}return Function.prototype.call.call(this._.__setAttribute__,this,a,b,c)};S.getAttribute=function(a,b){var c,d;if(c=b==g){a=a.toUpperCase();b=1}(d=Function.prototype.call.call(this._.__getAttribute__,this,a,b))&&c&&(d=d+"");return d};S.removeAttribute=
function(a,b){if(b==g){a=a.toUpperCase();b=1}return Function.prototype.call.call(this._.__removeAttribute__,this,a,b)};Q.hasAttribute||(Q.hasAttribute=function(a){return this.getAttribute(a)!==j});var Z=function(a){return function(){return a}};Q.h=Z(1);Q.l=Z(2);Q.m=Z(3);Q.n=Z(4);Q.o=Z(7);Q.p=Z(8);Q.q=Z(9);Q.i=Z(10);Q.j=Z(11);Q.k=Z(16);Q.__ielt8__element_init__=function(){var a=this,b;a.element&&(a=a.element);if(!(b=a._))b=a._={};if(!("prepend"in a)){a.after=S.after;a.before=S.before;a.append=S.append;
a.prepend=S.prepend;a.replace=S.replace;a.remove=S.remove}"isEqualNode"in a||(a.isEqualNode=Q.isEqualNode);"compareDocumentPosition"in a||(a.compareDocumentPosition=Q.compareDocumentPosition);"getElementsByClassName"in a||(a.getElementsByClassName=S.getElementsByClassName);"addEventListener"in a||(a.addEventListener=m.addEventListener,a.removeEventListener=m.removeEventListener,a.dispatchEvent=m.dispatchEvent);"querySelector"in a||(a.querySelectorAll=S.querySelectorAll,a.querySelector=S.querySelector);
"matchesSelector"in a||(a.matchesSelector=Na,a.matches=Na);"hasAttribute"in a||(a.hasAttribute=S.hasAttribute);if(this.setAttribute!=S.setAttribute){b.__setAttribute__=this.setAttribute;b.__getAttribute__=this.getAttribute;b.__removeAttribute__=this.removeAttribute;this.setAttribute=S.setAttribute;this.getAttribute=S.getAttribute;this.removeAttribute=S.removeAttribute}try{if(a.cloneNode!==Q.cloneNode){a.__nativeCloneNode__=a.cloneNode;a.cloneNode=Q.cloneNode}if(Q.contains)a.contains=Q.contains}catch(c){Bb.push(a)}};
Eb=Q.__ielt8_Node_behavior_apply=function(a){for(T=zb.length;--T>=0;)try{a.addBehavior(zb[T])}catch(b){}};Db=Q.cloneNode;Q.cloneNode=function(a){a=z.call(Db||this.__nativeCloneNode__,this,a);Eb(a);return a};Cb=document.createElement;document.createElement=function(a){a=z.call(Cb,document,a);for(T=zb.length;--T>=0;)try{a.addBehavior(zb[T])}catch(b){}return a};m.XMLHttpRequest||(m.XMLHttpRequest=function(){var a;try{a=new ActiveXObject("Msxml2.XMLHTTP")}catch(b){a=new ActiveXObject("Microsoft.XMLHTTP")}var c=
a.send;a.send=function(){this.setRequestHeader("If-Modified-Since","Sat, 1 Jan 2000 00:00:00 GMT");c.apply(this,arguments)}});!("pageXOffset"in m)&&m.attachEvent&&(m.pageXOffset=m.pageYOffset=0,G="CSS1Compat"===document.compatMode?function(){m.scrollX=m.pageXOffset=document.body.parentNode.scrollLeft;m.scrollY=m.pageYOffset=document.body.parentNode.scrollTop}:function(){m.scrollX=m.pageXOffset=document.body.scrollLeft;m.scrollY=m.pageYOffset=document.body.scrollTop},m.attachEvent("onscroll",G),m.scroll=
m.scrollTo=function(a,b){Fb(a,b);G()},m.scrollBy=function(a,b){Gb(a,b);G()});document.addEventListener("DOMContentLoaded",Xa);m.attachEvent("onload",Za);var Mb=Ab,$=document.getElementById("ielt8_style_prev_for_behaviour"),Nb="";$&&(Nb=$.getAttribute("data-url")||"",$.id="");Nb&&Mb.replace(" url("," url("+Nb+") url(");$=cb("style");$.id="ielt8_style_prev_for_behaviour";$.type="text/css";$.setAttribute("data-url",Mb.replace("{behavior:","").replace(")}",")"));$.styleSheet.cssText="*"+Mb;document.head.appendChild($);
Ya=Ab=T=g};
})();
