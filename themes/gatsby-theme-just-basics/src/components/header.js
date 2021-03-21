import React from 'react';
import PropTypes from 'prop-types';
import Menu from './Menu';

const Header = ({ location }) => (
  <header>
    <Menu wrapperClass="main menu" location={location} />
  </header>
);

Header.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Header;
