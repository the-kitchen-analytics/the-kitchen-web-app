import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import Statistics from "../Statistics";
import DataTable from "../DataTable";
import { sum } from "../../utils/ArrayUtil";

const DefaultView = ({ tableData }) => {

    const buildStatisticsData = (tableData) => ({
        daysCount: new Set(tableData.map(entry => entry.date)).size,
        totalIncome: sum(tableData.map(it => it.totalPriceAfterTaxes)),
        operationsCount: sum(tableData.map(({ operations }) => operations.length))
    });

    return (
        <Grid centered padded stackable>
            <Grid.Row>
                <Grid.Column>
                    <DataTable
                        data={tableData}
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Segment>
                        <Statistics
                            data={buildStatisticsData(tableData)}
                        />
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

export default DefaultView;