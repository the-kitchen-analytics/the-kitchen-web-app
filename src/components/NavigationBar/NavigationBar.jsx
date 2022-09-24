import React, { useContext } from 'react'
import { Menu, Image } from 'semantic-ui-react'
import { UserSettingsContext } from "../../context/UserSettingsContext"
import { createNavigationBarElement } from '../../utils/ui/navigationBar'

const NavigationBar = ({ logo, title, options }) => {

    const { settings: { accentColor } } = useContext(UserSettingsContext)

    return (
        <div className='navigation-bar'>
            <Menu
                defaultActiveIndex={0}
                stackable
                fluid
                vertical
                size='massive'
                color={accentColor || 'black'}
            >
                <Menu.Item>
                    <Image
                        avatar
                        src={logo}
                    /> {title}
                </Menu.Item>

                {
                    options && options.map(createNavigationBarElement)
                }

            </Menu>
        </div>
    )
}

export default NavigationBar;