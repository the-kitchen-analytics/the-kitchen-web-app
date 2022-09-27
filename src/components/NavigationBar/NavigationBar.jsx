import React from 'react'
import { Menu, Image } from 'semantic-ui-react'
import { useUserSettings } from '../../hooks'
import { createNavigationBarElement } from '../../utils/ui/navigationBar'

const NavigationBar = ({ logo, title, options }) => {

    const { settings: { accentColor } } = useUserSettings();

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