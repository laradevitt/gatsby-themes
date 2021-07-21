/**
 * SEO component.
 *
 * Most sites need basic meta tags for SEO so I wanted to provide a simple
 * component BUT I also don't want to reinvent the wheel. This one is a copy of
 * the component in Gatsby's official default starter, with <title> and
 * <html lang> handling stripped out for backwards compatibility since these are
 * already handled in the layout component. In version 3.x I will bring them all
 * together here.
 *
 * See: https://github.com/gatsbyjs/gatsby-starter-default/blob/master/src/components/seo.js
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import useSiteMetadata from '../hooks/use-site-metadata';

function Seo({ title, description, meta }) {
  const { siteMetadata } = useSiteMetadata();

  const metaDescription = description || siteMetadata.description;
  const defaultTitle = siteMetadata?.title;

  return (
    <Helmet
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
    >
    </Helmet>
  )
}

Seo.defaultProps = {
  meta: [],
  description: '',
};

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
};

export default Seo;