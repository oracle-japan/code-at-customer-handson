define(['exports'], (function(n){"use strict";const t=/^\s*|\s*$/g;function e(n){if(null===n)return!0;const t=i(n);return!t?.hasOwnProperty("length")||0===t.length}function r(n){return null!==n&&("string"==typeof n||n instanceof String)}function i(n){return r(n)?n.replace(t,""):n}n.getVarName=n=>{const t=n.match(/^var\((.*)\)$/);return t?t[1]:n},n.hashCode=function(n){let t=0;if(0===n.length)return t;for(let e=0;e<n.length;e++){t=(t<<5)-t+n.charCodeAt(e),t&=t}return t},n.isEmpty=e,n.isEmptyOrUndefined=function(n){return!(void 0!==n&&!e(n))},n.isString=r,n.kebabCase=n=>n.replace(/(?!^)([A-Z\u00C0-\u00D6])/g,(n=>"-"+n.toLowerCase())),n.merge=function(n,t=" "){return n.filter(Boolean).join(t)||void 0},n.trim=i}));
//# sourceMappingURL=stringUtils-aa6f579b.js.map
