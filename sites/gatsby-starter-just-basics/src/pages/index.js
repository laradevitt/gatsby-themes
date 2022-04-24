import React from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '@laradevitt/gatsby-theme-just-basics/src/components/layout';
import Seo from '@laradevitt/gatsby-theme-just-basics/src/components/seo';
import Menu from '../components/menu';

const Homepage = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo
        title="Home"
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
        <h1>Welcome</h1>
        <StaticImage
          src="../images/timo-volz-ZlFKIG6dApg-unsplash.jpg"
          width={400}
          height={600}
          placeholder="none"
          layout="fixed"
          role="presentation"
          alt=""
        />
        <p>
          Photo by <a href="https://unsplash.com/@magict1911?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Timo Volz</a> on <a href="/s/photos/cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </p>
      </div>
    </Layout>
  );
};

Homepage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Homepage;

