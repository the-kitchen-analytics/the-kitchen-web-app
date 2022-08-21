import React from "react";
import { Statistic } from "semantic-ui-react";
import { sum } from "../../../utils/ArrayUtil";
import Price from "../../Price";

const Statistics = ({ data }) => {

    const buildStatisticsData = (data) => ({
        daysCount: data.length,
        totalIncome: sum(data.flat().map(({ totalPriceAfterTaxes }) => totalPriceAfterTaxes)),
        operationsCount: data.flat().length
    });

    const { daysCount, operationsCount, totalIncome } = buildStatisticsData(data);

    return (
        <div className="statistics">
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
                    color="blue"
                >
                    <Statistic.Value>
                        <Price euro>
                            {totalIncome}
                        </Price>
                    </Statistic.Value>
                    <Statistic.Label>Заработано</Statistic.Label>
                </Statistic>
            </Statistic.Group>
        </div>
    );
}

export default Statistics;