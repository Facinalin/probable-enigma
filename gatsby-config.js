/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      // The unique name for each instance
      name: `projects`,
      // Path to the directory
      path: `${__dirname}/src/projects/`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images/`,
    },
  }
],
  siteMetadata: {
    title:'React.js',
    description:'用Gatsby結合React做出美輪美奐的個人網站！',
    copyright: 'This website is created by Facina Lin.',
    contact: 'lovemistborn13@gmail.com'
  }
}
