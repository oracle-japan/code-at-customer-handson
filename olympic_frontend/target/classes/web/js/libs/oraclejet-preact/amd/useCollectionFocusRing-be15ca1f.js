define(['exports', 'preact/hooks', './collectionUtils-942f04a0'], (function(e,t,n){"use strict";const u=200;e.useCollectionFocusRing=function(e,r,c=!0){const[o,l]=t.useState(!1),a=t.useRef(!1),s=t.useRef(null),i=t.useRef(),f=t.useCallback((()=>{o||a.current||(null!==s.current?l(s.current):l(!0)),s.current=null}),[o]),k=t.useCallback((t=>{t.target===document.activeElement&&(s.current=o),t.relatedTarget&&n.getElementContainsFunc(e.current)(t.relatedTarget)||l(!1)}),[e,o]),C=t.useCallback((e=>{const t="function"==typeof c?c(e.target):c;o&&t&&l(!1),a.current=!0,i.current=setTimeout((()=>{a.current=!1}),u)}),[o,c]),b=t.useCallback((()=>{clearTimeout(i.current),a.current=!0,setTimeout((()=>{a.current=!1}),u)}),[]),T=t.useCallback((e=>{o||"Tab"!==e.key||l(!0)}),[o]),d=t.useCallback((e=>{r.indexOf(e.key)>-1&&(o||l(!0))}),[o,r]);return[o,{onFocus:f,onBlur:k,onPointerDown:C,onKeyDown:d,onTouchEnd:b,onKeyUp:T}]}}));
//# sourceMappingURL=useCollectionFocusRing-be15ca1f.js.map
