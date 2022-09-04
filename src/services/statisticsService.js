import _ from "lodash";

const buildStatisticsData = (rawData) => {
    const totalIncome = _.sum(rawData.flat().map(({ totalPriceAfterTaxes }) => totalPriceAfterTaxes));
    const operationsCount = rawData.flat().length;
    const workedDays = _.uniq(rawData.flat().map(it => it.dateFormatted))
    const daysCount = workedDays.length;

    return {
        generalData: {
            daysCount,
            totalIncome,
            operationsCount,
            workedDays
        },
        averageData: daysCount > 1 ? {
            incomePerDay: totalIncome / daysCount,
            operationsCountPerDay: operationsCount / daysCount
        } : null
    }
}

export {
    buildStatisticsData
}