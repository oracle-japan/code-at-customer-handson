define(['exports', 'preact/jsx-runtime', 'preact', './BaseButton-1d7e01fd', './ButtonLayout-72f1db9d', 'preact/compat', './useTooltip-66ebfdaf', 'preact/hooks', './Floating-7b312a86', './TopLayerHost-ed31c70d', './logger-b63acb49', 'css!./TooltipContentStyles.styles.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css'], (function(t,e,o,s,i,a,n,l,r,d,c,p,u,b){"use strict";const y=a.forwardRef((({variant:t="outlined",isDisabled:a=!1,isRepeat:l=!1,size:r="md",type:d="button",autofocus:c,onAction:p,tooltip:u,testId:b,"aria-label":y,"aria-describedby":f,...m},T)=>{const{tooltipContent:h,tooltipProps:B}=n.useTooltip({text:u||y,isDisabled:a}),x={type:"button",buttonType:d};return e.jsxs(o.Fragment,{children:[e.jsx(s.BaseButton,{...B,ref:T,elementDetails:x,isDisabled:a,isRepeat:l,size:r,autofocus:c,variant:t,styling:["min"],onAction:p,"aria-describedby":f,"aria-label":y??u,testId:b,children:e.jsx(i.ButtonLayout,{display:"icons",startIcon:m.children,size:r})}),h]})}));y.displayName="IconButton",t.IconButton=y}));
//# sourceMappingURL=IconButton-c2ad6964.js.map
