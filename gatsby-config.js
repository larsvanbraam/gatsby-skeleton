module.exports = {
  siteMetadata: {
    title: 'Gatsby Skeleton',
    description: 'A gatsby skeleton',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-skeleton',
        short_name: 'skeleton',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [require('autoprefixer')],
        data: '@import "src/styles/util.scss";',
        includePaths: ['src'],
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-typescript',
  ],
};
