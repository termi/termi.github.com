(function(j){var IS_DEBUG=!1;function A(a,b,l){var e=document.getElementById(a),g="";e&&(g=e.getAttribute("data-url")||"",e.id="");g&&l.replace(" url("," url("+g+") url(");e=s.call(t,document,"style");e.id=a;e.type="text/css";e.setAttribute("data-url",l.replace("{behavior:","").replace(")}",")"));e.styleSheet.cssText=b+l;document.head.appendChild(e)}for(var B=IS_DEBUG&&!(!window||!window.console),d=j.Node.prototype,k=j.Element.prototype,u=j.browser||{},v,n=["/a.ielt8.htc"],r="{behavior:",s=Date.call,w=[],h=n.length;0<=
--h;)r+=' url("'+n[h]+'")';r+="}";document.readyState||(v=!0,document.readyState="uninitialized");if(d.ie&&8>u.msie){d.ielt8=!0;j.__ielt8__wontfix=w;var x=function(a,b,l){b?Array.isArray(b)||(b=[b]):b=[document];var e=!!l,l=l||[],g={},c,f,d=a.match(/^([,>+~ ])?(\w*)(?:|\*)\#?([\w-]*)((?:\.?[\w-])*)(\[.*?\])?\:?([\w\-\+\%\(\)]*)$/);c=d[1];var a=d[2].toUpperCase(),j=d[3],m=d[4],h=!!m,k=d[5],o,i=-1,d=d[6],n,p=-1;h&&(m=m.replace(/\./g," "));if(!e){switch(c){default:for(;f=b[++p];)if(j){c=document.getElementById(j);
(!a||c.tagName.toUpperCase()==a)&&l.push(c)}else if(h){i=-1;for(e=f.getElementsByClassName(m);g=e[++i];)l.push(g)}else if(a){i=-1;for(e=!a&&f.all?f.all:f.getElementsByTagName(a||"*");g=e[++i];)l.push(g)}j?j="":h?h=false:a&&(a="");break;case "+":for(;f=b[++p];){for(;(f=f.nextSibling)&&f.nodeType!=1;);if((c=f&&(!a||f.tagName.toUpperCase()==a)&&!(f.sourceIndex in g))&&h){i=-1;for(o=" "+f.className+" ";m[++i]&&c;)c=!!~o.indexOf(m[i])}if(c){l.push(f);if(!f.sourceIndex)f.sourceIndex=UUID++;g[f.sourceIndex]=
true}}h=false;a="";break;case "~":for(;f=b[++p];)for(;f=f.nextSibling;){if((c=f.nodeType==1&&(!a||f.tagName.toUpperCase()==a)&&!(f.sourceIndex in g))&&h){i=-1;for(o=" "+f.className+" ";m[++i]&&c;)c=!!~o.indexOf(m[i])}if(c){l.push(f);if(!f.sourceIndex)f.sourceIndex=UUID++;g[f.sourceIndex]=true}}h=false;a="";break;case ">":for(;f=b[++p];)for(e=-1;c=f.childNodes[++e];){if((c=c.nodeType==1&&(!a||c.tagName.toUpperCase()==a)&&!(f.sourceIndex in g))&&h){i=-1;for(o=" "+f.className+" ";m[++i]&&c;)c=!!~o.indexOf(m[i])}if(c){l.push(f);
if(!f.sourceIndex)f.sourceIndex=UUID++;g[f.sourceIndex]=true}}h=false;a=""}c=""}if(l.length&&(a||h||k||d||j||c)){p=0;for(h&&(m=(" "+m.slice(1).replace(/\./g," | ")+" ").split("|"));g=l[p++];){if((c=!(j&&g.id!=j))&&h){i=-1;for(o=" "+g.className+" ";m[++i]&&c;)c=!!~o.indexOf(m[i])}c&&a&&(c=g.tagName.toUpperCase()==a);if(c&&k){if(typeof k=="string"){k=k.match(/^\[(.*?)(?:([\*~&\^\$\|!]?=)(.*?))?\]$/);k[1]=="class"&&document.all&&(k[1]="className")}b=g.getAttribute(k[1]);e=k[3];switch(k[2]){default:c=
!!b||b==="";break;case "=":c=b&&b===e;break;case "&=":c=b&&RegExp("(^| +)"+e+"($| +)").test(b);break;case "^=":c=b&&!b.indexOf(e);break;case "$=":c=b&&b.indexOf(e)==b.length-e.length;break;case "*=":c=b&&~b.indexOf(e);break;case "|=":c=b&&(b===e||!!b.indexOf(e+"-"));break;case "!=":c=!b||!RegExp("(^| +)"+e+"($| +)").test(b);case "~=":}}if(c&&d){if(typeof d=="string"){d=d.match(/^([^(]+)(?:\(([^)]+)\))?$/);d[2]&&(n=/\D/.test(d[2])?d[2]==="even"?[null,2]:d[2]==="odd"?[null,2,"%",1]:/(?:(-?\d*)n)?(?:(%|-)(\d*))?/.exec(d[2]):
[null,0,"%",d[2]])}switch(d[1]){case "first-child":c=g.parentNode.getElementsByTagName("*")[0]==g;break;case "last-child":for(;(g=g.nextSibling)&&g.nodeType!=1;);c=!g;break;case "root":c=g.nodeName.toLowerCase()=="html";break;case "nth-child":c=n;b=g.nodeIndex||0;e=c[3]?(c[2]==="%"?-1:1)*c[3]:0;i=c[1];if(b)c=!i?!(b+e):!((b+e)%i);else{c=false;f=g.parentNode.firstChild;do if(f.nodeType==1&&(f.nodeIndex=++b)&&g===f&&(!i?!(b+e):!((b+e)%i)))c=true;while(!c&&(f=f.nextSibling))}break;case "nth-last-child":c=
n;b=g.nodeIndexLast||0;e=c[3]?(c[2]==="%"?-1:1)*c[3]:0;i=c[1];if(b)c=!i?!(b+e):!((b+e)%i);else{c=false;f=g.parentNode.lastChild;do if(f.nodeType==1&&(f.nodeLastIndex=++b)&&g===f&&(!i?!(b+e):!((b+e)%i)))c=true;while(!c&&(f=f.previousSibling))}break;case "empty":c=!g.firstChild;break;case "only-child":c=g.parentNode.getElementsByTagName("*").length==1;break;case "checked":c=!!g.checked;break;case "lang":c=g.lang==n||document.documentElement.lang==n;break;case "enabled":c=!g.disabled&&g.type!=="hidden";
break;case "disabled":c=!!g.disabled;break;case "selected":c=g.parentNode.selectedIndex&&!!g.selected}}c||l.splice(--p,1)}}return l},y=function(a){var b=this,d=[],e,g,c=0,f=b;if(/^[\w#.]\w*$/.test(a)){switch(a.charAt(0)){case "#":e=a.slice(1);a=b.getElementById(e);u.msie<9&&a.id!==e&&(a=a.ownerDocument.all[e]);d.push(a);break;case ".":for(a=b.getElementsByClassName(a.slice(1));b=a[c++];)d.push(b);break;default:for(a=b.getElementsByTagName(a);b=a[c++];)d.push(b)}return d}g=(a+",").replace(/ *([,>+~ ]) */g,
"$1").replace(/\((\dn)\+(\d)\)/,"($1%$2)").match(/(^[+> ~]?|,|\>|\+|~| ).*?(?=[,>+~ ]|$)/g);for(a=[];e=g[c++];){if(e.charAt(0)==","){a&&a.length>0&&(d=d.concat(a));a=[];b=f;if(e.length==1)continue}else a&&a.length>0&&(b=a);a&&(a=x(e,b));a&&!a.length&&(a=null)}return d},z=function(a){var b;if(/^[\w#.]\w*$/.test(a))switch(a.charAt(0)){case "#":a=a.slice(1);b=this.getElementById(a);u.msie<9&&b.id!==a&&(b=b.ownerDocument.all[a]);return b;case ".":return this.getElementsByClassName(a.slice(1))[0];default:return this.getElementsByTagName(a)[0]}return this.querySelectorAll(a)[0]||
null},C=function(a){var b=/^[\w#.]\w*$/.test(a),d=!b&&!/([,>+~ ])/.test(a),e;if(b)switch(a.charAt(0)){case "#":return this.id===a.slice(1);case ".":return!!~(" "+this.className+" ").indexOf(" "+a.slice(1)+" ");default:return this.tagName===a}else{if(d){b=x(a,null,[this]);if(B){b.length!==1&&console.error("matchesSelector error 1");b[0]!==this&&console.error("matchesSelector error 2")}return b[0]===this}b=this.ownerDocument;b=b.querySelectorAll(a);for(e in b)if(Object.prototype.hasOwnProperty.call(b,
e))if(a=b[e]===this)return true;return false}};document.querySelectorAll||(document.querySelectorAll=y);document.querySelector||(document.querySelector=z);d.hasAttribute||(d.hasAttribute=function(a){return this.getAttribute(a)!==null});h=function(a){return function(){return a}};d.g1=h(1);d.g2=h(2);d.g3=h(3);d.g4=h(4);d.g7=h(7);d.g8=h(8);d.g9=h(9);d.g10=h(10);d.g11=h(11);d.g16=h(16);d.__ielt8__element_init__=function(a){if(a.element)a=a.element;if(!a.after)a.after=k.after;if(!a.before)a.before=k.before;
if(!a.append)a.append=k.append;if(!a.prepend)a.prepend=k.prepend;if(!a.replace)a.replace=k.replace;if(!a.remove)a.remove=k.remove;if(!a.isEqualNode)a.isEqualNode=d.isEqualNode;if(!a.compareDocumentPosition)a.compareDocumentPosition=d.compareDocumentPosition;if(!a.getElementsByClassName)a.getElementsByClassName=k.getElementsByClassName;if(!a.addEventListener)a.addEventListener=window.addEventListener;if(!a.removeEventListener)a.removeEventListener=window.removeEventListener;if(!a.dispatchEvent)a.dispatchEvent=
window.dispatchEvent;if(!a.querySelectorAll)a.querySelectorAll=y;if(!a.querySelector)a.querySelector=z;if(!a.matchesSelector)a.matchesSelector=C;if(!a.hasAttribute)a.hasAttribute=k.hasAttribute;try{a._||(a._={});if(a.cloneNode!==k.cloneNode){a._.nativeCloneNode=a.cloneNode;a.cloneNode=k.cloneNode}if(d.contains)a.contains=d.contains}catch(b){}a._||w.push(a)};var D=d.cloneNode;d.cloneNode=function(a){for(var a=s.call(D,this,a),b=n.length;--b>=0;)a.addBehavior(n[b]);return a};var t=document.createElement;
document.createElement=function(a){var b=s.call(t,document,a);if(a!=="_")for(a=n.length;--a>=0;)b.addBehavior(n[a]);return b};document.createElement.orig=t;j.XMLHttpRequest||(j.XMLHttpRequest=function(){return ActiveXObject("Microsoft.XMLHTTP")});var q;!("scrollX"in j)&&j.attachEvent&&(j.pageXOffset=j.pageYOffset=0,q="CSS1Compat"===document.compatMode?function(){j.pageXOffset=document.body.parentNode.scrollLeft;j.pageYOffset=document.body.parentNode.scrollTop}:function(){j.pageXOffset=document.body.scrollLeft;
j.pageYOffset=document.body.scrollTop},j.attachEvent("onscroll",q));document.addEventListener("DOMContentLoaded",function b(){document.removeEventListener("DOMContentLoaded",b,false);if(v)document.readyState="interactive";q&&q()},!1);j.attachEvent("onload",function l(){j.detachEvent("onload",l);if(v)document.readyState="complete";q&&q()});A("ielt8_style_prev_for_behaviour","*",r)}})(window);