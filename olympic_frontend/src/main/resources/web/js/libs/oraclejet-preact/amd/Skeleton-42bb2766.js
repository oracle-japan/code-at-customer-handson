define(['exports', 'preact/jsx-runtime', './classNames-62eaa01c', './dimensions-597d86a6', './mergeInterpolations-73b24f1a', './borders-a590e84a', './useComponentTheme-78f86a2f', './UNSAFE_Skeleton/themes/redwood/SkeletonTheme'], (function(e,s,o,t,n,r,a,i){"use strict";const d=Array.from(["height","width"],(e=>t.dimensionInterpolations[e])),m=Array.from(["borderRadius"],(e=>r.borderInterpolations[e])),l=[...Object.values(m),...Object.values(d)],c=n.mergeInterpolations(l);e.Skeleton=function({...e}){const{classes:t}=a.useComponentTheme(i.SkeletonRedwoodTheme),n=o.classNames([t]),r=c({width:"100%",borderRadius:0,...e});return s.jsx("div",{style:r,class:n})}}));
//# sourceMappingURL=Skeleton-42bb2766.js.map