import React from 'react';
import Layout from '@laradevitt/gatsby-theme-just-basics/src/components/layout';
import Menu from '@laradevitt/gatsby-theme-just-basics/src/components/Menu';
import Seo from '@laradevitt/gatsby-theme-just-basics/src/components/seo';

/* eslint-disable-next-line */
export default ({ location }) => {
  return (
    <Layout location={location}>
      <Seo
        title="(Portfolio) Photography"
        meta={[
          {
            name: 'og:url',
            content: location.href,
          },
        ]}
      />
      <div>
        <Menu wrapperClass="menu sub" activePath={location.pathname} />
      </div>
      <div>
        <Menu wrapperClass="menu breadcrumb" activePath={location.pathname} />
        <h1>Photography</h1>
        <p>
          Curabitur nec risus at nulla blandit maximus.
        </p>
      </div>
    </Layout>
  );
};

