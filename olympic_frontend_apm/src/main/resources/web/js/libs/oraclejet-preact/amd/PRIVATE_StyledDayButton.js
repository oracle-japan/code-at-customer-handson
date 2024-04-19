define(['exports', 'preact/jsx-runtime', './PRIVATE_StyledDayButton/themes/StyledDayButtonStyles.css', './UNSAFE_BaseButton/themes/BaseButtonStyles.css', './classNames-62eaa01c', 'css!./BaseButtonStyles.styles.css', 'css!./StyledDayButtonStyles.styles.css', './vanilla-extract-recipes-createRuntimeFn.esm-5dce05de'], (function(e,t,s,a,i,l,n,c){"use strict";e.StyledDayButton=({isActivable:e=!1,isAdjacentMonth:l=!1,isDimmed:n=!1,isHoverable:c=!1,isRestricted:d=!1,isSelected:o=!1,isToday:y=!1,label:r})=>{const m=s.multiVariantStyles({active:e?"isActivable":"notActiveable",dimmed:n?"isDimmed":"notDimmed",hover:c?"isHoverable":"notHoverable",adjacentMonth:l?"isAdjacentMonth":"notAdjacentMonth",restricted:d?"isRestricted":"notRestricted",selected:o?"isSelected":"notSelected",today:y?"isToday":"notToday"}),u=i.classNames([a.styles.base,a.styles.sizes.sm,a.styles.styled,m]);return t.jsx("span",{class:u,children:r})},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=PRIVATE_StyledDayButton.js.map
