/* CSS.supports polyfill | @version 0.4 | MIT License | github.com/termi/CSS.supports */
void function(){"use strict";
var k=void 0,l=!0,m=null,n=!1;
a:{var r=function(c){function g(){var a=b.length-1;0>a&&(u=n);return b[a]}function p(a){var c=b.length-1;0>c&&(u=n);d=b[c]=a}function h(a,d,b,g){s=b||j;var e,f,h;g&&s--;do b=c.charAt(++s),g&&(h=b&&(e||f),"'"==b||'"'==b?h=e=!e:e||(!f&&"("==b?h=f=l:f&&")"==b&&(f=n,h=l)));while(h||b&&(!a||b!=a)&&(!d||b==d));if(a==m||b==a)return s}c||r.a();var b=[],e,d,u=l,x,q,B,y,w,f=41,a,j=-1,s,E=c.length;for(b.push(k);++j<E;){1==a?f=40:2==a||4==a||32==a?f=41:64==a?f=39:16==a?f=103:8==a&&(f=16);e=c.charAt(j);if(f&1&&
"n"==e&&"not"==c.substr(j,3))a=1,j+=2;else if(f&2&&"a"==e&&"and"==c.substr(j,3))a=2,j+=2;else if(f&4&&"o"==e&&"or"==c.substr(j,2))a=4,j++;else if(f&32&&"("==e&&h("("," "))a=32,j=s-1;else if(f&64&&")"==e&&1<b.length)a=64;else if(f&8&&"("==e&&(q=h(m," "))&&h(":",m,q)){a=8;j=s-1;B=c.substr(q,j-q+1).trim();q=0;y=m;continue}else if(f&16&&(q=h(m," "))&&h(")",m,q,l))a=16,j=s,y=c.substr(q,j-q).trim(),q=0,e=" ";else if(" "==e)continue;else a=0;(!u||!e||!(a&f))&&r.a();u=l;if(4==a)d===n?(p(),w=n):d===l&&(w=
l);else if(!w)if(d=g(),1==a)x=l;else if(2==a)d===n?w=l:p();else{if(d!==n||a&96)32==a?b.push(k):64==a?(w=n,b.pop(),g()!==k&&(d=!!(d&g())),x=n):16==a&&(p(t(B,y)),x&&(d=!d),x=n,y=B=m);p(d)}}(!u||d===k||1<b.length)&&r.a();return d},v=this,t,z,A,C;v.CSS||(v.CSS={});t=v.CSS.supports;!t&&v.supportsCSS&&(t=v.CSS.supports=v.supportsCSS.bind(v),v.__proto__&&delete v.__proto__.supportsCSS);if("function"===typeof t){var D;b:{try{t("(a:a)");D=!(t=m);break b}catch(F){t=t.bind(v)}D=k}if(D)break a}else z="runtimeStyle"in
document.documentElement,A=v.document.createElement("_"),C={},t=function(c,g,p,h,b){var e=h+"\\/"+b;if(e in C)return C[e];c=(h+"").replace(this,c);var d=h&&b&&c in g;if(d)if(z)if(/\(|\s/.test(b))try{g[c]=b,d=!!g[c]}catch(u){d=n}else g.cssText="display:none;height:0;width:0;visibility:hidden;position:absolute;position:fixed;"+h+":"+b,document.documentElement.appendChild(p),d=p.currentStyle[c]==b,document.documentElement.removeChild(p);else g.cssText=h+":"+b,d=g[c]==b||g[c]+"px"==b;g.cssText="";return C[e]=
d}.bind(/(-)([a-z])/g,function(c,g,p){return p.toUpperCase()},A.style,z?A:m);r.a=function(){throw Error("SYNTAX_ERR");};v.CSS.supports=function(c,g){if(!arguments.length)throw Error("WRONG_ARGUMENTS_ERR");return 1==arguments.length?r(c):t(c,g)};v=A=m}
}.call(this);
