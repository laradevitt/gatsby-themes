const withDefaults = require('./defaults');

module.exports = (themeOptions) => {
  const options = withDefaults(themeOptions);
  const {
    analytics,
    canonicalurls,
    preconnect,
    robotstxt,
    xmlsitemap,
  } = options;

  const plugins = [
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
      resolve: 'gatsby-plugin-sitemap',
      options: xmlsitemap,
    },
    {
      resolve: 'gatsby-plugin-preconnect',
      options: preconnect,
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: robotstxt,
    },
  ];

  if (analytics.trackingIds.length > 0) {
    plugins.push(
      {
        resolve: 'gatsby-plugin-google-gtag',
        options: analytics,
      },
    );
  }

  if (canonicalurls.siteUrl !== undefined) {
    plugins.push(
      {
        resolve: 'gatsby-plugin-canonical-urls',
        options: canonicalurls,
      },
    );
  }

  return {
    siteMetadata: {},
    trailingSlash: 'always',
    plugins,
  };
};
