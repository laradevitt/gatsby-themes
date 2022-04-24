import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Header = ({ location }) => (
  <header>
    <nav className="main menu">
      <ul className="level-0">
        <li>
          <Link to="/" activeClassName="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about/" activeClassName="active">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact/" activeClassName="active">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Header;
