import { Link, useNavigate } from "react-router-dom";
import { Icon, Table } from "semantic-ui-react";
import { getWorkerCategoryDisplayName } from "../../utils/workerCategory";
import PriceCell from "../DataTable/PriceCell";

const TableRow = (props) => {

    const { procedure: { id, name, price, workerCategory, workerRate, workerIncome } } = props;

    const navigate = useNavigate();

    const handleRowClick = (id) => {
        navigate(id);
    }

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
        <Table.Row onClick={() => handleRowClick(id)}>
            <Table.Cell>
                <Link to={`/dashboard/procedures/${id}`}>
                    {name}
                </Link>
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
            selectable
        >
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Название</Table.HeaderCell>
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
                    <Table.HeaderCell colSpan={3}>Количество услуг</Table.HeaderCell>
                    <Table.HeaderCell collapsing textAlign="right">
                        {tableData.length}
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
    );
}

export default ProceduresTable;