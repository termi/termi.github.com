void function(){"use strict";function k(a,b,c,e,d){var g=[];a=a.slice(1).split("&");for(var f=0,h,j;f<a.length;f++)if(h=a[f],(j=h.split("=",1)[0])&&(void 0==b||b==j)&&(void 0==c||c!=j))h=h.slice(j.length+1),g.push(e?h:d?j:[j,h]);return g}function m(a){for(var b=0,c=a.length,e=[],d;b<c;++b)d=a[b],e[b]=""!==d[1]?d.join("="):d[0];return e.join("&")}function l(a){if(this===f&&null===this)throw new TypeError;if(!a)throw new TypeError("Invalid argument");a=String(a).replace(/^\s+|\s+$/g,"").match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);
this.href=a[0];if(""===this.href)throw new TypeError("Invalid URL");this.protocol=a[1]||"";this.authority=a[2]||"";this.host=a[3]||"";this.hostname=a[4]||"";this.port=a[5]||"";this.pathname=a[6]||"";this.search=a[7]||"";this.hash=a[8]||"";if(a=this.pathname.match(/\/([^\/]+)$/))this.filename=a[1];this.filename="";this.parameterNames=Object.create?Object.create(null):{};a=k(this.search,void 0,void 0,void 0,!0);for(var b=0,c=a.length,e=[],d;b<c;++b)d=a[b],d in this.parameterNames||(this.parameterNames[d]=
!0,e.push(d))}function n(){this.href=this.protocol+"//"+this.host+this.pathname+this.search}var f=this;l.prototype={toString:function(){return this.href},getParameter:function(a){return this.getParameterAll(a).pop()},getParameterAll:function(a){return k(this.search,a+"",void 0,!0)},appendParameter:function(a,b){this.parameterNames[a]=!0;Array.isArray(b)||(b=[b]);for(var c=k(this.search),e=0;e<b.length;e++)c.push([a,b[e]]);this.search=(c=m(c))?"?"+c:"";n.call(this)},clearParameter:function(a){a in
this.parameterNames&&delete this.parameterNames[a];this.search=(a=m(k(this.search,void 0,a)))?"?"+a:"";n.call(this)}};var g;if(g=f.URL||f.webkitURL||f.mozURL)g.createObjectURL&&(l.createObjectURL=function(a){return this.createObjectURL.apply(this,arguments)}.bind(g)),g.revokeObjectURL&&(l.revokeObjectURL=function(a){return this.revokeObjectURL.apply(this,arguments)}.bind(g));g=null;f.URL=l}.call(window);