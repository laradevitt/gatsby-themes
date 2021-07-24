## v2.0.5

- Fix README example.

## v2.0.4

- (Breaking change) Now requires `author` field to be set in `siteMetadata`. *(Can be left blank.)*
- (Breaking change) Removed all header tag handling from `Layout` component. *Use optional `Seo` component instead.*
- New (optional) prop `lang` added to `Seo` component.
- `title` tag formatting added to `Seo` component.
- Canonical URLs are now optional and configurable (using [gatsby-plugin-canonical-urls](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-canonical-urls) package).
- Added CHANGELOG. 🎉
