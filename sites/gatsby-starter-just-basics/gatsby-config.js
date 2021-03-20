let env = process.env.NODE_ENV || 'development';

require('dotenv').config({
  path: `.env.${env}`,
});

module.exports = {
  siteMetadata: {
    title: 'Just the Basics (Starter Site)',
    siteUrl: 'https://example.com',
  },
  plugins: [
    {
      resolve: `@laradevitt/gatsby-theme-just-basics`,
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
      },
    },
  ],
};
