module.exports = {
  siteMetadata: {
    title: `Boleh Nggak __ ?`,
    description: `Yuk cari tau hal yang boleh atau nggak boleh dilakuin selama masa 
Pembatasan Sosial Berskala Besar (PSBB).`,
    author: `@gatsbyjs`,
  },
  plugins: [
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
        background_color: `#fffff`,
        theme_color: `#242424`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
        tailwind: true,
        ignore: ["form.css"],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
