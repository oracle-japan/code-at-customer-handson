define(['exports', 'preact/jsx-runtime', 'preact/hooks', './useViewportIntersect-37199f79', './Collection-d64798ca'], (function(e,t,o,n,r){"use strict";const c="oj-collection-placeholder",i=({context:e,placeholderHeight:o})=>{const{fromIndex:n,toIndex:r,which:i,estimateItemSize:l}=e;let s=0;if(o)s=o(e);else{const e=0===l?48:l;s=Math.max(0,r-n)*e}const a="topPlaceholder"===i?"_topPlaceholder":"_bottomPlaceholder",d={height:s+"px"};return 0===s&&(d.display="none"),t.jsx("div",{className:c,style:d},a)};function l(e){return function({itemSize:t,viewportHeight:o,scrollOffset:n,overscan:r=0}){if(void 0===t||0===t||void 0===o||void 0===n)return{offset:0,count:e};const c=Math.ceil(n/t),i=Math.ceil(o/t);return{offset:Math.max(0,c-r),count:i+r*(c>0?2:1)}}}const s=(e,t,o,n,r)=>{let c,i;if(e&&t){const o=t.getBoundingClientRect(),n=(e=>{let t,o;if(e===document.documentElement)t=0,o=document.documentElement.clientHeight;else{const n=e.getBoundingClientRect();t=n.top,o=n.bottom}return{top:t,bottom:o}})(e);o&&n&&(c=n.top-o.top-1,i=n.bottom-n.top+1)}if(void 0!==c&&void 0!==i){return n({scrollOffset:c,viewportHeight:i,overscan:o,itemSize:r})}return null},a=`.oj-collection-loadmore, .${c}`,d=l(25);e.PLACEHOLDER_STYLE_CLASS=c,e.VirtualizedCollection=function({data:e,children:c,viewportConfig:l,itemSelector:u,placeholderHeight:h,rangeExtractor:f=d,overscan:m=1,onLoadRange:g,loadMoreIndicator:x,suggestions:p}){const v=o.useRef(null),I=o.useRef(0);if(n.useViewportIntersect(l,1,0,a,(()=>{const e=s(l.scroller(),v.current,m,f,I.current??0);e&&g(e)})),o.useEffect((()=>{if(0===I.current){let e=0;const t=v.current.querySelectorAll(u);t.length>0&&(t.forEach((t=>{e+=t.offsetHeight})),I.current=e/t.length)}})),!(e&&(S=e,S&&S.data&&S.offset>=0&&S.totalSize>=0)))return t.jsx("div",{ref:v});var S;const z=e.data,j=e.offset,w=j+z.length,E=e.totalSize,H=j>=0?{fromIndex:0,toIndex:j,which:"topPlaceholder",estimateItemSize:I.current??0}:void 0,C=w&&w<=E?{fromIndex:w,toIndex:E,which:"bottomPlaceholder",estimateItemSize:I.current??0}:void 0,P=x&&"atLeast"===e.sizePrecision&&w<=E;return t.jsxs("div",{ref:v,style:"will-change: contents",children:[p,H&&t.jsx(i,{context:H,placeholderHeight:h}),t.jsx(r.Collection,{items:z,children:(R=j,e=>{const t={index:R+e.index,data:e.data};return c(t)})}),C&&t.jsx(i,{context:C,placeholderHeight:h}),P&&x]});var R},e.getVirtualizedRangeExtractor=l}));
//# sourceMappingURL=VirtualizedCollection-afe04c5a.js.map
