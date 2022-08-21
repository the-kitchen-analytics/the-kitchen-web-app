import React from "react";
import { Menu } from "semantic-ui-react";

const MenuItemWrapper = ({ name, activeItem, handleItemClick, children = '' }) => (
    <Menu.Item
        name={name}
        active={activeItem === name}
        onClick={handleItemClick}
        children={children}
    />
);

export default MenuItemWrapper;