// Pattern/idea from https://github.com/gatsbyjs/themes/blob/master/packages/gatsby-theme-blog-core/utils/default-options.js
module.exports = (themeOptions) => {

  // I might want to re-add some defaults in here someday.
  let analytics =
    themeOptions.analytics != null
      ? themeOptions.analytics
      : {};

  // If we don't define this property we get a WebpackError.
  if (analytics.trackingIds == null) {
    analytics.trackingIds = [];
  }

  const canonicalurls =
    themeOptions.canonicalurls != null
      ? themeOptions.canonicalurls
      : {};

  // Enable gatsby-plugin-preact by default.
  const preact = false;

  const preconnect =
    themeOptions.preconnect != null
      ? themeOptions.preconnect
      : {};

  // If we don't define this property we get a WebpackError.
  if (preconnect.domains == null) {
    preconnect.domains = [];
  }

  const robotstxt =
    themeOptions.robotstxt != null
      ? themeOptions.robotstxt
      : {};

  const xmlsitemap =
    themeOptions.xmlsitemap != null
      ? themeOptions.xmlsitemap
      : {};

  return {
    analytics,
    canonicalurls,
    preact,
    preconnect,
    robotstxt,
    xmlsitemap,
  };
};