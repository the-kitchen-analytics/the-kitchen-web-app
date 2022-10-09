import _ from "lodash";
import { Table, Icon } from "semantic-ui-react";
import DateCell from "./DateCell";
import OperationsCell from "./OperationsCell";
import PriceCell from "./PriceCell";
import { getTotalIncomePerADay } from "../../utils/money";

const NoTableContent = () => (
    <Table.Row>
        <Table.Cell colSpan="4">
            <Icon name="info circle" />
            <>Нет данных</>
        </Table.Cell>
    </Table.Row>
);

const DataTableRow = ({ data }) => data
    .map(({ date, dateCreated, procedures, totalPriceBeforeTaxes, totalPriceAfterTaxes }, i) => (
        <Table.Row key={dateCreated.getTime()} verticalAlign='top'>
            {
                i === 0 ? (
                    <Table.Cell rowSpan={data.length}>
                        <DateCell
                            date={date}
                            price={getTotalIncomePerADay(data)}
                        >
                            {date}
                        </DateCell>
                    </Table.Cell>
                ) : ''
            }

            <Table.Cell>
                <OperationsCell>
                    {procedures}
                </OperationsCell>
            </Table.Cell>

            <Table.Cell textAlign="right">
                <PriceCell euro>
                    {totalPriceBeforeTaxes}
                </PriceCell>
            </Table.Cell>

            <Table.Cell textAlign="right">
                <strong>
                    <PriceCell euro>
                        {totalPriceAfterTaxes}
                    </PriceCell>
                </strong>
            </Table.Cell>

        </Table.Row>
    ));


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

    const totalIncome = getTotalIncomePerADay(data.flat());

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
                                    totalIncome
                                }
                            </PriceCell>
                        </strong>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
    );
};

export default DataTable;