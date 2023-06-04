# @laradevitt/gatsby-theme-just-basics

Just the basics, please.

This is *not* a design theme. It just provides some essential components on which to build a basic site.

## Notes ##

- *react-helmet* was replaced with [Gatsby Head API](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/) in 5.x branch.

- *gatsby-plugin-preact* was removed in 4.x branch due to React 18 incompatibility ([Github issue](https://github.com/gatsbyjs/gatsby/issues/35500)).

## Included

- Google Analytics
- XML sitemap and robots.txt
- Canonical Urls
- [Preconnect to required origins](https://web.dev/uses-rel-preconnect/)
- An SEO component
- [Skip navigation](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-reach-skip-nav) for keyboard accessibility
- Image-ready

For a full list of included plugins, see the [package.json](https://github.com/laradevitt/gatsby-themes/blob/master/themes/gatsby-theme-just-basics/package.json) file.

## Install

```sh
npm i @laradevitt/gatsby-theme-just-basics
```

or

```sh
yarn add @laradevitt/gatsby-theme-just-basics
```

## Develop

Fork the monorepo and run the starter from the workspaces root (requires [Yarn](https://yarnpkg.com/)):

```sh
yarn workspace gatsby-starter-just-basics gatsby develop
```

## Configure

### Minimal

At the very least, you need:

*gatsby-config.js*
```js
module.exports = {
  // This theme requires these siteMetadata fields be set, but only siteUrl
  // requires a value; the others can be left blank.
  siteMetadata: {
    title: '',
    description: '',
    siteUrl: 'https://example.com',
    author: '',
  },
  plugins: [
    '@laradevitt/gatsby-theme-just-basics',
  ],
}
```

### Expanded

*gatsby-config.js*
```js
module.exports = {
  siteMetadata: {
    title: 'Example Website',
    description: 'An excellent website.',
    siteUrl: 'https://example.com',
    author: '@twitteruser',
  },
  plugins: [
    {
      resolve: '@laradevitt/gatsby-theme-just-basics',
      options: {
        // Google Analytics.
        // Disabled by default. For more options, see docs for gatsby-plugin-google-gtag.
        analytics: {
          trackingIds: ['X-XXXXXXXXXX'], // required property
          gtagConfig: {
            anonymize_ip: true,
          },
        },
        // Canonical URLs.
        // Disabled by default. For more options, see docs for gatsby-plugin-canonical-urls.
        canonicalurls: {
          siteUrl: 'https://example.com', // required property
        },
        // Preconnect.
        // Enabled by default but requires `domains` to be set. For more 
        // options, see docs for gatsby-plugin-preconnect.
        preconnect: {
          domains: ['https://foo.com', 'https://bar.com'], // required property
        },
        // robots.txt configuration.
        // Enabled by default. If `host` isn't set, uses value of `siteMetadata.siteUrl`. 
        // For more options, see docs for gatsby-plugin-robots-txt.
        robotstxt: {
          policy: [{ userAgent: '*', allow: ['/'] }],
        },
        // XML sitemap.
        // Enabled by default. Set `disable: true` to disable. For full plugin 
        // options, see docs for gatsby-plugin-sitemap.
        xmlsitemap: {
          output: '/',
        },
      },
    },
  ],
}
```

## SEO

You can optionally import the SEO component with:

```js
import Seo from '@laradevitt/gatsby-theme-just-basics/src/components/seo';
```

Usage:

(All props are optional. If *title* and *description* aren't provided the values
from *siteMetadata* will be used.)

```js
export const Head = ({ location }) => (
  <Seo
    title="Contact"
    path={location.pathname}
  />
);

const Page = ({ location }) => {
  return (
    <Layout location={location}>
      <div>
        <Menu type="sub" />
      </div>
      <div>
        <Menu type="breadcrumb" />
        <h1>Contact Me</h1>
        <p>
          Curabitur nec risus at nulla blandit maximus.
        </p>
      </div>
    </Layout>
  );
};

export default Page;
```

Optionally pass in your own meta tags:

```js
export const Head = ({ location }) => (
  <Seo
    title="Contact"
    path={location.pathname}
  >
    <meta property="og:locale" content="en" />
  </Seo>
);
```


