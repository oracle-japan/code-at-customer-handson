define(['exports', './_curry1-cb27040e'], (function(e,f){"use strict";var a=f._curry1((function(e){return null==e}));const r=e=>3===e.length&&e.every((e=>!isNaN(e)&&!a(e)&&e>=0&&e<=255)),d=e=>{const[f,a,d,t]=e;return r([f,a,d])&&t>=0&&t<=1},t=e=>{const[f,a,r,t=1]=e.replace(/\s|rgb\(|rgba\(|\)/g,"").split(",").map((e=>parseFloat(e))),n=[f,a,r,t];return d(n)?n:void 0},n=e=>{const f=4===e.length?(([e,f,a,r])=>e+f+f+a+a+r+r)(e):e,[a,r,t,n]=(f.slice(1).match(/.{1,2}/g)??[])?.map((e=>parseInt(e,16))),l=void 0===n?[a,r,t,1]:[a,r,t,Math.round(n/255*100)/100];return d(l)?l:void 0},l=e=>{const f=b(e)??e;return f.startsWith("#")?n(f):t(f)};function o(e,f){const a=e+.05,r=f+.05;return a>r?a/r:r/a}const i=e=>{const f=e=>{const f=e/255;return f<.03928?f/12.92:Math.pow((f+.055)/1.055,2.4)},a=l(e)?.slice(0,3)??[];return r(a)?.2126*f(a[0])+.7152*f(a[1])+.0722*f(a[2]):void 0},c={aliceblue:"#f0f8ff",antiquewhite:"#faEbd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffE4c4",black:"#000000",blanchedalmond:"#ffEbcd",blue:"#0000ff",blueviolet:"#8a2bE2",brown:"#a52a2a",burlywood:"#dEb887",cadetblue:"#5f9Ea0",chartreuse:"#7fff00",chocolate:"#d2691E",coral:"#ff7f50",cornflowerblue:"#6495Ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#E9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00cEd1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1E90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0E68c",lavender:"#E6E6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8E6",lightcoral:"#f08080",lightcyan:"#E0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90EE90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cEfa",lightslategray:"#778899",lightsteelblue:"#b0c4dE",lightyellow:"#ffffE0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0E6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68EE",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffE4E1",moccasin:"#ffE4b5",navajowhite:"#ffdEad",navy:"#000080",oldlace:"#fdf5E6",olive:"#808000",olivedrab:"#6b8E23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#EEE8aa",palegreen:"#98fb98",paleturquoise:"#afEEEE",palevioletred:"#db7093",papayawhip:"#ffEfd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0E0E6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169E1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2E8b57",seashell:"#fff5EE",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87cEEb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40E0d0",violet:"#EE82EE",wheat:"#f5dEb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32",transparent:"rgba(255,255,255,0)"},b=e=>c[e.trim().toLowerCase()];e.getContrast=o,e.getContrastingTextColor=(e,f="#fff",a="#000")=>{const r=i(e)??1;return o(r,1)>o(r,0)?f:a},e.getLuminance=i,e.getNamedColor=b,e.hexToRGBA=n,e.isNil=a,e.isRGB=r,e.isRGBA=d,e.parseToRGBA=l,e.rgb=e=>{const f=Array.isArray(e)?e.join(","):e.trim().replace(/\s/g,"");return f.startsWith("rgb(")?f:`rgb(${f})`},e.rgbaToHex=e=>{const f="#"+e.filter((e=>void 0!==e)).map(((e,f)=>(f<3?e:Math.round(255*e)).toString(16).padStart(2,"0"))).join("");return 9===f.length&&f.endsWith("ff")?f.substring(0,7):f},e.toRGBA=t}));
//# sourceMappingURL=colorUtils-8c677a79.js.map
