import _ from 'lodash'
import { Icon, Table } from 'semantic-ui-react'
import { DateCell, NotesCell, ProceduresCell } from './components'
import { calculateTotalPrice, calculateTotalWorkerIncome } from '../../../utils'
import { Price } from '../'

const NoTableContent = () => (
  <Table.Row>
    <Table.Cell colSpan="4">
      <Icon name="info circle" />
      <>Нет данных</>
    </Table.Cell>
  </Table.Row>
)

const DataTableRow = ({ data, showNotes }) => {

  const allProcedures = data
    .map(({ procedures }) => procedures)
    .flat()

  const totalWorkerIncome = calculateTotalWorkerIncome(allProcedures)

  return data
    .map(({ id, date, dateCreated, procedures, notes }, i) => (
      <Table.Row key={dateCreated.getTime()} verticalAlign="top">
        {
          i === 0 ? (
            <Table.Cell rowSpan={data.length}>
              <DateCell
                date={date}
                price={totalWorkerIncome}
              />
            </Table.Cell>
          ) : ''
        }

        <Table.Cell>
          <ProceduresCell
            id={id}
            procedures={procedures}
          />
        </Table.Cell>

        <Table.Cell textAlign="right">
          <Price
            content={calculateTotalPrice(procedures)}
          />
        </Table.Cell>

        <Table.Cell textAlign="right">
          <Price
            primary
            content={calculateTotalWorkerIncome(procedures)}
          />
        </Table.Cell>

        {
          showNotes && (
            <Table.Cell>
              <NotesCell content={notes} />
            </Table.Cell>
          )
        }
      </Table.Row>
    ))
}

const DataTableBody = ({ data, showNotes }) => {
  if (_.isEmpty(data.flat())) {
    return <NoTableContent />
  }

  return data.map(rowData => (
    <DataTableRow
      key={rowData.map(({ date }) => date.getTime())[0]}
      data={rowData}
      showNotes={showNotes}
    />
  ))
}

export const DataTable = ({ data = [[]], showNotes = false }) => {

  const allProcedures = data
    .flat()
    .map(({ procedures }) => procedures)
    .flat()

  const totalWorkerIncome = calculateTotalWorkerIncome(allProcedures)
  const totalPrice = calculateTotalPrice(allProcedures)
  const displayNotes = showNotes && data.flat().find(({ notes }) => !!notes)

  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Дата</Table.HeaderCell>
          <Table.HeaderCell>Название набора услуг</Table.HeaderCell>
          <Table.HeaderCell collapsing>Стоимость услуги</Table.HeaderCell>
          <Table.HeaderCell collapsing>Заработок мастера</Table.HeaderCell>
          {
            displayNotes && <Table.HeaderCell>Комментарий</Table.HeaderCell>
          }
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <DataTableBody data={data} showNotes={displayNotes} />
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan={2}>Итого</Table.HeaderCell>
          <Table.HeaderCell collapsing textAlign="right">
            <Price
              content={totalPrice}
            />
          </Table.HeaderCell>
          <Table.HeaderCell collapsing textAlign="right">
            <Price
              primary
              content={totalWorkerIncome}
            />
          </Table.HeaderCell>
          {
            displayNotes && <Table.HeaderCell />
          }
        </Table.Row>
      </Table.Footer>
    </Table>
  )
}