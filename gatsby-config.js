module.exports = {
  siteMetadata: {
    title: `weather-app`,
    description: `A simple application for viewing local weather`,
    author: `Kent Richards`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /icons/
        }
      }
    }
  ]
}
