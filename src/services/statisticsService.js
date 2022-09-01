import _ from "lodash";

const buildStatisticsData = (rawData) => {

    const daysCount = rawData.length;
    const totalIncome = _.sum(rawData.flat().map(({ totalPriceAfterTaxes }) => totalPriceAfterTaxes));
    const operationsCount = rawData.flat().length;
    const workedDays = rawData.flat().map(({ date }) => date);

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