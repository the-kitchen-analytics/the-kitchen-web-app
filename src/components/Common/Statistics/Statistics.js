import React from "react";
import { Grid, Segment, Statistic } from "semantic-ui-react";
import Price from "../../Price";
import { NoContentView } from "../../View";

const Statistics = ({ data: { generalData, averageData } }) => {

    if (generalData === null && averageData === null) {
        return (
            <Segment
                basic
                padded
                textAlign="center"
            >
                <NoContentView />
            </Segment>
        )
    }

    const { daysCount, operationsCount, totalIncome } = generalData;

    return (
        <div className="statistics">
            <Grid padded stackable>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <Statistic.Group horizontal>
                            {
                                daysCount === null || daysCount === undefined ? '' : (
                                    <Statistic
                                        color="yellow"
                                    >
                                        <Statistic.Value>{daysCount}</Statistic.Value>
                                        <Statistic.Label>Дней отработано</Statistic.Label>
                                    </Statistic>
                                )
                            }

                            <Statistic
                                color="teal"
                            >
                                <Statistic.Value>{operationsCount}</Statistic.Value>
                                <Statistic.Label>Процедур произведено</Statistic.Label>
                            </Statistic>

                            <Statistic
                                color="green"
                            >
                                <Statistic.Value>
                                    <Price euro>
                                        {totalIncome}
                                    </Price>
                                </Statistic.Value>
                                <Statistic.Label>Заработано</Statistic.Label>
                            </Statistic>
                        </Statistic.Group>
                    </Grid.Column>

                    {
                        averageData ? (
                            <Grid.Column>
                                <Statistic.Group horizontal>

                                    <Statistic
                                        color="orange"
                                    >
                                        <Statistic.Value>{averageData.operationsCountPerDay.toFixed(0)}</Statistic.Value>
                                        <Statistic.Label>Процедур в среднем за день</Statistic.Label>
                                    </Statistic>

                                    <Statistic
                                        color="blue"
                                    >
                                        <Statistic.Value>
                                            <Price euro>
                                                {averageData.incomePerDay}
                                            </Price>
                                        </Statistic.Value>
                                        <Statistic.Label>В среднем за день</Statistic.Label>
                                    </Statistic>

                                </Statistic.Group>
                            </Grid.Column>
                        ) : ''
                    }
                </Grid.Row>
            </Grid>
        </div>
    );
}

export default Statistics;