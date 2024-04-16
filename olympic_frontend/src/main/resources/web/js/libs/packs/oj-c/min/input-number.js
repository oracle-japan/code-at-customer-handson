define("oj-c/editable-value/UNSAFE_useAssistiveText/useAssistiveText",["require","exports","preact/hooks"],(function(require,e,t){"use strict";function a(e,t,a,n,r,s){const i="compact"!==s?a?.definition:void 0;return e?.instruction||("none"===r?.validatorHint?void 0:t)||i||("none"===r?.converterHint?void 0:n)}function n(e){if(!e.length)return;return e.map((e=>"function"==typeof e.getHint?e.getHint():void 0)).filter(Boolean).join("\n")}Object.defineProperty(e,"__esModule",{value:!0}),e.useAssistiveText=void 0,e.useAssistiveText=function({addBusyState:e,converter:r,displayOptions:s,help:i,helpHints:o,userAssistanceDensity:l,validators:u}){const[d,c]=(0,t.useState)(u&&u.length?n(u):void 0),p=(0,t.useRef)();(0,t.useEffect)((()=>{if(!u||!u.length)return void c(void 0);c(n(u));const t=u.map((e=>e.hint)).filter(Boolean),a=p.current=Symbol(),r=e?.("resolving the async validator hints");Promise.allSettled(t).then((e=>{c((t=>{const n=e.map((e=>"fulfilled"===e.status?e.value:void 0)).filter(Boolean);return a===p.current&&n.length?[t,...n].join("\n"):t})),r?.()}))}),[u]);const f="compact"!==l?o?.sourceText:o?.definition||o?.sourceText;return{assistiveText:a(i,d,o,r?.getHint?.()??void 0,s,l),helpSourceLink:o?.source,helpSourceText:f}}})),define("oj-c/editable-value/utils/utils",["require","exports"],(function(require,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isShallowEqual=e.normalizeValue=e.treatNull=e.createMessageFromError=void 0,e.createMessageFromError=function(e){return"function"==typeof e.getMessage?{severity:"error",detail:e.getMessage().detail}:{severity:"error",detail:e.message}},e.treatNull=function(e,t){return null===e?t:e},e.normalizeValue=function(e){return"string"==typeof e&&""===e?null:e};e.isShallowEqual=(e,t)=>e===t||e.length===t.length&&e.every(((e,a)=>e===t[a]))})),define("oj-c/editable-value/UNSAFE_useComponentMessaging/useComponentMessaging",["require","exports","@oracle/oraclejet-preact/hooks/UNSAFE_useUncontrolledState","preact/hooks","../utils/utils"],(function(require,e,t,a,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useComponentMessaging=void 0,e.useComponentMessaging=function({messagesCustom:e=[],onMessagesCustomChanged:r}){const[s,i]=(0,t.useUncontrolledState)(e,r),[o,l]=(0,a.useState)([]),[u,d]=(0,a.useState)([]),c=(0,a.useRef)(e),p=(0,a.useCallback)(((...e)=>{l((t=>[...t,...e]))}),[]),f=(0,a.useCallback)((e=>{l((t=>[...t,e]))}),[]),v=(0,a.useCallback)((()=>{l([]),d([])}),[]),m=(0,a.useCallback)((()=>{d([])}),[]),g=(0,a.useCallback)((()=>{l([]),d([]),i([])}),[]),b=(0,a.useCallback)((()=>s.some((e=>"error"===e.severity))),[s]),y=(0,a.useCallback)((()=>0===o.length&&0===u.length&&!1===b()),[o,u,b]),V=(0,a.useCallback)((()=>0!==u.length),[u]),h=(0,a.useCallback)((()=>{l((e=>[...e,...u])),d([])}),[u]);return(0,a.useEffect)((()=>{c.current!==e&&(c.current=e,(0,n.isShallowEqual)(s,e)||i(e))}),[s,e]),(0,a.useMemo)((()=>({componentMessages:o,deferredComponentMessages:u,messagesCustom:s,visibleMessages:[...s,...o],addComponentMessage:p,addDeferredComponentMessage:f,clearAllComponentMessages:v,clearAllMessages:g,clearDeferredComponentMessages:m,hasCustomErrorMessages:b,hasHiddenMessages:V,hasNoErrorMessages:y,setComponentMessages:l,setDeferredComponentMessages:d,showHiddenMessages:h})),[o,u,s,b,V,y,h])}})),define("oj-c/editable-value/UNSAFE_useConverter/useConverter",["require","exports","ojs/ojconverter-nativenumber","preact/hooks","@oracle/oraclejet-preact/hooks/UNSAFE_useTranslationBundle","../utils/utils"],(function(require,e,t,a,n,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useConverter=e.ConverterErrorSymbol=void 0,e.ConverterErrorSymbol=Symbol("ConverterError"),e.useConverter=function({componentMessagingState:s,validationState:i,converter:o}){const l=(0,n.useTranslationBundle)("@oracle/oraclejet-preact").inputNumber_converterParseError(),u=(0,a.useCallback)((a=>{if(!o||(""===(n=a)||null===n))return a;var n;try{return o.parse(a)}catch(a){const n=a?.cause===t.USER_INPUT_ERROR?{severity:"error",detail:l}:(0,r.createMessageFromError)(a);return s.setComponentMessages([n]),i.setValid("invalidShown"),e.ConverterErrorSymbol}}),[o,s,i]),d=(0,a.useCallback)(((e,t=!1)=>{if(!o||function(e){return null===e}(e))return(0,r.treatNull)(e,"")??"";try{return o.format(e)}catch(a){return t||(s.setComponentMessages([(0,r.createMessageFromError)(a)]),i.setValid("invalidShown")),(0,r.treatNull)(e,"")}}),[o,s,i]);return(0,a.useMemo)((()=>({format:d,parse:u})),[d,u])}})),define("oj-c/editable-value/UNSAFE_useConverterLifecycle/useConverterLifecycle",["require","exports","preact/hooks"],(function(require,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useConverterLifecycle=void 0,e.useConverterLifecycle=function({converter:e,validationState:a,refreshDisplayValue:n,runFullValidationAndUpdateValue:r}){const s=(0,t.useRef)(e);(0,t.useEffect)((()=>{if(s.current===e)return;s.current=e;const{valid:t}=a;if("invalidShown"===t)r();else n()}),[e,a,n,r])}})),define("oj-c/editable-value/UNSAFE_useDeferredValidators/useDeferredValidators",["require","exports","ojs/ojvalidator-required","preact/hooks","@oracle/oraclejet-preact/hooks/UNSAFE_useTranslationBundle"],(function(require,e,t,a,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useDeferredValidators=void 0,e.useDeferredValidators=function({labelHint:e,required:r,requiredMessageDetail:s}){const i=(0,n.useTranslationBundle)("@oracle/oraclejet-preact"),o=s||i.formControl_requiredMessageDetail(),l=(0,a.useMemo)((()=>r?new t({label:e,messageDetail:o}):null),[r]);return(0,a.useMemo)((()=>[l].filter(Boolean)),[l])}})),define("oj-c/editable-value/UNSAFE_useStaleIdentity/useStaleIdentity",["require","exports","preact/hooks"],(function(require,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useStaleIdentity=void 0,e.useStaleIdentity=function(){const e=(0,t.useRef)(new Map);return{setStaleIdentity:(0,t.useCallback)((t=>{const a=Symbol();return e.current.set(t,a),{isStale:()=>a!==e.current.get(t)}}),[])}}})),define("oj-c/editable-value/UNSAFE_useValidators/useValidators",["require","exports","@oracle/oraclejet-preact/hooks/UNSAFE_useUncontrolledState","preact/hooks","../UNSAFE_useStaleIdentity/useStaleIdentity","../utils/utils"],(function(require,e,t,a,n,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useValidators=e.ValidationResult=void 0,e.ValidationResult={VALID:"VALID",INVALID:"INVALID",STALE:"STALE"},e.useValidators=function({componentMessagingState:s,defaultValidState:i,deferredValidators:o=[],validators:l=[],addBusyState:u,onValidChanged:d}){const[c,p]=(0,t.useUncontrolledState)(i,d),{setStaleIdentity:f}=(0,n.useStaleIdentity)();(0,a.useLayoutEffect)((()=>{void 0!==i&&d?.(i)}),[]);const{addComponentMessage:v,clearAllComponentMessages:m,clearAllMessages:g,hasCustomErrorMessages:b,setComponentMessages:y}=s,V=(0,a.useCallback)((async(e,t={})=>{const{doNotClearMessagesCustom:a=!1}=t,n=b();if(p("pending"),a?m():g(),0===l.length&&0===o.length)return p(n&&a?"invalidShown":"valid"),!0;function s(e,t){try{const a=e.validate(t);if(a instanceof Promise)return a.then((()=>{}),(e=>(0,r.createMessageFromError)(e)))}catch(e){return(0,r.createMessageFromError)(e)}}const i=[],d=[],c=h(e);if(void 0!==c&&i.push(...c),null!=e)for(const t of l){const a=s(t,e);void 0!==a&&(a instanceof Promise?d.push(a):i.push(a))}if(!i.length&&!d.length)return p(n&&a?"invalidShown":"valid"),!0;const V=0!==i.length;if(V&&(y(i),p("invalidShown")),!d.length)return!V;const C=u?.("running validation"),{isStale:S}=f("useValidators-validate");let M=!1;for(const e of d){const t=await e;t&&!S()&&(v(t),p("invalidShown"),M=!0)}return V||M||S()||p(n&&a?"invalidShown":"valid"),C?.(),!V&&!M}),[v,m,g,o,l]),h=(0,a.useCallback)((e=>{const t=[];for(const a of o)try{a.validate(e)}catch(e){t.push((0,r.createMessageFromError)(e))}if(t.length)return t}),[o]),C=(0,a.useCallback)((async(t,a={})=>{const{isStale:n}=f("useValidationLifeCycle-validateValueOnInternalChange"),r=u?.("running validateValueOnInternalChange"),s=await V(t,a);return r?.(),n()?e.ValidationResult.STALE:s?e.ValidationResult.VALID:e.ValidationResult.INVALID}),[u,V]),S=(0,a.useCallback)((t=>{const{clearAllMessages:a,setDeferredComponentMessages:n}=s;a();const r=h(t);return r?(n(r),p("invalidHidden")):p("valid"),e.ValidationResult.VALID}),[s,h]);return(0,a.useMemo)((()=>({valid:c,setValid:p,deferredValidate:h,fullValidate:V,validateValueOnExternalChange:S,validateValueOnInternalChange:C})),[c,h,V,S,C])}})),define("oj-c/editable-value/UNSAFE_useValidationLifecycle/useValidationLifecycle",["require","exports","preact/hooks","../UNSAFE_useConverter/useConverter","../UNSAFE_useValidators/useValidators","../utils/utils"],(function(require,e,t,a,n,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useValidationLifecycle=void 0,e.useValidationLifecycle=function({componentMessagingState:e,disabled:s,deferredValidators:i,readonly:o,validationState:l,validators:u,getValueForValidation:d,setValueAfterValidation:c}){const p=(0,t.useRef)(i),f=(0,t.useRef)(u),v=(0,t.useRef)(e.messagesCustom),m=(0,t.useRef)(o),g=(0,t.useRef)(s),b=(0,t.useRef)(!0),y=(0,t.useCallback)((async()=>{if(o||s)return;const{valid:e,validateValueOnInternalChange:t}=l,r=d(e);if(r===a.ConverterErrorSymbol)return;await t(r,{doNotClearMessagesCustom:!0})===n.ValidationResult.VALID&&c(r)}),[s,o,l,d,c]);return(0,t.useEffect)((()=>{if(!b.current)return;if(b.current=!1,o||s)return;const t=d("valid");if(t===a.ConverterErrorSymbol)return;const{deferredValidate:n,setValid:r}=l,{hasCustomErrorMessages:i,setDeferredComponentMessages:u}=e,c=n(t);c&&(u(c),r("invalidHidden")),i()&&r("invalidShown")}),[s,o]),(0,t.useEffect)((()=>{const t=p.current!==i&&0===i.length;if(p.current===i&&m.current===o&&g.current===s)return;m.current=o,g.current=s,p.current=i;if(!(t||!o&&!s))return;const{valid:n,deferredValidate:r,setValid:u}=l,{clearDeferredComponentMessages:c,setDeferredComponentMessages:f}=e;switch(n){case"valid":const e=d(n);if(e!==a.ConverterErrorSymbol){const t=r(e);t&&(f(t),u("invalidHidden"))}break;case"invalidHidden":0===i.length&&(u("valid"),c());break;case"invalidShown":y()}}),[s,o,i,e,l,d,y]),(0,t.useEffect)((()=>{if(f.current!==u&&(f.current=u,!o&&!s&&"invalidShown"===l.valid))y()}),[s,o,u,l]),(0,t.useEffect)((()=>{if((0,r.isShallowEqual)(v.current,e.messagesCustom))return;const{messagesCustom:t,hasCustomErrorMessages:a,hasHiddenMessages:n,hasNoErrorMessages:s}=e,{valid:i,setValid:o}=l;if(v.current=t,a())o("invalidShown");else{if("pending"===i)return;s()?o("valid"):n()&&o("invalidHidden")}}),[e,l]),{runFullValidationAndUpdateValue:y}}})),define("oj-c/editable-value/UNSAFE_useValue/useValue",["require","exports","@oracle/oraclejet-preact/hooks/UNSAFE_useUncontrolledState","preact/hooks","../utils/utils"],(function(require,e,t,a,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useValue=void 0,e.useValue=function({value:e,format:r,parse:s,onRawValueChanged:i,onTransientValueChanged:o,onValueChanged:l}){const[u,d]=(0,t.useUncontrolledState)(r(e,!0),i),[c,p]=(0,t.useUncontrolledState)(e,l);(0,a.useEffect)((()=>{void 0!==u&&i?.(u)}),[]);const[f,v]=(0,t.useUncontrolledState)(e,o);return(0,a.useEffect)((()=>{void 0!==e&&o?.(e)}),[]),{displayValue:u,transientValue:f,value:c,getValueForValidation:(0,a.useCallback)((e=>"invalidShown"!==e?c:s((0,n.normalizeValue)(u))),[u,c,s]),setValueAfterValidation:(0,a.useCallback)((e=>{p(e),d(r(e))}),[r]),setDisplayValue:d,setTransientValue:v,setValue:p,refreshDisplayValue:(0,a.useCallback)((()=>{d(r(c))}),[c,r])}}})),define("oj-c/editable-value/UNSAFE_useValueLifecycle/useValueLifecycle",["require","exports","preact/hooks","../UNSAFE_useValidators/useValidators"],(function(require,e,t,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useValueLifecycle=void 0,e.useValueLifecycle=function({value:e,valueState:n,format:r,validateValueOnExternalChange:s}){const i=(0,t.useRef)(e);(0,t.useEffect)((()=>{const{value:e,setDisplayValue:t}=n;t(r(e))}),[]),(0,t.useEffect)((()=>{if(i.current!==e&&(i.current=e,void 0!==e&&e!==n.value)){const{setDisplayValue:t,setValue:i}=n;s(e)===a.ValidationResult.VALID&&(i(e),t(r(e)))}}),[e,n,r])}})),define("oj-c/editable-value/UNSAFE_useEditableValue/useEditableValue",["require","exports","preact/hooks","../UNSAFE_useComponentMessaging/useComponentMessaging","../UNSAFE_useConverter/useConverter","../UNSAFE_useConverterLifecycle/useConverterLifecycle","../UNSAFE_useDeferredValidators/useDeferredValidators","../UNSAFE_useValidationLifecycle/useValidationLifecycle","../UNSAFE_useValidators/useValidators","../UNSAFE_useValue/useValue","../UNSAFE_useValueLifecycle/useValueLifecycle","../utils/utils"],(function(require,e,t,a,n,r,s,i,o,l,u,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useEditableValue=void 0,e.useEditableValue=function({ariaDescribedBy:e,converter:c,disabled:p,displayOptions:f,implicitComponentValidator:v,labelHint:m,messagesCustom:g,readonly:b,required:y,requiredMessageDetail:V,shouldNormalizeValueOnCommit:h=!0,validators:C,value:S,addBusyState:M,onMessagesCustomChanged:E,onRawValueChanged:x,onValidChanged:A,onValueChanged:_,onTransientValueChanged:R,wrapValueState:N}){const j=(0,a.useComponentMessaging)({messagesCustom:g,onMessagesCustomChanged:E}),{clearAllMessages:w,visibleMessages:D}=j,F=(0,s.useDeferredValidators)({labelHint:m,required:y,requiredMessageDetail:V}),k=v?C?[v,...C]:[v]:C,U=(0,o.useValidators)({componentMessagingState:j,defaultValidState:"valid",deferredValidators:F,validators:k,addBusyState:M,onValidChanged:A}),{validateValueOnExternalChange:I,validateValueOnInternalChange:O}=U,{format:L,parse:P}=(0,n.useConverter)({componentMessagingState:j,converter:c,validationState:U}),T=(0,l.useValue)({value:S,format:L,parse:P,onRawValueChanged:x,onTransientValueChanged:R,onValueChanged:_}),q=N?N(T):T,{displayValue:H,value:B,getValueForValidation:W,setValueAfterValidation:z,refreshDisplayValue:K,setDisplayValue:$,setTransientValue:G,setValue:Y}=q,{runFullValidationAndUpdateValue:J}=(0,i.useValidationLifecycle)({componentMessagingState:j,validationState:U,deferredValidators:F,validators:C,getValueForValidation:W,setValueAfterValidation:z,readonly:b,disabled:p});(0,r.useConverterLifecycle)({converter:c,validationState:U,refreshDisplayValue:K,runFullValidationAndUpdateValue:J}),(0,u.useValueLifecycle)({value:S,valueState:q,format:L,validateValueOnExternalChange:I});const Q=(0,t.useCallback)((e=>P(h?(0,d.normalizeValue)(e):e)),[h,P]),X=(0,t.useCallback)((async(e,t=!0)=>{const a=await O(e);return a===o.ValidationResult.VALID&&t&&Y(e),a}),[O]),Z=(0,t.useCallback)((async({value:e})=>{const t=Q(e);if(t===n.ConverterErrorSymbol)return;const a=t;await X(a)===o.ValidationResult.VALID&&$(L(a))}),[L,X,Q]),ee=(0,t.useCallback)((({value:e})=>{$(e??"")}),[]),te=(0,t.useCallback)((()=>{w(),I(B),K()}),[B,w,K,I]),ae=(0,t.useCallback)((async()=>{if(b||p)return"valid";const{fullValidate:e}=U,{displayValue:t,value:a,setValueAfterValidation:r}=q,s=Q(t);if(s===n.ConverterErrorSymbol)return"invalid";const i=s,o=M?.("running component method validate"),l=await e(i);return o?.(),l?(i!==a&&r(i),"valid"):"invalid"}),[U,q,M,Q,b,p]),ne=(0,t.useCallback)((()=>{const{hasHiddenMessages:e,showHiddenMessages:t}=j,{setValid:a}=U;e()&&(t(),a("invalidShown"))}),[j,U]);return{value:B,setValue:Y,displayValue:H,setDisplayValue:$,setTransientValue:G,methods:{reset:te,validate:ae,showMessages:ne},textFieldProps:{messages:"none"!==f?.messages?D:void 0,value:H,"aria-describedby":e,onCommit:Z,onInput:ee},onCommitValue:X,format:L,normalizeAndParseValue:Q}}})),define("oj-c/input-number/useImplicitNumberConverter",["require","exports","ojs/ojconverter-nativenumber","preact/hooks"],(function(require,e,t,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useImplicitNumberConverter=void 0,e.useImplicitNumberConverter=function({converter:e}){return(0,a.useMemo)((()=>e??new t.NumberConverter),[e])}})),define("oj-c/input-number/useImplicitNumberRangeValidator",["require","exports","preact/hooks","ojs/ojvalidator-numberrange"],(function(require,e,t,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useImplicitNumberRangeValidator=void 0,e.useImplicitNumberRangeValidator=function({converter:e,max:n,min:r,numberRangeExactMessageDetail:s,numberRangeOverflowMessageDetail:i,numberRangeUnderflowMessageDetail:o}){return(0,t.useMemo)((()=>void 0!==r||void 0!==n?new a({converter:e,max:n,min:r,messageDetail:{exact:s,rangeOverflow:i,rangeUnderflow:o}}):null),[e,r,n])}})),define("oj-c/input-number/stepBasisUtils",["require","exports"],(function(require,e){"use strict";function t(e,t,a,n,r,s){let i=null!=s?s:n;null==i&&(i=0);try{a=parseFloat(a.toFixed(0))}catch(e){e instanceof TypeError&&(a=+a)}let o=a-i,l=Math.round(o/t)*t;l=parseFloat(l.toFixed(0));let u;if(l===o?u=a+e:(o=e<0?Math.ceil(o/t)*t:Math.floor(o/t)*t,u=i+o+e),u=parseFloat(u.toFixed(0)),null!=s&&u<s)return s;if(null!=r&&u>r){let e=Math.floor((r-i)/t)*t+i;return e=parseFloat(e.toFixed(0)),e}return u}function a(e){const t=e.toString(),a=t.indexOf(".");return-1===a?0:t.length-a-1}Object.defineProperty(e,"__esModule",{value:!0}),e.determineSteppedValue=void 0,e.determineSteppedValue=function(e,n,r,s,i,o){const l=function(e,t,n){let r=a(e);null!=n&&(r=Math.max(r,a(n)));null!=t&&(r=Math.max(r,a(t)));return r}(n,s,o);if(l>0){const a=Math.pow(10,l),u=void 0!==o?Math.round(o*a):o,d=null!=i?Math.round(i*a):i,c=Math.round(n*a);return t(Math.round(e*a),c,Math.round(r*a),null!=s?Math.round(s*a):s,d,u)/a}return t(e,n,r,s,i,o)}})),define("oj-c/input-number/useNumberInputTextPreact",["require","exports","oj-c/editable-value/UNSAFE_useEditableValue/useEditableValue","oj-c/editable-value/UNSAFE_useValidators/useValidators","./useImplicitNumberConverter","./useImplicitNumberRangeValidator","preact/hooks","oj-c/editable-value/utils/utils","./stepBasisUtils"],(function(require,e,t,a,n,r,s,i,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useNumberInputTextPreact=void 0,e.useNumberInputTextPreact=function({autocomplete:e="on",autofocus:l,converter:u,disabled:d,displayOptions:c,inputPrefix:p,inputSuffix:f,labelEdge:v,labelHint:m,labelStartWidth:g,max:b,messagesCustom:y,min:V,numberRangeExactMessageDetail:h,numberRangeOverflowMessageDetail:C,numberRangeUnderflowMessageDetail:S,placeholder:M,readonly:E,required:x,requiredMessageDetail:A,step:_,stepperVariant:R,textAlign:N,userAssistanceDensity:j,validators:w,value:D,virtualKeyboard:F,onMessagesCustomChanged:k,onRawValueChanged:U,onTransientValueChanged:I,onValidChanged:O,onValueChanged:L,...P},T){const q=(0,i.treatNull)(V),H=(0,i.treatNull)(b),B=(0,n.useImplicitNumberConverter)({converter:u}),W=(0,r.useImplicitNumberRangeValidator)({converter:B,max:H,min:q,numberRangeExactMessageDetail:h,numberRangeOverflowMessageDetail:C,numberRangeUnderflowMessageDetail:S}),{onCommitValue:z,format:K,normalizeAndParseValue:$,methods:G,textFieldProps:Y,value:J,setValue:Q,displayValue:X,setDisplayValue:Z,setTransientValue:ee}=(0,t.useEditableValue)({ariaDescribedBy:P["aria-describedby"],converter:B,disabled:d,displayOptions:c,implicitComponentValidator:W,messagesCustom:y,readonly:E,required:x,requiredMessageDetail:A,validators:w,value:D,addBusyState:T,onMessagesCustomChanged:k,onRawValueChanged:U,onTransientValueChanged:I,onValidChanged:O,onValueChanged:L}),te=void 0!==q,ae=void 0!==H,ne=(0,s.useRef)(!1),re=(0,s.useRef)(new Array),se=(0,s.useRef)(X),ie=(0,s.useRef)((0,i.treatNull)(D));D!==J&&(ie.current=(0,i.treatNull)(D));const[oe,le]=(0,s.useState)((0,i.treatNull)(J)),[ue,de]=(0,s.useState)(J);J!==ue&&(de(J),le((0,i.treatNull)(J)),ee(J));const[ce,pe]=(0,s.useState)(!1);se.current=X;const fe=(0,s.useCallback)((async({value:e})=>{pe(!1);const t=$(e),n=t;if("symbol"==typeof t)return void le(void 0);if(await z(n)===a.ValidationResult.VALID){const e=K(n);Z(e)}else le(n)}),[K,$,z]),ve=(0,s.useCallback)((({value:e})=>{Z(e??""),pe(!0)}),[]),me={...Y,onCommit:fe,onInput:ve},ge=(0,s.useCallback)((async(e,t)=>{if(void 0===_||ne.current)return;const n=se.current||"0",r=$(n);if("symbol"==typeof r)return;const s=r;let i;if(void 0!==e){const t="increase"===e?_:-1*_;i=(0,o.determineSteppedValue)(t,_,s,ie.current,H,q)}else i=s;ne.current=!0;const l=K(i);Z(l),se.current=l;const u=await z(i,t),d=!1===t,c=t&&u===a.ValidationResult.VALID;d&&u===a.ValidationResult.VALID&&ee(i),c||le(i),ne.current=!1}),[J,X,K,$,z]),be=(0,s.useCallback)((async e=>{if(await ge(e,!0),re.current.length>0){const e=re.current.shift();be(e)}}),[ge]),ye=(0,s.useCallback)((async({direction:e})=>{ne.current?re.current.push(e):be(e)}),[be]),Ve=(0,s.useCallback)((async({direction:e})=>{re.current=[],ge(e,!1)}),[ge]),he=(0,s.useCallback)((async()=>{const e=$(se.current),t=e;"symbol"!=typeof e&&await z(t)}),[z,$]),Ce=function(e,t,a,n){if(!e)return""!==t?t:void 0;let r;a&&(r=n(a));return""===r||null===r?void 0:r}(ce,X,oe,K);return{value:J,setValue:Q,methods:G,inputNumberProps:{"aria-valuemax":H,"aria-valuemin":q,"aria-valuenow":oe??void 0,"aria-valuetext":Ce,autoComplete:e,autoFocus:l,hasSteppers:void 0!==_&&_>0,isDisabled:d,isReadonly:E,isRequired:x,isRequiredShown:x&&("compact"===j||void 0===(0,i.treatNull)(J)),label:m,labelEdge:v,labelStartWidth:g,stepperVariant:R,onSpin:_?Ve:void 0,onSpinComplete:_?he:void 0,onStep:_?ye:void 0,placeholder:M,prefix:p,suffix:f,isStepDownDisabled:d||te&&(void 0!==oe&&oe<=q||""===X&&0===q),isStepUpDisabled:d||ae&&(void 0!==oe&&oe>=H||""===X&&0===H),textAlign:N,userAssistanceDensity:j,virtualKeyboard:F,...me}}}}));var __decorate=this&&this.__decorate||function(e,t,a,n){var r,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,n);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(i=(s<3?r(i):s>3?r(t,a,i):r(t,a))||i);return s>3&&i&&Object.defineProperty(t,a,i),i};define("oj-c/input-number/input-number",["require","exports","preact/jsx-runtime","@oracle/oraclejet-preact/translationBundle","@oracle/oraclejet-preact/hooks/UNSAFE_useAccessibleContext","@oracle/oraclejet-preact/hooks/UNSAFE_useFormContext","@oracle/oraclejet-preact/hooks/UNSAFE_useFormVariantContext","@oracle/oraclejet-preact/hooks/UNSAFE_useTabbableMode","@oracle/oraclejet-preact/UNSAFE_NumberInputText","oj-c/editable-value/UNSAFE_useAssistiveText/useAssistiveText","ojs/ojcontext","ojs/ojvcomponent","ojs/ojvcomponent-binding","preact","preact/compat","preact/hooks","./useNumberInputTextPreact","@oracle/oraclejet-preact/utils/UNSAFE_styles/Layout","css!oj-c/input-number/input-number-styles.css"],(function(require,e,t,a,n,r,s,i,o,l,u,d,c,p,f,v,m,g){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.InputNumber=void 0;const b=(0,f.forwardRef)(((e,a)=>{const{busyContextRef:n,converter:r,displayOptions:i,help:u,helpHints:d,validators:c}=e,p=(0,v.useRef)(),f=(0,v.useCallback)((t=>n.current?.addBusyState({description:`oj-c-input-number id=${e.id} is ${t}`})),[]),{inputNumberProps:g,methods:b}=(0,m.useNumberInputTextPreact)(e,f);(0,v.useImperativeHandle)(a,(()=>({blur:()=>p.current?.blur(),focus:()=>p.current?.focus(),...b})),[b]);const y=(0,l.useAssistiveText)({converter:r,displayOptions:i,help:u,helpHints:d,userAssistanceDensity:g.userAssistanceDensity,validators:c}),V=(0,s.useFormVariantContext)();return(0,t.jsx)(o.NumberInputText,{ref:p,...y,...g,variant:V})}));let y=class extends p.Component{constructor(){super(...arguments),this.busyContextRef=(0,p.createRef)(),this.inputNumberRef=(0,p.createRef)(),this.rootRef=(0,p.createRef)()}componentDidMount(){this.busyContextRef.current=u.getContext(this.rootRef.current).getBusyContext()}render({columnSpan:e,...a}){const s={isFormLayout:void 0!==a.containerReadonly,isReadonly:a.containerReadonly,labelWrapping:a.labelWrapping};if(void 0!==a.step&&a.step<0)throw new Error("step must be a positive number");if(null!=a.min&&null!=a.max&&a.max<a.min)throw new Error("max cannot be less than min");const i={UNSAFE_ariaLabelledBy:a.unsafe_labelledBy};return(0,t.jsx)(d.Root,{id:a.id,ref:this.rootRef,class:e?g.layoutSpanStyles.layoutSpanColumn[e]:"",children:(0,t.jsx)(r.FormContext.Provider,{value:s,children:(0,t.jsx)(n.AccessibleContext.Provider,{value:i,children:(0,t.jsx)(b,{busyContextRef:this.busyContextRef,ref:this.inputNumberRef,...a})})})})}componentWillUnmount(){this.busyContextRef.current=null}reset(){this.inputNumberRef.current?.reset()}showMessages(){this.inputNumberRef.current?.showMessages()}validate(){return this.inputNumberRef.current?.validate()}blur(){this.inputNumberRef.current?.blur()}focus(){this.inputNumberRef.current?.focus()}};e.InputNumber=y,y.defaultProps={autocomplete:"on",columnSpan:1,converter:null,disabled:!1,displayOptions:{converterHint:"display",messages:"display",validatorHint:"display"},help:{instruction:""},helpHints:{definition:"",source:"",sourceText:void 0},messagesCustom:[],readonly:!1,required:!1,userAssistanceDensity:"reflow",validators:[],value:null,virtualKeyboard:"auto",stepperVariant:"directional"},y._metadata={properties:{autocomplete:{type:"string"},columnSpan:{type:"number"},containerReadonly:{type:"boolean",binding:{consume:{name:"containerReadonly"}}},converter:{type:"object|null"},disabled:{type:"boolean"},displayOptions:{type:"object",properties:{converterHint:{type:"string",enumValues:["none","display"]},messages:{type:"string",enumValues:["none","display"]},validatorHint:{type:"string",enumValues:["none","display"]}}},help:{type:"object",properties:{instruction:{type:"string"}}},helpHints:{type:"object",properties:{definition:{type:"string"},source:{type:"string"},sourceText:{type:"string"}}},inputPrefix:{type:"string"},inputSuffix:{type:"string"},labelEdge:{type:"string",enumValues:["none","start","top","inside"],binding:{consume:{name:"containerLabelEdge"}}},labelHint:{type:"string"},labelStartWidth:{type:"number|string",binding:{consume:{name:"labelWidth"}}},labelWrapping:{type:"string",enumValues:["truncate","wrap"],binding:{consume:{name:"labelWrapping"}}},max:{type:"number|null"},min:{type:"number|null"},messagesCustom:{type:"Array<object>",writeback:!0},numberRangeExactMessageDetail:{type:"string"},numberRangeOverflowMessageDetail:{type:"string"},numberRangeUnderflowMessageDetail:{type:"string"},placeholder:{type:"string"},readonly:{type:"boolean",binding:{consume:{name:"containerReadonly"}}},required:{type:"boolean"},requiredMessageDetail:{type:"string"},step:{type:"number"},stepperVariant:{type:"string",enumValues:["directional","quantitative"]},textAlign:{type:"string",enumValues:["end","start","right"]},unsafe_labelledBy:{type:"string"},userAssistanceDensity:{type:"string",enumValues:["compact","reflow","efficient"],binding:{consume:{name:"containerUserAssistanceDensity"}}},validators:{type:"Array<object>|null"},value:{type:"number|null",writeback:!0},virtualKeyboard:{type:"string",enumValues:["number","auto","text"]},rawValue:{type:"string",readOnly:!0,writeback:!0},transientValue:{type:"number",readOnly:!0,writeback:!0},valid:{type:"string",enumValues:["pending","valid","invalidHidden","invalidShown"],readOnly:!0,writeback:!0}},extension:{_WRITEBACK_PROPS:["messagesCustom","rawValue","transientValue","valid","value"],_READ_ONLY_PROPS:["rawValue","transientValue","valid"],_OBSERVED_GLOBAL_PROPS:["aria-describedby","id","autofocus"]},methods:{reset:{},showMessages:{},validate:{},blur:{},focus:{}}},y._translationBundleMap={"@oracle/oraclejet-preact":a.default},y._consumedContexts=[s.FormVariantContext,i.TabbableModeContext],e.InputNumber=y=__decorate([(0,d.customElement)("oj-c-input-number")],y)}));
//# sourceMappingURL=input-number.js.map