define(['exports', 'preact/hooks'], (function(t,o){"use strict";t.useViewportIntersect=function(t,e=0,n=0,r,s,c){o.useEffect((()=>{let o;const i=t.scroller();if(i){const t={root:i===document.body||i===document.documentElement?null:i,rootMargin:`${e}px 0px`,threshold:[n]};o=new IntersectionObserver((o=>{for(const n of o){if(n.isIntersecting||e>0&&!t.root&&n.rootBounds?.bottom&&n.boundingClientRect.top<=n.rootBounds?.bottom)return void s();if(n.intersectionRatio>0&&!n.isIntersecting&&c)return void c(n)}}),t),i.querySelectorAll(r).forEach((t=>{o.observe(t)}))}return()=>{o?.disconnect()}}))}}));
//# sourceMappingURL=useViewportIntersect-37199f79.js.map