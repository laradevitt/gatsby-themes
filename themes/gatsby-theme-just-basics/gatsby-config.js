const withDefaults = require('./defaults');

module.exports = (themeOptions) => {
  const options = withDefaults(themeOptions);
  const {
    menuLinks,
    analytics,
    xmlsitemap,
    robotstxt,
    canonicalurls,
  } = options;

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

  if (canonicalurls.siteUrl !== undefined) {
    plugins.push(
      {
        resolve: `gatsby-plugin-canonical-urls`,
        options: canonicalurls,
      },
    );
  }

  return {
    siteMetadata: { menuLinks: menuLinks },
    plugins,
  };
};
