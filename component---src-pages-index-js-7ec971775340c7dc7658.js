(self.webpackChunktechfeelo=self.webpackChunktechfeelo||[]).push([[678],{7945:function(e,t,n){"use strict";var r=n(9804);t.ZP=r.default,r.useMedia,r.useMediaLayout},9804:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7294),o=n(131);t.mockMediaQueryList={media:"",matches:!1,onchange:o.noop,addListener:o.noop,removeListener:o.noop,addEventListener:o.noop,removeEventListener:o.noop,dispatchEvent:function(e){return!0}};var l=function(e){return function(n,l){void 0===l&&(l=!1);var i=r.useState(l),a=i[0],u=i[1],c=o.queryObjectToString(n);return e((function(){var e=!0,n="undefined"==typeof window?t.mockMediaQueryList:window.matchMedia(c),r=function(){e&&u(Boolean(n.matches))};return n.addListener(r),u(n.matches),function(){e=!1,n.removeListener(r)}}),[c]),a}};t.useMedia=l(r.useEffect),t.useMediaLayout=l(r.useLayoutEffect),t.default=t.useMedia},3132:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.replace(/[A-Z]/g,(function(e){return"-"+e.toLowerCase()})).toLowerCase()}},131:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3132);t.camelToHyphen=r.default;var o=n(2213);t.queryObjectToString=o.default;var l=n(8327);t.noop=l.default},8327:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){}},2213:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3132);t.default=function(e){return"string"==typeof e?e:Object.entries(e).map((function(e){var t=e[0],n=e[1],o=r.default(t),l=n;return"boolean"==typeof l?l?o:"not "+o:("number"==typeof l&&/[height|width]$/.test(o)&&(l+="px"),"("+o+": "+l+")")})).join(" and ")}},4597:function(e,t,n){"use strict";n.r(t);var r=n(3552),o=n(7294),l=n(2739),i=n(4251),a=n(5313),u=n(7945),c=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){return o.createElement("dev",null,o.createElement("div",{style:{textAlign:"center",margin:"6rem"}},o.createElement("h1",{style:{fontSize:"3.5rem",fontWeight:"100%"}},"Just Do It!"),o.createElement("h2",{style:{fontSize:"1.5rem"}},"手を動かせ。")))},t}(o.Component);function s(e){return o.createElement("div",{style:{textAlign:"center",margin:"2rem"}},o.createElement("iframe",{width:e.setWidth,height:e.setHeight,"object-fit":"contain",src:"https://www.youtube.com/embed/ZXsQAXx_ao0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}var d=function(){var e=(0,u.ZP)({minWidth:"960px"});return o.createElement("div",null,e?o.createElement(s,{setWidth:"560px",setHeight:"315px"}):o.createElement(s,{setWidth:"320px",setHeight:"180px"}))};t.default=function(e){var t,n=e.data,r=e.location,u=(null===(t=n.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",s=n.allMarkdownRemark.nodes;return 0===s.length?o.createElement(l.Z,{location:r,title:u},o.createElement(i.Z,{title:"Home"}),o.createElement(c,null),o.createElement(d,null),o.createElement("h2",null,"お知らせ"),o.createElement("p",null,"投稿が存在しません。",o.createElement("br",null),"There are no posts.")):o.createElement(l.Z,{location:r,title:u},o.createElement(i.Z,{title:"Home"}),o.createElement(c,null),o.createElement(d,null),o.createElement("h2",null,o.createElement(a.Link,{to:"/info",style:{color:"#333333",textDecoration:"none"}},"お知らせ")),o.createElement("ol",{style:{listStyle:"none"}},s.map((function(e){var t=e.frontmatter.title||e.fields.slug;return o.createElement("li",{key:e.fields.slug},o.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},o.createElement("p",null,e.frontmatter.date," ",o.createElement(a.Link,{to:"/info"+e.fields.slug,itemProp:"url",style:{color:"steelblue"}},o.createElement("span",{itemProp:"headline"},t)))))}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-7ec971775340c7dc7658.js.map