import { useNavigate } from "react-router-dom";
import { Button, Table } from "semantic-ui-react";
import { getWorkerCategoryDisplayName } from "../../utils/workerCategory";
import PriceCell from "../DataTable/PriceCell";

const EditButton = ({ id }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(id);
    }

    return <Button
        icon="edit"
        onClick={handleClick}
    />
}

const TableRow = ({ procedure: { id, name, price, workerCategory, workerRate } }) => (
    <Table.Row>
        <Table.Cell>
            <Button.Group basic>
                <EditButton
                    id={id}
                />
                <Button
                    icon="trash"
                />
            </Button.Group>
        </Table.Cell>
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell textAlign='right'>
            <PriceCell>{price}</PriceCell>
        </Table.Cell>
        <Table.Cell>
            {getWorkerCategoryDisplayName(workerCategory)}
        </Table.Cell>
        <Table.Cell textAlign='right'>
            <PriceCell>{price * workerRate}</PriceCell>
        </Table.Cell>
    </Table.Row>
)

const ProceduresTable = ({ tableData = [] }) => {

    const getTableRow = (procedure) => (
        <TableRow key={procedure.id} procedure={procedure} />
    )

    return (
        <Table
            celled
            striped
            padded
        >
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Действия</Table.HeaderCell>
                    <Table.HeaderCell>Название</Table.HeaderCell>
                    <Table.HeaderCell>Стоимость</Table.HeaderCell>
                    <Table.HeaderCell>Категория мастера</Table.HeaderCell>
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