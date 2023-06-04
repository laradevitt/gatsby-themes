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

  if (typeof canonicalurls.siteUrl !== 'undefined') {
    plugins.push(
      {
        resolve: 'gatsby-plugin-canonical-urls',
        options: canonicalurls,
      },
    );
  }

  if (typeof xmlsitemap.disable === 'undefined' || xmlsitemap.disable === false) {
    // Not an official plugin property so let's remove it.
    if (typeof xmlsitemap.disable !== 'undefined') {
      delete xmlsitemap.disable;
    }
    plugins.push(
      {
        resolve: 'gatsby-plugin-sitemap',
        options: xmlsitemap,
      },
    );
  }

  return {
    siteMetadata: {},
    trailingSlash: 'always',
    plugins,
  };
};
