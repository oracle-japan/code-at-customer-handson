define(['exports', './stringUtils-aa6f579b', './useUser-8e4e5333'], (function(e,i,s){"use strict";e.usePrefixSuffix=({baseId:e,hasEndContent:t,hasInsideLabel:a,hasStartContent:r,hasValue:d,isDisabled:n,isFocused:f,labelId:o,prefix:u,suffix:l,value:x})=>{const{direction:$}=s.useUser(),v=`${e}-prefix`,b=`${e}-suffix`,h=void 0!==u&&""!==u,c=void 0!==l&&""!==l,p=h&&!n&&(d||f),I=c&&!n&&(d||f),P=h||c?function(e,i,s,t,a){if(!i)return a;const r="ltr"===e,d=void 0===s?"":r?`${s} `:` ${s}`,n=void 0===t?"":r?` ${t}`:`${t} `,f=`${d}${a}${n}`,o=`${n}${a}${d}`;return r?f:o}($,d,u,l,x):x;return{shouldRenderPrefix:p,shouldRenderSuffix:I,prefixProps:{id:v,hasEndContent:t,hasInsideLabel:a,hasStartContent:r,isDisabled:n,isFocused:f,text:u??"",variant:"prefix"},suffixProps:{id:b,hasInsideLabel:a,isDisabled:n,isFocused:f,text:l??"",variant:"suffix"},valuePrefixSuffix:P,ariaLabelledBy:h||c?i.merge([o,h?v:void 0,c?b:void 0]):void 0}}}));
//# sourceMappingURL=usePrefixSuffix-3c9e333d.js.map