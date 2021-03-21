import React from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '@laradevitt/gatsby-theme-just-basics/src/components/layout';
import Menu from '@laradevitt/gatsby-theme-just-basics/src/components/Menu';

const Homepage = ({ location }) => {
  return (
    <Layout location={location}>
      <div>
        <Menu wrapperClass="menu sub" activePath={location.pathname} />
      </div>
      <div>
        <Menu wrapperClass="menu breadcrumb" activePath={location.pathname} />
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

