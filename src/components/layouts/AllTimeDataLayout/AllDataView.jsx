import React from "react";
import { Grid } from "semantic-ui-react";
import GenericLayout from "../GenericLayout";

const AllTimeDataLayout = ({ component, icon, content, children }) => (
    <GenericLayout
        icon={icon}
        header="За всё время"
        subheader="Ваши данные за всё время"
    >
        <Grid.Row>
            <Grid.Column>
                {
                    content || children
                }
            </Grid.Column>
        </Grid.Row>
    </GenericLayout>

);

export default AllTimeDataLayout;