
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/hirokoito/Documents/techfeelo/techfeelo.github.io/src/pages/404.js")),
  "component---src-pages-about-about-card-js": preferDefault(require("/Users/hirokoito/Documents/techfeelo/techfeelo.github.io/src/pages/about/about-card.js")),
  "component---src-pages-about-greeting-js": preferDefault(require("/Users/hirokoito/Documents/techfeelo/techfeelo.github.io/src/pages/about/greeting.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/hirokoito/Documents/techfeelo/techfeelo.github.io/src/pages/about.js")),
  "component---src-pages-about-officers-js": preferDefault(require("/Users/hirokoito/Documents/techfeelo/techfeelo.github.io/src/pages/about/officers.js")),
  "component---src-pages-about-officers-profile-card-js": preferDefault(require("/Users/hirokoito/Documents/techfeelo/techfeelo.github.io/src/pages/about/officers/profile-card.js")),
  "component---src-pages-about-overview-js": preferDefault(require("/Users/hirokoito/Documents/techfeelo/techfeelo.github.io/src/pages/about/overview.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/hirokoito/Documents/techfeelo/techfeelo.github.io/src/pages/contact.js")),
  "component---src-pages-donation-js": preferDefault(require("/Users/hirokoito/Documents/techfeelo/techfeelo.github.io/src/pages/donation.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/hirokoito/Documents/techfeelo/techfeelo.github.io/src/pages/index.js")),
  "component---src-pages-info-js": preferDefault(require("/Users/hirokoito/Documents/techfeelo/techfeelo.github.io/src/pages/info.js")),
  "component---src-pages-report-js": preferDefault(require("/Users/hirokoito/Documents/techfeelo/techfeelo.github.io/src/pages/report.js")),
  "component---src-templates-blog-post-js": preferDefault(require("/Users/hirokoito/Documents/techfeelo/techfeelo.github.io/src/templates/blog-post.js"))
}

