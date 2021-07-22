import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Footer from './footer';

import useSiteMetadata from '../hooks/use-site-metadata';

import '../assets/main.css';

const Layout = ({ children, location }) => (
  <>
    <Header
      location={location}
    />
    <main>
      {children}
    </main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

export default Layout;
