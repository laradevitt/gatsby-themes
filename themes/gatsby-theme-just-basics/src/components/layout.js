import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Header from './header';
import Footer from './footer';

import useSiteMetadata from '../hooks/use-site-metadata';

import '../assets/main.css';

const Layout = ({ children, location }) => {
  const { siteMetadata } = useSiteMetadata();
  return (
    <>
      <Helmet
        title={siteMetadata.title}
        htmlAttributes={{
          lang: 'en',
        }}
      >
        <link rel="canonical" href={`${siteMetadata.siteUrl}${location.pathname}`} />
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
