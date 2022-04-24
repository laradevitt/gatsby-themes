import React from 'react';
import Layout from '@laradevitt/gatsby-theme-just-basics/src/components/layout';
import Seo from '@laradevitt/gatsby-theme-just-basics/src/components/seo';
import Menu from '../../../components/menu';

/* eslint-disable-next-line */
export default ({ location }) => {
  return (
    <Layout location={location}>
      <Seo
        title="Portfolio"
        meta={[
          {
            name: 'og:url',
            content: location.href,
          },
        ]}
      />
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

