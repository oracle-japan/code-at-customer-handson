define(['require', 'exports', 'preact/jsx-runtime', '@testing-library/preact', 'chai', '../../LineAreaChart-e4464d27', '../../mockUseTextDimensionsDependencies-47672996', '../../matchTranslationBundle-701a2ee1', '../../TopLayerHost-ed31c70d', '../../EnvironmentProvider-f56c5ac9', '@testing-library/user-event', '../../layoutUtils-a2537680', '../../scale-fdf490f9', '../../labelUtils-da85a002', '../../textUtils-13c9056b', '../../accUtils-8478d1b2', '../../clientHints-7294b5ec', '../../getLocale-90e9ce9a', '../../PathUtils-d2f4443a', '../../Common/themes/themeContract.css', '../../utils-577611d8', '../../colorUtils-8c677a79', '../../_curry1-cb27040e', '../../Marker-ef97a3af', 'css!./../../SvgShapesStyles.styles.css', '../../useTranslationBundle-1a7cf79b', 'preact/hooks', 'preact/compat', '../../navUtils-a48e6198', '../../Chart-aba7440b', '../../useTextDimensions-74ea064f', '../../useCssVars-a7656bc3', '../../useUser-8e4e5333', '../../useTheme-4ba18360', '../../useColorScheme-5ae81aad', '../../useScale-00e3ccb5', '../../cssUtils-c5935582', '../../UNSAFE_Chart/themes/ChartStyles.css', 'css!./../../ChartStyles.styles.css', '../../Gridlines-a3eec467', '../../UNSAFE_PlotArea/themes/PlotAreaStyles.css', 'css!./../../PlotAreaStyles.styles.css', '../../classNames-62eaa01c', '../../useId-37951d4d', '../../Axis-e3ebb9ee', '../../UNSAFE_Axis/themes/AxisStyles.css', 'css!./../../AxisStyles.styles.css', '../../UNSAFE_Axis/themes/redwood/AxisTheme', '../../UNSAFE_Axis/themes/redwood/AxisBaseTheme.css', 'module', '../../UNSAFE_Axis/themes/redwood/AxisVariants.css', '../../vanilla-extract-recipes-createRuntimeFn.esm-5dce05de', '../../useComponentTheme-78f86a2f', '../../logger-b63acb49', '../../TrackResizeContainer-8d8e1913', '../../useSize-251da8d5', '../../useResizeObserver-5de04057', '../../useChartViewport-4e3f9713', '../../useChartNav-293b9a9e', '../../LegendUtils-c62376ea', '../../eventsUtils-94448680', '../../mergeProps-7be264ec', '../../useSelectDrill-d240d5b5', '../../useChartDataCursor-7becb11f', '../../hooks/UNSAFE_useChartDataCursor/themes/DataCursorStyles.css', 'css!./../../DataCursorStyles.styles.css', '../../useChartDatatip-020b63ad', '../../useDatatip-89c35952', '../../Layer-f4b2cc70', '../../useThemeInterpolations-b8a02c6d', '../../theme-9fc8c760', '../../Theme-2c9e73ca', '../../mergeInterpolations-73b24f1a', '../../_curry3-bdba4a6e', '../../_curry2-5a2b49e1', '../../_isObject-2ffb2ca1', '../../Floating-7b312a86', '../../useFloating-6f4af09f', '../../positionUtils-32c24780', '../../refUtils-8d8a4660', '../../useOutsideClick-87736051', '../../arrayUtils-37736aa8', '../../UNSAFE_Floating/themes/redwood/FloatingTheme', '../../UNSAFE_Floating/themes/FloatingStyles.css', 'css!./../../FloatingStyles.styles.css', '../../UNSAFE_Floating/themes/redwood/FloatingBaseTheme.css', 'module', '../../UNSAFE_Floating/themes/redwood/FloatingVariants.css', '../../vanilla-extract-dynamic.esm-39e415b2', '../../UNSAFE_Floating/themes/FloatingContract.css', '../../hooks/PRIVATE_useDatatip/themes/useDatatip.css', 'css!./../../useDatatip.styles.css', '../../util-f0d4f81c', '../../VisTabularDatatip-4aa8610f', '../../PRIVATE_VisTabularDatatip/themes/VisTabularDatatipStyles.css', 'css!./../../VisTabularDatatipStyles.styles.css', '../../colorUtils-f4fa6bec', '../../useChartDrill-b24740bc', '../../useSelection-93c70c0e', '../../useTestId-b28a9bba', '../../ScrollBar-9d12e083', '../../PRIVATE_ChartScrollBar/themes/ScrollBarStyles.css', 'css!./../../ScrollBarStyles.styles.css', 'preact', '../../Common/themes/redwood/theme', '../../LayerManager-71d52c72'], (function(e,s,t,r,n,a,o,l,u,c,i,d,b,m,f,p,h,w,y,g,x,A,P,S,T,F,v,q,C,U,B,k,E,R,L,j,D,I,_,N,V,G,H,O,z,M,X,W,$,J,K,Q,Y,Z,ee,se,te,re,ne,ae,oe,le,ue,ce,ie,de,be,me,fe,pe,he,we,ye,ge,xe,Ae,Pe,Se,Te,Fe,ve,qe,Ce,Ue,Be,ke,Ee,Re,Le,je,De,Ie,_e,Ne,Ve,Ge,He,Oe,ze,Me,Xe,We,$e,Je,Ke,Qe){"use strict";function Ye(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var Ze=Ye(i);const es=r.queryByAttribute.bind(null,"id");function ss(e){return r.queryAllByAttribute.bind(null,e)}const ts=[{name:"Series 1",id:"Series 1",items:[{id:1,value:2,accessibleLabel:"item one"},{id:2,value:2,accessibleLabel:"item two"}]},{name:"Series 2",id:"Series 2",items:[{id:3,value:3,accessibleLabel:"item three"},{id:4,value:4,accessibleLabel:"item four"}]}],rs={series:ts,width:"400px",groups:[{id:"Group A"},{id:"Group B"}],getDataItem:(e,s)=>ts[e].items[s]},ns=async s=>{const n=l.matchTranslationBundle(["en"],new Set(["en-US","en"])),{default:o}=await function(s){switch(s){case"../../resources/nls/ar/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/ar/bundle"],s,t)}));case"../../resources/nls/ar-XB/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/ar-XB/bundle"],s,t)}));case"../../resources/nls/bg/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/bg/bundle"],s,t)}));case"../../resources/nls/bs/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/bs/bundle"],s,t)}));case"../../resources/nls/bs-Cyrl/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/bs-Cyrl/bundle"],s,t)}));case"../../resources/nls/cs/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/cs/bundle"],s,t)}));case"../../resources/nls/da/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/da/bundle"],s,t)}));case"../../resources/nls/de/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/de/bundle"],s,t)}));case"../../resources/nls/el/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/el/bundle"],s,t)}));case"../../resources/nls/en/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/en/bundle"],s,t)}));case"../../resources/nls/en-XA/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/en-XA/bundle"],s,t)}));case"../../resources/nls/en-XC/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/en-XC/bundle"],s,t)}));case"../../resources/nls/es/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/es/bundle"],s,t)}));case"../../resources/nls/et/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/et/bundle"],s,t)}));case"../../resources/nls/fi/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/fi/bundle"],s,t)}));case"../../resources/nls/fr/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/fr/bundle"],s,t)}));case"../../resources/nls/fr-CA/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/fr-CA/bundle"],s,t)}));case"../../resources/nls/he/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/he/bundle"],s,t)}));case"../../resources/nls/hr/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/hr/bundle"],s,t)}));case"../../resources/nls/hu/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/hu/bundle"],s,t)}));case"../../resources/nls/is/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/is/bundle"],s,t)}));case"../../resources/nls/it/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/it/bundle"],s,t)}));case"../../resources/nls/ja/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/ja/bundle"],s,t)}));case"../../resources/nls/ko/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/ko/bundle"],s,t)}));case"../../resources/nls/lt/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/lt/bundle"],s,t)}));case"../../resources/nls/lv/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/lv/bundle"],s,t)}));case"../../resources/nls/ms/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/ms/bundle"],s,t)}));case"../../resources/nls/nl/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/nl/bundle"],s,t)}));case"../../resources/nls/no/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/no/bundle"],s,t)}));case"../../resources/nls/pl/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/pl/bundle"],s,t)}));case"../../resources/nls/pt/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/pt/bundle"],s,t)}));case"../../resources/nls/pt-PT/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/pt-PT/bundle"],s,t)}));case"../../resources/nls/ro/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/ro/bundle"],s,t)}));case"../../resources/nls/ru/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/ru/bundle"],s,t)}));case"../../resources/nls/sk/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/sk/bundle"],s,t)}));case"../../resources/nls/sl/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/sl/bundle"],s,t)}));case"../../resources/nls/sr/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/sr/bundle"],s,t)}));case"../../resources/nls/sr-Latn/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/sr-Latn/bundle"],s,t)}));case"../../resources/nls/sv/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/sv/bundle"],s,t)}));case"../../resources/nls/th/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/th/bundle"],s,t)}));case"../../resources/nls/tr/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/tr/bundle"],s,t)}));case"../../resources/nls/uk/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/uk/bundle"],s,t)}));case"../../resources/nls/vi/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/vi/bundle"],s,t)}));case"../../resources/nls/zh-Hans/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/zh-Hans/bundle"],s,t)}));case"../../resources/nls/zh-Hant/bundle.ts":return new Promise((function(s,t){e(["../../resources/nls/zh-Hant/bundle"],s,t)}));default:return new Promise((function(e,t){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+s)))}))}}(`../../resources/nls/${n}/bundle.ts`),u={translations:{"@oracle/oraclejet-preact":o}},i={...rs,...s},d=t.jsx(a.LineAreaChart,{...i});return r.render(t.jsx(c.RootEnvironmentProvider,{environment:u,children:d}))};function as(e,s,t){const r=e.getAttribute("aria-activedescendant"),a=es(e,r);n.expect(a).not.null,n.expect(a?.getAttribute("data-oj-series-index")).to.equal(s),n.expect(a?.getAttribute("data-oj-group-index")).to.equal(t)}describe("Test LineAreaChart component",(()=>{beforeEach((()=>{o.setupUseTextDimensionsDependenciesMock(window)})),it("renders chart with correct aria properties",(async function(){const e=(await ns({"aria-labelledby":"chartAriaLabelledBy","aria-label":"chartAriaLabel"})).getByRole("application");n.expect(e).not.null,n.expect(e.getAttribute("aria-labelledby")).to.equal("chartAriaLabelledBy"),n.expect(e.getAttribute("aria-label")).to.equal("chartAriaLabel"),n.expect(e.getAttribute("tabIndex")).to.equal("0")})),it("renders items with correct aria properties",(async function(){const e=(await ns()).getByRole("application");await Ze.default.tab();const s=r.getByLabelText(e,"item one");n.expect(s.getAttribute("data-oj-group-index")).to.equal("0"),n.expect(s.getAttribute("data-oj-series-index")).to.equal("0"),await Ze.default.keyboard("[ARROWRIGHT]");const t=r.getByLabelText(e,"item two");n.expect(t.getAttribute("data-oj-group-index")).to.equal("1"),n.expect(t.getAttribute("data-oj-series-index")).to.equal("0")})),it("navigates to correct items",(async function(){const e=(await ns()).getByRole("application");await Ze.default.tab(),as(e,"0","0"),await Ze.default.keyboard("[ARROWRIGHT]"),as(e,"0","1"),await Ze.default.keyboard("[ARROWUP]"),as(e,"1","1"),await Ze.default.keyboard("[ARROWLEFT]"),as(e,"1","0")})),it("renders the selected items",(async function(){if("undefined"==typeof jest){const e=(await ns({selectionMode:"multiple",selectedIds:[1,2]})).getByRole("application"),s=ss("data-oj-object")(e,"item");n.expect(s.length).to.equal(4);const t=s.filter((e=>"0"===e.getAttribute("data-oj-series-index")));n.expect(t.length).to.equal(2),t.forEach((e=>{const s=getComputedStyle(e);n.expect(s.getPropertyValue("stroke")).to.equal("rgb(92, 86, 81)"),n.expect(s.getPropertyValue("stroke-width")).to.equal("1px"),n.expect(s.getPropertyValue("fill")).to.equal("rgb(255, 255, 255)")}));const r=s.filter((e=>"0"!=e.getAttribute("data-oj-series-index")));n.expect(r.length).to.equal(2),r.forEach((e=>{const s=getComputedStyle(e);n.expect(s.getPropertyValue("stroke")).to.equal("rgba(255, 255, 255, 0)"),n.expect(s.getPropertyValue("stroke-width")).to.equal("1px"),n.expect(s.getPropertyValue("fill")).to.equal("rgba(255, 255, 255, 0)")}))}})),it("does not render the hidden ids",(async function(){const e=(await ns({hiddenIds:[1,2]})).getByRole("application");await Ze.default.tab();const s=ss("data-oj-object")(e,"item");n.expect(s.length).to.equal(2),s.forEach((e=>{n.expect(e.getAttribute("data-oj-series-index")).not.equal("0")}))})),it("triggers the item input on keyboard nav",(async function(){let e,s;ns({onItemInput:({seriesIndex:t,groupIndex:r})=>{e=t,s=r}}),await Ze.default.tab(),r.waitFor((()=>{n.expect(e).to.equal(0),n.expect(s).to.equal(0)})),await Ze.default.keyboard("[ARROWRIGHT]"),r.waitFor((()=>{n.expect(e).to.equal(0),n.expect(s).to.equal(1)})),await Ze.default.tab(),r.waitFor((()=>{n.expect(e).to.equal(void 0),n.expect(s).to.equal(void 0)}))})),it("triggers the proper drill events",(async function(){let e,s;ns({drilling:"on",onItemDrill:t=>{e=t.seriesIndex,s=t.groupIndex},onGroupDrill:t=>{s=t.groupIndex,e=void 0}}),await Ze.default.tab(),await Ze.default.keyboard("[ENTER]"),r.waitFor((()=>{n.expect(e).to.equal(0),n.expect(s).to.equal(0)})),await Ze.default.tab(),await Ze.default.keyboard("[ENTER]"),r.waitFor((()=>{n.expect(null==e).to.be.true,n.expect(s).to.equal(0)}))})),it("triggers datatip on hover",(async function(){if("undefined"==typeof jest){const e=(await ns()).getByRole("application"),s=ss("data-oj-object")(e,"item");await Ze.default.hover(s[0]),r.waitFor((()=>{const e=document.querySelector('[role="tooltip"]');let s=r.getByLabelText(e,"Value"),t=r.getByLabelText(e,"2");n.expect(s).to.be.not.null,n.expect(t).to.be.not.null,s=r.getByLabelText(e,"Series"),t=r.getByLabelText(e,"Series 1"),n.expect(s).to.be.not.null,n.expect(t).to.be.not.null,s=r.getByLabelText(e,"Group"),t=r.getByLabelText(e,"Group A"),n.expect(s).to.be.not.null,n.expect(t).to.be.not.null}))}}))})),s.checkActiveItemGroupSeries=as,Object.defineProperty(s,"__esModule",{value:!0})}));
//# sourceMappingURL=LineChart.spec.js.map
