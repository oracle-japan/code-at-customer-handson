define(['exports', 'preact/jsx-runtime', './UNSAFE_PictoChart/themes/PictoChartStyles.css', './classNames-62eaa01c', './Common/themes/themeContract.css', './utils-577611d8', './SvgSymbol-a6d1f412', 'preact', 'preact/hooks', './TrackResizeContainer-8d8e1913', './size-9084555e', './useUser-8e4e5333', './useSelection-93c70c0e', './useTranslationBundle-1a7cf79b', './mergeProps-7be264ec', './LayoutUtils-6bb21e37', './useDatatip-89c35952', './util-f0d4f81c', './useItemFocus-1f78ff17', './useTestId-b28a9bba'], (function(e,t,o,n,r,i,a,s,c,l,d,u,f,m,p,h,I,g,C,x){"use strict";const b=s.createContext({});function S(e){const t=e.dataset.idx;if(void 0!==t)return{idx:Number(t)}}function v(e,t,o,n,r,i,a,s,c){let l=!1;if(!n){const e=!!a&&t===a.idx,o=!!r&&t===r.idx;l=!!(e&&a?.isCurrent||o&&r?.isCurrent)}const d=function(e,t){return!t||0===t.length||new Set(t).has(e)}(e.id,s),u=function(e,t){return!(!t||0===t.length)&&new Set(t).has(e)}(e.id,i);return{isCurrent:l,isHighlighted:d,isSelected:u,hasSelection:i&&0!==i.length,isFocused:!!a&&y(a,t),key:e.id,itemIdx:t,countIdx:o,activeId:l?c:void 0,isReadOnly:n,item:e}}function w(e,t){return e?.idx===t?.idx}function y(e,t){return!!e.isFocusVisible&&e.idx===t}function R(e,t,o){return`${o?.dataVisualization_labelCountWithTotal({itemCount:e.toString(),totalCount:t.toString()})}`}const P=({context:e,markerProps:o})=>{const{supportsSelection:n}=c.useContext(b),s=function(e,t,o,n,a,s){const c="human"===e,l=o||a&&s,d="ellipse"===e||"rectangle"===e,u=n?i.rgb(r.colorSchemeVars.palette.neutral[130]):l?t:void 0;return{markerShape:e,tx:c?70:void 0,ty:c?60:void 0,markerColor:t,borderColor:n||l?i.rgb(r.colorSchemeVars.palette.neutral[0]):t,outerBorderColor:u,markerScale:d&&!u?1:.85,setAspectRatioNone:!!d}}(o.shape,o.color,e.state.focused,e.state.selected,e.state.hovered,n);return t.jsx(a.SvgSymbol,{...s})};const k=e=>{const r=e.supportsSelection||e.supportsAction,{dimmedItemStyle:i,interactiveItemStyle:a}=o.styles,s=n.classNames([r&&a,!e.isHighlighted&&i]),c=0===e.countIdx,l=c&&function(e,t,o,n,r,i,a,s,c){const l=o||a?i?r?.dataVisualization_stateSelected():r?.dataVisualization_stateUnselected():"",d=r?R(e,t,r):"";return{"aria-label":[s||`${n?n+": ":""}${d}`,l].filter(Boolean).join(". ")||void 0,role:"img",id:c}}(e.item.count||1,e.totalCount,!!e.supportsSelection,e.item.label,e.translations,e.isSelected,e.hasSelection,e.item.accessibleLabel,e.activeId)||{};return t.jsx("div",{ref:c?e.focusedItemRef:void 0,id:e.activeId,"data-idx":e.itemIdx,"data-count-idx":e.countIdx,style:{gridRow:`${e.row+1} / span ${e.item.rowSpan||1}`,gridColumn:`${e.column+1} / span ${e.item.columnSpan||1}`},class:s,...l,children:e.children})},M=.25;function F(e,t){return Math.ceil(e/t)*t}const T=e=>"bottomStart"===e||"bottomEnd"===e,$=(e,t)=>{const o="topEnd"===e||"bottomEnd"===e;return t?!o:o},A=(e,t,o,n,r)=>{for(let i=0;i<r;i++)for(let r=0;r<n;r++)if(e[o+i][t+r])return!1;return!0},U=(e,t,o,n,r)=>{for(let i=0;i<r;i++)for(let r=0;r<n;r++)e[o+i][t+r]=!0},j=(e,t,o,n,r,i)=>{if(i){const i=j(e,o,t,r,n,!1);return i?{col:i.row,row:i.col}:void 0}for(let i=0;i<r-o+1;i++)for(let r=0;r<n-t+1;r++)if(A(e,r,i,t,o))return U(e,r,i,t,o),{col:r,row:i}};function D(e,t){const{idx:o}=e;return t[o]}function V(e){return{getItem:t=>D(t,e),getDetailFromInfo:t=>{if(!t)return{id:void 0};const o=D(t,e);return{id:o?o.id:void 0}},getPrevItemInfo:e=>function(e){let t=e.idx;return t=Math.max(0,t-1),{idx:t}}(e),getNextItemInfo:t=>function(e,t){let o=e.idx;return o=Math.min(t.length-1,o+1),{idx:o}}(t,e)}}function E(e,t,o,n,r,i){const[a,s]=c.useState({idx:0}),[l,d]=c.useState(),f=c.useRef(),{direction:m}=u.useUser(),p="rtl"===m,I=e=>{e.preventDefault(),e.stopPropagation()},g=o=>{const n=S(o.target);w(n,l)||(d(n&&{...n,isCurrent:!0}),f.current=h.getRandomId(),e&&(s({...a,isCurrent:!1}),i?.(t(n))))},C=()=>{d(void 0),f.current=void 0,e&&i?.(t())};if(!e)return{focusedItemInfo:a,hoveredItemInfo:l,onPointerLeave:C,onPointerMove:g};function x(e){i?.(t(e)),f.current=h.getRandomId(),s(e)}function b(e){w(e,a)||(e.isCurrent=!0,e.isFocusVisible=!0,l&&d({...l,isCurrent:!1}),x(e))}return{focusedItemInfo:a,hoveredItemInfo:l,"aria-activedescendant":f.current,onPointerUp:e=>{const o=S(e.target);if(null!=o){s(o);const{id:e}=t(o);null!=e&&(r?.({id:e}),f.current=h.getRandomId())}else r?.({id:void 0})},onPointerMove:g,onKeyUp:e=>{switch(e.code){case"Enter":(()=>{const{id:e}=t(a);null!=e&&(r?.({id:e}),f.current=h.getRandomId())})(),I(e);break;case"Tab":x({...a,isCurrent:!0,isFocusVisible:!0}),I(e)}},onKeyDown:e=>{switch(e.key){case"Tab":return;case"ArrowDown":b(n(a)),I(e);break;case"ArrowUp":b(o(a)),I(e);break;case"ArrowRight":b(p?o(a):n(a)),I(e);break;case"ArrowLeft":b(p?n(a):o(a)),I(e);break}},onPointerLeave:C,onBlur:()=>{(null!=l||a.isCurrent)&&i?.(t(void 0));const e={...a,isCurrent:!1,isFocusVisible:!1};s(e)}}}e.PictoChart=function({width:e,height:a,columnWidth:s,rowHeight:c,items:h,columnCount:w,rowCount:y,layout:P,layoutOrigin:A="topStart",selectionMode:U="none",highlightedIds:D=[],hiddenIds:z=[],selectedIds:N=[],onItemAction:L,onItemInput:B,...H}){const _=0!==h.length,q=h.filter((e=>!z?.includes(e.id))),W=function(e){let t=0;for(let o=0;o<e.length;o++)t+=e[o].count||1;return t}(q),O=m.useTranslationBundle("@oracle/oraclejet-preact"),G=!(!U||"none"===U),K=null!=L,Z=!G&&!K&&null===B,{direction:J}=u.useUser(),Q=x.useTestId(H.testId),{getItem:X,getDetailFromInfo:Y,getPrevItemInfo:ee,getNextItemInfo:te}=V(q),{hoveredItemInfo:oe,focusedItemInfo:ne,...re}=E(!Z&&_,Y,ee,te,L,B),ie=f.useSelection({idExtracter:e=>{const t="keyup"===e.type?ne:S(e.target);return Y(t).id},isDrillEnabled:null!=L,selection:N,selectionMode:U,onChange:H.onSelectionChange}),ae=s&&parseFloat(s),se=c&&parseFloat(c),ce=n.classNames([o.baseStyles]),{focusedItemRef:le}=C.useItemFocus(ne),{content:de,borderColor:ue}=function(e,t,o,n,a,s,c){let l;const d=a?.isCurrent;let u,f;d&&null!=e[a.idx].id&&(l=a),n&&n.isCurrent&&(l=n);let m=i.rgb(r.colorSchemeVars.palette.neutral[0]);const p=l&&t(l,e);if(p&&s){const e=p&&{data:p},{content:t,borderColor:n}=s(e);u=t,m=n||m,f=c?R(p.count||1,o,c):""}return{borderColor:m,content:u||l&&t(l,e)?.accessibleLabel||l&&t(l,e)?.label+": "+f||f}}(q,X,W,ne,oe,H.datatip,O),fe=void 0===e,me=void 0===a;return t.jsx(b.Provider,{value:{supportsSelection:G},children:t.jsx(l.TrackResizeContainer,{width:fe?"initial":!fe&&d.sizeToCSS(e)||"0px",height:me?"initial":!me&&d.sizeToCSS(a)||"0px",children:function(e,n){const{calcColCount:r,calcRowCount:i,calcColWidth:a,calcRowHeight:s,gridGap:c}=function(e,t,n,r,i,a,s,c,l,d){let u=0,f=1,m=1,p=1/0;for(let t=0;t<e.length;t++){const o=e[t],n=o.columnSpan||1,r=o.rowSpan||1;n<=0||r<=0||(n>f&&(f=n),r>m&&(m=r),n<p&&(p=n),r<p&&(p=r),u+=n*r*(o.count||1))}if(0===u)return{};(i||a)&&(l||(l=d||o.DEFAULT_SIZE),d||(d=l)),s||c||(i||a?i?a?t?c=F(Math.sqrt(u),m):s=F(Math.sqrt(u),f):c=Math.max(Math.floor(r/(d||1)),1):s=Math.max(Math.floor(n/(l||1)),1):t?c=F(Math.sqrt(u*r/n),m):s=F(Math.sqrt(u*n/r),f)),s?c||(c=F(u/s,m)):s=F(u/(c||1),f);const h=M*p;return i||a||(l||(l=d||Math.min(n/s,r/(c||1))),d||(d=l)),s<=0||!c||c<=0||!l||l<=0||!d||d<=0?{}:{calcColCount:s,calcRowCount:c,calcColWidth:l?l-h:l,calcRowHeight:d?d-h:d,gridGap:h}}(h,"vertical"===P,e,n,fe,me,w,y,ae,se),{datatipContent:l,datatipProps:d}=(({content:e,borderColor:t,width:o,focusedItemRef:n,focusedItemInfo:r})=>{const{direction:i}=u.useUser(),a="rtl"===i,s=n.current?.getBoundingClientRect(),{datatipContent:c,datatipProps:l}=I.useDatatip({content:e,placement:"top-start",anchor:r?.isCurrent?"element":"pointer",offset:g.calculateOffset(a,o,r.isCurrent?s:void 0),borderColor:t});return{datatipContent:c,datatipProps:l}})({content:de,width:e,borderColor:ue,focusedItemRef:le,focusedItemInfo:ne});if(!r)return null;const f=function(e,t,o,n,r,i){const a=t,s=o,c=T(n),l=$(n,i),d=[],u=new Array(a);for(let e=0;e<a;e++)u[e]=new Array(s).fill(!1);for(let t=0;t<e.length;t++){const o=e[t];let n=0;const i=o.rowSpan??1,f=o.columnSpan??1,m=o.count??1;for(;n<m;){const e=j(u,f,i,s,a,r);void 0!==e&&d.push({row:c?a-e.row-i:e.row,col:l?s-e.col-f:e.col,countIdx:n,itemIdx:t,item:o}),n+=1}}return d}(q,i,r,A,"vertical"===P,"rtl"===J),m=p.mergeProps(re,d,ie);return t.jsxs("div",{tabIndex:0,"aria-label":H["aria-label"],"aria-describedby":H["aria-describedby"],"aria-labelledby":H["aria-labelledby"],role:"application",style:{width:fe?"max-content":`${e}px`,height:me?"max-content":`${n}px`,gridTemplateRows:`repeat(${i}, ${s}px)`,gridTemplateColumns:`repeat(${r}, ${a}px)`,gap:`${c}px`},class:ce,...Q,...m,children:[f.map((e=>{const o=ne.idx===e.itemIdx,n=v(e.item,e.itemIdx,e.countIdx,Z,oe,N,ne,D,re["aria-activedescendant"]),r={data:e.item,state:{selected:n.isSelected,focused:n.isFocused,hovered:n.isCurrent}};return t.jsx(k,{focusedItemRef:o?le:void 0,row:e.row,column:e.col,supportsSelection:G,supportsAction:K,translations:O,totalCount:W,...n,children:H.children(r)})})),l]})}})})},e.getPictoDefaultRenderers=function(e){return{markerRenderer:o=>{const n=e(o.data);return t.jsx(P,{context:o,markerProps:n})},datatipRenderer:t=>({borderColor:e(t.data).color})}}}));
//# sourceMappingURL=PictoChart-1eace862.js.map