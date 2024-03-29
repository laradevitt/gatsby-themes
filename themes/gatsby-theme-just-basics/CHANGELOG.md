## v6.0.0

- Added option to disable gatsby-plugin-sitemap.
- Tighten up check for which theme options are set (or not) when loading plugins.
- Corrected docs where plugins are indicated as disabled by default when they are not.

## v5.0.0

- Replaced react-helmet with Gatsby Head API.

## v4.0.2

- Fixed version in CHANGELOG.

## v4.0.1

- Fixed version in starter dependency.

## v4.0.0

- Compatible with Gatsby 5.
- Removed gatsby-plugin-preact and dependencies.
- Removed dependency on sass and lodash.

## v3.0.4

- Fixed can't override default `preact` option.

## v3.0.3

- README correction.

## v3.0.2

- Removed deprecated node-sass package.

## v3.0.1

- Clarify configuration options in README.

## v3.0.0

- Compatible with Gatsby 4.
- Added [Preconnect to required origins](https://web.dev/uses-rel-preconnect/).
- Replaced React with [Preact](https://preactjs.com/) (can be disabled).
- Removed Menu component.

## v2.0.8

- Updated peer dependencies.

## v2.0.7

## v2.0.6

## v2.0.5

- Fix README example.

## v2.0.4

- (Breaking change) Now requires `author` field to be set in `siteMetadata`. *(Can be left blank.)*
- (Breaking change) Removed all header tag handling from `Layout` component. *Use optional `Seo` component instead.*
- New (optional) prop `lang` added to `Seo` component.
- `title` tag formatting added to `Seo` component.
- Canonical URLs are now optional and configurable (using [gatsby-plugin-canonical-urls](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-canonical-urls) package).
- Added CHANGELOG. 🎉
