module.exports = {
  siteMetadata: {
    title: `Boleh Nggak __ ?`,
    description: `Hal yang boleh atau nggak boleh dilakuin saat PSBB COVID-19.`,
    url: `http://bolehnggak.id`,
    secureUrl: `https://bolehnggak.id`,
    canonical: `https://bolehnggak.id/`,
    author: `Arian, Wahyu, dan Lintang`,
    fbAppId: `909503169491208`,
  },
  plugins: [
    {
      resolve: "gatsby-source-google-sheets",
      options: {
        spreadsheetId: "16skDPETqaL8RXGsfhDtWsNLLtOabbE76Tfw_IzmR0Bg",
        worksheetTitle: "CROWDSOURCE",
        credentials:
          process.env.NODE_ENV === "production"
            ? JSON.parse(process.env.GOOGLE_SERVICE_CREDENTIALS)
            : require("./google-service-credential.json"),
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Inter:400,500,600"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: false,
        tailwind: true,
        ignore: ["form.css"],
        whitelist: ["html", "body"],
        whitelistPatternsChildren: [/^token/, /^pre/, /^code/],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Boleh Nggak __ ?`,
        short_name: `bolehnggakid`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#242424`,
        display: `minimal-ui`,
        icon: `src/images/bolehnggak-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
