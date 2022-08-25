import React from "react";
import { Grid, Header, Divider } from "semantic-ui-react";

const withDailyDataView = (Component, getData, getDaySelectElement) => (
    <Grid>
        <Grid.Row>
            <Grid.Column>
                <Header as='h1'>
                    За день
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
                    getDaySelectElement()
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

export default withDailyDataView;