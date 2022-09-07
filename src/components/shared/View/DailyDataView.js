import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import { DaySelect } from "../dropdown";
import GenericView from "./GenericView";

const DailyDataView = ({ getData, options, component }) => {

    const [selectedDay, setSelectedDay] = useState(options.length > 0 ? options[0].value : null)

    const Component = component;

    return (
        <GenericView
            header="За день"
        >
            <Grid.Row>
                <Grid.Column
                    tablet={4}
                    largeScreen={4}
                    widescreen={4}
                    mobile={16}
                >
                    <DaySelect
                        value={selectedDay}
                        options={options}
                        handleChange={(e, { value }) => setSelectedDay(value)}
                    />
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column>
                    <Component
                        data={getData(selectedDay)}
                    />
                </Grid.Column>
            </Grid.Row>
        </GenericView>
    )
};

export default DailyDataView;