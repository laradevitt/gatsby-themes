import React from "react";
import { Link } from "gatsby";

const MenuList = (props) => {
  const { items, location } = props;

  let menuClasses = "";
  if (items[0]) {
    menuClasses += items[0].node.level ? "level-" + items[0].node.level : "";
  }

  return (
    <ul className={menuClasses}>
      {items.map((item) => (
        <li
          key={item.node.uid}
          className={`${item.node.activeMenu ? "active-menu" : ""}`}
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
            <MenuList location={location} items={item.childNodes} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
