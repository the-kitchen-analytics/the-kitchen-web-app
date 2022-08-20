import React from "react";
import { Statistic } from "semantic-ui-react";
import Price from "../Price";

const Statistics = ({ data }) => (
    <div className="statistics">
        <Statistic.Group horizontal>
            <Statistic
                color="yellow"
            >
                <Statistic.Value>{data.daysCount}</Statistic.Value>
                <Statistic.Label>Дней отработано</Statistic.Label>
            </Statistic>
            <Statistic
                color="teal"
            >
                <Statistic.Value>{data.operationsCount}</Statistic.Value>
                <Statistic.Label>Процедур произведено</Statistic.Label>
            </Statistic>
            <Statistic
                color="blue"
            >
                <Statistic.Value>
                    <Price euro>
                        {data.totalIncome}
                    </Price>
                </Statistic.Value>
                <Statistic.Label>Заработано</Statistic.Label>
            </Statistic>
        </Statistic.Group>
    </div>
);

export default Statistics;