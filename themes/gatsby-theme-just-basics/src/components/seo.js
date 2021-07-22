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
import { Helmet } from 'react-helmet';

import useSiteMetadata from '../hooks/use-site-metadata';

function Seo({ title, description, meta, lang }) {
  const { siteMetadata } = useSiteMetadata();

  const metaDescription = description || siteMetadata.description;
  const defaultTitle = siteMetadata?.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: siteMetadata?.author || '',
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  description: '',
  lang: 'en',
  meta: [],
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default Seo;