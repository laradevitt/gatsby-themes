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
        menuLinks: [
          {
            menuName: 'main',
            path: '/about',
            label: 'About',
            level: '0',
            weight: '1',
            parentPath: null,
          },
          {
            menuName: 'main',
            path: '/about/portfolio',
            label: 'Portfolio',
            level: '1',
            weight: '1',
            parentPath: '/about',
          },
          {
            menuName: 'main',
            path: '/about/portfolio/photography',
            label: 'Photography',
            level: '2',
            weight: '1',
            parentPath: '/about/portfolio',
          },
          {
            menuName: 'main',
            path: '/contact',
            label: 'Contact',
            level: '0',
            weight: '2',
            parentPath: null,
          },
        ],
        analytics: {
          gtagConfig: {
            anonymize_ip: true,
          },
        },
        xmlsitemap: {
          output: '/sitemap.xml',
        },
        robotstxt: {
          policy: [ { userAgent: '*', disallow: ['/'], } ],
        },
        canonicalurls: {
          siteUrl: 'https://example.com',
        },
      },
    },
  ],
};
