define(['exports', 'preact/hooks'], (function(e,r){"use strict";e.useTimer=function({isStarted:e,delay:t=0}){const u=r.useRef(null),[n,c]=r.useState(!1);return r.useEffect((()=>(e?u.current||(u.current=setTimeout((()=>{c(!0)}),t)):(u.current&&(clearTimeout(u.current),u.current=null),c(!1)),()=>{u.current&&(clearTimeout(u.current),u.current=null)})),[e,t]),n}}));
//# sourceMappingURL=useTimer-a1538e08.js.map
