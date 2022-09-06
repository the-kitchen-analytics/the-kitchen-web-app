import _ from "lodash";

import Price from "../components/Price";

const buildStatisticsData = (rawData) => {
    const totalIncome = _.sum(rawData.flat().map(({ totalPriceAfterTaxes }) => totalPriceAfterTaxes));
    const operationsCount = rawData.flat().length;
    const workedDays = _.uniq(rawData.flat().map(it => it.dateFormatted))
    const daysCount = workedDays.length;

    const generalDataStatistics = Object.freeze([
        {
            color: 'yellow',
            name: 'daysCount',
            renderLabel: () => 'Дней отработано',
            renderValue: () => daysCount
        },

        {
            color: 'teal',
            name: 'operationsCount',
            renderLabel: () => 'Процедур произведено',
            renderValue: () => operationsCount
        },

        {
            color: 'green',
            name: 'totalIncome',
            renderLabel: () => 'Заработано',
            renderValue: () => (
                <Price euro>
                    {
                        totalIncome
                    }
                </Price>
            )
        }
    ]);

    if (daysCount > 1) {
        const averageStatistics = Object.freeze(
            [
                {
                    color: 'orange',
                    name: 'operationsCountPerDay',
                    renderLabel: () => 'Процедур в среднем за день',
                    renderValue: () => (operationsCount / daysCount).toFixed(0)
                },

                {
                    color: 'blue',
                    name: 'incomePerDay',
                    renderLabel: () => 'В среднем за день',
                    renderValue: () => (
                        <Price euro>
                            {
                                totalIncome / daysCount
                            }
                        </Price>
                    )
                },

                {
                    color: 'violet',
                    name: 'incomePerOperation',
                    renderLabel: () => 'В среднем за процедуру',
                    renderValue: () => (
                        <Price euro>
                            {
                                totalIncome / operationsCount
                            }
                        </Price>
                    )
                }
            ]
        )

        return [generalDataStatistics, averageStatistics]
    }

    if (daysCount === 1) {
        return [generalDataStatistics]
    }

    return [];
}

export {
    buildStatisticsData
}