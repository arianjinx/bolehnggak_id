module.exports = {
  siteMetadata: {
    title: `Boleh Nggak __ ?`,
    description: `Yuk cari tau hal-hal yang kamu boleh atau nggak boleh lakukan selama PSBB di Jakarta!`,
    author: `Arian, Wahyu, Lintang, Rara, dan Aswin`,
    url: `https://bolehnggak.id`,
    secureUrl: `https://bolehnggak.id`,
    canonical: `https://bolehnggak.id/`,
    fbAppId: `909503169491208`,
    ogImageWidth: "1200",
    ogImageHeight: "630",
    twitterSite: "@bolehnggak_id",
    twitterCreator: "@arianjinx",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/translations`,
        languages: [`id`],
        defaultLanguage: `id`,
        redirect: false,
      },
    },
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
        short_name: `bolehnggak_id`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#242424`,
        display: `minimal-ui`,
        icon: `src/images/bolehnggak_id-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: false,
        tailwind: true,
        ignore: ["src/components/SelectBox/SelectBox.css"],
        whitelistPatternsChildren: [/^token/, /^pre/, /^code/],
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Inter:400,500,600"],
        },
      },
    },
  ],
}
