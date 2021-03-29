import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import MenuList from './menu-list';

import createDataTree from '../../utils/createDataTree';

const Menu = ({ activePath, wrapperClass }) => (
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
      const menuTree = createDataTree(edges, activePath);

      if (edges.length > 0) {
        return (
          <nav className={wrapperClass}>
            {<MenuList activePath={activePath} items={menuTree} />}
          </nav>
        )
      }
      else {
        return (null);
      }
    }}
  />
);

Menu.propTypes = {
  activePath: PropTypes.string.isRequired,
  wrapperClass: PropTypes.string,
};

export default Menu;
