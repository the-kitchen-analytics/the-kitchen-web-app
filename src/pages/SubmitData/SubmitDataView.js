import React from "react";
import { Grid } from "semantic-ui-react";
import { GenericView } from "../../components/shared/View";
import SubmitDataForm from "./SubmitDataForm";

const SubmitDataView = () => {

    return (
        <GenericView header="Отправить данные">
            <Grid.Row>
                <Grid.Column>
                    <SubmitDataForm />
                </Grid.Column>
            </Grid.Row>
        </GenericView>
    )
}

SubmitDataView.displayName = 'SubmitDataView'
export default SubmitDataView