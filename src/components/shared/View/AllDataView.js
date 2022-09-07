import React from "react";
import { Grid } from "semantic-ui-react";
import GenericView from "./GenericView";

const AllDataView = ({ getData, component }) => {

    const Component = component;

    return (
        <GenericView header="За всё время">
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