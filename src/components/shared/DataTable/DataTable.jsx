import _ from 'lodash'
import { Table, Icon } from 'semantic-ui-react'
import { DateCell } from './DateCell'
import { ProceduresCell } from './ProceduresCell'
import { calculateTotalWorkerIncome, calculateTotalPrice } from '../../../utils'
import { Price } from '../'

const NoTableContent = () => (
  <Table.Row>
    <Table.Cell colSpan="4">
      <Icon name="info circle" />
      <>Нет данных</>
    </Table.Cell>
  </Table.Row>
)

const DataTableRow = ({ data }) => {

  const allProcedures = data
    .map(({ procedures }) => procedures)
    .flat()

  const totalWorkerIncome = calculateTotalWorkerIncome(allProcedures)

  return data
    .map(({ id, date, dateCreated, procedures }, i) => (
      <Table.Row key={dateCreated.getTime()} verticalAlign='top'>
        {
          i === 0 ? (
            <Table.Cell rowSpan={data.length}>
              <DateCell
                date={date}
                price={totalWorkerIncome}
              >
                {date}
              </DateCell>
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

      </Table.Row>
    ))
}

const DataTableBody = ({ data }) => {
  if (_.isEmpty(data.flat())) {
    return <NoTableContent />
  }

  return data.map(rowData => (
    <DataTableRow
      key={rowData.map(({ date }) => date.getTime())[0]}
      data={rowData}
    />
  ))
}

export const DataTable = ({ data }) => {

  const allProcedures = data
    .flat()
    .map(({ procedures }) => procedures)
    .flat()

  const totalWorkerIncome = calculateTotalWorkerIncome(allProcedures)
  const totalPrice = calculateTotalPrice(allProcedures)

  return (
    <Table structured celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Дата</Table.HeaderCell>
          <Table.HeaderCell>Название набора услуг</Table.HeaderCell>
          <Table.HeaderCell collapsing>Стоимость услуги</Table.HeaderCell>
          <Table.HeaderCell collapsing>Заработок мастера</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <DataTableBody data={data} />
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
        </Table.Row>
      </Table.Footer>
    </Table>
  )
}