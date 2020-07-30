const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/abdelhakimbendjabeur/personal/website/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/abdelhakimbendjabeur/personal/website/src/pages/404.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/abdelhakimbendjabeur/personal/website/src/pages/contact.js"))),
  "component---src-pages-experience-js": hot(preferDefault(require("/Users/abdelhakimbendjabeur/personal/website/src/pages/experience.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/abdelhakimbendjabeur/personal/website/src/pages/index.js"))),
  "component---src-pages-photography-js": hot(preferDefault(require("/Users/abdelhakimbendjabeur/personal/website/src/pages/photography.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Users/abdelhakimbendjabeur/personal/website/src/pages/projects.js"))),
  "component---src-pages-recommendation-js": hot(preferDefault(require("/Users/abdelhakimbendjabeur/personal/website/src/pages/recommendation.js")))
}

