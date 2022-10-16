import React from "react";
import { Grid } from "semantic-ui-react";
import DashboardLayout from "../DashboardLayout";
import { DaySelect } from "../../shared/dropdown";
import { buildDropdownOptions } from "../../../utils/ui/dropdown";

const DailyDataLayout = ({ selectedDay, setSelectedDay, options, icon, children }) => (
    <DashboardLayout
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
                    options={buildDropdownOptions(options)}
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
    </DashboardLayout>
);


export default DailyDataLayout;