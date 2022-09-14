import React from "react";
import { Grid } from "semantic-ui-react";
import GenericView from "./GenericView";

const AllDataView = ({ getData, component, icon }) => {

    const Component = component;

    return (
        <GenericView
            icon={icon}
            header="За всё время"
            subheader="Ваши данные за всё время"
        >
            <Grid.Row>
                <Grid.Column>
                    <Component
                        data={getData()}
                    />
                </Grid.Column>
            </Grid.Row>
        </GenericView>

    )
}

export default AllDataView;