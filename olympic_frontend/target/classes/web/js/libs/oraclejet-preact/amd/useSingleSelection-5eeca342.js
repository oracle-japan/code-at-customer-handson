define(['exports', 'preact/hooks'], (function(e,t){"use strict";const n=e=>{"Enter"===e.key&&e.preventDefault()},o=(e,t,n,o)=>{const c=t(e.target);o&&c&&n!==c&&(o({value:c}),"click"===e.type&&e.stopPropagation())};e.useSingleSelection=function(e,c,s){const l=t.useCallback((t=>{o(t,e,c,s)}),[e,c,s]),r=t.useCallback((t=>{"Enter"===t.key&&o(t,e,c,s)}),[e,c,s]);return{selectionProps:s?{onClick:l,onKeyDown:n,onKeyUp:r}:{}}}}));
//# sourceMappingURL=useSingleSelection-5eeca342.js.map
