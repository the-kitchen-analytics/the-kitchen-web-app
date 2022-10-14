import { Icon, Button, Dropdown } from "semantic-ui-react";

const tagOptions = [
    {
        key: 'all',
        text: 'Все услуги',
        value: 'all',
        icon: { name: 'list ul', color: 'grey' },
    },
    {
        key: 'manicure',
        text: 'Маникюр',
        value: 'manicure',
        label: { color: 'blue', empty: true, circular: true }
    },
    {
        key: 'pedicure',
        text: 'Педикюр',
        value: 'pedicure',
        label: { color: 'red', empty: true, circular: true }
    },
    {
        key: 'spa',
        text: 'SPA',
        value: 'spa',
        icon: { name: 'heart', color: 'pink' },
    },
    {
        key: 'master',
        text: 'Master',
        value: 'master',
        icon: { name: 'star', color: 'yellow' },
    },
    {
        key: 'top-master',
        text: 'Top-master',
        value: 'top-master',
        icon: { name: 'star', color: 'yellow' },
    },
    {
        key: '1/2',
        text: '1/2 Услуги',
        value: '1/2',
        label: { color: 'grey', empty: true, circular: true }
    }
];

const ProceduresFilter = ({ handleChange, order, sort }) => (
    <Button.Group fluid>
        <Dropdown
            text='Фильтр'
            icon='filter'
            floating
            labeled
            button
            className='icon'
        >
            <Dropdown.Menu>
                <Dropdown.Menu scrolling>
                    {tagOptions.map((option) => (
                        <Dropdown.Item key={option.value} {...option} onClick={handleChange} />
                    ))}
                </Dropdown.Menu>
            </Dropdown.Menu>
        </Dropdown>

        <Button
            icon
            active={order === 'desc'}
            onClick={() => sort('desc')}
        >
            <Icon name='sort content descending' />
        </Button>
        <Button
            icon
            active={order === 'asc'}
            onClick={() => sort('asc')}
        >
            <Icon name='sort content ascending' />
        </Button>
    </Button.Group >
);

export default ProceduresFilter;