(self.webpackChunktechfeelo=self.webpackChunktechfeelo||[]).push([[678],{7945:function(e,t,n){"use strict";var r=n(9804);t.ZP=r.default,r.useMedia,r.useMediaLayout},9804:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7294),i=n(131);t.mockMediaQueryList={media:"",matches:!1,onchange:i.noop,addListener:i.noop,removeListener:i.noop,addEventListener:i.noop,removeEventListener:i.noop,dispatchEvent:function(e){return!0}};var o=function(e){return function(n,o){void 0===o&&(o=!1);var l=r.useState(o),a=l[0],c=l[1],u=i.queryObjectToString(n);return e((function(){var e=!0,n="undefined"==typeof window?t.mockMediaQueryList:window.matchMedia(u),r=function(){e&&c(Boolean(n.matches))};return n.addListener(r),c(n.matches),function(){e=!1,n.removeListener(r)}}),[u]),a}};t.useMedia=o(r.useEffect),t.useMediaLayout=o(r.useLayoutEffect),t.default=t.useMedia},3132:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.replace(/[A-Z]/g,(function(e){return"-"+e.toLowerCase()})).toLowerCase()}},131:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3132);t.camelToHyphen=r.default;var i=n(2213);t.queryObjectToString=i.default;var o=n(8327);t.noop=o.default},8327:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){}},2213:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3132);t.default=function(e){return"string"==typeof e?e:Object.entries(e).map((function(e){var t=e[0],n=e[1],i=r.default(t),o=n;return"boolean"==typeof o?o?i:"not "+i:("number"==typeof o&&/[height|width]$/.test(i)&&(o+="px"),"("+i+": "+o+")")})).join(" and ")}},4597:function(e,t,n){"use strict";n.r(t);var r=n(7294),i=n(2739),o=n(4251),l=n(5313),a=n(7945),c=function(){var e=Object.freeze({xs:"(min-width: 360px)",sm:"(min-width: 480px)",md:"(min-width: 680px)",lg:"(min-width: 800px)"}),t={match:[(0,a.ZP)(e.lg),(0,a.ZP)(e.md),(0,a.ZP)(e.xs)],colmuns:[4,3,2]},n=t.match.findIndex((function(e){return e})),i=-1===n?1.5:t.colmuns[n],o=160*i,l=90*i;return r.createElement("div",null,r.createElement("div",{style:{textAlign:"center",margin:"6rem"}},r.createElement("h1",{style:{fontSize:"3.5rem",fontWeight:"100%"}},"Just Do It!"),r.createElement("h2",{style:{fontSize:"1.5rem"}},"手を動かせ。")),i,r.createElement(u,{setWidth:o,setHeight:l}))},u=function(e){return r.createElement("div",{style:{textAlign:"center",marginTop:"2rem",marginBottom:"1rem"}},r.createElement("iframe",{width:e.setWidth,height:e.setHeight,"object-fit":"contain",src:"https://www.youtube.com/embed/ZXsQAXx_ao0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))};t.default=function(e){var t,n=e.data,a=e.location,u=(null===(t=n.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",s=n.allMarkdownRemark.nodes;return 0===s.length?r.createElement(i.Z,{location:a,title:u},r.createElement(o.Z,{title:"Home"}),r.createElement(c,null),r.createElement("h2",null,"お知らせ"),r.createElement("p",null,"投稿が存在しません。",r.createElement("br",null),"There are no posts.")):r.createElement(i.Z,{location:a,title:u},r.createElement(o.Z,{title:"Home"}),r.createElement(c,null),r.createElement("h2",null,r.createElement(l.Link,{to:"/info",style:{color:"#333333",textDecoration:"none"}},"お知らせ")),r.createElement("ol",{style:{listStyle:"none"}},s.map((function(e){var t=e.frontmatter.title||e.fields.slug;return r.createElement("li",{key:e.fields.slug},r.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},r.createElement("p",null,e.frontmatter.date," ",r.createElement(l.Link,{to:"/info"+e.fields.slug,itemProp:"url",style:{color:"steelblue"}},r.createElement("span",{itemProp:"headline"},t)))))}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-d01baf6d5b62299408b3.js.map