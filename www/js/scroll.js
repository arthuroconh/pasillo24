(function(e,t,n){"use strict";function X(n){u=t.documentElement;a=t.body;U();pt=this;n=n||{};wt=n.constants||{};if(n.easing){for(var r in n.easing){W[r]=n.easing[r]}}Pt=n.edgeStrategy||"set";mt={beforerender:n.beforerender,render:n.render};gt=n.forceHeight!==false;if(gt){bt=n.scale||1}Et=n.mobileDeceleration||x;At=n.smoothScrolling!==false;Ot=n.smoothScrollingDuration||T;Mt={targetTop:pt.getScrollTop()};Ht=(n.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent||navigator.vendor||e.opera)})();if(Ht){vt=t.getElementById("skrollr-body");if(vt){rt()}V();at(u,[g,w],[y])}else{at(u,[g,b],[y])}pt.refresh();it(e,"resize orientationchange",function(){var e=u.clientWidth;var t=u.clientHeight;if(t!==Ct||e!==Nt){Ct=t;Nt=e;kt=true}});var i=z();(function s(){K();i(s)})();return pt}var r=e.skrollr={get:function(){return pt},init:function(e){return pt||new X(e)},VERSION:"0.6.11"};var i=Object.prototype.hasOwnProperty;var s=e.Math;var o=e.getComputedStyle;var u;var a;var f="touchstart";var l="touchmove";var c="touchcancel";var h="touchend";var p="skrollable";var d=p+"-before";var v=p+"-between";var m=p+"-after";var g="skrollr";var y="no-"+g;var b=g+"-desktop";var w=g+"-mobile";var E="linear";var S=1e3;var x=.004;var T=200;var N="start";var C="end";var k="center";var L="bottom";var A="___skrollable_id";var O=/^\s+|\s+$/g;var M=/^data(?:-(_\w+))?(?:-?(-?\d+))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/;var _=/\s*([\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi;var D=/^([a-z\-]+)\[(\w+)\]$/;var P=/-([a-z])/g;var H=function(e,t){return t.toUpperCase()};var B=/[\-+]?[\d]*\.?[\d]+/g;var j=/\{\?\}/g;var F=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g;var I=/[a-z\-]+-gradient/g;var q="";var R="";var U=function(){var e=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(!o){return}var t=o(a,null);for(var n in t){q=n.match(e)||+n==n&&t[n].match(e);if(q){break}}if(!q){q=R="";return}q=q[0];if(q.slice(0,1)==="-"){R=q;q={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[q]}else{R="-"+q.toLowerCase()+"-"}};var z=function(){var t=e.requestAnimationFrame||e[q.toLowerCase()+"RequestAnimationFrame"];var n=ct();if(Ht||!t){t=function(t){var r=ct()-n;var i=s.max(0,1e3/60-r);e.setTimeout(function(){n=ct();t()},i)}}return t};var W={begin:function(){return 0},end:function(){return 1},linear:function(e){return e},quadratic:function(e){return e*e},cubic:function(e){return e*e*e},swing:function(e){return-s.cos(e*s.PI)/2+.5},sqrt:function(e){return s.sqrt(e)},outCubic:function(e){return s.pow(e-1,3)+1},bounce:function(e){var t;if(e<=.5083){t=3}else if(e<=.8489){t=9}else if(e<=.96208){t=27}else if(e<=.99981){t=91}else{return 1}return 1-s.abs(3*s.cos(e*t*1.028)/t)}};X.prototype.refresh=function(e){var r;var i;var s=false;if(e===n){s=true;dt=[];Dt=0;e=t.getElementsByTagName("*")}else{e=[].concat(e)}r=0;i=e.length;for(;r<i;r++){var o=e[r];var u=o;var a=[];var f=At;var l=Pt;if(!o.attributes){continue}var c=0;var h=o.attributes.length;for(;c<h;c++){var d=o.attributes[c];if(d.name==="data-anchor-target"){u=t.querySelector(d.value);if(u===null){throw'Unable to find anchor target "'+d.value+'"'}continue}if(d.name==="data-smooth-scrolling"){f=d.value!=="off";continue}if(d.name==="data-edge-strategy"){l=d.value;continue}var v=d.name.match(M);if(v===null){continue}var m=v[1];m=m&&wt[m.substr(1)]||0;var g=(v[2]|0)+m;var y=v[3];var b=v[4]||y;var w={offset:g,props:d.value,element:o};a.push(w);if(!y||y===N||y===C){w.mode="absolute";if(y===C){w.isEnd=true}else{w.frame=g*bt;delete w.offset}}else{w.mode="relative";w.anchors=[y,b]}}if(!a.length){continue}var E,S;var x;if(!s&&A in o){x=o[A];E=dt[x].styleAttr;S=dt[x].classAttr}else{x=o[A]=Dt++;E=o.style.cssText;S=ut(o)}dt[x]={element:o,styleAttr:E,classAttr:S,anchorTarget:u,keyFrames:a,smoothScrolling:f,edgeStrategy:l};at(o,[p],[])}st();r=0;i=e.length;for(;r<i;r++){var T=dt[e[r][A]];if(T===n){continue}Q(T);Y(T)}return pt};X.prototype.relativeToAbsolute=function(e,t,n){var r=u.clientHeight;var i=e.getBoundingClientRect();var s=i.top;var o=i.bottom-i.top;if(t===L){s-=r}else if(t===k){s-=r/2}if(n===L){s+=o}else if(n===k){s+=o/2}s+=pt.getScrollTop();return s+.5|0};X.prototype.animateTo=function(e,t){t=t||{};var r=ct();var i=pt.getScrollTop();Lt={startTop:i,topDiff:e-i,targetTop:e,duration:t.duration||S,startTime:r,endTime:r+(t.duration||S),easing:W[t.easing||E],done:t.done};if(!Lt.topDiff){if(Lt.done){Lt.done.call(pt,false)}Lt=n}return pt};X.prototype.stopAnimateTo=function(){if(Lt&&Lt.done){Lt.done.call(pt,true)}Lt=n};X.prototype.isAnimatingTo=function(){return!!Lt};X.prototype.setScrollTop=function(t,n){if(n===true){xt=t;_t=true}if(Ht){Bt=s.min(s.max(t,0),yt)}else{e.scrollTo(0,t)}return pt};X.prototype.getScrollTop=function(){if(Ht){return Bt}else{return e.pageYOffset||u.scrollTop||a.scrollTop||0}};X.prototype.on=function(e,t){mt[e]=t;return pt};X.prototype.off=function(e){delete mt[e];return pt};var V=function(){var t;var r;var i;var o;var p;var d;var v;var m;var g;var y;var b;it(u,[f,l,c,h].join(" "),function(e){e.preventDefault();var u=e.changedTouches[0];o=u.clientY;p=u.clientX;g=e.timeStamp;switch(e.type){case f:if(t){t.blur()}pt.stopAnimateTo();t=e.target;r=d=o;i=p;m=g;break;case l:v=o-d;b=g-y;pt.setScrollTop(Bt-v,true);d=o;y=g;break;default:case c:case h:var a=r-o;var w=i-p;var E=w*w+a*a;if(E<49){t.focus();t.click();return}t=n;var S=v/b;S=s.max(s.min(S,3),-3);var x=s.abs(S/Et);var T=S*x+.5*Et*x*x;var N=pt.getScrollTop()-T;var C=0;if(N>yt){C=(yt-N)/T;N=yt}else if(N<0){C=-N/T;N=0}x=x*(1-C);pt.animateTo(N,{easing:"outCubic",duration:x});break}});e.scrollTo(0,0);u.style.overflow=a.style.overflow="hidden"};var $=function(){var e;var t;var n;var r;var i;var o;var u;var a;var f;a=0;f=dt.length;for(;a<f;a++){e=dt[a];t=e.element;n=e.anchorTarget;r=e.keyFrames;i=0;o=r.length;for(;i<o;i++){u=r[i];if(u.mode==="relative"){nt(t);u.frame=pt.relativeToAbsolute(n,u.anchors[0],u.anchors[1])-u.offset;nt(t,true)}if(gt){if(!u.isEnd&&u.frame>yt){yt=u.frame}}}}yt=s.max(yt,ot());a=0;f=dt.length;for(;a<f;a++){e=dt[a];r=e.keyFrames;i=0;o=r.length;for(;i<o;i++){u=r[i];if(u.isEnd){u.frame=yt-u.offset}}e.keyFrames.sort(ht)}};var J=function(e,t){var n=0;var s=dt.length;for(;n<s;n++){var o=dt[n];var u=o.element;var a=o.smoothScrolling?e:t;var f=o.keyFrames;var l=f[0].frame;var c=f[f.length-1].frame;var h=a<l;var g=a>c;var y=f[h?0:f.length-1];var b;var w;if(h||g){if(h&&o.edge===-1||g&&o.edge===1){continue}at(u,[h?d:m],[d,v,m]);o.edge=h?-1:1;switch(o.edgeStrategy){case"reset":nt(u);continue;case"ease":a=y.frame;break;default:case"set":var E=y.props;for(b in E){if(i.call(E,b)){w=tt(E[b].value);r.setStyle(u,b,w)}}continue}}else{if(o.edge!==0){at(u,[p,v],[d,m]);o.edge=0}}var S=0;var x=f.length-1;for(;S<x;S++){if(a>=f[S].frame&&a<=f[S+1].frame){var T=f[S];var N=f[S+1];for(b in T.props){if(i.call(T.props,b)){var C=(a-T.frame)/(N.frame-T.frame);C=T.props[b].easing(C);w=et(T.props[b].value,N.props[b].value,C);w=tt(w);r.setStyle(u,b,w)}}break}}}};var K=function(){if(kt){kt=false;st()}var e=pt.getScrollTop();var t;var i=ct();var s;if(Lt){if(i>=Lt.endTime){e=Lt.targetTop;t=Lt.done;Lt=n}else{s=Lt.easing((i-Lt.startTime)/Lt.duration);e=Lt.startTop+s*Lt.topDiff|0}pt.setScrollTop(e,true)}else if(!Ht){var o=Mt.targetTop-e;if(o){Mt={startTop:xt,topDiff:e-xt,targetTop:e,startTime:Tt,endTime:Tt+Ot}}if(i<=Mt.endTime){s=W.sqrt((i-Mt.startTime)/Ot);e=Mt.startTop+s*Mt.topDiff|0}}if(Ht&&vt){r.setStyle(vt,"transform","translate(0, "+ -Bt+"px) "+jt)}if(_t||xt!==e){St=e>=xt?"down":"up";_t=false;var u={curTop:e,lastTop:xt,maxTop:yt,direction:St};var a=mt.beforerender&&mt.beforerender.call(pt,u);if(a!==false){J(e,pt.getScrollTop());xt=e;if(mt.render){mt.render.call(pt,u)}}if(t){t.call(pt,false)}}Tt=i};var Q=function(e){var t=0;var n=e.keyFrames.length;for(;t<n;t++){var r=e.keyFrames[t];var i;var s;var o;var u={};var a;while((a=_.exec(r.props))!==null){o=a[1];s=a[2];i=o.match(D);if(i!==null){o=i[1];i=i[2]}else{i=E}s=s.indexOf("!")?G(s):[s.slice(1)];u[o]={value:s,easing:W[i]}}r.props=u}};var G=function(e){var t=[];F.lastIndex=0;e=e.replace(F,function(e){return e.replace(B,function(e){return e/255*100+"%"})});if(R){I.lastIndex=0;e=e.replace(I,function(e){return R+e})}e=e.replace(B,function(e){t.push(+e);return"{?}"});t.unshift(e);return t};var Y=function(e){var t={};var n;var r;n=0;r=e.keyFrames.length;for(;n<r;n++){Z(e.keyFrames[n],t)}t={};n=e.keyFrames.length-1;for(;n>=0;n--){Z(e.keyFrames[n],t)}};var Z=function(e,t){var n;for(n in t){if(!i.call(e.props,n)){e.props[n]=t[n]}}for(n in e.props){t[n]=e.props[n]}};var et=function(e,t,n){var r;var i=e.length;if(i!==t.length){throw"Can't interpolate between \""+e[0]+'" and "'+t[0]+'"'}var s=[e[0]];r=1;for(;r<i;r++){s[r]=e[r]+(t[r]-e[r])*n}return s};var tt=function(e){var t=1;j.lastIndex=0;return e[0].replace(j,function(){return e[t++]})};var nt=function(e,t){e=[].concat(e);var n;var r;var i=0;var s=e.length;for(;i<s;i++){r=e[i];n=dt[r[A]];if(!n){continue}if(t){r.style.cssText=n.dirtyStyleAttr;at(r,n.dirtyClassAttr)}else{n.dirtyStyleAttr=r.style.cssText;n.dirtyClassAttr=ut(r);r.style.cssText=n.styleAttr;at(r,n.classAttr)}}};var rt=function(){jt="translateZ(0)";r.setStyle(vt,"transform",jt);var e=o(vt);var t=e.getPropertyValue("transform");var n=e.getPropertyValue(R+"transform");var i=t&&t!=="none"||n&&n!=="none";if(!i){jt=""}};r.setStyle=function(e,t,n){var r=e.style;t=t.replace(P,H).replace("-","");if(t==="zIndex"){r[t]=""+(n|0)}else if(t==="float"){r.styleFloat=r.cssFloat=n}else{try{if(q){r[q+t.slice(0,1).toUpperCase()+t.slice(1)]=n}r[t]=n}catch(i){}}};var it=r.addEvent=function(t,n,r){var i=function(t){t=t||e.event;if(!t.target){t.target=t.srcElement}if(!t.preventDefault){t.preventDefault=function(){t.returnValue=false}}return r.call(this,t)};n=n.split(" ");var s=0;var o=n.length;for(;s<o;s++){if(t.addEventListener){t.addEventListener(n[s],r,false)}else{t.attachEvent("on"+n[s],i)}}};var st=function(){var e=pt.getScrollTop();yt=0;if(gt&&!Ht){a.style.height="auto"}$();if(gt&&!Ht){a.style.height=yt+u.clientHeight+"px"}if(Ht){pt.setScrollTop(s.min(pt.getScrollTop(),yt))}else{pt.setScrollTop(e,true)}_t=true};var ot=function(){var e=vt&&vt.offsetHeight||0;var t=s.max(e,a.scrollHeight,a.offsetHeight,u.scrollHeight,u.offsetHeight,u.clientHeight);return t-u.clientHeight};var ut=function(t){var n="className";if(e.SVGElement&&t instanceof e.SVGElement){t=t[n];n="baseVal"}return t[n]};var at=function(t,r,i){var s="className";if(e.SVGElement&&t instanceof e.SVGElement){t=t[s];s="baseVal"}if(i===n){t[s]=r;return}var o=t[s];var u=0;var a=i.length;for(;u<a;u++){o=lt(o).replace(lt(i[u])," ")}o=ft(o);var f=0;var l=r.length;for(;f<l;f++){if(lt(o).indexOf(lt(r[f]))===-1){o+=" "+r[f]}}t[s]=ft(o)};var ft=function(e){return e.replace(O,"")};var lt=function(e){return" "+e+" "};var ct=Date.now||function(){return+(new Date)};var ht=function(e,t){return e.frame-t.frame};var pt;var dt;var vt;var mt;var gt;var yt=0;var bt=1;var wt;var Et;var St="down";var xt=-1;var Tt=ct();var Nt=0;var Ct=0;var kt=false;var Lt;var At;var Ot;var Mt;var _t;var Dt=0;var Pt;var Ht=false;var Bt=0;var jt})(window,document)