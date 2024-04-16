define(['exports', 'preact/jsx-runtime', 'preact/hooks', './useTranslationBundle-1a7cf79b', './usePress-7d44cb50', './Help-fda08b10', './Popup-a5ec58c1', './HiddenAccessible-61fda488', './InlineHelp-8f7c7867', './UNSAFE_UserAssistance/themes/UserAssistanceStyles.css', './useComponentTheme-78f86a2f', './classNames-62eaa01c', './UNSAFE_Popup/themes/redwood/PopupTheme', './useToggle-bb6b1322'], (function(e,s,n,o,a,c,t,i,r,l,u,p,d,b){"use strict";e.IconUserAssistance=({assistiveText:e,helpSourceLink:h,helpSourceText:m,isTabbable:f=!0,id:x})=>{const{bool:T,setFalse:g,toggle:A}=b.useToggle(!1),k=o.useTranslationBundle("@oracle/oraclejet-preact"),j=k.userAssistance_learnMore(),P=h&&(m||j),C=k.radio_helpForRadio(),U=`${x}-help-string`,H=n.useRef(null),S=n.useCallback((e=>{const s=e?.target;(s instanceof Element||s instanceof Document)&&!H.current?.contains(s)&&T&&g()}),[T,g]),v=n.useCallback((e=>{["Tab","Escape"].includes(e.key)&&T&&g(),"Space"===e.code&&e.preventDefault()}),[T,g]),{pressProps:y}=a.usePress((e=>{e.preventDefault(),A()})),F=n.useCallback((e=>{const{key:s}=e;if(s&&"Enter"!==s)return;const{tagName:n}=e.target;"a"===n?.toLowerCase()&&(g(),setTimeout((()=>H.current?.focus())))}),[g]),{baseTheme:I}=u.useComponentTheme(d.PopupRedwoodTheme),w=p.classNames([I,l.iconUserAssistancePopupFocus]);return h||e?s.jsxs(s.Fragment,{children:[s.jsx("span",{...y,role:"link","aria-describedby":U,"aria-haspopup":"dialog",ref:H,tabIndex:f?0:-1,class:l.iconUserAssistanceIcon,onKeyDown:v,id:`${x}-help-icon`,children:s.jsx(c.SvgHelp,{})}),s.jsx(i.HiddenAccessible,{id:U,isHidden:!0,children:C}),s.jsx(t.Popup,{placement:"top",isOpen:T,anchorRef:H,onClose:g,onClickOutside:S,shiftOptions:{mainAxis:!0,crossAxis:!1},children:s.jsx("div",{id:x,tabIndex:0,class:w,onMouseUp:F,onKeyDown:F,children:s.jsx(r.InlineHelp,{assistiveText:e,sourceLink:h,sourceText:P})})})]}):null}}));
//# sourceMappingURL=IconUserAssistance-f0256f0a.js.map