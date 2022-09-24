import React from "react";
import { Grid, Segment, Statistic } from "semantic-ui-react";
import NoContent from "../../pages/NoContent";

import _ from "lodash";

const Statistics = ({ data = [] }) => {

    if (_.isEmpty(data.flat())) {
        return (
            <Segment>
                <NoContent />
            </Segment>
        )
    }

    const buildStatisticComponent = (entry) => (
        <Statistic
            key={entry.name}
            color={entry.color}
        >
            <Statistic.Value>{entry.renderValue()}</Statistic.Value>
            <Statistic.Label>{entry.renderLabel()}</Statistic.Label>
        </Statistic>
    )

    return (
        <div className="statistics">
            <Grid padded stackable>
                <Grid.Row columns={2}>
                    {
                        data.map((entries, i) => (
                            <Grid.Column
                                key={entries.map(it => it.name).join()}
                            >
                                <Statistic.Group
                                    size="small"
                                    horizontal
                                >
                                    {
                                        entries.map(buildStatisticComponent)
                                    }
                                </Statistic.Group>
                            </Grid.Column>
                        ))
                    }
                </Grid.Row>
            </Grid>
        </div>
    );
}

export default Statistics;