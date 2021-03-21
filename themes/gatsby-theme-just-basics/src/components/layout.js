import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import useSiteMetadata from '../hooks/use-site-metadata';

import Header from './header';
import Footer from './footer';

import '../assets/main.css';

const Layout = ({ children, location }) => {
  const { title, siteUrl } = useSiteMetadata();
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
      >
        <title>{title}</title>
        <link rel="canonical" href={`${siteUrl}${location.pathname}`} />
      </Helmet>
      <Header
        location={location}
      />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

export default Layout;
