define(['exports', 'preact/hooks'], (function(e,s){"use strict";const t=new class{constructor(){this.targetCallbacks=new Map,this.resizeObserver=new ResizeObserver((e=>{for(const s of e){const e=this.targetCallbacks.get(s.target);void 0!==e&&e.forEach((e=>e(s)))}}))}subscribe(e,s,t){const r=this.targetCallbacks.get(e);void 0===r?(this.targetCallbacks.set(e,new Set([s])),this.resizeObserver.observe(e,t)):r.add(s)}unsubscribe(e,s){const t=this.targetCallbacks.get(e);void 0!==t&&(t.delete(s),0===t.size&&(this.resizeObserver.unobserve(e),this.targetCallbacks.delete(e)))}};e.useResizeObserver=({ref:e,callback:r,resizeObserverOptions:c})=>{s.useLayoutEffect((()=>{if(!e?.current)return;const s=e.current;return t.subscribe(s,r,c),()=>t.unsubscribe(s,r)}),[e,r,c])}}));
//# sourceMappingURL=useResizeObserver-5de04057.js.map
