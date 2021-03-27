// Pattern/idea from https://github.com/gatsbyjs/themes/blob/master/packages/gatsby-theme-blog-core/utils/default-options.js
module.exports = (themeOptions) => {
  const menuLinks = themeOptions.menuLinks || [];

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

  return {
    menuLinks,
    analytics,
    xmlsitemap,
    robotstxt,
  };
};