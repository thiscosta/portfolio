module.exports = {
    siteMetadata: {
        title: `thiscosta`,
        description: `Desenvolvedor de software.`,
        author: `@thiscosta`,
        siteUrl: `https://thiscosta.com`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
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
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/avatar/avatar.png`,
            },
        },
        "@chakra-ui/gatsby-plugin",
        {
            resolve: `gatsby-plugin-s3`,
            options: {
                bucketName: "thiscosta",
            },
        },
    ],
}