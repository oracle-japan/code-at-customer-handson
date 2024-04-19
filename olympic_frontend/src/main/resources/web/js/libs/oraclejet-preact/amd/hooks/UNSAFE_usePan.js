define(['exports', 'preact/hooks'], (function(e,t){"use strict";e.usePan=function(e,{threshold:r=50,minimumTime:n=500,isDisabled:s=!1}={threshold:50,minimumTime:500,isDisabled:!1}){const f=t.useRef({pointerDownId:0,startTime:0,prevOffsetX:0,prevOffsetY:0}),o=t.useCallback((t=>{f.current.pointerDownId?c():(f.current={pointerDownId:t.pointerId,startTime:t.timeStamp,prevOffsetX:t.offsetX,prevOffsetY:t.offsetY},e?.({x:t.clientX,y:t.clientY,status:"start"}))}),[]),i=t.useCallback((t=>{if(t.pointerId===f.current.pointerDownId&&f.current.startTime&&t.timeStamp-f.current.startTime>=n){const n=t.offsetX-f.current.prevOffsetX,s=t.offsetY-f.current.prevOffsetY;Math.abs(n)>Math.abs(s)?(f.current.prevOffsetX-t.offsetX>r||t.offsetX-f.current.prevOffsetX>r)&&e?.({x:t.clientX,y:t.clientY,status:"end"}):(f.current.prevOffsetY-t.offsetY>r||t.offsetY-f.current.prevOffsetY>r)&&e?.({x:t.clientX,y:t.clientY,status:"end"})}c()}),[r,e]),c=t.useCallback((()=>{f.current={pointerDownId:null,startTime:null,prevOffsetX:0,prevOffsetY:0}}),[]);return{panProps:s?{}:{onPointerDown:o,onPointerUp:i,onPointerMove:t=>{f.current.pointerDownId===t.pointerId&&e?.({x:t.clientX,y:t.clientY,status:"move"})},onPointerCancel:c}}},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_usePan.js.map
