import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import MenuList from './menu-list';

import createDataTree from '../../utils/createDataTree';

const Menu = ({ wrapperClass, location }) => (
  <StaticQuery
    query={graphql`
      query {
        allMenuItem(
          filter: { menuName: { eq: "main" } }
          sort: { fields: [weight, level], order: [ASC, ASC] }
        ) {
          edges {
            node {
              id
              uid
              menuName
              path
              level
              weight
              label
              parentUid
              parentPath
            }
          }
        }
      }
    `}
    render={(data) => {
      const { edges } = data.allMenuItem;
      const menuTree = createDataTree(edges, location.pathname);
      if (edges.length) {
        return (
          <nav className={wrapperClass}>
            {<MenuList location={location} items={menuTree} />}
          </nav>
        );
      }
    }}
  />
);

Menu.propTypes = {
  wrapperClass: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

export default Menu;
