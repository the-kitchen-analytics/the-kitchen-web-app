import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import Statistics from "../Statistics";
import DataTable from "../DataTable";
import { sum } from "../../utils/ArrayUtil";

const DefaultView = ({ groupedData }) => {

    const buildStatisticsData = (groupedData) => ({
        daysCount: Object.keys(groupedData).length,
        totalIncome: sum(Object.values(groupedData).flat().map(({ totalPriceAfterTaxes }) => totalPriceAfterTaxes)),
        operationsCount: Object.values(groupedData).flat().length
    });

    return (
        <Grid centered padded stackable>
            <Grid.Row>
                <Grid.Column>
                    <DataTable
                        groupedData={groupedData}
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Segment>
                        <Statistics
                            data={buildStatisticsData(groupedData)}
                        />
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

export default DefaultView;