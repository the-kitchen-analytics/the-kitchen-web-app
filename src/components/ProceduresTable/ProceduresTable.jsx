import { Link } from "react-router-dom";
import { Icon, Table } from "semantic-ui-react";
import { getProcedureTypeDisplayName } from "../../utils/procedures";
import { getWorkerCategoryDisplayName } from "../../utils/workerCategory";
import PriceCell from "../DataTable/PriceCell";

const TableRow = (props) => {

    const { procedure: { id, name, price, type, workerCategory, workerRate, workerIncome } } = props;

    const getWorkerCategoryContent = (workerCategory) => {
        return (
            <>
                <Icon name="star" color="yellow" />
                {workerCategory === 'top-master' && <Icon name="star" color="yellow" />}
                <strong>{getWorkerCategoryDisplayName(workerCategory)}</strong>
            </>
        );
    }

    return (
        <Table.Row>
            <Table.Cell>
                <Link to={`/dashboard/procedures/${id}`}>
                    {name}
                </Link>
            </Table.Cell>

            <Table.Cell>
                {getProcedureTypeDisplayName(type)}
            </Table.Cell>

            <Table.Cell singleLine>
                {getWorkerCategoryContent(workerCategory)}
            </Table.Cell>

            <Table.Cell textAlign='right'>
                <PriceCell>{price}</PriceCell>
            </Table.Cell>

            <Table.Cell textAlign='right'>
                <PriceCell>{workerIncome || price * workerRate}</PriceCell>
            </Table.Cell>
        </Table.Row>
    );
}

const ProceduresTable = ({ tableData = [] }) => {

    const getTableRow = (procedure) => (
        <TableRow key={procedure.id} procedure={procedure} />
    );

    return (
        <Table
            celled
            striped
            padded
        >
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Название</Table.HeaderCell>
                    <Table.HeaderCell>Тип</Table.HeaderCell>
                    <Table.HeaderCell>Категория мастера</Table.HeaderCell>
                    <Table.HeaderCell>Стоимость услуги</Table.HeaderCell>
                    <Table.HeaderCell>Заработок мастера</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {
                    tableData.map(getTableRow)
                }
            </Table.Body>

            <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan={4}>Количество услуг</Table.HeaderCell>
                    <Table.HeaderCell collapsing textAlign="right">
                        {tableData.length}
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
    );
}

export default ProceduresTable;