define(['exports', 'preact/jsx-runtime', './Flex-d982a43c', './dimensions-597d86a6', './size-9084555e', './utils-577611d8', './Common/themes/themeContract.css', './colorUtils-8c677a79', './_curry1-cb27040e', './mergeInterpolations-73b24f1a', './classNames-62eaa01c', './_curry3-bdba4a6e', './_curry2-5a2b49e1', './_isObject-2ffb2ca1', './boxalignment-a42cf291', './arrayUtils-37736aa8', 'css!./boxalignment.styles.css', './vanilla-extract-sprinkles-createRuntimeSprinkles.esm-c9464ec7', './flexbox-2b2cf0ed', 'css!./flexbox.styles.css', './flexitem-1802f140', 'css!./flexitem.styles.css', 'css!./FlexStyles.styles.css'], (function(e,t,r,s,n,i,c,o,a,l,d,m,u,x,f,h,b,y,g,j,p,v,w){"use strict";e.ChartWithLegend=function({chart:e,legend:s,position:n,maxSize:i,size:c}){const o="start"===n||"end"===n?"row":"column",{chartOrder:a,legendOrder:l}=function(e){const t="start"===e||"top"===e;return{chartOrder:t?2:1,legendOrder:t?1:2}}(n),{justifyContent:d,alignItem:m}=function(e){let t,r;return"top"===e?(t="center",r="end"):"bottom"===e?(t="center",r="start"):"start"===e?(t="end",r="center"):(t="start",r="center"),{justifyContent:t,alignItem:r}}(n);return t.jsxs(r.Flex,{width:"100%",height:"100%",direction:o,children:[t.jsx("div",{style:{order:a,flexGrow:1},children:e}),s&&t.jsx(r.Flex,{order:l,justify:d,align:m,maxHeight:"column"===o?i:void 0,maxWidth:"row"===o?i:void 0,height:"column"===o?c:void 0,width:"row"===o?c:void 0,children:s})]})},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_ChartWithLegend.js.map
