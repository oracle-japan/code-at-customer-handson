define(['exports', 'preact/jsx-runtime', 'preact/hooks', './useId-37951d4d', './Check-7a8af9c9', './MenuItem-fe33605a', './SelectMenuGroupContext-b6b495e3'], (function(e,t,n,o,i,s,u){"use strict";e.SelectMenuItem=function({value:e,label:m,isDisabled:c,endIcon:l}){const{isMultiple:a,value:d,onCommit:r}=n.useContext(u.SelectMenuGroupContext),p=o.useId(),C=n.useMemo((()=>`oj-menu-item-${p}`),[p]),{isSelected:x,memoizedOnCommit:I}=n.useMemo((()=>a?{isSelected:!!d?.includes(e),memoizedOnCommit:()=>{const t=x?d?.filter((t=>t!==e))||[]:[...d||[],e];r?.({value:t,previousValue:d})}}:{isSelected:d===e,memoizedOnCommit:()=>{r?.({value:e,previousValue:d})}}),[d,e,r,a]);return t.jsx(s.BaseMenuItem,{id:C,type:"select",role:a?"menuitemcheckbox":"menuitemradio",isChecked:x,isDisabled:c,startIcon:x?t.jsx(i.SvgCheck,{}):t.jsx("span",{}),label:m,onAction:I,endIcon:l})}}));
//# sourceMappingURL=SelectMenuItem-79ae8cb7.js.map