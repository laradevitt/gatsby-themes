import React from "react";
import { Helmet } from "react-helmet";
import useSiteMetadata from "../hooks/use-site-metadata";

import Header from "./header";
import Footer from "./footer";

import "../assets/main.css";

const Layout = ({ children, location }) => {
  const { title, siteUrl } = useSiteMetadata();
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
      >
        <title>{title}</title>
        <link rel="canonical" href={`${siteUrl}${location.pathname}`} />
      </Helmet>
      <Header
        location={location}
      />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
};

export default Layout;
