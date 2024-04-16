define(['exports', 'preact/jsx-runtime', './useUser-8e4e5333', 'preact/hooks', './mergeProps-7be264ec', './classNames-62eaa01c', './utils-df645ad2', './circleUtils-4ed3fb99', './UNSAFE_MeterCircle/themes/MeterCircleStyles.css', './meterUtils-97bc9103', './UNSAFE_MeterCircle/themes/MeterCircleContract.css', './Common/themes/themeContract.css', './utils-577611d8', './useMeterDatatip-a673bf76', './useKeyboardEvents-3a6808ca', './TabbableModeContext-1b650f6f', './useTabbableMode-1db1b771', './useComponentTheme-78f86a2f', './UNSAFE_MeterCircle/themes/redwood/MeterCircleTheme', './useTestId-b28a9bba', './CircularMeter-af6d2ee2'], (function(e,t,n,r,s,i,a,l,o,c,u,d,h,f,m,g,C,x,p,R,b){"use strict";function $({color:e,angle:n,radius:r,length:s,section:c="full"}){const u=l.getCenterCoord(c),d=`calc(${100*u.y}% - ((${Math.sin(2*n*Math.PI/360)} * ${r})))`,h=`calc(${100*u.x}%  + ((${Math.cos(2*n*Math.PI/360)} * ${r})))`;return t.jsx("div",{class:i.classNames([o.styles.referenceBaseLineStyle,e?void 0:o.styles.referenceBorderStyle]),style:{left:h,top:d,width:`calc(${s})`,transform:`translate(0, -1px) rotate(${360-n}deg)`,backgroundColor:e?a.getDvtThresholdColor(e):void 0}})}function M(e,t){if(!e)return{width:0,height:0,innerRadius:0,outerRadius:0};const n=e.children[0],r=n.getBoundingClientRect();return{width:Math.round(r.width),height:Math.round(r.height),...y(n,r,t)}}function y(e,t,n){const r=e.clientWidth,s=e.clientHeight;return"bottom"===n||"top"===n?{outerRadius:t.width/2,innerRadius:s}:"left"===n||"right"===n?{outerRadius:t.height/2,innerRadius:r}:{innerRadius:r/2,outerRadius:t.width/2}}function S(e,t,n,r){return e*r/(n-t)}function v(e,t,n,r,s,i){return r+(i?1:-1)*S(e-t,t,n,s)}function P(e){return e?u.meterCircleVars.sizes[e]:u.meterCircleVars.size}function z(e){return e?u.meterCircleVars.trackSizes[e]:u.meterCircleVars.trackSize}function I(e,t){return null!=t?`(${P(e)} * ${t/2})`:`(${P(e)} * 0.5 - ${z(e)})`}function T(e,t){return null!=t?`(${P(e)} * ${1-t} / 2)`:z(e)}function w(e,t){return`${T(e,t)} +  ${h.xUnits(2)}`}function A(e,t,n,r,s){const{min:i,max:o,startAngle:c,angleExtent:u,size:d,section:h,isRtl:f,innerRadius:m}=e,g=`calc(${T(d,s)})`,C=[],x=t.filter((e=>e.max>i&&e.max<=o)).sort(((e,t)=>e.max-t.max)),p=x.length;for(let e=0;e<p;e++){const t=x[e],s=0===e?i:x[e-1].max,d=0===e?t.max:t.max-x[e-1].max;let R=v(s,i,o,c,u,f),b=S(d,i,o,u);const{startOffset:$,extentOffset:M}=k(m,u,0===e,t.max===o,f),y=l.getClipPath(R+$,b+M,f,h);if(C.push({clipPath:y,color:a.getDvtThresholdColor(t.color),size:g,section:h}),e===p-1&&t.max<o&&n){R+=(f?1:-1)*b,b=S(o-t.max,i,o,u);const{startOffset:e,extentOffset:n}=k(m,u,!1,!0,f);C.push({clipPath:l.getClipPath(R+e,b+n,f,h),color:r,size:g,section:h})}}return C}function E(e,t,n){const{min:r,max:s,startAngle:i,angleExtent:a,size:l,isRtl:o}=e;return{radius:I(l,n),length:w(l,n),angle:v(t.value,r,s,i,a,o),color:t.color}}function N(e,t,n,r,s,i){const{startAngle:a,angleExtent:o,size:c,section:u,isRtl:h}=e;return{section:u,color:t?"all"===n&&i?`${d.colorSchemeVars.dvt.contrastLine}`:r:"transparent",clipPath:l.getClipPath(a,o,h,u),size:`calc(${T(c,s)})`}}function j(e,t,n){const{value:r,min:s,max:i,startAngle:a,angleExtent:o,size:c,section:u,isRtl:d}=e,h=(r-s)*o/(i-s),f=Math.min(Math.max(0,t),1),m="left"===u||"right"===u,g="top"===u||"bottom"===u,C=`calc(${T(c,n)} * ${f})`,x=`${P(c)} - ((1 - ${f}) * ${T(c,n)})`,p=`(${x}) / 2`;return{section:u,width:m?`calc(${p})`:`calc(${x})`,height:g?`calc(${p})`:`calc(${x})`,size:C,clipPath:l.getClipPath(a,h,d,u)}}function k(e,t,n,r,s){if(!e)return{startOffset:0,extentOffset:0};const i=360/(2*Math.PI*e);let a=i/2*(s?1:-1),l=-1*i;return n&&t<360&&(a=0,l=-.5*i),r&&t<360&&(l=-.5*i),{startOffset:a,extentOffset:l}}e.MeterCircle=function({max:e=100,min:a=0,value:o=0,step:u=1,size:d,startAngle:h=90,angleExtent:g=360,isTrackRendered:y=!0,thresholdDisplay:S="all",indicatorSize:v=1,testId:P,...z}){const I=R.useTestId(P);c.validateRange(a,e,o,u);const T=r.useRef(),{direction:w}=n.useUser(),k="rtl"===w,B=l.getCircleSection(h,g,k),q=r.useRef(M(null,B)),O=r.useRef(null),[U,V]=r.useState(!1);r.useEffect((()=>{(z.onCommit||z.onInput||z.children)&&(q.current=M(O.current,B),V(!0))}),[d,B,z.onCommit,z.onInput,z.children]);const D=r.useRef(!1),F=f.usePointerEvents(o,(t=>{const n=O.current;if(t.target==n)return function(e,t,n,r,s,i,a,o,c){const u=s.current;if(!u)return;const d=l.getCenterCoord(o),{angle:h}=l.convertToPolar(u.width*d.x,u.height*d.y,e.offsetX,e.offsetY),f=l.getPositiveAngle(h);let m;if(c&&i+a>f&&(m=l.getPositiveAngle(h-i)/a*(n-t)),!c){const e=l.getPositiveAngle(i-f);e<=a&&(m=e*(n-t)/a)}return null!=m&&(m=Math.round(m/r)*r),m}(t,a,e,u,q,h,g,B,k)}),O,T,D,z.onCommit,z.onInput),L=m.useKeyboardEvents(o,a,e,u,T,z.onCommit,z.onInput),{datatipContent:W,datatipProps:_}=f.useMeterDatatip(o,D,z.datatip,z["aria-describedby"]),H=c.getMeterAriaProps(o,a,e,z["aria-label"],z["aria-labelledby"],z.thresholds),K=s.mergeProps(F,L,_,H),{trackColor:X,indicatorColor:Y}=c.getTrackAndIndicatorColor(o,S,z.trackColor,z.indicatorColor,z.thresholds),G="bottom"===B||"top"===B?"Horizontal":"left"===B||"right"===B?"Vertical":"Full",J={min:a,max:e,value:o,startAngle:h,angleExtent:g,size:d,section:B,isRtl:k,innerRadius:q.current.innerRadius},Q=z.onCommit||z.onInput,{classes:Z,styles:ee}=x.useComponentTheme(p.MeterCircleRedwoodTheme,{size:d,interaction:Q?"isInteractive":void 0}),{isTabbable:te}=C.useTabbableMode(),ne=function(e,t){const n=e.current;if(!n)return;const r=l.getCenterCoord(t),s=r.x*n.width,i=r.y*n.height;let a,o,c,u,d,h,f,m;return"top"===t||"bottom"===t||"full"===t?(f=2*n.innerRadius,m="full"===t?2*n.innerRadius:n.innerRadius,d=s-n.innerRadius,h="bottom"===t?0:i-n.innerRadius,c=Math.sqrt(2)*n.innerRadius,u="full"===t?c:n.innerRadius/Math.sqrt(2),a=s-n.innerRadius/Math.sqrt(2),o="bottom"===t?0:i-n.innerRadius/Math.sqrt(2)):(m=2*n.innerRadius,f=n.innerRadius,d="left"===t?s-n.innerRadius:0,h=i-n.innerRadius,u=Math.sqrt(2)*n.innerRadius,c=n.innerRadius/Math.sqrt(2),a="left"===t?s-n.innerRadius/Math.sqrt(2):0,o=i-n.innerRadius/Math.sqrt(2)),{outerBounds:{x:d,y:h,width:f,height:m},innerBounds:{x:a,y:o,width:c,height:u}}}(q,B);return t.jsxs(t.Fragment,{children:[t.jsx("div",{class:i.classNames([Z]),tabIndex:te?0:-1,...I,...K,children:t.jsxs(b.CircleWrapper,{wrapperRef:O,class:i.classNames([ee.circleWrapperBaseStyle,z.referenceLines&&z.referenceLines.length>0?d&&ee[`${d}${B}Style`]:"",ee[`meterCircle${G}SizeStyle`]]),children:[t.jsx(b.CircleInner,{class:i.classNames([ee.circleTrackBaseStyle,ee[`${B}Style`]]),...N(J,y,S,X,z.innerRadius,z.thresholds)}),"all"===S&&z.thresholds&&A(J,z.thresholds,y,X,z.innerRadius).map((e=>t.jsx(b.CircleInner,{class:i.classNames([ee.circleTrackBaseStyle,ee[`${B}Style`]]),...e}))),t.jsx(b.CircleInner,{color:Y,class:i.classNames([ee.circleValueBaseStyle,ee[`circleValue${B}Style`],ee[`${B}Style`]]),...j(J,v,z.innerRadius)}),z.referenceLines?.map((e=>t.jsx($,{...E(J,e,z.innerRadius),section:B}))),U&&z.children&&ne&&t.jsx("div",{class:i.classNames([ee.meterCircleCenterContent]),children:z.children(ne)})]})}),W]})}}));
//# sourceMappingURL=MeterCircle-e29b2eff.js.map
