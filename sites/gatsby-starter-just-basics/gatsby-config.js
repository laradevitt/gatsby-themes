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
        analytics: {
          gtagConfig: {
            anonymize_ip: true,
          },
        },
        xmlsitemap: {
          output: '/sitemap.xml',
        },
        robotstxt: {
          sitemap: 'https://example.com/sitemap.xml',
          policy: [ { userAgent: '*', disallow: ['/'], } ],
        },
        canonicalurls: {
          siteUrl: 'https://example.com',
        },
      },
    },
  ],
};
