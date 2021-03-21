import React from 'react';
import PropTypes from 'prop-types';
import Layout from '@laradevitt/gatsby-theme-just-basics/src/components/layout';
import Menu from '@laradevitt/gatsby-theme-just-basics/src/components/Menu';

const Footer = ({ location }) => {
  return (
    <Layout location={location}>
      <div>
        <Menu wrapperClass="menu sub" activePath={location.pathname} />
      </div>
      <div>
        <Menu wrapperClass="menu breadcrumb" activePath={location.pathname} />
        <h1>Page Not Found</h1>
        <p>
          Oops! Nothing to see here.
        </p>
      </div>
    </Layout>
  );
};

Footer.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Footer;

