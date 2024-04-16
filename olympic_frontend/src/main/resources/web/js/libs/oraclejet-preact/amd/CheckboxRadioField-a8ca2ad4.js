define(['exports', 'preact/jsx-runtime', 'preact/compat', './useCollectionFocusRing-be15ca1f', './useTranslationBundle-1a7cf79b', './Flex-d982a43c', './Label-7bdf0440', './InlineHelp-8f7c7867', './logger-b63acb49', './TabbableModeContext-1b650f6f', 'preact/hooks', 'css!./UserAssistanceStyles.styles.css', 'module', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceVariants.css', './InlineUserAssistance-68356e38', 'css!./MessageBannerStyles.styles.css', 'module', './UNSAFE_MessageBanner/themes/redwood/MessageBannerVariants.css', 'preact', './utils-577611d8', './Floating-7b312a86', './TopLayerHost-ed31c70d', './useTestId-b28a9bba', 'css!./TooltipContentStyles.styles.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', 'css!./IconStyle.styles.css', './IconButton-c2ad6964', 'css!./MessageStyles.styles.css', './MessageFormattingUtils-3ad74f93', './TransitionGroup-f93fdbdc', './MessagesContext-deda9de7', './HiddenAccessible-61fda488', 'css!./ComponentMessageStyles.styles.css', 'module', './UNSAFE_ComponentMessage/themes/redwood/ComponentMessageVariants.css', './FormFieldContext-e622bec1', './Popup-a5ec58c1', './UNSAFE_Separator/themes/SeparatorStyles.css', 'css!./LabelStyles.styles.css', 'module', './UNSAFE_Label/themes/redwood/LabelVariants.css', 'module', './UNSAFE_Popup/themes/redwood/PopupVariants.css', './useMessageSeverity-65430057', './stringUtils-aa6f579b', 'css!./CheckboxRadioFieldStyles.styles.css', './LabelValueLayout-8c9af635', './CheckboxRadioContext-e5c31093', './LayoutStyles.css-f58d4ba0'], (function(e,s,a,t,o,n,r,i,l,d,c,u,p,b,h,m,y,A,S,g,U,f,x,C,F,T,w,_,v,E,R,B,I,L,M,V,j,P,N,k,D,q,H,$,W,G,O,z,J,K){"use strict";var Q="CheckboxRadioFieldStyles_topUAContainerStyles_top__j1xru60",X="CheckboxRadioFieldStyles_topUAContainerStyles_start__j1xru61";const Y=a.forwardRef((({"aria-describedby":e,assistiveText:l,baseId:d,direction:c="column",columnSpan:u=1,hasValue:p,helpSourceLink:b,helpSourceText:m,isDisabled:y,isReadonly:A,isRequired:S,label:U,labelEdge:f,labelStartWidth:C="33%",parentComponentVariant:F,messages:T,userAssistanceDensity:w,role:_,children:v,testId:E},R=null)=>{const B=x.useTestId(E),L=!(y||A||!l&&(!b||!m)),M=!y&&!A,V=a.useRef(null),{groupProps:j,labelProps:P,topUserAssistanceProps:N,bottomUserAssistanceProps:k,readonlyId:D}=function({ariaDescribedBy:e,baseId:s,hasValue:a,hasTopUserAssistance:t,hasBottomUserAssistance:o,isReadonly:n,isRequired:r=!1,isDisabled:i,label:l,labelEdge:d,messages:c,parentComponentVariant:u}){const p=`${s}-group`,b=`${s}-label`,h=t?`${s}-top-ua`:void 0,m=o?`${s}-bottom-ua`:void 0,y=n?`${s}-readonly`:void 0,A=l&&l.length>0&&"none"===d?l:void 0,S=A?void 0:b,g="radioSet"===u,U="error"===W.useMessageSeverity(c);return{groupProps:{"aria-describedby":G.merge([h,m,y,e]),...g&&{"aria-required":r},...S&&{"aria-labelledby":S},...A&&{"aria-label":A},...n&&g&&{"aria-readonly":!0},...U&&{"aria-invalid":!0},...i&&{"aria-disabled":!0},id:p},labelProps:{forId:p,id:b},...t&&{topUserAssistanceProps:{id:h,variant:"reflow"}},...o&&{bottomUserAssistanceProps:{id:m,isRequiredShown:!!r&&!a}},...n&&{readonlyId:y}}}({ariaDescribedBy:e,baseId:d,isRequired:S,isReadonly:A,isDisabled:y,label:U,labelEdge:f,messages:T,hasValue:p,hasTopUserAssistance:L,hasBottomUserAssistance:M,parentComponentVariant:F}),q=o.useTranslationBundle("@oracle/oraclejet-preact").formControl_readOnly(),H="radioSet"===F;a.useImperativeHandle(R,(()=>({focus:()=>{if(!y){const e=V.current?.querySelectorAll("input")??[],s=Array.from(e).find((e=>e.checked));s?s.focus():e[0].focus()}},blur:()=>{V.current?.contains(document.activeElement)&&document.activeElement.blur()}})));const[$,O]=t.useCollectionFocusRing(V,H?["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]:["Tab"]),Y=s.jsxs(s.Fragment,{children:[L&&s.jsx("div",{id:`${d}-top-ua-container`,class:"start"===f?X:Q,children:s.jsx(h.InlineUserAssistanceContainer,{...N,children:s.jsx(i.InlineHelp,{assistiveText:l,sourceLink:b,sourceText:m})})}),s.jsx(n.Flex,{direction:c,..."row"===c&&{gap:[0,g.xUnits(8)],wrap:"wrap"},children:s.jsx(J.CheckboxRadioContext.Provider,{value:{isFocusRingShown:$},children:v})}),M&&!A&&s.jsx(h.InlineUserAssistance,{...k,requiredAlignment:"start",messages:T,userAssistanceDensity:"reflow"===w?w:"efficient"})]}),Z=K.layoutSpanStyles.layoutSpanColumn[u];return s.jsxs("div",{role:_,ref:V,class:Z,...j,...O,...B,children:["none"===f&&Y,"none"!==f&&s.jsx(z.LabelValueLayout,{parentComponentVariant:F,hasTopUserAssistance:L,label:s.jsx(r.Label,{...P,variant:f,userAssistanceDensity:"efficient",parentComponentVariant:F,children:U}),labelEdge:f,labelStartWidth:C,children:Y}),A&&s.jsx(I.HiddenAccessible,{id:D,isHidden:!0,children:q})]})}));e.CheckboxRadioField=Y}));
//# sourceMappingURL=CheckboxRadioField-a8ca2ad4.js.map