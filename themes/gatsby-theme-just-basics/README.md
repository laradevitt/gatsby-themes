# @laradevitt/gatsby-theme-just-basics

Just the basics, please.

This is *not* a design theme. It just provides some essential components on which to build a basic site.

*Note: Latest version (2.x) requires Gatsby 3.*

## Included

- Google Analytics
- XML sitemap and robots.txt
- Canonical Urls (new!)
- Menu component
- An SEO component (new!)
- Image-ready\*

\* Includes both [gatsby-plugin-image](https://www.gatsbyjs.com/plugins/gatsby-plugin-image/) and the older [gatsby-image](https://www.gatsbyjs.com/plugins/gatsby-image/) until the former is more broadly supported.

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
        // Links for the Menu component.
        menuLinks: [
          {
            menuName: 'main',
            path: '/about',
            label: 'Top Level Page',
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
        ],
        // Google Analytics.
        // For more options, see docs for gatsby-plugin-google-gtag.
        analytics: {
          trackingIds: ['X-XXXXXXXXXX'],
          gtagConfig: {
            anonymize_ip: true,
          },
        },
        // XML sitemap.
        // For more options, see docs for gatsby-plugin-sitemap.
        xmlsitemap: {
          exclude: ['/thank-you'],
          output: '/sitemap.xml',
        },
        // robots.txt configuration.
        // For more options, see docs for gatsby-plugin-robots-txt.
        robotstxt: {
          policy: [
            { userAgent: '*', disallow: ['/'] },
          ],
        },
        // Canonical URLs.
        // For more options, see docs for gatsby-plugin-canonical-urls.
        canonicalurls: {
          siteUrl: 'https://example.com',
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

## Menu usage

The `Menu` component outputs a hierarchical list-style menu based on the settings in `menuLinks`. It sets `active` class for active item and `active-trail` class for active trail. It doesn't do anything special beyond that. Use `wrapperClass` to pass classes to the `<nav>` element.

The `activePath` property is required. You can use the `location` object, a dynamically generated path (such as in a template file), or any old path.

*To do: add optional home link.*

Example:

```js
import Menu from '@laradevitt/gatsby-theme-just-basics/src/components/Menu';

export default ({ location }) => {
  return (
    <Layout location={location}>
      <Menu
        wrapperClass="menu main"
        activePath={location.pathname}
      />
    </Layout>
  );
};
```

Example using a dynamically generated path:

```js
<Menu
  wrapperClass="menu breadcrumb"
  activePath={`/shop/${product.handle}`}
/>
```

