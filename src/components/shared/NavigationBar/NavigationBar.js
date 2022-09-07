import React, { useContext } from "react";
import { Menu, Image } from "semantic-ui-react";
import { UserSettingsContext } from "../../../context/UserSettingsContext";
import logo from "../../../assets/logo.svg";
import { navigationBarOptions } from "../../../data/navigationBar";
import { createNavigationBarElement } from "../../../utils/ui/navigationBar";

const NavigationBar = ({ refreshData }) => {

    const { settings: { accentColor } } = useContext(UserSettingsContext);

    return (
        <div className="navigation-bar">
            <Menu
                defaultActiveIndex={0}
                stackable
                fluid
                vertical
                size="massive"
                color={accentColor || 'black'}
            >
                <Menu.Item onClick={refreshData}>
                    <Image
                        avatar
                        src={logo}
                    /> <strong>The Kitchen App</strong>
                </Menu.Item>

                {
                    navigationBarOptions.map(createNavigationBarElement)
                }

            </Menu>
        </div>
    )
}

export default NavigationBar;