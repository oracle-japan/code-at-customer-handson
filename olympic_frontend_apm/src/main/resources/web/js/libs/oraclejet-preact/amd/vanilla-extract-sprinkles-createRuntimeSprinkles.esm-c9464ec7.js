define(['exports'], (function(r){"use strict";function e(r){var e=function(r,e){if("object"!=typeof r||null===r)return r;var t=r[Symbol.toPrimitive];if(void 0!==t){var n=t.call(r,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(r)}(r,"string");return"symbol"==typeof e?e:String(e)}function t(r,t,n){return(t=e(t))in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}function n(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function i(r){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){t(r,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(i,e))}))}return r}var o=r=>r;r.createSprinkles=function(){return(r=>function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var o=Object.assign({},...t.map((r=>r.styles))),a=Object.keys(o),u=a.filter((r=>"mappings"in o[r]));return Object.assign((e=>{var t=[],n={},a=i({},e),f=!1;for(var s of u){var c=e[s];if(null!=c){var l=o[s];for(var p of(f=!0,l.mappings))n[p]=c,null==a[p]&&delete a[p]}}var v=f?i(i({},n),a):e,b=function(){var r=v[y],e=o[y];try{if(e.mappings)return"continue";if("string"==typeof r||"number"==typeof r)t.push(e.values[r].defaultClass);else if(Array.isArray(r))for(var n=0;n<r.length;n++){var i=r[n];if(null!=i){var a=e.responsiveArray[n];t.push(e.values[i].conditions[a])}}else for(var u in r){var f=r[u];null!=f&&t.push(e.values[f].conditions[u])}}catch(r){throw r}};for(var y in v)b();return r(t.join(" "))}),{properties:new Set(a)})})(o)(...arguments)}}));
//# sourceMappingURL=vanilla-extract-sprinkles-createRuntimeSprinkles.esm-c9464ec7.js.map
