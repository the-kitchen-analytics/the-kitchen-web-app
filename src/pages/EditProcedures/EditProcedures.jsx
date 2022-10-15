import _ from "lodash";
import { useEffect } from "react";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Form, Grid, Button } from "semantic-ui-react";
import GenericLayout from "../../components/layouts/GenericLayout";
import ProceduresTable from "../../components/ProceduresTable";
import { useUserSettings } from "../../hooks";
import ProceduresFilter from "./ProceduresFilter";

const EditProcedures = () => {

    const { settings: { controlsSize, accentColor } } = useUserSettings();
    const { procedures } = useOutletContext();

    const [filteredProcedures, setFilteredProcedures] = useState(procedures);
    const [order, setOrder] = useState('');

    useEffect(() => {
        switch (order) {
            case 'asc':
                setFilteredProcedures(prev => _.orderBy(prev, 'name', order));
                break;
            case 'desc':
                setFilteredProcedures(prev => _.orderBy(prev, 'name', order));
                break;
            default:
                break;
        }
    }, [order]);

    const handleFilterChange = (e, { value }) => {

        let filteredProcedures = [];

        switch (value) {
            case 'manicure':
                filteredProcedures = procedures.filter(procedure => procedure.type === 'manicure');
                break;

            case 'pedicure':
                filteredProcedures = procedures.filter(procedure => procedure.type === 'pedicure');
                break;

            case 'spa':
                filteredProcedures = procedures.filter(procedure => procedure.type === 'spa');
                break;

            case 'master':
                filteredProcedures = procedures.filter(procedure => procedure.workerCategory === 'master');
                break;

            case 'top-master':
                filteredProcedures = procedures.filter(procedure => procedure.workerCategory === 'top-master');
                break;

            case '1/2':
                filteredProcedures = procedures.filter(procedure => _.startsWith(procedure.name, '1/2'));
                break;

            case 'all':
                filteredProcedures = procedures;
                break;

            default:
                break;
        }

        if (order) {
            setFilteredProcedures(_.orderBy(filteredProcedures, 'name', order));
        } else {
            setFilteredProcedures(filteredProcedures);
        }
    }

    const sort = (order) => {
        setOrder(order);
    }

    return (
        <GenericLayout
            icon="heart"
            header="Список услуг"
            subheader="Управляйте конфигурацией услуг"
        >
            <Grid.Row>
                <Grid.Column>
                    <Form size={controlsSize}>
                        <Form.Group widths="equal">
                            <Form.Field>
                                <ProceduresFilter
                                    handleChange={handleFilterChange}
                                    size={controlsSize}
                                />
                            </Form.Field>

                            <Form.Field>
                                <Button.Group
                                    fluid
                                    size={controlsSize}
                                >
                                    <Button
                                        icon="sort content descending"
                                        active={order === 'desc'}
                                        onClick={() => sort('desc')}
                                    />
                                    <Button
                                        icon="sort content ascending"
                                        active={order === 'asc'}
                                        onClick={() => sort('asc')}
                                    />
                                </Button.Group>
                            </Form.Field>

                            <Form.Button
                                fluid
                                icon="plus"
                                content="Добавить"
                                color={accentColor}
                                size={controlsSize}
                            />
                        </Form.Group>
                    </Form>

                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column>
                    <ProceduresTable tableData={filteredProcedures} />
                </Grid.Column>
            </Grid.Row>

        </GenericLayout>
    );
}

export default EditProcedures;