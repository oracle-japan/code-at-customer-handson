define(['exports', 'preact/jsx-runtime', 'preact', 'preact/compat', './classNames-62eaa01c', './PRIVATE_FocusTracker/themes/FocusTrackerStyles.css', './tabbableUtils-a4d6bed2'], (function(e,t,n,r,s,c,u){"use strict";const l=r.forwardRef((({onFocus:e},n)=>{const r=s.classNames([c.styles.guardStyle]);return t.jsx("div",{class:r,onFocus:e,ref:n,tabIndex:0})})),a=e=>{if(0===e.length)return!1;const t=u.getActiveElement(e[0]);return e.some((e=>e?.contains(t)))};e.FocusTracker=({children:e,onFocusStartEdge:o,onFocusEndEdge:i,onStartTracking:f,onStopTracking:b,isDisabled:d=!1,styleClass:m})=>{const E=r.useRef(null),F=r.useRef(null),g=r.useRef(null),h=r.useRef(null),p=r.useRef(),v=r.useRef(),x=s.classNames([c.baseStyle,m]);r.useEffect((()=>{p.current=f}),[f]),r.useEffect((()=>{v.current=b}),[b]);const R=(e,t,n)=>{null!=n&&n({tabbableElements:u.allTabbableElements(t)}),e.stopPropagation(),e.preventDefault()};return r.useEffect((()=>{const e=()=>null!=E.current&&a([E.current,F.current,g.current]),t=E.current;if(null!=t&&!d)return null!=p.current&&p.current({activeElement:u.getActiveElement(t),hasFocusWithin:e(),tabbableElements:u.allTabbableElements(t)}),()=>{null!=v.current&&v.current({hasFocusWithin:e(),lastActiveElement:h.current})}}),[d]),t.jsxs(n.Fragment,{children:[!d&&t.jsx(l,{onFocus:e=>{null!=E.current&&R(e,E.current,o)},ref:F}),t.jsx("div",{onFocus:d?void 0:e=>{h.current=e.target},ref:E,class:x,children:e}),!d&&t.jsx(l,{onFocus:e=>{null!=E.current&&R(e,E.current,i)},ref:g})]})}}));
//# sourceMappingURL=FocusTracker-c08af05f.js.map
