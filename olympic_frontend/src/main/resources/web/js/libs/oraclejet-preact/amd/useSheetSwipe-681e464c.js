define(['exports', 'preact/hooks'], (function(e,r){"use strict";e.useSheetSwipe=function(e,{threshold:t=10,maximumTime:n=300,tolerance:o=50,isDisabled:a=!1}={threshold:10,maximumTime:300,tolerance:50,isDisabled:!1}){const c=r.useRef({pointerDownId:0,startTime:null,prevpageX:0,prevpageY:0,elementScrollTop:0}),p=r.useCallback((()=>{c.current={pointerDownId:null,startTime:0,prevpageX:0,prevpageY:0,elementScrollTop:0}}),[]),i=r.useCallback((e=>{const r=e.changedTouches[0];c.current.pointerDownId?p():c.current={pointerDownId:r.identifier,startTime:e.timeStamp,prevpageX:r.pageX,prevpageY:r.pageY,elementScrollTop:e.currentTarget.scrollTop}}),[p]),l=r.useCallback((r=>{const a=r.changedTouches[0];a.identifier===c.current.pointerDownId&&c.current.startTime&&r.timeStamp-c.current.startTime<n&&a.pageY-c.current.prevpageY>t&&Math.abs(a.pageX-c.current.prevpageX)<=o&&0===c.current.elementScrollTop&&e?.({direction:"down"}),p()}),[t,e,p,n,o]);return{swipeProps:a?{}:{onTouchStart:i,onTouchEnd:l,ontouchcancel:p}}}}));
//# sourceMappingURL=useSheetSwipe-681e464c.js.map