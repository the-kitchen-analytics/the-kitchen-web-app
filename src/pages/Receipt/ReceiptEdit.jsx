import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { Divider, Form, Grid, Segment, Table } from "semantic-ui-react";
import PriceCell from "../../components/DataTable/PriceCell";
import GenericLayout from "../../components/layouts/GenericLayout"
import ProceduresList from "../../components/ProceduresList/ProceduresList";
import { ErrorMessage } from "../../components/ui";
import { GoBackButton } from "../../components/ui/Button";
import { usePostData, useUserSettings } from "../../hooks";
import { deleteReceiptById } from "../../services/receiptService";
import { calculateTotalPrice, calculateTotalWorkerIncome } from "../../utils/money";
import NoContent from "../NoContent";

const ReceiptEdit = () => {

    const { id } = useParams();
    const { getReceiptById } = useOutletContext();
    const { settings: { controlsSize } } = useUserSettings();
    const [isLoading, error, postData] = usePostData();
    const navigate = useNavigate();
    const receipt = getReceiptById(id);

    if (!receipt) {
        return <NoContent />
    }

    const header = `Запись от ${receipt.dateFormatted}`;

    const tableData = [
        {
            key: 'totalPrice',
            title: 'Стоимость услуги',
            price: calculateTotalPrice(receipt.procedures)
        },
        {
            key: 'totalWorkerIncome',
            title: 'Заработок мастера',
            price: calculateTotalWorkerIncome(receipt.procedures)
        },
    ];

    const handleDeleteButtonClick = async () => {
        if (window.confirm('Вы действительно хотите удалить запись?')) {
            await postData(deleteReceiptById, id);
            navigate(-1);
        }
    }

    return (
        <GenericLayout
            header={header}
            subheader="Детализация записи клиента"
        >
            <Grid.Row>
                <Grid.Column>
                    {
                        error && <ErrorMessage message={error.message} />
                    }

                    <Segment>
                        <ProceduresList
                            listProps={{
                                // divided: true,
                                relaxed: true,
                                bulleted: true,
                            }}
                            procedures={receipt.procedures}
                            shouldDisplayProcedurePriceInTable
                        />
                    </Segment>

                    <Divider hidden />

                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell colSpan='2'>
                                    Итого
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {
                                tableData.map(({ key, title, price }) => (
                                    <Table.Row key={key}>
                                        <Table.Cell>
                                            {title}
                                        </Table.Cell>
                                        <Table.Cell collapsing>
                                            <strong>
                                                <PriceCell>
                                                    {price}
                                                </PriceCell>
                                            </strong>
                                        </Table.Cell>
                                    </Table.Row>
                                ))
                            }
                        </Table.Body>
                    </Table>
                </Grid.Column>

            </Grid.Row>

            <Grid.Row>
                <Grid.Column>
                    <Form loading={isLoading}>
                        <Form.Group widths="equal">
                            <Form.Field>
                                <GoBackButton />
                            </Form.Field>

                            <Form.Button
                                fluid
                                size={controlsSize}
                                icon="trash"
                                type="button"
                                negative
                                content="Удалить"
                                onClick={handleDeleteButtonClick}
                            />
                        </Form.Group>
                    </Form>
                </Grid.Column>
            </Grid.Row>

        </GenericLayout>
    );
}

export default ReceiptEdit;