import React from "react";
import { Grid } from "semantic-ui-react";
import GenericLayout from "../../components/layouts/GenericLayout";
import SubmitDataForm from "./SubmitDataForm";

const SubmitData = ({ refreshData }) => {

    return (
        <GenericLayout
            icon="cloud upload"
            header="Отправить данные"
            subheader="Сохраните ваши данные в облаке"
        >
            <Grid.Row>
                <Grid.Column>
                    <SubmitDataForm
                        refreshData={refreshData}
                    />
                </Grid.Column>
            </Grid.Row>
        </GenericLayout>
    )
}

SubmitData.displayName = 'SubmitDataView'
export default SubmitData