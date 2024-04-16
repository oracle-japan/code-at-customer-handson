define(['exports', 'preact/jsx-runtime', 'preact/hooks', './useLegendLayout-5c19395e', './LegendUtils-c62376ea', './mergeProps-7be264ec', './useItemFocus-1f78ff17', './UNSAFE_Legend/themes/LegendStyles.css', './useCssVars-a7656bc3', './classNames-62eaa01c', './useTestId-b28a9bba'], (function(e,t,n,o,s,i,d,r,a,l,m){"use strict";function I(e,t){const{itemIdx:n}=e;return-1==n?t[t.length-1]:t[n]}function u(e){return{getItem:t=>I(t,e),getDetailFromInfo:t=>{if(!t)return{itemId:void 0};return{itemId:I(t,e).id}},getPrevItemInfo:t=>function(e,t){let n=e.itemIdx;return-1==e.itemIdx&&(n=t.length-1),n=Math.max(0,n-1),{sectionIdx:0,itemIdx:n}}(t,e),getNextItemInfo:t=>function(e,t){let n=e.itemIdx;return-1==e.itemIdx&&(n=t.length-1),n=Math.min(t.length-1,n+1),{sectionIdx:0,itemIdx:n}}(t,e)}}e.Legend=function({orientation:e="horizontal",items:I,isReadOnly:f=!0,onItemAction:c,onInput:g,testId:x,...h}){const y=m.useTestId(x),p=n.useRef(null),b=n.useRef(),{getItem:v,getDetailFromInfo:L,getPrevItemInfo:R,getNextItemInfo:S}=u(I),{resolvedVars:F,cssContent:P}=a.useCssVars(s.legendVars),C=s.getLegendTextStyle({fontStyle:h.textFontStyle,fontSize:h.textFontSize?.toString(),fontWeight:h.textFontWeight?.toString(),fontFamily:h.textFontFamily},F),{textMeasureContent:W,layoutInfo:N}=o.useLegendLayout({resolvedVars:F,items:I,rootRef:p,rootDimsRef:b,orientation:e,legendFontStylesObj:C,symbolWidth:h.symbolWidth}),{hoveredItemInfo:D,focusedItemInfo:T,...V}=o.useEvents(!f,null!=h.hiddenIds,L,R,S,c,g),{focusedItemRef:j}=d.useItemFocus(T),z=s.getDatatipText(I,v,T,D),{tooltipContent:A,tooltipProps:M}=o.useLegendTooltip({text:z,rootDimsRef:b,focusedItemInfo:T,focusedItemRef:j}),O=s.getAriaProps(f,h["aria-label"],h.hiddenIds,h["aria-describedby"],h["aria-labelledby"]),w=i.mergeProps(V,M),{itemsPerCol:E,itemsPerRow:U}=s.getGridNums(I.length,N),{legendStyle:k,renderedLegendStyle:B,preRenderedLegendStyle:G}=r.styles,_="vertical"===e||!!N;return t.jsxs("div",{ref:p,tabIndex:f?void 0:0,role:"application",class:l.classNames([k,_?B:G]),...y,...O,...w,children:[_?t.jsx(o.BaseLegend,{...h,focusedItemRef:j,items:I,isReadOnly:f,orientation:e,sectionIdx:0,itemsPerRow:U,itemsPerCol:E,itemWidth:N?.isWrapped?N?.maxItemWidth:void 0,focusedItemInfo:T,hoveredItemInfo:D,activeId:V["aria-activedescendant"]}):null,A,W,P]})}}));
//# sourceMappingURL=Legend-6eacd6ef.js.map