import React from "react";
import { Grid } from "semantic-ui-react";
import { GenericView } from "../../components/shared/View";
import SubmitDataForm from "./SubmitDataForm";

const SubmitDataView = ({ refreshData }) => {

    return (
        <GenericView
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
        </GenericView>
    )
}

SubmitDataView.displayName = 'SubmitDataView'
export default SubmitDataView