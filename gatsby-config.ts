require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const path = require("path")

const gatsbyRequiredRules = path.join(process.cwd(), "node_modules", "gatsby", "dist", "utils", "eslint-rules")

module.exports = {
  siteMetadata: {
    title: `Developer Yongsik Yun!`,
    siteUrl: `https://comnori.co.kr`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GA_ID],
        pluginConfig: {
          head: true,
          respectDNT: true,
          exclude: [],
          delayOnRouteUpdate: 0,
        },
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
}
