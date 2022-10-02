import { Menu } from 'semantic-ui-react';
import { useUserSettings } from '../../hooks';
import { createNavigationBarElement } from '../../utils/ui/navigationBar';
import Logo from '../Logo';

const NavigationBar = ({ title, options }) => {

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
                    <Logo avatar /> {title}
                </Menu.Item>

                {
                    options && options.map(createNavigationBarElement)
                }

            </Menu>
        </div>
    )
}

export default NavigationBar;