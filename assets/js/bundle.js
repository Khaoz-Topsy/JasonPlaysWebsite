/*! For license information please see bundle.js.LICENSE.txt */
var KurtLourens;(()=>{var e={782:(e,t)=>{var r;!function(n,o,a){"use strict";function i(e){if(l=o.documentElement,s=o.body,G(),ae=this,fe=(e=e||{}).constants||{},e.easing)for(var t in e.easing)R[t]=e.easing[t];ye=e.edgeStrategy||"set",se={beforerender:e.beforerender,render:e.render,keyframe:e.keyframe},(ce=!1!==e.forceHeight)&&(Me=e.scale||1),ue=e.mobileDeceleration||A,me=!1!==e.smoothScrolling,de=e.smoothScrollingDuration||P,ge={targetTop:ae.getScrollTop()},($e=(e.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||n.opera)})())?((le=o.getElementById(e.skrollrBody||F))&&oe(),U(),Pe(l,[S,k],[w])):Pe(l,[S,x],[w]),ae.refresh(),be(n,"resize orientationchange",(function(){var e=l.clientWidth,t=l.clientHeight;(t!==Be||e!==ze)&&(Be=t,ze=e,Le=!0)}));var r=Y();return function e(){W(),Te=r(e)}(),ae}var l,s,c={get:function(){return ae},init:function(e){return ae||new i(e)},VERSION:"0.6.30"},f=Object.prototype.hasOwnProperty,u=n.Math,p=n.getComputedStyle,m="touchstart",d="touchmove",g="touchcancel",v="touchend",y="skrollable",h=y+"-before",T=y+"-between",b=y+"-after",S="skrollr",w="no-"+S,x=S+"-desktop",k=S+"-mobile",E="linear",A=.004,F="skrollr-body",P=200,I="center",O="bottom",C="___skrollable_id",H=/^(?:input|textarea|button|select)$/i,D=/^\s+|\s+$/g,M=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,N=/\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,V=/^(@?[a-z\-]+)\[(\w+)\]$/,_=/-([a-z0-9_])/g,z=function(e,t){return t.toUpperCase()},B=/[\-+]?[\d]*\.?[\d]+/g,L=/\{\?\}/g,q=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,$=/[a-z\-]+-gradient/g,j="",K="",G=function(){var e=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(p){var t=p(s,null);for(var r in t)if(j=r.match(e)||+r==r&&t[r].match(e))break;if(!j)return void(j=K="");"-"===(j=j[0]).slice(0,1)?(K=j,j={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[j]):K="-"+j.toLowerCase()+"-"}},Y=function(){var e=n.requestAnimationFrame||n[j.toLowerCase()+"RequestAnimationFrame"],t=Ce();return($e||!e)&&(e=function(e){var r=Ce()-t,o=u.max(0,1e3/60-r);return n.setTimeout((function(){t=Ce(),e()}),o)}),e},R={begin:function(){return 0},end:function(){return 1},linear:function(e){return e},quadratic:function(e){return e*e},cubic:function(e){return e*e*e},swing:function(e){return-u.cos(e*u.PI)/2+.5},sqrt:function(e){return u.sqrt(e)},outCubic:function(e){return u.pow(e-1,3)+1},bounce:function(e){var t;if(.5083>=e)t=3;else if(.8489>=e)t=9;else if(.96208>=e)t=27;else{if(!(.99981>=e))return 1;t=91}return 1-u.abs(3*u.cos(e*t*1.028)/t)}};i.prototype.refresh=function(e){var t,r,n=!1;for(e===a?(n=!0,ie=[],qe=0,e=o.getElementsByTagName("*")):e.length===a&&(e=[e]),t=0,r=e.length;r>t;t++){var i=e[t],l=i,s=[],c=me,f=ye,u=!1;if(n&&C in i&&delete i[C],i.attributes){for(var p=0,m=i.attributes.length;m>p;p++){var d=i.attributes[p];if("data-anchor-target"!==d.name)if("data-smooth-scrolling"!==d.name)if("data-edge-strategy"!==d.name)if("data-emit-events"!==d.name){var g=d.name.match(M);if(null!==g){var v={props:d.value,element:i,eventType:d.name.replace(_,z)};s.push(v);var h=g[1];h&&(v.constant=h.substr(1));var T=g[2];/p$/.test(T)?(v.isPercentage=!0,v.offset=(0|T.slice(0,-1))/100):v.offset=0|T;var b=g[3],S=g[4]||b;b&&"start"!==b&&"end"!==b?(v.mode="relative",v.anchors=[b,S]):(v.mode="absolute","end"===b?v.isEnd=!0:v.isPercentage||(v.offset=v.offset*Me))}}else u=!0;else f=d.value;else c="off"!==d.value;else if(null===(l=o.querySelector(d.value)))throw'Unable to find anchor target "'+d.value+'"'}var w,x,k;s.length&&(!n&&C in i?(k=i[C],w=ie[k].styleAttr,x=ie[k].classAttr):(k=i[C]=qe++,w=i.style.cssText,x=Fe(i)),ie[k]={element:i,styleAttr:w,classAttr:x,anchorTarget:l,keyFrames:s,smoothScrolling:c,edgeStrategy:f,emitEvents:u,lastFrameIndex:-1},Pe(i,[y],[]))}}for(ke(),t=0,r=e.length;r>t;t++){var E=ie[e[t][C]];E!==a&&(Z(E),Q(E))}return ae},i.prototype.relativeToAbsolute=function(e,t,r){var n=l.clientHeight,o=e.getBoundingClientRect(),a=o.top,i=o.bottom-o.top;return t===O?a-=n:t===I&&(a-=n/2),r===O?a+=i:r===I&&(a+=i/2),(a+=ae.getScrollTop())+.5|0},i.prototype.animateTo=function(e,t){t=t||{};var r=Ce(),n=ae.getScrollTop(),o=t.duration===a?1e3:t.duration;return(pe={startTop:n,topDiff:e-n,targetTop:e,duration:o,startTime:r,endTime:r+o,easing:R[t.easing||E],done:t.done}).topDiff||(pe.done&&pe.done.call(ae,!1),pe=a),ae},i.prototype.stopAnimateTo=function(){pe&&pe.done&&pe.done.call(ae,!0),pe=a},i.prototype.isAnimatingTo=function(){return!!pe},i.prototype.isMobile=function(){return $e},i.prototype.setScrollTop=function(e,t){return ve=!0===t,$e?je=u.min(u.max(e,0),De):n.scrollTo(0,e),ae},i.prototype.getScrollTop=function(){return $e?je:n.pageYOffset||l.scrollTop||s.scrollTop||0},i.prototype.getMaxScrollTop=function(){return De},i.prototype.on=function(e,t){return se[e]=t,ae},i.prototype.off=function(e){return delete se[e],ae},i.prototype.destroy=function(){(function(){var e=n.cancelAnimationFrame||n[j.toLowerCase()+"CancelAnimationFrame"];return($e||!e)&&(e=function(e){return n.clearTimeout(e)}),e})()(Te),we(),Pe(l,[w],[S,x,k]);for(var e=0,t=ie.length;t>e;e++)ne(ie[e].element);l.style.overflow=s.style.overflow="",l.style.height=s.style.height="",le&&c.setStyle(le,"transform","none"),ae=a,le=a,se=a,ce=a,De=0,Me=1,fe=a,ue=a,Ne="down",Ve=-1,ze=0,Be=0,Le=!1,pe=a,me=a,de=a,ge=a,ve=a,qe=0,ye=a,$e=!1,je=0,he=a};var U=function(){var e,t,r,i,c,f,p,y,h,T,b;be(l,[m,d,g,v].join(" "),(function(n){var l=n.changedTouches[0];for(i=n.target;3===i.nodeType;)i=i.parentNode;switch(c=l.clientY,f=l.clientX,h=n.timeStamp,H.test(i.tagName)||n.preventDefault(),n.type){case m:e&&e.blur(),ae.stopAnimateTo(),e=i,t=p=c,r=f;break;case d:H.test(i.tagName)&&o.activeElement!==i&&n.preventDefault(),y=c-p,b=h-T,ae.setScrollTop(je-y,!0),p=c,T=h;break;default:var s=t-c,g=r-f;if(49>g*g+s*s){if(!H.test(e.tagName)){e.focus();var v=o.createEvent("MouseEvents");v.initMouseEvent("click",!0,!0,n.view,1,l.screenX,l.screenY,l.clientX,l.clientY,n.ctrlKey,n.altKey,n.shiftKey,n.metaKey,0,null),e.dispatchEvent(v)}return}e=a;var S=y/b;S=u.max(u.min(S,3),-3);var w=u.abs(S/ue),x=S*w+.5*ue*w*w,k=ae.getScrollTop()-x,E=0;k>De?(E=(De-k)/x,k=De):0>k&&(E=-k/x,k=0),w*=1-E,ae.animateTo(k+.5|0,{easing:"outCubic",duration:w})}})),n.scrollTo(0,0),l.style.overflow=s.style.overflow="hidden"},X=function(e,t){for(var r=0,n=ie.length;n>r;r++){var o,a,i=ie[r],l=i.element,s=i.smoothScrolling?e:t,u=i.keyFrames,p=u.length,m=u[0],d=u[u.length-1],g=s<m.frame,v=s>d.frame,S=g?m:d,w=i.emitEvents,x=i.lastFrameIndex;if(g||v){if(g&&-1===i.edge||v&&1===i.edge)continue;switch(g?(Pe(l,[h],[b,T]),w&&x>-1&&(xe(l,m.eventType,Ne),i.lastFrameIndex=-1)):(Pe(l,[b],[h,T]),w&&p>x&&(xe(l,d.eventType,Ne),i.lastFrameIndex=p)),i.edge=g?-1:1,i.edgeStrategy){case"reset":ne(l);continue;case"ease":s=S.frame;break;default:var k=S.props;for(o in k)f.call(k,o)&&(a=re(k[o].value),0===o.indexOf("@")?l.setAttribute(o.substr(1),a):c.setStyle(l,o,a));continue}}else 0!==i.edge&&(Pe(l,[y,T],[h,b]),i.edge=0);for(var E=0;p-1>E;E++)if(s>=u[E].frame&&s<=u[E+1].frame){var A=u[E],F=u[E+1];for(o in A.props)if(f.call(A.props,o)){var P=(s-A.frame)/(F.frame-A.frame);P=A.props[o].easing(P),a=te(A.props[o].value,F.props[o].value,P),a=re(a),0===o.indexOf("@")?l.setAttribute(o.substr(1),a):c.setStyle(l,o,a)}w&&x!==E&&(xe(l,"down"===Ne?A.eventType:F.eventType,Ne),i.lastFrameIndex=E);break}}},W=function(){Le&&(Le=!1,ke());var e,t,r=ae.getScrollTop(),n=Ce();if(pe?(n>=pe.endTime?(r=pe.targetTop,e=pe.done,pe=a):(t=pe.easing((n-pe.startTime)/pe.duration),r=pe.startTop+t*pe.topDiff|0),ae.setScrollTop(r,!0)):ve||(ge.targetTop-r&&(ge={startTop:Ve,topDiff:r-Ve,targetTop:r,startTime:_e,endTime:_e+de}),n<=ge.endTime&&(t=R.sqrt((n-ge.startTime)/de),r=ge.startTop+t*ge.topDiff|0)),ve||Ve!==r){ve=!1;var o={curTop:r,lastTop:Ve,maxTop:De,direction:Ne=r>Ve?"down":Ve>r?"up":Ne};!1!==(se.beforerender&&se.beforerender.call(ae,o))&&(X(r,ae.getScrollTop()),$e&&le&&c.setStyle(le,"transform","translate(0, "+-je+"px) "+he),Ve=r,se.render&&se.render.call(ae,o)),e&&e.call(ae,!1)}_e=n},Z=function(e){for(var t=0,r=e.keyFrames.length;r>t;t++){for(var n,o,a,i,l=e.keyFrames[t],s={};null!==(i=N.exec(l.props));)a=i[1],o=i[2],null!==(n=a.match(V))?(a=n[1],n=n[2]):n=E,o=o.indexOf("!")?J(o):[o.slice(1)],s[a]={value:o,easing:R[n]};l.props=s}},J=function(e){var t=[];return q.lastIndex=0,e=e.replace(q,(function(e){return e.replace(B,(function(e){return e/255*100+"%"}))})),K&&($.lastIndex=0,e=e.replace($,(function(e){return K+e}))),e=e.replace(B,(function(e){return t.push(+e),"{?}"})),t.unshift(e),t},Q=function(e){var t,r,n={};for(t=0,r=e.keyFrames.length;r>t;t++)ee(e.keyFrames[t],n);for(n={},t=e.keyFrames.length-1;t>=0;t--)ee(e.keyFrames[t],n)},ee=function(e,t){var r;for(r in t)f.call(e.props,r)||(e.props[r]=t[r]);for(r in e.props)t[r]=e.props[r]},te=function(e,t,r){var n,o=e.length;if(o!==t.length)throw"Can't interpolate between \""+e[0]+'" and "'+t[0]+'"';var a=[e[0]];for(n=1;o>n;n++)a[n]=e[n]+(t[n]-e[n])*r;return a},re=function(e){var t=1;return L.lastIndex=0,e[0].replace(L,(function(){return e[t++]}))},ne=function(e,t){for(var r,n,o=0,a=(e=[].concat(e)).length;a>o;o++)n=e[o],(r=ie[n[C]])&&(t?(n.style.cssText=r.dirtyStyleAttr,Pe(n,r.dirtyClassAttr)):(r.dirtyStyleAttr=n.style.cssText,r.dirtyClassAttr=Fe(n),n.style.cssText=r.styleAttr,Pe(n,r.classAttr)))},oe=function(){he="translateZ(0)",c.setStyle(le,"transform",he);var e=p(le),t=e.getPropertyValue("transform"),r=e.getPropertyValue(K+"transform");t&&"none"!==t||r&&"none"!==r||(he="")};c.setStyle=function(e,t,r){var n=e.style;if("zIndex"===(t=t.replace(_,z).replace("-","")))isNaN(r)?n[t]=r:n[t]=""+(0|r);else if("float"===t)n.styleFloat=n.cssFloat=r;else try{j&&(n[j+t.slice(0,1).toUpperCase()+t.slice(1)]=r),n[t]=r}catch(e){}};var ae,ie,le,se,ce,fe,ue,pe,me,de,ge,ve,ye,he,Te,be=c.addEvent=function(e,t,r){for(var o,a=function(e){return(e=e||n.event).target||(e.target=e.srcElement),e.preventDefault||(e.preventDefault=function(){e.returnValue=!1,e.defaultPrevented=!0}),r.call(this,e)},i=0,l=(t=t.split(" ")).length;l>i;i++)o=t[i],e.addEventListener?e.addEventListener(o,r,!1):e.attachEvent("on"+o,a),Ke.push({element:e,name:o,listener:r})},Se=c.removeEvent=function(e,t,r){for(var n=0,o=(t=t.split(" ")).length;o>n;n++)e.removeEventListener?e.removeEventListener(t[n],r,!1):e.detachEvent("on"+t[n],r)},we=function(){for(var e,t=0,r=Ke.length;r>t;t++)e=Ke[t],Se(e.element,e.name,e.listener);Ke=[]},xe=function(e,t,r){se.keyframe&&se.keyframe.call(ae,e,t,r)},ke=function(){var e=ae.getScrollTop();De=0,ce&&!$e&&(s.style.height=""),function(){var e,t,r,n,o,a,i,s,c,f,p,m=l.clientHeight,d=Ee();for(s=0,c=ie.length;c>s;s++)for(t=(e=ie[s]).element,r=e.anchorTarget,o=0,a=(n=e.keyFrames).length;a>o;o++)f=(i=n[o]).offset,p=d[i.constant]||0,i.frame=f,i.isPercentage&&(f*=m,i.frame=f),"relative"===i.mode&&(ne(t),i.frame=ae.relativeToAbsolute(r,i.anchors[0],i.anchors[1])-f,ne(t,!0)),i.frame+=p,ce&&!i.isEnd&&i.frame>De&&(De=i.frame);for(De=u.max(De,Ae()),s=0,c=ie.length;c>s;s++){for(o=0,a=(n=(e=ie[s]).keyFrames).length;a>o;o++)p=d[(i=n[o]).constant]||0,i.isEnd&&(i.frame=De-i.offset+p);e.keyFrames.sort(He)}}(),ce&&!$e&&(s.style.height=De+l.clientHeight+"px"),$e?ae.setScrollTop(u.min(ae.getScrollTop(),De)):ae.setScrollTop(e,!0),ve=!0},Ee=function(){var e,t,r=l.clientHeight,n={};for(e in fe)"function"==typeof(t=fe[e])?t=t.call(ae):/p$/.test(t)&&(t=t.slice(0,-1)/100*r),n[e]=t;return n},Ae=function(){var e=0;return le&&(e=u.max(le.offsetHeight,le.scrollHeight)),u.max(e,s.scrollHeight,s.offsetHeight,l.scrollHeight,l.offsetHeight,l.clientHeight)-l.clientHeight},Fe=function(e){var t="className";return n.SVGElement&&e instanceof n.SVGElement&&(e=e[t],t="baseVal"),e[t]},Pe=function(e,t,r){var o="className";if(n.SVGElement&&e instanceof n.SVGElement&&(e=e[o],o="baseVal"),r!==a){for(var i=e[o],l=0,s=r.length;s>l;l++)i=Oe(i).replace(Oe(r[l])," ");i=Ie(i);for(var c=0,f=t.length;f>c;c++)-1===Oe(i).indexOf(Oe(t[c]))&&(i+=" "+t[c]);e[o]=Ie(i)}else e[o]=t},Ie=function(e){return e.replace(D,"")},Oe=function(e){return" "+e+" "},Ce=Date.now||function(){return+new Date},He=function(e,t){return e.frame-t.frame},De=0,Me=1,Ne="down",Ve=-1,_e=Ce(),ze=0,Be=0,Le=!1,qe=0,$e=!1,je=0,Ke=[];void 0===(r=function(){return c}.apply(t,[]))||(e.exports=r)}(window,document)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{"use strict";r.r(n);var e=r(782);window.onload=function(){!function(){e.init();var t=document.getElementById("scene1"),r=(new Parallax(t,{relativeInput:!0}),document.getElementById("scene2")),n=(new Parallax(r),document.getElementById("scene-master"));new Parallax(n)}()}})(),KurtLourens=n})();