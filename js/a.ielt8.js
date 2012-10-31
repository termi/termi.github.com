/* ES6/DOM4 polyfill for IE < 8 | @version 0.7 final | MIT License | github.com/termi */
void function() {
var k=void 0,l=!0,m=null,s=!1;function Y(){return function(){}}
(function(e,A){function D(a){if(!("__isFixed"in a)){var b="button"in a&&a.button;a.__isFixed=l;if("click"===a.type||"dblclick"===a.type)a.detail===k&&(a.detail="click"===a.type?1:2),!a.button&&D.b!==k&&(b=D.b);A(a,M);a.defaultPrevented||(a.defaultPrevented=s);a.target||(a.target=a.srcElement||document);a.relatedTarget===k&&a.fromElement&&(a.relatedTarget=a.fromElement==a.target?a.toElement:a.fromElement);"clientX"in a&&a.pageX==m&&(a.pageX=a.clientX+Z()-(t.clientLeft||0),a.pageY=a.clientY+$()-(t.clientTop||
0));!a.which&&b&&(a.which=b&1?1:b&2?3:b&4?2:0);"timeStamp"in a||(a.timeStamp=+new sa);"eventPhase"in a||(a.eventPhase=a.target==this?2:3);"currentTarget"in a||(a.currentTarget=this);!a.attrName&&a.propertyName&&(a.attrName=ga.call(a.propertyName,".")[0]);return a}}function aa(a){if(D!==k){var b=this._,d,f,h,e;if(!b.__stop_events__){d=[];f=[];e="_e_8vj"+(La?"-":"");if(!b||!b[e])if("__dom0__"in a)b||(b={}),b[e]||(b[e]={});else return;a||(a=window.event);if("__custom_event"in a)h=a;else if(!(h=a.__customEvent__))a.bubbles==
k&&(a.bubbles=l),a.cancelable==k&&(a.cancelable=l),h=a.__customEvent__=new w(a),h.initEvent(a.type,a.bubbles,a.cancelable),D.call(this,h),h.g=l,h.__custom_event=k;h.ietl9_event=a;a.currentTarget=this;b=b[e][h.type];"__dom0__"in a&&((b||(b=[]))[0]=a.__dom0__);if(b){for(var c in b)if(G(b,c)){e=b[c];var g;"object"===typeof e&&(g=e,e=e.handleEvent);try{if(e&&(h.result=F.call(e,g||this,h))===s)h.preventDefault(),h.stopPropagation()}catch(n){d.push(n),f.push(n.message),console&&console.error(n)}if(h.__stopNow)break}b[0]=
k;delete b[0];a.returnValue=h.returnValue;a.cancelBubble=h.cancelBubble;1==d.length?J(d[0]):1<d.length&&(f=Error("Multiple errors thrown : "+h.type+" :  : "+f.join("|")),f.h=d,J(f))}this===document&&(!h.cancelBubble&&3===h.eventPhase)&&(aa.call(this.defaultView,h),a.cancelBubble=l)}}}function U(){}function Ma(){var a=document.querySelectorAll("#z").constructor.prototype;if(a&&a!==Array.prototype)for(var b in ha)G(b,ha)&&(a[b]||(a[b]=function(){return ba.call(Array.prototype[b],Array.from(this),arguments)}))}
function ia(a){var b=this.__orig__createElement__(a);if(ta.test(a))return b;~V.indexOf("|"+a+"|")||(ja.push(a),V+=a+"|",(E.__orig__createElement__||E.createElement)(a));return E.appendChild(b)}function ka(a){var b=-1;if(a.createElement){for(;++b<ja.length;)a.createElement(ja[b]);a.createElement!==ia&&!("ielt9"in a.createElement)&&(a.__orig__createElement__=a.createElement,a.createElement=ia)}return a}function Na(a){var b=document.getElementById("ielt8_style_prev_for_behaviour"),d="";b&&(d=b.getAttribute("data-url")||
"",b.id="");d&&a.replace(" url("," url("+d+") url(");b=la("style");b.id="ielt8_style_prev_for_behaviour";b.type="text/css";b.setAttribute("data-url",a.replace("{behavior:","").replace(")}",")"));b.styleSheet.cssText="*"+a;document.head.appendChild(b)}function ua(a,b,d,f,h,e){var c=a.match(Oa),a=d||[],g=!!h,n=g&&(b={})||(!b?document:"length"in b?b[0]:b),p,r=0,i,x,j=Pa[c[1]||""]||0,u=2<j,w=c[2],z=!!w,A=c[3],D=!!A,E=c[4],C=!!E,H="*"===w,B,L,q,I,Q,N,v,R,M,S,G,K,y,J,O,P;z&&(w=H?k:w.replace("|",":").toUpperCase());
C&&(E=E.replace(va," "),M=RegExp(E.replace(ma,na)));if(S=c[5]){S=ga.call(S,"][");for(B=-1;I=S[++B];)if(I=S[B]=I.match(Qa),I[2]=Ra[I[2]],(y=I[3])&&" i"==y.substr(-2))y.substr(0,y.length-2),I[4]=l}if(c=c[6])c=c.match(Sa),N=Ta[c[1]],2>N&&c[2]&&(Q=/\D/.test(c[2])?"even"===c[2]?[m,2]:"odd"===c[2]?[m,2,"%",1]:c[2].match(Ua):[m,0,"%",c[2]],J=N?"nodeIndexLast":"nodeIndex",O=N?"lastChild":"firstChild",P=N?"previousSibling":"nextSibling");g&&(j=0);if(1==j)if(D){h=document.getElementsByName(A);G=[];for(B=-1;i=
h[++B];)i.id==A&&G.push(i);h=D=z=k}else w||(w="*",H=!C),z=s;g=(!("length"in b)||1===b.length)&&!f&&!S&&!c&&!z&&!C&&!D;do{switch(j){case 0:i=h[0];break;case 1:if(A)if(h=[],G.length)for(B=-1;i=G[++B];){if(n===document||n.contains(i))h.push(i),G.splice(B--,1)}else return a;else"BODY"===w&&9===n.nodeType?(h=[n.body],C=!!E,g=g&&!C):h=n.getElementsByTagName(w);i=h[0];break;case 2:h=n.children;i=h[0];break;case 3:p=b[r+1];case 4:if(!(i=oa(n)))continue}if(g)return h;n=0;if(i){do if((!H||1===i.nodeType)&&
!(f&&(L=i.sourceIndex)in d)){if(q=!(z&&(x=i.nodeName.toUpperCase())!==w||D&&i.id!==A||C&&(!i.className||!M.test(i.className)))){if(S)for(B=-1;q&&(I=S[++B]);)if(K=I[2],y=i,v=I[1],v=v.toLowerCase(),v=T[v]!==k?y[T[v]]||"":da[v]!==k?y.__getAttribute__(v,2)||"":Va[v]!==k?y.__getAttribute__(v)?v:"":(y=y.getAttributeNode(v))&&y.value||"",v===m){if(!(q=8==K))q=s}else switch(I[4]&&(v=v.toUpperCase()),R=I[3],K){case 1:q=!!v||""===v;break;case 2:q=v===R;break;case 3:case 8:q=RegExp("(^| +)"+R+"($| +)").test(v);
8==K&&(q=!q);break;case 4:case 5:case 6:y=v.indexOf(R);q=6===K?~y:5===K?y==v.length-R.length:!y;break;case 7:q=v===R||!!~v.indexOf(R+"-");break;case 9:q=!!~(" "+v.replace(Wa," ")+" ").indexOf(" "+R+" ")}if(q&&c)switch(N){case 0:case 1:if(!Q[1]&&!Q[3])break;B=i[J]||0;K=Q[3]?("%"===Q[2]?-1:1)*Q[3]:0;y=Q[1];if(B)q=!y?!(B+K):!((B+K)%y);else{q=s;x=i.parentNode[O];do if(1==x.nodeType&&(x[J]=++B)&&i===x&&(!y?!(B+K):!((B+K)%y)))q=l;while(!q&&(x=x[P]))}break;case 2:case 3:for(x=i;(x=x.previousSibling)&&1!==
x.nodeType;);q=!x;if(!q||3==N)break;case 4:q=!oa(i);break;case 5:q="HTML"==(x||i.nodeName.toUpperCase());break;case 6:q=!i.firstChild;break;case 7:q=!!i.checked;break;case 8:q=i.lang==Q||t.lang==Q;break;case 9:case 10:q="disabled"in i&&"form"in i&&(10==N?i.disabled===l&&"hidden"!==i.type:i.disabled===s);break;case 11:q=i.parentNode.selectedIndex&&!!i.selected;break;case 12:q=!!~(i.textContent||i.data||i.innerText||i.nodeValue||i.value||"").indexOf(c[2]);break;case 13:case 14:q=ca.call(i,c[2]);13==
N&&(q=!q);break;case 15:case 16:x||(x=i.nodeName.toUpperCase()),q=("INPUT"==x||"TEXTAREA"==x||F.call(i,i.__getAttribute__||i.getAttribute,"contenteditable")!==m)&&!i.s,16==N&&(q=!q)}}if(q){if(e)return[i];f?a[L]=i:a.push(i)}x=k}while(i=u?4===j?k:i===p?k:oa(i):h[++n])}i=k}while(n=b[++r]);return a}function pa(a,b,d){d||(d=this);var a=wa.call(a.replace(Xa,"$1")),f=[],h,e,c,g=l,n=s,j,p=a.replace(Ya,"@=").replace(Za,"-child\\($1%$2\\)").match($a);for(h=d;a=p.shift();){e=p[0];c=!e||","===e.charAt(0);if(!n)if(g&&
"nodeType"in d&&9===d.nodeType&&"BODY"===a.toUpperCase())h=[d.body],c&&(f=h);else if(g&&":root"===a)h=[t],c&&(f=h);else if(h&&(!(d=h)||0===h.length))h=m,n=l;else{if(g=!(!c||!j&&!(e||1<d.length)))j=l;h=ua(a,d,c?f:[],g,m,b&&c)}if(g=c)!f.length&&h&&(j=s,f=xa(h)),h=m,d=this,n=s;if(!e||","===e)break}return j?xa(f):f}function ca(a){if(!a)return s;if("*"===a||this===t&&":root"===a||this===document.body&&"BODY"===a.toUpperCase())return l;var b,d,f=s,h,a=wa.call(a);if(b=a.match(ab))switch(a.charAt(0)){case "#":return this.id===
a.slice(1);default:return(f=!(d=b[2])||this.className&&RegExp(d.replace(va," ").replace(ma,na)).test(this.className))&&!(d=b[1])||this.tagName&&this.tagName.toUpperCase()===d.toUpperCase()}else{if(bb.test(a)){d=pa.call(this.ownerDocument,a);for(h in d)if(G(d,h)&&(f=d[h]===this))return l;return s}d=ua(a,m,s,m,this,l);return d[0]===this}}function ya(){document.removeEventListener("DOMContentLoaded",ya);ea&&(document.readyState="interactive");L&&L()}function za(){e.detachEvent("onload",za);ea&&(document.readyState=
"complete");L&&L()}var z=window.eval&&eval("/*@cc_on 1;@*/")&&+((/msie (\d+)/i.exec(navigator.userAgent)||[])[1]||0)||k;if(9>z){e.Element||((e.Element=ActiveXObject).prototype.ie=l);e.HTMLElement||(e.HTMLElement=e.Element);e.Node||(e.Node=e.Element);var r;e.DocumentFragment||(e.DocumentFragment=e.Document||e.HTMLDocument||(r=Y(),r.prototype={},r));e.Document||(e.Document=e.DocumentFragment);e._={ielt9shims:[],orig_:e._};var j=e._.ielt9shims,qa=document.createDocumentFragment,la=document.createElement,
Aa=document.createTextNode,t=document.documentElement,J=function(a){throw a instanceof Error?a:Error(a);},Ba=function(a){var b=Object.create(DOMException.prototype);b.code=DOMException[a];b.message=a+": DOM Exception "+b.code;throw b;},Ca=function(a,b){for(var d in b)if(G(b,d)&&a[d]!==b[d])try{a[d]=b[d]}catch(f){}},wa=String.prototype.trim||function(){for(var a=this.replace(cb,""),b=a.length;db.test(a.charAt(--b)););return a.slice(0,b+1)},ga=String.prototype.split,eb=String.prototype.substr,Da=Array.prototype.slice,
ba=Function.prototype.apply,F=Function.prototype.call,H=Function.prototype.bind||function(a,b){var d=this,f=Da.call(arguments,1);return function(){return ba.call(d,a,f.concat(Da.call(arguments)))}},G=H.call(Function.prototype.call,Object.prototype.hasOwnProperty);r=document.createElement("p");var g=e.Node.prototype,p=e.Element.prototype,fb=r.contains||g.contains,sa=Date,gb=/^\<([\w\:\-]*)[\>\ ]/i,cb=/^\s+/,db=/\s/,ra,c,C,ha="every filter forEach indexOf join lastIndexOf map reduce reduceRight reverse slice some toString".split(" "),
hb=/alpha\(opacity=([^\)]+)\)/,fa=function(){var a=(this.filter||"").match(hb);return a?parseInt(a[1])/100+"":""},Ea={getPropertyValue:function(a){return this.getAttribute(a)},removeProperty:function(a){this.removeAttribute(a)},setProperty:function(a,b,d){"important"!=d?this.setAttribute(a,b):(d=RegExp(a+"\\s*:\\s*(\\S+)\\s*(?:[$;]|(?:(!important)\\s*[$;]))","i"),a=";"+a+":"+b+" !important;",this.cssText=d.test(this.cssText)?this.cssText.replace(d,a):this.cssText+a)},getPropertyPriority:function(a){return((this.cssText||
"").match(RegExp(a+"\\s*:\\s*(\\S+)\\s*(?:[$;]|(?:(!important)\\s*[$;]))","i"))||[])[2]||""},item:Y()},T={"for":"htmlFor","class":"className",value:"defaultValue"},da={action:m,cite:m,codebase:m,data:m,href:m,longdesc:m,lowsrc:m,src:m,usemap:m},O={id:l,value:l,checked:l,disabled:l,ismap:l,multiple:l,readonly:l,selected:l},Va={checked:m,disabled:m,ismap:m,multiple:m,readonly:m,selected:m},w,P,M,ib=1,jb=Y(),La=s,Fa,V="abbr|article|aside|audio|canvas|command|datalist|details|figure|figcaption|footer|header|hgroup|keygen|mark|meter|nav|output|progress|section|source|summary|time|video",
ja=V.split("|"),ta=/^<|^(?:a|b|button|code|div|fieldset|form|map|h1|h2|h3|h4|h5|h6|i|object|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul|optgroup)$/i,u,E,W,Ga,Z,$;"CSS1Compat"===document.compatMode?(Z=function(){return t.scrollLeft},$=function(){return t.scrollTop}):(Z=function(){return document.body.scrollTop},$=function(){return document.body.scrollLeft});document.head||(document.head=document.getElementsByTagName("head")[0]);
"defaultView"in document||(document.defaultView=document.parentWindow);c=s;try{c=isNaN.apply(m,{})}catch(mb){}c||(Function.prototype.apply=function(a,b){try{return b!=k?ba.call(this,a,b):ba.call(this,a)}catch(d){return(-2146823260!=d.number||b.length===k||"string"===typeof b)&&J(d),ba.call(this,a,Array.from(b))}});"b"!=="ab".substr(-1)&&(String.prototype.substr=function(a,b){return eb.call(this,0>a?0>(a=this.length+a)?0:a:a,b)});if("te".split(/(s)*/)[1]!=k||3!="1_1".split(/(_)/).length)ra=/()??/.exec("")[1]===
k,String.prototype.split=function(a,b){var d=this;if(!(a instanceof RegExp))return a===k&&0===b?[]:ga.call(d,a,b);var f=[],h=0,e=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.t?"y":""),c=RegExp(a.source,e+"g"),g=m,n,j,d=d+"";ra||(g=RegExp("^"+c.source+"$(?!\\s)",e));if(b===k||0>+b)b=Infinity;else if(b=Math.floor(+b),!b)return[];for(;n=c.exec(d);){e=n.index+n[0].length;if(e>h&&(f.push(d.slice(h,n.index)),!ra&&1<n.length&&n[0].replace(g,function(){for(var a=1,b=arguments,d=b.length-2;a<d;a++)b[a]===
k&&(n[a]=k)}),1<n.length&&n.index<d.length&&f.push.apply(f,n.slice(1)),j=n[0].length,h=e,f.length>=b))break;c.lastIndex===n.index&&c.lastIndex++}h===d.length?(j||!c.test(""))&&f.push(""):f.push(d.slice(h));return f.length>b?f.slice(0,b):f};e.DOMException||(c=(e.DOMException=Y()).prototype=Error(),c.INDEX_SIZE_ERR=1,c.HIERARCHY_REQUEST_ERR=3,c.WRONG_DOCUMENT_ERR=4,c.INVALID_CHARACTER_ERR=5,c.NO_MODIFICATION_ALLOWED_ERR=7,c.NOT_FOUND_ERR=8,c.NOT_SUPPORTED_ERR=9,c.INVALID_STATE_ERR=11,c.SYNTAX_ERR=12,
c.INVALID_MODIFICATION_ERR=13,c.NAMESPACE_ERR=14,c.INVALID_ACCESS_ERR=15,c.TYPE_MISMATCH_ERR=17);"pageXOffset"in e||j.push(function(){Object.defineProperty(e,"pageXOffset",{get:Z});Object.defineProperty(e,"pageYOffset",{get:$})});C=e.Event=function(){J("")};P={initEvent:function(a,b,d){(a==k||b==k||d==k)&&J("WRONG_ARGUMENTS_ERR");this.type=a;this.bubbles=b;this.cancelable=d;this.g=s;this.target=m;this.timeStamp||(this.timeStamp=+new sa)},initCustomEvent:function(a,b,d,f){P.initEvent.call(this,a,b,
d);this.detail=f},initUIEvent:function(a,b,d,f,h){P.initCustomEvent.call(this,a,b,d,h);this.view=f},initMouseEvent:function(a,b,d,f,h,e,c,g,n,j,p,i,x,r,t){P.initUIEvent.call(this,a,b,d,f,h);this.screenX=e;this.screenY=c;this.clientX=g;this.clientY=n;this.ctrlKey=j;this.altKey=p;this.shiftKey=i;this.metaKey=x;this.button=r;this.relatedTarget=t}};M=C.prototype={constructor:C,preventDefault:function(){this.cancelable!==s&&(w.a.call(this).returnValue=this.returnValue=s,w.d.call(this),this.defaultPrevented=
l)},stopPropagation:function(){w.a.call(this).cancelBubble=this.cancelBubble=l;w.d.call(this)}};M.stopImmediatePropagation=function(){this.__stopNow=l;this.stopPropagation()};M.defaultPrevented=s;for(c in P)G(P,c)&&(M[c]=function(){P[arguments.callee.name].apply(this,arguments);Ca(this.ietl9_event,this)},M[c].name=c);w=function(a){this.ietl9_event=a;a.returnValue=l;Ca(this,a)};w.a=function(){var a=this.ietl9_event;a===k?J("WRONG_THIS_ERR"):a===m&&(a=w.a.f);return a};w.a.f={};w.d=function(){this.ietl9_event&&
(this.ietl9_event=m)};C=Y();C.prototype=M;C=new C;C.constructor=w;w.prototype=C;document.addEventListener||(g.addEventListener=t.addEventListener=e.addEventListener=document.addEventListener=function(a,b,d){if("function"==typeof b||"object"===typeof b&&b.handleEvent){var f=this,h=f._,c=s;f==e&&(!("_"in document)||!("_e_8vj"in document._)||!(a in document._._e_8vj))&&document.addEventListener(a,jb,d);h||(h=f._={});switch(a){case "DOMContentLoaded":if("complete"==document.readyState)return;f===e&&(f=
document);c=l;if(!Fa){Fa=l;var g=function(){try{document.documentElement.doScroll("left")}catch(b){setTimeout(g,50);return}aa.call(f,{type:a,isTrusted:l,__custom_event:k})};if("createEventObject"in document&&"doScroll"in document.documentElement)try{e.frameElement||g()}catch(j){}}break;case "load":"tagName"in f&&"SCRIPT"===f.tagName.toUpperCase()&&(c=l,f.onreadystatechange=function(){"loaded"===f.readyState&&(f.onreadystatechange=m,f.attachEvent("onreadystatechange",H.call(aa,f,{type:a})))},a="readystatechange");
break;case "DOMMouseScroll":a="mousewheel"}f.setInterval&&(f!=e&&!f.frameElement)&&(f=e);b.uuid||(b.uuid=++ib);if(!(d=h._h_9e2))d=h._h_9e2=H.call(aa,f);h._e_8vj||(h._e_8vj={});h._e_8vj[a]||(h._e_8vj[a]={},c||f.attachEvent("on"+a,d));h._e_8vj[a][b.uuid]=b}},g.addEventListener.__shim__=l,g.removeEventListener=t.removeEventListener=e.removeEventListener=document.removeEventListener=function(a,b){var d=this._,f,h,c;if(!("function"!=typeof b||!b.uuid||!d))if(f=d._h_9e2){h=d._e_8vj&&d._e_8vj[a];delete h[b.uuid];
for(c in h)if(G(h,c))return;this.detachEvent("on"+a,f);delete d._e_8vj[a];for(c in d._e_8vj)if(G(d._e_8vj,c))return;delete d._e_8vj}},g.removeEventListener.__shim__=l,document.attachEvent("onmousedown",function(){D.b=event.button}),document.attachEvent("onclick",function(){D.b=k}));document.dispatchEvent||(g.dispatchEvent=t.dispatchEvent=e.dispatchEvent=document.dispatchEvent=function(a){if(!a.type)return l;a.returnValue||(a.returnValue=l);a.cancelBubble&&(a.cancelBubble=s);delete a.__stopNow;try{return this.fireEvent("on"+
a.type,a)}catch(b){if(-2147024809===b.number||this===e||-2146827850===b.number&&!(a.bubbles=s)){a.__custom_event=l;for(var d=a.target=this,f="on"+a.type;!a.cancelBubble&&d;)(f in d&&"function"==typeof d[f]&&(a.__dom0__=d[f])||"_"in d&&"_e_8vj"in d._)&&aa.call(d,a),d=a.bubbles?d===document?document.defaultView:d.parentNode:m,"__dom0__"in a&&(a.__dom0__=k);return!a.cancelBubble}J(b)}},g.dispatchEvent.__shim__=l);document.createEvent||(document.createEvent=function(){return new w(document.createEventObject())});
j.push(function(){function a(a){var b,d=this.nodeName.toUpperCase(),f,c,e,g,i,j,p,r;if(!("INPUT"!=d&&"TEXTAREA"!=d)){j=document.activeElement;b=document.selection;this._&&(p=this._.__stop_events__,this._.__stop_events__=l);j._&&(r=j._.__stop_events__,j._.__stop_events__=l);try{this.focus(),f=b.createRange(),c=f.duplicate(),"TEXTAREA"==d?(e=this.value,f=c,a?(f.moveEnd("character",e.length),i=""==f.text?e.length:e.lastIndexOf(f.text)):(f.moveStart("character",-e.length),i=f.text.length)):(c.moveToElementText(this),
c.setEndPoint("EndToEnd",f),g=c.text.length-f.text.length,i=a?g:g+f.text.length),j&&j.focus&&j.focus()}catch(t){i=k}this._&&!p&&delete this._.__stop_events__;j._&&!r&&delete j._.__stop_events__;return i}}function b(a,b){if(a!=k){b==k&&(b=a);var d=this.nodeName.toUpperCase();"INPUT"!=d&&"TEXTAREA"!=d||(d=this.createTextRange(),d.collapse(l),d.moveStart("character",a),d.moveEnd("character",b-a),d.select())}}var d=e.HTMLTextAreaElement&&e.HTMLTextAreaElement.prototype,f={setSelectionRange:{value:b},
selectionStart:{get:function(){return a.call(this,l)},set:function(d){b.call(this,d,a.call(this));return d}},selectionEnd:{get:function(){return a.call(this)},set:function(d){b.call(this,a.call(this,l),d);return d}}};Object.defineProperties(e.HTMLInputElement&&e.HTMLInputElement.prototype||p,f);d&&Object.defineProperties(d,f)});U.prototype=[];c=new U;c.push(1);c.length?e.NodeList=U:(c=document.createElement("iframe"),c.style.display="none",(document.body||t).appendChild(c),c.contentWindow.document.write("<script>parent.NodeList=Array;<\/script>"),
U=e.NodeList);U.prototype.item=function(a){return this[a]};document.querySelectorAll&&Ma();document.doctype===m&&7<z&&j.push(function(){var a=document.childNodes[0];Object.defineProperty(a,"nodeType",{get:function(){return 10}});Object.defineProperty(document,"doctype",{configurable:l,enumerable:s,get:function(){return a}})});g.contains||(g.contains=fb);F.call(Aa,document,"").contains||(e.Text&&e.Text.prototype?j.push(H.call(A,m,Text.prototype,g)):document.createTextNode=function(a){a=F.call(Aa,this,
a);a.contains=g.contains;return a});!F.call(qa,document).contains&&(e.HTMLDocument&&e.HTMLDocument.prototype)&&j.push(H.call(A,m,e.HTMLDocument.prototype,g));"children"in r||j.push(function(){Object.defineProperty(p,"children",{get:function(){for(var a=[],b=this.firstChild;b;)1==b.nodeType&&a.push(b),b=b.nextSibling;return a}})});j.push(function(){function a(a,d){var f;try{a:{var c=a;"element"in c&&("defaults"in c&&"document"in c)&&(c=c.element);var e=c.getBoundingClientRect(),g,j,n;if((n=c.ownerDocument)!==
document){if(g=n&&n.body,j=n&&n.documentElement,!g||!j){f=d?e.left:e.top;break a}}else g=document.body,j=t;f=d?e.left+Z()-(j.clientLeft||g.clientLeft||0):e.top+$()-(j.clientTop||g.clientTop||0)}}catch(p){f=a;c=0;for(e=d?"offsetLeft":"offsetTop";f;)c+=parseInt(f[e],10),f=f.offsetParent;f=c}return f}Object.defineProperties(p,{offsetLeft:{get:function(){return a(this,l)}},offsetTop:{get:function(){return a(this)}}})});r.childElementCount==k&&j.push(function(){Object.defineProperties(p,{firstElementChild:{get:function(){var a;
for(a=this.firstChild;a&&1!=a.nodeType;)a=a.nextSibling;return a}},lastElementChild:{get:function(){var a;for(a=this.lastChild;a&&1!=a.nodeType;)a=a.previousSibling;return a}},nextElementSibling:{get:function(){for(var a=this;(a=a.nextSibling)&&1!=a.nodeType;);return a}},previousElementSibling:{get:function(){for(var a=this;(a=a.previousSibling)&&1!=a.nodeType;);return a}}})});document.ELEMENT_NODE||(c={ELEMENT_NODE:1,TEXT_NODE:3,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,
DOCUMENT_FRAGMENT_NODE:11},A(document,c),A(g,c),A(e.Node,c));"textContent"in r||j.push(function(){Object.defineProperty(g,"textContent",{get:function(){if("innerText"in this)return this.innerText;if("data"in this&&this.appendData)return this.data},set:function(a){"innerText"in this?this.innerText=a:"data"in this&&this.replaceData&&this.replaceData(0,this.length,a);return a}})});"isEqualNode"in r||(document.isEqualNode=t.isEqualNode=g.isEqualNode=function(a){var b,d;if(a===m||a.nodeType!==this.nodeType||
10===a.nodeType&&(this.name!==a.name||this.publicId!==a.publicId||this.systemId!==a.systemId))return s;if(1===a.nodeType){if(this.namespaceURI!=a.namespaceURI||this.prefix!=a.prefix||this.localName!=a.localName)return s;b=0;for(d=this.attributes.length;b<d;b++){var f=this.attributes[length],c=a.getAttributeNS(f.namespaceURI,f.localName);if(c===m||c.value!==f.value)return s}}if(7===a.nodeType&&(this.target!==a.target||this.data!==a.data)||(3===a.nodeType||8===a.nodeType)&&this.data!==a.data||a.childNodes.length!==
this.childNodes.length)return s;b=0;for(d=a.childNodes.length;b<d;b++)if(a.childNodes[b].isEqualNode(this.childNodes[b])===s)return s;return l});document.importNode||(document.importNode=function(a,b){switch(a.nodeType){case 1:var d=document.createElement(a.nodeName),f=a.attributes,c,e,g;if(f&&0<f.length){e=0;for(g=f.length;e<g;)f=a.attributes[e++],d.setAttribute(f.nodeName,a.getAttribute(f.nodeName))}if(b&&(c=a.childNodes)&&0<c.length){e=0;for(g=c.length;e<g;)d.appendChild(document.importNode(c[e++],
b))}return d;case 3:case 4:case 8:return document.createTextNode(a.nodeValue)}Ba("NOT_SUPPORTED_ERR");return m},document.importNode.shim=l);c="compareDocumentPosition";c in document||(j=u||"DOCUMENT_POSITION_",t[c]=document[c]=g[c]=function(a){return this.contains?(this!=a&&this.contains(a)&&16)+(this!=a&&a.contains(this)&&8)+(0<=this.sourceIndex&&0<=a.sourceIndex?(this.sourceIndex<a.sourceIndex&&4)+(this.sourceIndex>a.sourceIndex&&2):1)+0:0},u="DISCONNECTED",t[j+u]=document[j+u]=g[j+u]=1,u="PRECEDING",
t[j+u]=document[j+u]=g[j+u]=2,u="FOLLOWING",t[j+u]=document[j+u]=g[j+u]=4,u="CONTAINS",t[j+u]=document[j+u]=g[j+u]=8,u="CONTAINED_BY",t[j+u]=document[j+u]=g[j+u]=16);e.getComputedStyle||(e.getComputedStyle=function(a){var b=a.currentStyle||a.runtimeStyle;"getPropertyValue"in b||(a.runtimeStyle.getPropertyValue=Ea.getPropertyValue.bind(a),a.runtimeStyle.setProperty=a.runtimeStyle.removeProperty=function(){Ba("NO_MODIFICATION_ALLOWED_ERR")},a.runtimeStyle.getPropertyPriority=function(){return""},a.runtimeStyle.item=
Ea.item);var d,c;(c=e.CSSStyleDeclaration)&&(c=c.prototype)&&(!("float"in b)||!("opacity"in b))?("float"in b||((d=Object.getOwnPropertyDescriptor(c,"float"))&&delete c["float"],Object.defineProperty(a.runtimeStyle,"float",{value:{valueOf:H.call(function(){return this.runtimeStyle.styleFloat||this.style.styleFloat},a)}}),d&&Object.defineProperty(c,"float",d)),"opacity"in b||((d=Object.getOwnPropertyDescriptor(c,"opacity"))&&delete c.opacity,Object.defineProperty(a.runtimeStyle,"opacity",{value:{valueOf:H.call(function(){return this.runtimeStyle.msOpacity||
this.style.msOpacity||fa.call(this.style)||fa.call(this.runtimeStyle)},a)}}),d&&Object.defineProperty(c,"opacity",d))):("float"in b||(a.runtimeStyle["float"]={valueOf:H.call(function(){return this.runtimeStyle.styleFloat||this.style.styleFloat},a)}),"opacity"in b||(a.runtimeStyle.opacity={valueOf:H.call(function(){return this.runtimeStyle.msOpacity||this.style.msOpacity||fa.call(this.style)||fa.call(this.runtimeStyle)},a)}));return a.currentStyle});document.createDocumentFragment=function(){var a=
F.call(qa,this);e.DocumentFragment===e.Document&&A(a,e.DocumentFragment.prototype);return ka(a)};u=(r.innerHTML="<x-x></x-x>",1===r.childNodes.length&&1===r.childNodes[0].nodeType);V="|"+V+"|";ia.ielt9=l;E=ka(F.call(qa,document));u||(ka(document),document.head.insertAdjacentHTML("beforeend","<br><style>article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}</style>"));0===F.call(la,document,"x-x").cloneNode().outerHTML.indexOf("<:x-x>")&&(W=
E.appendChild("createElement"in E&&E.createElement("div")||E.ownerDocument.createElement("div")),Ga=8===z?r.cloneNode:8>z?g.cloneNode:k,g.cloneNode=function(a){var b,d;ta.test(this.nodeName)?b=F.call(this.__nativeCloneNode__||Ga,this,a):(W.innerHTML="",d=a?this.outerHTML:this.outerHTML.replace(this.innerHTML,""),W.innerHTML=d.replace(/^\<\:/,"<").replace(/\<\/\:([\w\-]*\>)$/,"<$1"),b=W.firstChild,!b&&!a&&((d=d.match(gb))&&(d=d[1]),d&&(E.createElement(d),W.innerHTML=d,b=W.firstChild)));return E.appendChild(b)});
r=c=C=ha=u=k;if(g.ie||!(7<z)){var ea=!document.readyState,X=["/a.ielt8.htc"],z="{behavior:",Ha=[],Ia,Ja,Ka,L,kb=e.scrollTo,lb=e.scrollBy;for(c=X.length;0<=--c;)z+=' url("'+X[c]+'")';z+="}";ea&&(document.readyState="uninitialized");g.ielt8=l;e.__ielt8__wontfix=Ha;var ma=/\s*(\S+)\s*/g,na="(?=(^|.*\\s)$1(\\s|$))",ab=/^([\w\-\|]+)?((?:\.(?:[\w-]+))+)?$|^#([\w-]+$)/,Xa=/\s*([,>+~ ])\s*/g,Ya=/\~\=/g,$a=/(^[>+~ ]?|,|\>|\+|~| ).*?(?=[,>+~ ]|$)/g,va=/\./g,Wa=/\s/g,Oa=/^([,>+~ ])?([\|\*\w-]*)\#?([\w-]*)((?:\.?[\w-])*)(\[.+\])?(?:\:(.+))?$/,
Qa=/^\[?['"]?(.*?)['"]?(?:([\*~&\^\$\@!]?=)['"]?(.*?)['"]?)?\]?$/,Sa=/^([^(]+)(?:\((.+)\))?$/,Za=/\-child\((\dn)\+(\d)\)/g,Ua=/(?:([-]?\d*)n)?(?:(%|-)(\d*))?/,bb=/([,>+~ ])/,Pa={"":1," ":1,",":1,">":2,"~":3,"+":4},Ra={"":1,"=":2,"&=":3,"^=":4,"$=":5,"*=":6,"|=":7,"!=":8,"@=":9},Ta={"nth-child":0,"nth-last-child":1,"only-child":2,"first-child":3,"last-child":4,root:5,empty:6,checked:7,lang:8,enabled:9,disabled:10,selected:11,contains:12,not:13,matches:14,"read-only":15,"read-write":16},xa=function(a){for(var b=
a.length>>>0,d=new U,c=0;c<b;c++)c in a&&d.push(a[c]);return d},oa=function(a){for(;(a=a.nextSibling)&&1!=a.nodeType;);return a};c="matchesSelector";t[c]||(p[c]=t[c]=ca);c="matches";t[c]||(p[c]=t[c]=ca);c="querySelectorAll";document[c]||(p[c]=t[c]=document[c]=function(a,b){return pa.call(this,a,s,b)});c="querySelector";document[c]||(p[c]=t[c]=document[c]=function(a,b){return pa.call(this,a,l,b)[0]||m});c="getElementsByClassName";document[c]||(p[c]=t[c]=document[c]=function(a){for(var a=RegExp(a.replace(ma,
na)),b=this.all,d,c=-1,e=[];d=b[++c];)d.className&&a.test(d.className)&&e.push(d);return e});O.e={};O.c=function(a,b){if(b in this)return this[b];var d=a.nodeName;if(!(a=O.e[d]))a=O.e[d]=la(d);return this[b]=a.getAttribute(b)!==m};p.setAttribute=function(a,b,d){if(d==k){var c=a.toLowerCase(),d=1;T[c]!==k?a=T[c]:da[c]!==k?d=2:0!==c.indexOf("data-")&&!O.c(this,c)&&(a=a.toUpperCase());b+=""}return Function.prototype.call.call(this.__setAttribute__,this,a,b,d)};p.getAttribute=function(a,b){var d;d=a.toLowerCase();
var c,e;if(e=b==k)b=1;if(T[d]!==k)d=T[d];else{if(da[d]!==k)return F.call(this.__getAttribute__,this,a,2);d=0!==d.indexOf("data-")&&!O.c(this,d)?a.toUpperCase():a}c=F.call(this.__getAttribute__,this,d,b);c!==m?e&&(c+=""):!(d in this)&&"string"===typeof this[a]?(c=this[d]=this[a],this.__removeAttribute__(a),c+=""):c=m;return c};p.removeAttribute=function(a,b){var d,c;b==k&&(b=1,c=a.toLowerCase(),T[c]!==k?d=T[c]:da[c]!==k?b=2:0!==c.indexOf("data-")&&!O.c(this,c)&&(d=a.toUpperCase()));return F.call(this.__removeAttribute__,
this,d||a,b)};g.hasAttribute||(g.hasAttribute=function(a){return this.getAttribute(a)!==m});r=function(a){return function(){return a}};g.i=r(1);g.m=r(2);g.n=r(3);g.o=r(4);g.p=r(7);g.q=r(8);g.r=r(9);g.j=r(10);g.k=r(11);g.l=r(16);g.__ielt8__element_init__=function(){var a=this;a.element&&(a=a.element);"prepend"in a||(a.after=p.after,a.before=p.before,a.append=p.append,a.prepend=p.prepend,a.replace=p.replace,a.remove=p.remove);"isEqualNode"in a||(a.isEqualNode=g.isEqualNode);"compareDocumentPosition"in
a||(a.compareDocumentPosition=g.compareDocumentPosition);"getElementsByClassName"in a||(a.getElementsByClassName=p.getElementsByClassName);"addEventListener"in a||(a.addEventListener=e.addEventListener,a.removeEventListener=e.removeEventListener,a.dispatchEvent=e.dispatchEvent);"querySelector"in a||(a.querySelectorAll=p.querySelectorAll,a.querySelector=p.querySelector);"matchesSelector"in a||(a.matchesSelector=ca,a.matches=ca);"hasAttribute"in a||(a.hasAttribute=p.hasAttribute);"setSelectionRange"in
a||(a.setSelectionRange=p.setSelectionRange);a.setAttribute!=p.setAttribute&&(a.__setAttribute__=a.setAttribute,a.__getAttribute__=a.getAttribute,a.__removeAttribute__=a.removeAttribute,a.setAttribute=p.setAttribute,a.getAttribute=p.getAttribute,a.removeAttribute=p.removeAttribute);try{a.cloneNode!==g.cloneNode&&(a.__nativeCloneNode__=a.cloneNode,a.cloneNode=g.cloneNode)}catch(b){Ha.push(a)}};Ka=g.__ielt8_Node_behavior_apply=function(a){for(c=X.length;0<=--c;)try{a.addBehavior(X[c])}catch(b){}};Ja=
g.cloneNode;g.cloneNode=function(a){a=F.call(Ja||this.__nativeCloneNode__,this,a);Ka(a);return a};Ia=document.createElement;document.createElement=function(a){a=F.call(Ia,document,a);for(c=X.length;0<=--c;)try{a.addBehavior(X[c])}catch(b){}return a};e.XMLHttpRequest||(e.XMLHttpRequest=function(){var a;try{a=new ActiveXObject("Msxml2.XMLHTTP")}catch(b){a=new ActiveXObject("Microsoft.XMLHTTP")}var c=a.send;a.send=function(){this.setRequestHeader("If-Modified-Since","Sat, 1 Jan 2000 00:00:00 GMT");c.apply(this,
arguments)}});!("pageXOffset"in e)&&e.attachEvent&&(e.pageXOffset=e.pageYOffset=0,L="CSS1Compat"===document.compatMode?function(){e.scrollX=e.pageXOffset=document.body.parentNode.scrollLeft;e.scrollY=e.pageYOffset=document.body.parentNode.scrollTop}:function(){e.scrollX=e.pageXOffset=document.body.scrollLeft;e.scrollY=e.pageYOffset=document.body.scrollTop},e.attachEvent("onscroll",L),e.scroll=e.scrollTo=function(a,b){kb(a,b);L()},e.scrollBy=function(a,b){lb(a,b);L()});document.addEventListener("DOMContentLoaded",
ya);e.attachEvent("onload",za);Na(z);ea=z=c=k}}})(window,function(e,A){for(var D in A)Object.prototype.hasOwnProperty.call(A,D)&&!Object.prototype.hasOwnProperty.call(e,D)&&(e[D]=A[D]);return e});
}();
