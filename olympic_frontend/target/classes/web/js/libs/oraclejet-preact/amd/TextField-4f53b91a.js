define(['exports', 'preact/jsx-runtime', './LabelValueLayout-8c9af635', './useComponentTheme-78f86a2f', './FormFieldContext-e622bec1', './useFormFieldContext-de5654ba', './Flex-d982a43c', './classNames-62eaa01c', './InputGroupContext-cc040e6d', './useInputGroupContext-c168f979', './useUser-8e4e5333', './UNSAFE_TextField/themes/redwood/TextFieldTheme', './StyledTextField-46ce4825', './useTestId-b28a9bba'], (function(e,t,n,s,a,o,i,r,d,l,u,c,h,x){"use strict";const m=({contentVariant:e="input",insideLabel:n,mainContent:a,startContent:d,statusVariant:h="none",styleVariant:x="default",endContent:m,resize:b,rootRef:p,hasZeroStartMargin:C})=>{const{isDisabled:F,isFocused:g,isLoading:L}=o.useFormFieldContext(),{direction:T}=u.useUser(),f="ltr"===T,M=void 0!==n,v=l.useInputGroupContext(),V=null!==v,j=v?v.last?f?"groupRight":"groupLeft":0===v.index?f?"groupLeft":"groupRight":"groupMiddle":void 0,{variantClasses:y,styles:{textFieldContainerBase:I}}=s.useComponentTheme(c.TextFieldRedwoodTheme,{statusVariant:h,styleVariant:x,contentVariant:e,insideLabel:M?"hasInsideLabel":"noInsideLabel",focused:g?"isFocused":"notFocused",disabled:F?"isDisabled":"notDisabled",loading:L?"isLoading":"notLoading",resize:b??"none",withinGroup:V?"isWithinGroup":void 0,inputGroupPosition:j}),{variantClasses:S}=s.useComponentTheme(c.TextFieldRedwoodTheme,{startContent:M?"hasInsideLabel":"noInsideLabel",startContentMargin:C?"noStartMargin":"hasStartMargin",startContentDisabled:F?"isDisabled":"notDisabled"}),{variantClasses:w}=s.useComponentTheme(c.TextFieldRedwoodTheme,{middleContent:e}),{variantClasses:D}=s.useComponentTheme(c.TextFieldRedwoodTheme,{endContent:M?"hasInsideLabel":"noInsideLabel"});return t.jsxs("div",{role:"presentation",class:r.classNames([y,I]),ref:p,children:[d&&t.jsx("span",{class:S,children:t.jsx(i.Flex,{justify:"center",align:"center",hasZeroMargins:!0,children:d})}),t.jsxs("div",{class:w,children:[n,a]}),m&&t.jsx("span",{class:D,children:t.jsx(i.Flex,{justify:"center",align:"center",hasZeroMargins:!0,children:m})})]})};e.TextField=({contentVariant:e,id:s,endContent:a,mainContent:o,startContent:i,columnSpan:r,compactUserAssistance:d,inlineUserAssistance:l,label:u,labelEdge:c,labelStartWidth:b,mainFieldRef:p,resize:C,statusVariant:F,styleVariant:g,hasZeroStartMargin:L,rootRef:T,onFocus:f,onBlur:M,onKeyDown:v,onMouseDown:V,onMouseEnter:j,onMouseLeave:y,testId:I})=>{const S=x.useTestId(I),w=void 0!==u&&("start"===c||"top"===c),D=t.jsx(m,{contentVariant:e,endContent:a,mainContent:o,resize:C,rootRef:p,startContent:i,statusVariant:F,styleVariant:g,hasZeroStartMargin:L,...w?{}:{insideLabel:u}}),R=t.jsxs(t.Fragment,{children:[d,D,l]}),G=w?t.jsx(n.LabelValueLayout,{label:u,labelEdge:c,labelStartWidth:b,children:R}):R;return t.jsx(h.StyledTextField,{id:s,columnSpan:r,hasInsideLabel:void 0!==u&&"inside"===c,onfocusin:f,onfocusout:M,onKeyDown:v,onMouseDown:V,onMouseEnter:j,onMouseLeave:y,ref:T,variant:g,...S,children:G})}}));
//# sourceMappingURL=TextField-4f53b91a.js.map
