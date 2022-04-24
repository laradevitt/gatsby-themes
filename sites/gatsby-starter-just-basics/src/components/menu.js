import React from 'react';
import { Link } from 'gatsby';

const Menu = ({ type }) => (
  <nav className={`menu ${type}`}>
    <ul className="level-0">
      <li>
        <Link to="/about/" activeClassName="active" partiallyActive={true}>
          About
        </Link>
        <ul className="level-1">
          <li>
            <Link to="/about/portfolio/" activeClassName="active" partiallyActive={true}>
              Portfolio
            </Link>
            <ul className="level-2">
              <li>
                <Link to="/about/portfolio/photography/" activeClassName="active" partiallyActive={true}>
                  Photography
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/contact/" activeClassName="active" partiallyActive={true}>
          Contact
        </Link>
      </li>
    </ul>
  </nav>
);

export default Menu;

