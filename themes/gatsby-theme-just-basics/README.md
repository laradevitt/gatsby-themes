# @laradevitt/gatsby-theme-just-basics

Just the basics, please.

This is *not* a design theme. It just provides some essential components on which to build a basic site.

*Note: The Menu component was removed in 3.x branch.*

## Included

- Google Analytics
- XML sitemap and robots.txt
- Canonical Urls
- [Preconnect to required origins](https://web.dev/uses-rel-preconnect/)
- An SEO component
- [Skip navigation](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-reach-skip-nav) for keyboard accessibility
- Replaces React with [Preact](https://preactjs.com/) (can be disabled)
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
        // Preact.
        // Disabled by default. If you need to enable it, set it to true.
        preact: true,
        // Preconnect.
        // Disabled by default. For more options, see docs for gatsby-plugin-preconnect.
        preconnect: {
          domains: ['https://foo.com', 'https://bar.com'], // required property
        },
        // robots.txt configuration.
        // Disabled by default. For more options, see docs for gatsby-plugin-robots-txt.
        robotstxt: {
          sitemap: 'https://example.com/sitemap-index.xml',
          policy: [{ userAgent: '*', allow: ['/'] }],
        },
        // XML sitemap.
        // Disabled by default. For more options, see docs for gatsby-plugin-sitemap.
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
export default ({ location }) => {
  return (
    <Layout location={location}>
      <Seo
        title="About Me"
        description="A little about me."
        lang="se"
        meta={[
          {
            property: 'og:url',
            content: location.href,
          },
          {
            property: 'og:locale',
            content: 'en',
          },
        ]}
      />
      <h1>About Me</h1>
    </Layout>
  );
};
```
