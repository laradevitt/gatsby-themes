import React from 'react';
import PropTypes from 'prop-types';
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav';

import Header from './header';
import Footer from './footer';

import useSiteMetadata from '../hooks/use-site-metadata';

import '../assets/main.css';
import '@reach/skip-nav/styles.css';

const Layout = ({ children, location }) => (
  <>
    <SkipNavLink />
    <Header
      location={location}
    />
    <SkipNavContent />
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
