import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Form, Grid } from "semantic-ui-react";
import GenericLayout from "../../components/layouts/GenericLayout";
import ProceduresTable from "../../components/ProceduresTable";
import { useUserSettings } from "../../hooks";
import ProceduresFilter from "./ProceduresFilter";

const EditProcedures = () => {

    const { settings: { controlsSize, accentColor } } = useUserSettings();
    const { procedures } = useOutletContext();

    const [filteredProcedures, setFilteredProcedures] = useState(procedures);

    const handleFilterChange = (e, { value }) => {
        switch (value) {
            case 'manicure':
                setFilteredProcedures(procedures.filter(procedure => procedure.type === 'manicure'));
                break;

            case 'pedicure':
                setFilteredProcedures(procedures.filter(procedure => procedure.type === 'pedicure'));
                break;

            case 'spa':
                setFilteredProcedures(procedures.filter(procedure => procedure.type === 'spa'));
                break;

            case 'master':
                setFilteredProcedures(procedures.filter(procedure => procedure.workerCategory === 'master'));
                break;

            case 'top-master':
                setFilteredProcedures(procedures.filter(procedure => procedure.workerCategory === 'top-master'));
                break;

            case 'all':
                setFilteredProcedures(procedures);
                break;

            default:
                setFilteredProcedures([]);
                break;
        }
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
                            <Form.Button
                                fluid
                                icon="plus"
                                content="Добавить"
                                color={accentColor}
                            />

                            <Form.Field>
                                <ProceduresFilter
                                    handleChange={handleFilterChange}
                                />
                            </Form.Field>
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