import _ from 'lodash'
import { Table, Icon } from 'semantic-ui-react'
import DateCell from './DateCell'
import ProceduresCell from './ProceduresCell'
import PriceCell from './PriceCell'
import { calculateTotalWorkerIncome, calculateTotalPrice } from '../../utils/money'

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
          <PriceCell euro>
            {calculateTotalPrice(procedures)}
          </PriceCell>
        </Table.Cell>

        <Table.Cell textAlign="right">
          <strong>
            <PriceCell euro>
              {calculateTotalWorkerIncome(procedures)}
            </PriceCell>
          </strong>
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

const DataTable = ({ data }) => {

  const allProcedures = data
    .flat()
    .map(({ procedures }) => procedures)
    .flat()

  const totalWorkerIncome = calculateTotalWorkerIncome(allProcedures)

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
          <Table.HeaderCell colSpan={3}>Итого</Table.HeaderCell>
          <Table.HeaderCell collapsing textAlign="right">
            <strong>
              <PriceCell>
                {
                  totalWorkerIncome
                }
              </PriceCell>
            </strong>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  )
}

export default DataTable