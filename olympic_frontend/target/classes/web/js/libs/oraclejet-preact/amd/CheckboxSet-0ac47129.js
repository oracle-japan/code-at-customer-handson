define(['exports', 'preact/jsx-runtime', 'preact', 'preact/hooks', 'preact/compat', './FormContext-c9b69cf8', './useFormContext-dc7a7549', './FormFieldContext-e622bec1', './useFormFieldContextProps-94c571da', 'css!./CheckboxSetStyles.styles.css', './useId-37951d4d', './CheckboxRadioField-a8ca2ad4'], (function(e,s,t,i,o,a,l,r,n,d,c,u){"use strict";const x=t.createContext({});var b="CheckboxSetStyles_styles_ul__68p6630";const h=o.forwardRef((({"aria-describedby":e,assistiveText:o,columnSpan:a,direction:d="column",helpSourceLink:h,helpSourceText:m,isDisabled:C,isReadonly:p,isRequired:S=!1,label:y,labelEdge:F,labelStartWidth:k,messages:v,onCommit:R,userAssistanceDensity:f,value:D,children:g},j)=>{const A=void 0!==D&&D.size>0,P=c.useId(),{isDisabled:T,isReadonly:_,labelEdge:E,labelStartWidth:I,userAssistanceDensity:V}=l.useFormContext(),W=C??T,q=p??_,L=F??E,w=k??I,z=f??V,B=n.useFormFieldContextProps({hasValue:A,isDisabled:W,isReadonly:q}),M=i.useMemo((()=>({name:P,value:D,onCommit:R})),[P,R,D]),N=t.toChildArray(g).filter(Boolean).map((e=>s.jsx("li",{children:e})));return s.jsx(r.FormFieldContext.Provider,{value:B,children:s.jsx(u.CheckboxRadioField,{"aria-describedby":e,assistiveText:o,baseId:P,columnSpan:a,direction:d,helpSourceLink:h,helpSourceText:m,isDisabled:W,isReadonly:q,isRequired:S,label:y,labelEdge:L,labelStartWidth:w,parentComponentVariant:"checkboxSet",messages:v,userAssistanceDensity:z,hasValue:A,role:"group",ref:j,children:s.jsx(x.Provider,{value:M,children:s.jsx("ul",{className:b,children:N})})})})}));e.CheckboxSet=h,e.CheckboxSetContext=x,e.useCheckboxSetContext=()=>i.useContext(x)}));
//# sourceMappingURL=CheckboxSet-0ac47129.js.map
