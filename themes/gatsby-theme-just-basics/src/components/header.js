import React from "react";

import Menu from "./Menu";

const Header = ({ location }) => (
  <header>
    <Menu wrapperClass="main menu" location={location} />
  </header>
);

export default Header;
