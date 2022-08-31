import React from "react";
import { Link, useMatch } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const MenuItemWrapper = ({ to, name, children }) => {

    const isActive = !!useMatch(to);

    return (
        <Link to={to}>
            <Menu.Item
                name={name}
                active={isActive}
                children={children}
            />
        </Link>
    )
}

export default MenuItemWrapper;