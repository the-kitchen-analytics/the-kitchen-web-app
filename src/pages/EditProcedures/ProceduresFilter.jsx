import { Dropdown } from "semantic-ui-react";

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
        icon: { name: 'american sign language interpreting', color: 'grey' },
    },
    {
        key: 'pedicure',
        text: 'Педикюр',
        value: 'pedicure',
        icon: { name: 'paw', color: 'grey' },
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
];

const ProceduresFilter = ({ handleChange }) => {

    return (
        <Dropdown
            text='Фильтр'
            icon='filter'
            floating
            labeled
            button
            fluid
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
    )
}

export default ProceduresFilter;