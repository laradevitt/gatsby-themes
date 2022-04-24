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

  const xmlsitemap =
    themeOptions.xmlsitemap != null
      ? themeOptions.xmlsitemap
      : {};

  const robotstxt =
    themeOptions.robotstxt != null
      ? themeOptions.robotstxt
      : {};

  const canonicalurls =
    themeOptions.canonicalurls != null
      ? themeOptions.canonicalurls
      : {};

  return {
    analytics,
    xmlsitemap,
    robotstxt,
    canonicalurls,
  };
};