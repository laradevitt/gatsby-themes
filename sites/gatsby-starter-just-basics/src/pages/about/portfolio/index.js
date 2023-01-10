import React from 'react';
import PropTypes from 'prop-types';
import Layout from '@laradevitt/gatsby-theme-just-basics/src/components/layout';
import Seo from '@laradevitt/gatsby-theme-just-basics/src/components/seo';
import Menu from '../../../components/menu';

/* eslint-disable react/prop-types */
export const Head = ({ location }) => (
  <Seo
    title="Portfolio (About Me)"
    path={location.pathname}
  />
);
/* eslint-enable react/prop-types */

const AboutPortfolioPage = ({ location }) => {
  return (
    <Layout location={location}>
      <div>
        <Menu type="sub" />
      </div>
      <div>
        <Menu type="breadcrumb" />
        <h1>Portfolio</h1>
        <p>
          Curabitur nec risus at nulla blandit maximus.
        </p>
      </div>
    </Layout>
  );
};

AboutPortfolioPage.propTypes = {
  location: PropTypes.object.isRequired
};

export default AboutPortfolioPage;

