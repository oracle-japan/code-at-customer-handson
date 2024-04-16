define(['exports', 'preact/hooks', './mergeProps-7be264ec', './collectionUtils-942f04a0', './useCollectionFocusRing-be15ca1f', './useCurrentKey-47aecb22', './useId-37951d4d'], (function(e,t,r,n,o,s,c){"use strict";const u='[role="tab"]',i="data-oj-removable";const l=(e,t,r)=>{const o=e.closest(t);if(o?.hasAttribute(i)){const t=e.closest(r);if(t&&o?.contains(t))return null}return n.getKey(o)},a=(e,t,r)=>{const n=r.indexOf(e);if(-1===n)return t[0];let o=0,s=!1;for(n===r.length-1?(o=n-1,s=!0):o=n+1;o!==n;){const e=r[o];if(-1!==t.indexOf(e))return e;s?o--:o++}return t[0]};e.useTabBar=function(e){const{children:f,class:y,display:d,edge:g="top",selection:m,onSelect:b,onRemove:v,ref:p=t.useRef(null),size:K}=e,R=c.useId(),[x,h]=t.useState(m),k=R+"_",A=t.useRef();t.useEffect((()=>{if(p.current){const e=Array.from(p.current.querySelectorAll(u)).map((e=>n.getKey(e)));x&&!e.includes(x)&&(A.current?h(a(x,e,A.current)):h(e[0])),A.current=e}}),[f,x]);const[E,P]=o.useCollectionFocusRing(p,["ArrowRight","ArrowLeft","Home","End"]),{currentKeyProps:C}=s.useCurrentKey((e=>v?l(e,u,'[data-oj-tabbar-item-remove-icon="true"]'):n.keyExtractor(e,u)),!1,void 0,void 0,n.getPrevNextKeyUsingRef(p,x,!0,u),n.getPrevNextKeyUsingRef(p,x,!1,u),x,(e=>h(e.value))),F={onKeyDown:e=>{if(p.current&&x){if("Home"===e.key||"End"===e.key){const t=Array.from(p.current.querySelectorAll(u),(e=>n.getKey(e)));e.preventDefault(),h?.(t["Home"===e.key?0:t.length-1])}if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),b?.({value:x})),"Delete"===e.key){n.findElementByKey(p.current,x,u).hasAttribute(i)&&v?.({value:x})}}},onFocus:()=>{if(p.current&&void 0===x){const e=n.getFirstVisibleKey(p.current,u);e&&h(e)}}};return{rootProps:r.mergeProps({"aria-activedescendant":x?k+x:"","aria-multiselectable":!1,class:y,ref:p,role:"tablist",tabIndex:0},C,P,F),tabBarContext:{currentKey:x,display:d,isEdgeBottom:"bottom"===g,layout:"condense",onRemove:v,onSelect:b,showFocusRing:E,selection:m,size:K,tabItemPrefix:k}}}}));
//# sourceMappingURL=useTabBar-fcf65646.js.map
