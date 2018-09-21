var plugins = [{
      plugin: require('/builds/hamzaabamboo/2nd-year-lecture-notes/lecture-notes/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Ham's lecture notes","short_name":"Ham's Notes","start_url":"/lecture-notes/","background_color":"#9C27B0","theme_color":"#9C27B0","display":"standalone"},
    },{
      plugin: require('/builds/hamzaabamboo/2nd-year-lecture-notes/lecture-notes/node_modules/gatsby-remark-autolink-headers/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/builds/hamzaabamboo/2nd-year-lecture-notes/lecture-notes/node_modules/gatsby-plugin-layout/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/builds/hamzaabamboo/2nd-year-lecture-notes/lecture-notes/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/builds/hamzaabamboo/2nd-year-lecture-notes/lecture-notes/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
