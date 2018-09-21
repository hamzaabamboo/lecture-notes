// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": () => import("/builds/hamzaabamboo/2nd-year-lecture-notes/lecture-notes/node_modules/gatsby-plugin-offline/app-shell.js" /* webpackChunkName: "component---node-modules-gatsby-plugin-offline-app-shell-js" */),
  "component---src-templates-blog-post-js": () => import("/builds/hamzaabamboo/2nd-year-lecture-notes/lecture-notes/src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---src-templates-subject-list-js": () => import("/builds/hamzaabamboo/2nd-year-lecture-notes/lecture-notes/src/templates/subject-list.js" /* webpackChunkName: "component---src-templates-subject-list-js" */),
  "component---src-pages-index-js": () => import("/builds/hamzaabamboo/2nd-year-lecture-notes/lecture-notes/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import("/builds/hamzaabamboo/2nd-year-lecture-notes/lecture-notes/.cache/data.json")

