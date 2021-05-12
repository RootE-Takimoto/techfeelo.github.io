(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[682,862],{8266:function(r,t,e){"use strict";e.d(t,{Z:function(){return R}});var o=e(7329),n=e(2122),p=(e(5697),e(4131));var a=function(r){var t=function(t){var e=r(t);return t.css?(0,n.Z)({},(0,p.Z)(e,r((0,n.Z)({theme:t.theme},t.css))),function(r,t){var e={};return Object.keys(r).forEach((function(o){-1===t.indexOf(o)&&(e[o]=r[o])})),e}(t.css,[r.filterProps])):e};return t.propTypes={},t.filterProps=["css"].concat((0,o.Z)(r.filterProps)),t};var i=function(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];var o=function(r){return t.reduce((function(t,e){var o=e(r);return o?(0,p.Z)(t,o):t}),{})};return o.propTypes={},o.filterProps=t.reduce((function(r,t){return r.concat(t.filterProps)}),[]),o},l=e(6156),s=e(3592);function c(r,t){return t&&"string"==typeof t?t.split(".").reduce((function(r,t){return r&&r[t]?r[t]:null}),r):null}var u=function(r){var t=r.prop,e=r.cssProperty,o=void 0===e?r.prop:e,n=r.themeKey,p=r.transform,a=function(r){if(null==r[t])return null;var e=r[t],a=c(r.theme,n)||{};return(0,s.k)(r,e,(function(r){var t;return"function"==typeof a?t=a(r):Array.isArray(a)?t=a[r]||r:(t=c(a,r)||r,p&&(t=p(t))),!1===o?t:(0,l.Z)({},o,t)}))};return a.propTypes={},a.filterProps=[t],a};function f(r){return"number"!=typeof r?r:"".concat(r,"px solid")}var h=i(u({prop:"border",themeKey:"borders",transform:f}),u({prop:"borderTop",themeKey:"borders",transform:f}),u({prop:"borderRight",themeKey:"borders",transform:f}),u({prop:"borderBottom",themeKey:"borders",transform:f}),u({prop:"borderLeft",themeKey:"borders",transform:f}),u({prop:"borderColor",themeKey:"palette"}),u({prop:"borderRadius",themeKey:"shape"})),m=i(u({prop:"displayPrint",cssProperty:!1,transform:function(r){return{"@media print":{display:r}}}}),u({prop:"display"}),u({prop:"overflow"}),u({prop:"textOverflow"}),u({prop:"visibility"}),u({prop:"whiteSpace"})),d=i(u({prop:"flexBasis"}),u({prop:"flexDirection"}),u({prop:"flexWrap"}),u({prop:"justifyContent"}),u({prop:"alignItems"}),u({prop:"alignContent"}),u({prop:"order"}),u({prop:"flex"}),u({prop:"flexGrow"}),u({prop:"flexShrink"}),u({prop:"alignSelf"}),u({prop:"justifyItems"}),u({prop:"justifySelf"})),y=i(u({prop:"gridGap"}),u({prop:"gridColumnGap"}),u({prop:"gridRowGap"}),u({prop:"gridColumn"}),u({prop:"gridRow"}),u({prop:"gridAutoFlow"}),u({prop:"gridAutoColumns"}),u({prop:"gridAutoRows"}),u({prop:"gridTemplateColumns"}),u({prop:"gridTemplateRows"}),u({prop:"gridTemplateAreas"}),u({prop:"gridArea"})),g=i(u({prop:"position"}),u({prop:"zIndex",themeKey:"zIndex"}),u({prop:"top"}),u({prop:"right"}),u({prop:"bottom"}),u({prop:"left"})),v=i(u({prop:"color",themeKey:"palette"}),u({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),b=u({prop:"boxShadow",themeKey:"shadows"});function Z(r){return r<=1?"".concat(100*r,"%"):r}var x=u({prop:"width",transform:Z}),w=u({prop:"maxWidth",transform:Z}),E=u({prop:"minWidth",transform:Z}),k=u({prop:"height",transform:Z}),K=u({prop:"maxHeight",transform:Z}),A=u({prop:"minHeight",transform:Z}),C=(u({prop:"size",cssProperty:"width",transform:Z}),u({prop:"size",cssProperty:"height",transform:Z}),i(x,w,E,k,K,A,u({prop:"boxSizing"}))),P=i(u({prop:"fontFamily",themeKey:"typography"}),u({prop:"fontSize",themeKey:"typography"}),u({prop:"fontStyle",themeKey:"typography"}),u({prop:"fontWeight",themeKey:"typography"}),u({prop:"letterSpacing"}),u({prop:"lineHeight"}),u({prop:"textAlign"})),S=e(5408),B=e(2112),T=e(4982),W=function(r){var t=(0,B.Z)(r);return function(r,e){return t(r,(0,n.Z)({defaultTheme:T.Z},e))}},N=a(i(h,m,d,y,g,v,b,C,S.Z,P)),R=W("div")(N,{name:"MuiBox"})},5420:function(r,t,e){"use strict";var o=e(2122),n=e(1253),p=e(7294),a=e(5505),i=e(8063),l=e(4621),s=p.forwardRef((function(r,t){var e=r.classes,l=r.className,s=r.raised,c=void 0!==s&&s,u=(0,n.Z)(r,["classes","className","raised"]);return p.createElement(i.Z,(0,o.Z)({className:(0,a.Z)(e.root,l),elevation:c?8:1,ref:t},u))}));t.Z=(0,l.Z)({root:{overflow:"hidden"}},{name:"MuiCard"})(s)},7644:function(r,t,e){"use strict";var o=e(2122),n=e(1253),p=e(7294),a=e(5505),i=e(4621),l=p.forwardRef((function(r,t){var e=r.classes,i=r.className,l=r.component,s=void 0===l?"div":l,c=(0,n.Z)(r,["classes","className","component"]);return p.createElement(s,(0,o.Z)({className:(0,a.Z)(e.root,i),ref:t},c))}));t.Z=(0,i.Z)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(l)},453:function(r,t,e){"use strict";var o=e(2122),n=e(1253),p=e(7294),a=e(5505),i=e(4621),l=e(1664),s={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},c=p.forwardRef((function(r,t){var e=r.align,i=void 0===e?"inherit":e,c=r.classes,u=r.className,f=r.color,h=void 0===f?"initial":f,m=r.component,d=r.display,y=void 0===d?"initial":d,g=r.gutterBottom,v=void 0!==g&&g,b=r.noWrap,Z=void 0!==b&&b,x=r.paragraph,w=void 0!==x&&x,E=r.variant,k=void 0===E?"body1":E,K=r.variantMapping,A=void 0===K?s:K,C=(0,n.Z)(r,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),P=m||(w?"p":A[k]||s[k])||"span";return p.createElement(P,(0,o.Z)({className:(0,a.Z)(c.root,u,"inherit"!==k&&c[k],"initial"!==h&&c["color".concat((0,l.Z)(h))],Z&&c.noWrap,v&&c.gutterBottom,w&&c.paragraph,"inherit"!==i&&c["align".concat((0,l.Z)(i))],"initial"!==y&&c["display".concat((0,l.Z)(y))]),ref:t},C))}));t.Z=(0,i.Z)((function(r){return{root:{margin:0},body2:r.typography.body2,body1:r.typography.body1,caption:r.typography.caption,button:r.typography.button,h1:r.typography.h1,h2:r.typography.h2,h3:r.typography.h3,h4:r.typography.h4,h5:r.typography.h5,h6:r.typography.h6,subtitle1:r.typography.subtitle1,subtitle2:r.typography.subtitle2,overline:r.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:r.palette.primary.main},colorSecondary:{color:r.palette.secondary.main},colorTextPrimary:{color:r.palette.text.primary},colorTextSecondary:{color:r.palette.text.secondary},colorError:{color:r.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(c)},3135:function(r,t,e){"use strict";e.r(t);var o=e(7294),n=(e(5313),e(6639)),p=e(4251),a=e(8266),i=e(4920);t.default=function(){return o.createElement(n.Z,null,o.createElement(p.Z,{title:"About"}),o.createElement("h1",null,"techfeelo とは"),o.createElement(a.Z,{style:{width:"100%",display:"flex",frexDirection:"row",flexWrap:"wrap"}},o.createElement(i.default,{title:"法人概要",explanation:"設立趣旨や沿革をご紹介いたします。",link:"/about/overview"}),o.createElement(i.default,{title:"理事挨拶",explanation:"一般社団法人techfeelo代表理事、Harukaからご挨拶です。",link:"/about/greeting"}),o.createElement(i.default,{title:"役員紹介",explanation:"一般社団法人techfeeloの役員をご紹介いたします。",link:"/about/officers"})))}},4920:function(r,t,e){"use strict";e.r(t),e.d(t,{default:function(){return c}});var o=e(7294),n=e(920),p=e(5420),a=e(7644),i=e(3332),l=e(453),s=(0,n.Z)({root:{minWidth:250,maxWidth:275,margin:10},media:{paddingTop:"100%"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}});function c(r){var t=s();return o.createElement(p.Z,{className:t.root},o.createElement(a.Z,null,o.createElement(l.Z,{variant:"h5",component:"h2"},o.createElement(i.Z,{href:r.link},r.title)),o.createElement(l.Z,{variant:"body2",component:"p"},r.explanation)))}}}]);
//# sourceMappingURL=component---src-pages-about-js-491e14885cef637f4c50.js.map