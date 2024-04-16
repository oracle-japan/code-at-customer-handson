var __decorate=this&&this.__decorate||function(e,t,o,n){var r,s=arguments.length,a=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(s<3?r(a):s>3?r(t,o,a):r(t,o))||a);return s>3&&a&&Object.defineProperty(t,o,a),a};define("oj-c/button/button",["require","exports","preact/jsx-runtime","@oracle/oraclejet-preact/translationBundle","@oracle/oraclejet-preact/UNSAFE_Button","@oracle/oraclejet-preact/UNSAFE_IconButton","@oracle/oraclejet-preact/hooks/UNSAFE_useTabbableMode","preact","preact/hooks","preact/compat","@oracle/oraclejet-preact/hooks/UNSAFE_useTooltip","ojs/ojvcomponent-binding","ojs/ojvcomponent","css!oj-c/button/button-styles.css"],(function(require,e,t,o,n,r,s,a,l,i,c,u,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Button=void 0;const b=(0,i.forwardRef)(((e,o)=>{const r=(0,l.useRef)();return(0,l.useImperativeHandle)(o,(()=>({focus:()=>r.current?.focus(),blur:()=>r.current?.blur()})),[]),(0,t.jsx)(n.Button,{ref:r,...e})})),p=(0,i.forwardRef)(((e,o)=>{const n=(0,l.useRef)();return(0,l.useImperativeHandle)(o,(()=>({focus:()=>n.current?.focus(),blur:()=>n.current?.blur()})),[]),(0,t.jsx)(r.IconButton,{ref:n,...e})}));let f=class extends a.Component{constructor(){super(...arguments),this.buttonRef=(0,a.createRef)()}render(e){const o={width:"bottom"===e.edge?"100%":e.width},{chroming:n,disabled:r,onOjAction:s,"aria-label":a,"aria-describedby":l,width:i,display:u,label:f,...y}={...e},{tooltipContent:m,tooltipProps:h}=(0,c.useTooltip)({text:e.tooltip,isDisabled:r});if("icons"!=e.display||e.startIcon&&e.endIcon&&"icons"==e.display||!e.startIcon&&!e.endIcon&&"icons"==e.display){const i=()=>(0,t.jsx)(b,{ref:this.buttonRef,type:"submit",variant:n,isDisabled:r,width:"100%",onAction:s,"aria-label":a,"aria-describedby":l,startIcon:e.startIcon,endIcon:e.endIcon,size:e.size,label:"icons"==e.display&&(e.startIcon||e.endIcon)?"":e.label,display:"icons"!=e.display?e.display:"all",...h,...y});return e.width||"none"!==e.edge?(0,t.jsxs)(d.Root,{style:o,children:[i(),m]}):(0,t.jsxs)(d.Root,{children:[i(),m]})}return(0,t.jsx)(p,{ref:this.buttonRef,type:"submit",variant:n,isDisabled:r,tooltip:e.tooltip&&""!==e.tooltip?e.tooltip:e.label,onAction:s,"aria-label":a&&""!==a?a:e.label,"aria-describedby":l,size:e.size,...y,children:e.startIcon??e.endIcon})}blur(){this.buttonRef.current?.blur()}focus(){this.buttonRef.current?.focus()}};e.Button=f,f.defaultProps={chroming:"outlined",disabled:!1,size:"md",display:"all",endIcon:null,startIcon:null,edge:"none",tooltip:""},f._metadata={properties:{label:{type:"string"},tooltip:{type:"string"},disabled:{type:"boolean"},width:{type:"number|string"},display:{type:"string",enumValues:["all","label","icons"]},size:{type:"string",enumValues:["sm","md","lg"]},edge:{type:"string",enumValues:["none","bottom"]},chroming:{type:"string",enumValues:["solid","ghost","borderless","outlined","callToAction","danger"],binding:{consume:{name:"containerChroming"}}}},slots:{startIcon:{},endIcon:{}},events:{ojAction:{bubbles:!0}},extension:{_OBSERVED_GLOBAL_PROPS:["aria-describedby","aria-label"]},methods:{blur:{},focus:{}}},f._translationBundleMap={"@oracle/oraclejet-preact":o.default},f._consumedContexts=[s.TabbableModeContext],e.Button=f=__decorate([(0,d.customElement)("oj-c-button")],f)}));
//# sourceMappingURL=button.js.map