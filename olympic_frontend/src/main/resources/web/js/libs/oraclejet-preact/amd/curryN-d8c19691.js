define(['exports', './_arity-bec60410', './_curry1-cb27040e', './_curry2-5a2b49e1'], (function(r,t,e,n){"use strict";function c(r,n,u){return function(){for(var a=[],i=0,l=r,y=0,_=!1;y<n.length||i<arguments.length;){var h;y<n.length&&(!e._isPlaceholder(n[y])||i>=arguments.length)?h=n[y]:(h=arguments[i],i+=1),a[y]=h,e._isPlaceholder(h)?_=!0:l-=1,y+=1}return!_&&l<=0?u.apply(this,a):t._arity(Math.max(0,l),c(r,a,u))}}var u=n._curry2((function(r,n){return 1===r?e._curry1(n):t._arity(r,c(r,[],n))}));r.curryN=u}));
//# sourceMappingURL=curryN-d8c19691.js.map
