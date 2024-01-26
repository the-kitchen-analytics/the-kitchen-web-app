import { List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { getProcedureTypeDisplayName } from '../../../shared/utils'

const ListItem = (props) => {

  const { linkTo, procedure: { name, type } } = props
  const displayName = `${name} (${getProcedureTypeDisplayName(type)})`

  return (
    <List.Item>
      <List.Content>
        <List.Header>
          {
            linkTo
              ? <Link to={linkTo}>{displayName}</Link>
              : displayName
          }
        </List.Header>
      </List.Content>
    </List.Item>
  )
}

export const ProceduresList = ({ linkTo, procedures, listProps, shouldDisplayProcedurePriceInTable }) => (
  <List
    {...listProps}
    size={'medium'}
  >
    {
      procedures.map((procedure, i) => (
        <ListItem
          key={`${procedure.name}-${i}`}
          linkTo={linkTo}
          procedure={procedure}
          shouldDisplayProcedurePriceInTable={shouldDisplayProcedurePriceInTable}
        />
      ))
    }
  </List>
)