import React from 'react';
import Layout from '@laradevitt/gatsby-theme-just-basics/src/components/layout';
import Menu from '@laradevitt/gatsby-theme-just-basics/src/components/Menu';

/* eslint-disable-next-line */
export default ({ location }) => {
  return (
    <Layout location={location}>
      <div>
        <Menu wrapperClass="menu sub" location={location} />
      </div>
      <div>
        <Menu wrapperClass="menu breadcrumb" location={location} />
        <h1>Page Not Found</h1>
        <p>
          Oops! There doesn't seem to be anything here.
        </p>
      </div>
    </Layout>
  );
};
