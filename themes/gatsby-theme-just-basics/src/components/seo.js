/**
 * SEO component.
 *
 * Most sites need basic meta tags for SEO so I wanted to provide a simple
 * component BUT I also don't want to reinvent the wheel. This one is
 * essentially a copy of the component in Gatsby's official default starter.
 *
 * See: https://github.com/gatsbyjs/gatsby-starter-default/blob/master/src/components/seo.js
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

function Seo({ description, title, path, children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ''} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {site.siteMetadata.siteUrl && path
        && (
          <>
            <meta property="og:url" content={`${site.siteMetadata.siteUrl}${path}`} />
            <meta property="twitter:url" content={`${site.siteMetadata.siteUrl}${path}`} />
          </>
        )
      }
      {children}
    </>
  );
}

Seo.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  path: PropTypes.string,
  children: PropTypes.node,
};

export default Seo;
