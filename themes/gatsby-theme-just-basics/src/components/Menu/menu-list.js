import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const MenuList = ({ items, activePath }) => {

  let menuClasses = '';
  if (items[0]) {
    menuClasses += items[0].node.level ? `level-${items[0].node.level}` : '';
  }

  return (
    <ul className={menuClasses}>
      {items.map((item) => (
        <li
          key={item.node.uid}
          className={`${item.node.activeMenu ? 'active-menu' : ''}`}
        >
          <Link
            to={`${item.node.path}/`}
            partiallyActive={true}
            activeClassName="active"
          >
            {item.node.label}
          </Link>
          {item.childNodes
            && (
            <MenuList activePath={activePath} items={item.childNodes} />
          )}
        </li>
      ))}
    </ul>
  );
};

MenuList.propTypes = {
  items: PropTypes.array.isRequired,
  activePath: PropTypes.string.isRequired,
};

export default MenuList;
