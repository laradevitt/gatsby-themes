import React from 'react';
import PropTypes from 'prop-types';
import Layout from '@laradevitt/gatsby-theme-just-basics/src/components/layout';
import Menu from '../components/menu';

const PageNotFound = ({ location }) => {
  return (
    <Layout location={location}>
      <div>
        <Menu type="sub" />
      </div>
      <div>
        <Menu type="breadcrumb" />
        <h1>Page Not Found</h1>
        <p>
          Oops! Nothing to see here.
        </p>
      </div>
    </Layout>
  );
};

PageNotFound.propTypes = {
  location: PropTypes.object.isRequired,
};

export default PageNotFound;

