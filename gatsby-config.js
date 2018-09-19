module.exports = {
  pathPrefix: "/lecture-notes",
  siteMetadata: {
    title: "Ham's Lecture notes",
    author: "Tanyawat Vittayapalotai"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/notes`,
        name: "notes"
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {
                py: "python"
              }
            }
          },
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-katex",
          "gatsby-remark-smartypants",
          "gatsby-remark-autolink-headers"
        ]
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-sass"
  ]
};
