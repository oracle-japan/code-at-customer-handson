define(['exports', '../../../colorUtils-8c677a79', 'react', '../../../usePropertyValue-923462a9', '../../../head-0aa33441', '../../../curryN-d8c19691', '../../../_curry1-cb27040e', '../../../_arity-bec60410', '../../../_curry2-5a2b49e1', '../../../_arrayReduce-84cc95d7', 'preact/hooks', '../../../_curry3-bdba4a6e', '../../../_isArray-102bbdc1', '../../../_isString-f68a2827'], (function(r,e,t,a,n,c,o,u,i,l,s,y,d,g){"use strict";function b(r,e,t){for(var a=t.next();!a.done;)e=r(e,a.value),a=t.next();return e}function _(r,e,t,a){return t[a](r,e)}var f=n._createReduce(l._arrayReduce,_,b);function p(r){return r}var h=o._curry1(p),R=i._curry2((function(r,e){if(e.length<=0)return h;var t=n.head(e),a=n.tail(e);return u._arity(t.length,(function(){return f((function(e,t){return r.call(this,t,e)}),t.apply(this,arguments),a)}))})),v=R,C=o._curry1((function(r){return!e.isNil(r)}));const x=r=>r.replace(/var\(|\)/g,""),k=r=>/rgb(a?)\(/.test(r)?r:4===r.split(",").length?`rgba(${r})`:`rgb(${r})`,N=a.curry(((r,t)=>n.pipe(x,r,e.getLuminance)(t))),B=c.curryN(2,((r,t)=>C(r)&&C(t)?e.getContrast(r,t).toFixed(2):"NaN")),G=v(((r,e)=>C(e)?r(e):e));r.colorEncodings=["RGB","Hex"],r.tokenFromVar=x,r.useColorUtils=({backgroundColor:r,colorEncoding:c})=>{const[o,u]=a.usePropertyValue(),i=t.useCallback((e=>B(N(u,r),N(u,e))),[r,u]);return{setRef:o,getColor:t.useCallback(n.pipe(x,u,"RGB"===c?k:G([e.parseToRGBA,e.rgbaToHex])),[c,u]),getContrastRatio:i}},Object.defineProperty(r,"__esModule",{value:!0})}));
//# sourceMappingURL=useColorSchemeUtils.js.map
