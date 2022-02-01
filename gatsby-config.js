require("dotenv").config()

module.exports = {
  siteMetadata: {
    siteTitle: "Plotter Paper Direct",
    siteTitleDefault: "Plotter Paper Direct",
    siteUrl: "https://www.plotterpaperdirect.com/",
    hrefLang: "en",
    siteDescription:
      "Plotter Paper Direct",
    siteImage: "/default-og-image.jpg",
    twitter: "@gatsbyjs",
  },
  flags: {
    FAST_DEV: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        password: process.env.SHOPIFY_SHOP_PASSWORD,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
        shopifyConnections: ["collections"],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-gatsby-cloud",
    // Add your Google Analytics ID to the .env file to enable
    // Otherwise, this plugin can be removed
   
  ].filter(Boolean),
}
