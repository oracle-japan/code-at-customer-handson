define(['exports', '../../../utils-577611d8', '../themeContract.css', '../../../colorUtils-8c677a79', '../../../_curry1-cb27040e'], (function(e,r,a,l,t){"use strict";const o={palette:{neutral:{0:"0,0,0",10:"10,10,10",20:"15,15,15",30:"22,22,22",40:"33,33,33",50:"46,46,46",60:"63,63,63",70:"73,73,73",80:"85,85,85",90:"101,101,101",100:"118,118,118",110:"129,129,129",120:"139,139,139",130:"151,151,151",140:"164,164,164",150:"178,178,178",160:"195,195,195",170:"207,207,207",180:"228,228,228",190:"238,238,238",200:"254,254,254"},danger:{10:"20,5,3",20:"32,9,6",30:"44,12,8",40:"64,17,11",50:"89,24,16",60:"119,33,21",70:"137,38,24",80:"159,44,28",90:"188,52,33",100:"218,60,38",110:"232,74,52",120:"242,88,67",130:"253,103,82",140:"255,127,109",150:"255,150,136",160:"255,176,165",170:"255,193,185",180:"255,220,216",190:"255,234,232"},success:{10:"7,11,3",20:"11,18,5",30:"15,24,6",40:"23,37,10",50:"32,52,14",60:"44,70,19",70:"51,82,22",80:"59,95,26",90:"71,113,31",100:"82,131,36",110:"90,144,41",120:"99,155,48",130:"110,167,57",140:"121,181,66",150:"134,196,76",160:"158,212,107",170:"179,221,139",180:"211,236,185",190:"228,244,210"},warning:{10:"13,7,1",20:"25,15,2",30:"32,18,2",40:"49,28,4",50:"69,39,5",60:"94,54,7",70:"109,63,8",80:"127,73,9",90:"151,86,11",100:"175,100,12",110:"192,109,14",120:"207,118,15",130:"224,128,16",140:"233,144,42",150:"239,163,75",160:"243,185,118",170:"246,200,148",180:"250,224,194",190:"252,236,219"},info:{10:"1,12,15",20:"2,17,23",30:"3,25,32",40:"4,36,48",50:"5,51,67",60:"7,69,91",70:"5,80,106",80:"2,93,125",90:"8,110,146",100:"38,127,159",110:"58,139,169",120:"74,149,176",130:"93,161,185",140:"115,173,195",150:"136,186,205",160:"163,202,217",170:"182,213,226",180:"212,231,239",190:"229,241,247"},brand:{10:"0,10,16",20:"0,18,29",30:"0,23,37",40:"1,36,57",50:"1,49,80",60:"1,66,108",70:"1,77,125",80:"1,89,145",90:"2,106,171",100:"2,123,199",110:"28,136,205",120:"49,147,209",130:"72,159,214",140:"97,172,220",150:"124,186,226",160:"154,202,233",170:"175,213,237",180:"210,231,245",190:"228,241,249"}},overlay:{hover:r.rgba(a.colorSchemeVars.palette.neutral[200],.08),active:r.rgba(a.colorSchemeVars.palette.neutral[200],.12),dangerHover:r.rgba(a.colorSchemeVars.palette.danger[60],.32),dangerActive:r.rgba(a.colorSchemeVars.palette.danger[60],.4),scrim:r.rgba(a.colorSchemeVars.palette.neutral[200],.4),inverseHover:r.rgba(a.colorSchemeVars.palette.neutral[20],.08),inverseActive:r.rgba(a.colorSchemeVars.palette.neutral[20],.16)},pageBackground:{neutral0:r.rgb(a.colorSchemeVars.palette.neutral[10]),neutral10:r.rgb(a.colorSchemeVars.palette.neutral[20]),neutral20:r.rgb(a.colorSchemeVars.palette.neutral[30]),neutral30:r.rgb(a.colorSchemeVars.palette.neutral[40]),neutral40:r.rgb(a.colorSchemeVars.palette.neutral[50])},surface:{neutral0:r.rgb(a.colorSchemeVars.palette.neutral[10]),neutral10:r.rgb(a.colorSchemeVars.palette.neutral[20]),neutral20:r.rgb(a.colorSchemeVars.palette.neutral[30]),neutral30:r.rgb(a.colorSchemeVars.palette.neutral[40]),selected:r.rgb(a.colorSchemeVars.palette.brand[70]),disabled:r.rgba(a.colorSchemeVars.palette.neutral[200],.04),popup:r.rgb(a.colorSchemeVars.palette.neutral[50]),neutral:{low:r.rgb(a.colorSchemeVars.palette.neutral[40]),subtle:r.rgba(a.colorSchemeVars.palette.neutral[200],.16),strong:r.rgb(a.colorSchemeVars.palette.neutral[100])},success:{low:r.rgb(a.colorSchemeVars.palette.success[40]),subtle:r.rgba(a.colorSchemeVars.palette.success[70],.6),strong:r.rgb(a.colorSchemeVars.palette.success[100])},info:{low:r.rgb(a.colorSchemeVars.palette.info[40]),subtle:r.rgba(a.colorSchemeVars.palette.info[70],.6),strong:r.rgb(a.colorSchemeVars.palette.info[100])},warning:{low:r.rgb(a.colorSchemeVars.palette.warning[40]),subtle:r.rgba(a.colorSchemeVars.palette.warning[70],.6),strong:r.rgb(a.colorSchemeVars.palette.warning[100])},danger:{low:r.rgb(a.colorSchemeVars.palette.danger[40]),subtle:r.rgba(a.colorSchemeVars.palette.danger[70],.6),strong:r.rgb(a.colorSchemeVars.palette.danger[100])}},border:{enabled:r.rgba(a.colorSchemeVars.palette.neutral[200],.5),disabled:r.rgba(a.colorSchemeVars.palette.neutral[200],.2),divider:r.rgba(a.colorSchemeVars.palette.neutral[200],.12),selected:r.rgb(a.colorSchemeVars.palette.brand[170]),dropLine:r.rgb(a.colorSchemeVars.palette.brand[170]),selectedNeutral:r.rgb(a.colorSchemeVars.palette.neutral[200]),warning:r.rgb(a.colorSchemeVars.palette.warning[110]),danger:r.rgb(a.colorSchemeVars.palette.danger[110]),keyboardFocus:r.rgb(a.colorSchemeVars.palette.neutral[200])},boxshadow:{shadowcolor:a.colorSchemeVars.palette.neutral[0]},textIcon:{primary:r.rgb(a.colorSchemeVars.palette.neutral[200]),secondary:r.rgba(a.colorSchemeVars.palette.neutral[200],.7),disabled:r.rgba(a.colorSchemeVars.palette.neutral[200],.4),inverse:r.rgb(a.colorSchemeVars.palette.neutral[10]),link:r.rgb(a.colorSchemeVars.palette.brand[170]),success:r.rgb(a.colorSchemeVars.palette.success[120]),info:r.rgb(a.colorSchemeVars.palette.info[120]),warning:r.rgb(a.colorSchemeVars.palette.warning[120]),danger:r.rgb(a.colorSchemeVars.palette.danger[120]),successLow:r.rgb(a.colorSchemeVars.palette.success[100]),infoLow:r.rgb(a.colorSchemeVars.palette.info[100]),warningLow:r.rgb(a.colorSchemeVars.palette.warning[100]),dangerLow:r.rgb(a.colorSchemeVars.palette.danger[100]),onColor:r.rgb(a.colorSchemeVars.palette.neutral[200])},textfield:{surface:{enabled:a.colorSchemeVars.surface.neutral20},border:{enabled:a.colorSchemeVars.border.enabled}},collection:{header:{text:r.rgb(a.colorSchemeVars.textIcon.primary),surface:{selected:r.rgba(a.colorSchemeVars.palette.neutral[200],.12),partialSelected:r.rgba(a.colorSchemeVars.palette.neutral[200],.04)}}},collectionGrid:{cell:{surfaceEdit:r.rgb(a.colorSchemeVars.palette.neutral[0])}},measure:{track:{enabled:r.rgba(a.colorSchemeVars.palette.neutral[200],.16),disabled:r.rgba(a.colorSchemeVars.palette.neutral[200],.16)},fill:{enabled:r.rgb(a.colorSchemeVars.palette.neutral[200]),disabled:r.rgba(a.colorSchemeVars.palette.neutral[200],.3)},thumb:{surface:r.fallbackVar(a.globalVars.currentBackgroundColor,a.colorSchemeVars.palette.neutral[0])},reference:{line:r.rgba(a.colorSchemeVars.palette.neutral[200],.8),lineContrast:r.rgba(a.colorSchemeVars.palette.neutral[20],.7),area:r.rgba(a.colorSchemeVars.palette.neutral[200],.08)}},dvt:{contrastLine:r.rgb(a.colorSchemeVars.palette.neutral[20]),paletteQualitative:{1:"36, 93, 99",2:"222, 127, 17",3:"95, 185, 181",4:"78, 65, 55",5:"160, 201, 140",6:"180, 114, 130",7:"131, 64, 30",8:"158, 127, 204",9:"251, 194, 106",10:"88, 49, 110",11:"95, 162, 186",12:"49, 122, 69"},threshold:{success:r.rgb(a.colorSchemeVars.palette.success[100]),warning:"rgb(207, 124, 0)",danger:r.rgb(a.colorSchemeVars.palette.danger[100])},marquee:{border:r.rgba(a.colorSchemeVars.palette.neutral[190],.8),surface:r.rgba(a.colorSchemeVars.palette.neutral[20],.1)},referenceObject:{area:r.rgba(a.colorSchemeVars.palette.neutral[170],.08),line:r.rgba(a.colorSchemeVars.palette.neutral[190],.8)},overview:{background:r.rgb(a.colorSchemeVars.palette.neutral[50]),windowBackground:r.rgb(a.colorSchemeVars.palette.neutral[0]),windowBorder:r.rgb(a.colorSchemeVars.palette.neutral[170])}}};e.colorScheme=o,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=theme.dark.tokens.js.map
