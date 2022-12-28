import { Dropdown } from 'semantic-ui-react'
import { getProcedureTypeDisplayName } from '../../../utils/procedures'

const tagOptions = [
  {
    key: 'all',
    text: 'Все услуги',
    value: 'all',
    icon: { name: 'list ul', color: 'grey' },
  },
  {
    key: 'manicure',
    text: getProcedureTypeDisplayName('manicure'),
    value: 'manicure',
    label: { color: 'blue', empty: true, circular: true }
  },
  {
    key: 'pedicure',
    text: getProcedureTypeDisplayName('pedicure'),
    value: 'pedicure',
    label: { color: 'red', empty: true, circular: true }
  },
  {
    key: 'brows',
    text: getProcedureTypeDisplayName('brows'),
    value: 'brows',
    label: { color: 'brown', empty: true, circular: true }
  },
  {
    key: 'spa',
    text: getProcedureTypeDisplayName('spa'),
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
]

const ProceduresFilter = ({ filter, handleChange, size }) => (
  <Dropdown
    text={'Фильтр'}
    icon='filter'
    floating
    labeled
    button
    fluid
    size={size}
    className={`icon ${size}`}
  >
    <Dropdown.Menu>
      <Dropdown.Menu scrolling>
        {tagOptions.map((option) => (
          <Dropdown.Item
            key={option.value}
            active={option.value === filter}
            {...option}
            onClick={handleChange}
          />
        ))}
      </Dropdown.Menu>
    </Dropdown.Menu>
  </Dropdown>
)

export default ProceduresFilter