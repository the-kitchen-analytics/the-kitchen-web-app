import React, { useState } from "react";
import { Grid, Header, Divider } from "semantic-ui-react";
import DaySelect from '../DaySelect';

const DailyDataView = ({ getData, options, component }) => {

    const [selectedDay, setSelectedDay] = useState(options.length > 0 ? options[0].value : null)

    const Component = component;

    return (
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
                    <DaySelect
                        value={selectedDay}
                        options={options}
                        handleChange={(e, { value }) => setSelectedDay(value)}
                    />
                </Grid.Column>
            </Grid.Row>

            <Divider />

            <Grid.Row>
                <Grid.Column>
                    <Component
                        data={getData(selectedDay)}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
};

export default DailyDataView;