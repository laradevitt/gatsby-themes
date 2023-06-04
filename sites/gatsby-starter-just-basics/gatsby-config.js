let env = process.env.NODE_ENV || 'development';

require('dotenv').config({
  path: `.env.${env}`,
});

module.exports = {
  siteMetadata: {
    title: 'Just the Basics',
    description: 'A Gatsby starter demo for Just the Basics theme.',
    siteUrl: 'https://example.com',
    author: '@twitteruser',
  },
  plugins: [
    {
      resolve: '@laradevitt/gatsby-theme-just-basics',
      options: {
        canonicalurls: {
          siteUrl: 'https://example.com',
        },
        // Recommended settings for development:
        xmlsitemap: {
          disable: true,
        },
        robotstxt: {
          host: null,
          sitemap: null,
          policy: [ { userAgent: '*', disallow: ['/'], } ],
        },
      },
    },
  ],
};
