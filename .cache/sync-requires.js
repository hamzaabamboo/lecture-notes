// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": preferDefault(require("/builds/hamzaabamboo/2nd-year-lecture-notes/lecture-notes/node_modules/gatsby-plugin-offline/app-shell.js")),
  "component---src-templates-blog-post-js": preferDefault(require("/builds/hamzaabamboo/2nd-year-lecture-notes/lecture-notes/src/templates/blog-post.js")),
  "component---src-templates-subject-list-js": preferDefault(require("/builds/hamzaabamboo/2nd-year-lecture-notes/lecture-notes/src/templates/subject-list.js")),
  "component---src-pages-index-js": preferDefault(require("/builds/hamzaabamboo/2nd-year-lecture-notes/lecture-notes/src/pages/index.js"))
}

