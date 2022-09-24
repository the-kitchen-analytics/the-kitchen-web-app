import NavigationBarItem from "../../../components/NavigationBar/NavigationBarItem";
import { Icon, Divider, Menu } from "semantic-ui-react";
import { TYPE_DIVIDER, TYPE_ITEM, TYPE_PARENT } from "../../../data/ui/navigationBar/elementTypes";

const createItemElement = ({ itemProps, icon, text }) => (
    <NavigationBarItem {...itemProps}>
        {
            icon && <Icon name={icon} />
        }
        {
            text
        }
    </NavigationBarItem>
);

const createDividerElement = ({ itemProps }) => (
    <Divider {...itemProps} />
);

const createParentElement = ({ itemProps, icon, text, items }) => (
    <Menu.Item {...itemProps}>
        <Menu.Header>
            {
                icon && <Icon name={icon} />
            }
            {
                text
            }
        </Menu.Header>

        <Menu.Menu>
            {
                items.map(createNavigationBarElement)
            }
        </Menu.Menu>
    </Menu.Item>
)

const createNavigationBarElement = (element) => {
    switch (element.type) {
        case TYPE_ITEM:
            return createItemElement(element)
        case TYPE_DIVIDER:
            return createDividerElement(element)
        case TYPE_PARENT:
            return createParentElement(element)
        default:
            return ''
    }
}

export default createNavigationBarElement;