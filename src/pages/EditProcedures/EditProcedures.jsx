import { useOutletContext } from "react-router-dom";
import { Button, Grid } from "semantic-ui-react";
import GenericLayout from "../../components/layouts/GenericLayout";
import ProceduresTable from "../../components/ProceduresTable";
import { useUserSettings } from "../../hooks";

const EditProcedures = () => {

    const { settings: { controlsSize, accentColor } } = useUserSettings();
    const { procedures } = useOutletContext();

    return (
        <GenericLayout
            icon="heart"
            header="Список услуг"
            subheader="Управляйте конфигурацией услуг"
        >

            <Grid.Row>
                <Grid.Column>
                    <Button
                        icon="plus"
                        content="Добавить"
                        size={controlsSize}
                        color={accentColor}
                    />
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column>
                    <ProceduresTable tableData={procedures} />
                </Grid.Column>
            </Grid.Row>

        </GenericLayout>
    );
}

export default EditProcedures;