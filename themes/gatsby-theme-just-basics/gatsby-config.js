const merge = require('deepmerge');
const themeDefaults = require('./extra/options-default');

module.exports = (themeOptions) => {
  const { menuLinks, analytics, xmlsitemap, robotstxt } = merge(
    themeDefaults,
    themeOptions
  );

  // If we don't define this property we get a WebpackError if there are no
  // options set for the plugin.
  if (typeof analytics.trackingIds === 'undefined' || !analytics.trackingIds) {
    analytics.trackingIds = [];
  }

  const plugins = [
    'gatsby-plugin-react-helmet',
    'gatsby-image', // Will be deprecated!
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/gatsby-config.js`,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: analytics,
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: xmlsitemap,
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: robotstxt,
    },
  ];

  return {
    siteMetadata: { menuLinks: menuLinks },
    plugins,
  };
};
