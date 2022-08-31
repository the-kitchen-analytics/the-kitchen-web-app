import React from "react";
import { Grid, Header, Divider } from "semantic-ui-react";

const withMonthlyDataView = (Component, getData, getMonthSelectElement) => (
    <Grid>
        <Grid.Row>
            <Grid.Column>
                <Header as='h1'>
                    За месяц
                </Header>
            </Grid.Column>
        </Grid.Row>

        <Grid.Row>
            <Grid.Column
                tablet={8}
                largeScreen={6}
                widescreen={8}
                mobile={16}
            >
                {
                    getMonthSelectElement()
                }
            </Grid.Column>
        </Grid.Row>

        <Divider />

        <Grid.Row>
            <Grid.Column>
                <Component
                    data={getData()}
                />
            </Grid.Column>
        </Grid.Row>
    </Grid>
)

export default withMonthlyDataView