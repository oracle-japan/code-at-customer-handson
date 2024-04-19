define(['exports', 'preact/jsx-runtime', 'preact/hooks', './Floating-7b312a86', './tabbableUtils-a4d6bed2', './refUtils-8d8a4660', './FocusTrap-d224b10e', './Layer-f4b2cc70', 'preact/compat', './TopLayerHost-ed31c70d', './Modal-a2b111dd', './useAnimationStatus-bb2c8b34', './positionUtils-32c24780', './useUser-8e4e5333', './useTestId-b28a9bba', './useComponentTheme-78f86a2f', './UNSAFE_Popup/themes/PopupContract.css', './stringUtils-aa6f579b', './classNames-62eaa01c', './UNSAFE_Popup/themes/redwood/PopupTheme'], (function(t,e,o,n,r,i,s,c,a,l,u,m,p,f,d,b,g,h,A,E){"use strict";const O={opening:t=>{const e=x(t.placement,t.direction);return{from:{scaleX:0,scaleY:0,opacity:0,transformOrigin:T[e]},to:{scaleX:1,scaleY:1,opacity:1,transformOrigin:T[e]},options:{duration:200}}},closing:t=>{const e=x(t.placement,t.direction);return{from:{scaleX:1,scaleY:1,opacity:1,transformOrigin:T[e]},to:{scaleX:0,scaleY:0,opacity:0,transformOrigin:T[e]},options:{duration:200}}}},T={top:"center bottom","top-right":"right bottom","top-left":"left bottom","top-right-corner":"left bottom","top-left-corner":"right bottom",right:"left center","right-top":"left top","right-bottom":"left bottom","right-top-corner":"left bottom","right-bottom-corner":"left top",bottom:"center top","bottom-right":"right top","bottom-left":"left top","bottom-right-corner":"left top","bottom-left-corner":"right top",left:"right center","left-top":"right top","left-bottom":"right bottom","left-top-corner":"right bottom","left-bottom-corner":"right top"},x=(t,e)=>{if(null==t||null==e)return"bottom";const o=t.split("-")[0],n=t.split("-")[1],r=t.split("-")[2],i=p.normalizePosition(o,e),s=["top","top-right","top-left","top-right-corner","top-left-corner","right","right-top","right-bottom","right-top-corner","right-bottom-corner","bottom","bottom-right","bottom-left","bottom-right-corner","bottom-left-corner","left","left-top","left-bottom","left-top-corner","left-bottom-corner"].filter((t=>n&&r&&t===`${i}-${p.normalizePosition(n,e)}-${r}`||n&&!r&&t===`${i}-${p.normalizePosition(n,e)}`||!n&&t===`${i}`))[0];return s||"bottom"};const y=a.forwardRef((({anchorRef:t,children:a,isOpen:l=!1,modality:p="modeless",offset:T={mainAxis:0,crossAxis:0},flipOptions:x={mainAxis:!0,crossAxis:!0},shiftOptions:y={mainAxis:!1,crossAxis:!1},onClose:P,initialFocus:v="auto",onClickOutside:F,placement:R="top",tail:k="none",onTransitionEnd:C,role:S="tooltip",testId:U},w)=>{const[j,L]=o.useState(!0),M=o.useRef(null),[N,$]=o.useState(),D=o.useRef(null),I=d.useTestId(U),[V,X]=o.useState(R);function Y(t){M.current===r.getActiveElement()&&"F6"===t.code&&(t.preventDefault(),t.stopPropagation(),r.focusWithin(D.current))}const{setAnimationElementRef:z,status:W}=function(t){const{isOpen:e,isAnimatedOnMount:n,onTransitionEnd:r,placement:i}=t,{direction:s}=f.useUser(),{setAnimationElementRef:c,animationElementRef:a,status:l}=m.useAnimationStatus({isOpen:e,isAnimatedOnMount:n,animationStates:O,onTransitionEnd:r}),u=a;return o.useEffect((()=>{null!=u&&null!=u.current&&"unmounted"!=l&&(u.current.placement=i,u.current.direction=s)}),[u,i,s,l]),{setAnimationElementRef:c,status:l}}({isOpen:l,isAnimatedOnMount:!0,onTransitionEnd:t=>{t?(H(),C?.(!0)):C?.(!1)},placement:V}),_=o.useMemo((()=>i.mergeRefs(z,w)),[z,w]),B=o.useCallback((()=>{const e=M.current,o=t.current;e?r.focusOn(e):o&&o instanceof Element&&r.focusOn(o)}),[t]);o.useEffect((()=>{l||"opening"!==W||D.current?.contains(r.getActiveElement())&&B()}),[l,W,B]),o.useEffect((()=>(l&&t.current instanceof Element&&(r.getActiveElement()===document.body?M.current=t.current:M.current=r.getActiveElement(),M.current?.addEventListener("keydown",Y)),()=>{M.current?.removeEventListener("keydown",Y)})),[l,t]);const H=()=>{let t=v;"auto"===v&&(t="none"),"popup"===t&&r.focusOn(D.current),"firstFocusable"===t&&r.focusWithin(D.current)},K={mainAxis:(t=>{let e=0;return t&&(e="number"==typeof t?t:t.mainAxis||0,"simple"===k&&(e+=5)),e})(T),crossAxis:(t=>t?"number"==typeof t?0:t.crossAxis||0:0)(T)},q=t=>{D.current?.contains(t.relatedTarget)&&t.relatedTarget!==D.current||t.target!=D.current&&L(!1)},G=t=>{D.current?.contains(t.relatedTarget)&&t.relatedTarget!==D.current||L(!0)},J=t=>{const e=r.getActiveElement(),o=D.current,n=M.current;if(o===e||o?.contains(e))switch(t.code){case"Escape":P?.(t);break;case"F6":t.preventDefault(),t.stopPropagation(),n&&r.focusOn(n),L(!0);break;case"Tab":t.target===D.current&&j&&n&&(r.focusOn(n),t.preventDefault())}},Q=o.useCallback((t=>{R!==t.placement&&X(t.placement)}),[X,R]);o.useLayoutEffect((()=>{if("unmounted"===W||null==D.current||null!=N||"none"===k)return;const t=h.getVarName(g.popupVars.backgroundColor),e=getComputedStyle(D.current);$(e.getPropertyValue(t))}),[W,D,N,k]);const{baseTheme:Z,classes:tt}=b.useComponentTheme(E.PopupRedwoodTheme),et="unmounted"!==W,ot=()=>e.jsx(n.Floating,{ref:_,backgroundColor:N,anchorRef:t,placement:R,offsetValue:K,flipOptions:x,shiftOptions:y,onClickOutside:F,tail:k,onPosition:Q,children:e.jsx("div",{ref:D,tabIndex:-1,role:S,className:A.classNames([Z,tt]),onFocus:q,onBlur:G,onKeyDown:J,...I,children:e.jsx(s.FocusTrap,{isDisabled:j,restoreFocusRef:!1,children:a})})});return et?"modal"===p?e.jsx(u.Modal,{isOpen:et,children:ot()}):e.jsx(c.Layer,{children:ot()}):null}));t.Popup=y}));
//# sourceMappingURL=Popup-a5ec58c1.js.map
