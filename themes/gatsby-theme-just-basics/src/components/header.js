import React from 'react';
import PropTypes from 'prop-types';
import Menu from './Menu';

const Header = ({ location }) => (
  <header>
    <Menu wrapperClass="main menu" activePath={location.pathname} />
  </header>
);

Header.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Header;
