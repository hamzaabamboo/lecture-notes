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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ham's lecture notes`,
        short_name: `Ham's Notes`,
        start_url: `/lecture-notes/`,
        background_color: `#9C27B0`,
        theme_color: `#9C27B0`,
        display: `standalone`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-autolink-headers",
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
          "gatsby-remark-smartypants"
        ]
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-sass"
  ]
};
