import React from "react";
import { Grid } from "semantic-ui-react";
import GenericLayout from "../GenericLayout";
import { DaySelect } from "../../shared/dropdown";

const DailyDataLayout = ({ selectedDay, setSelectedDay, options, icon, children }) => (
    <GenericLayout
        icon={icon}
        header="За день"
        subheader="Выберите день"
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
                {
                    children
                }
            </Grid.Column>
        </Grid.Row>
    </GenericLayout>
);


export default DailyDataLayout;