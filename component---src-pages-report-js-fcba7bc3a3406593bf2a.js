(self.webpackChunktechfeelo=self.webpackChunktechfeelo||[]).push([[507],{3828:function(e,t,l){"use strict";l.r(t);var n=l(7294),r=l(5313),a=l(6639),i=l(4251);t.default=function(e){var t,l=e.data,o=e.location,c=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",s=l.allMarkdownRemark.nodes;return 0===s.length?n.createElement(a.Z,{location:o,title:c},n.createElement(i.Z,{title:"All posts"}),n.createElement("p",null,"投稿が存在しません。",n.createElement("br",null),"There are no posts.")):n.createElement(a.Z,{location:o,title:c},n.createElement(i.Z,{title:"All posts"}),n.createElement("ol",{style:{listStyle:"none"}},s.map((function(e){var t=e.frontmatter.title||e.fields.slug;return n.createElement("li",{key:e.fields.slug},n.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("header",null,n.createElement("h2",null,n.createElement(r.Link,{to:"/report"+e.fields.slug,itemProp:"url",style:{color:"steelblue"}},n.createElement("span",{itemProp:"headline"},t))),n.createElement("small",null,e.frontmatter.date)),n.createElement("section",null,n.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}}}]);
//# sourceMappingURL=component---src-pages-report-js-fcba7bc3a3406593bf2a.js.map