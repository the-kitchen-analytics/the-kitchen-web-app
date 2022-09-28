import _ from "lodash";

export const getAllData = (groupedData) => Object.values(groupedData)

export const getDataByDay = (selectedDay, groupedData) => {
    const result = groupedData[selectedDay]

    return result || [];
}

export const getDataByMonthAndYear = (selectedMonth, selectedYear, data) => {
    const result = data
        .flat()
        .filter(({ date }) => (date.getFullYear() === selectedYear && date.getMonth() === selectedMonth))

    return result ? Object.values(_.groupBy(result, 'dateFormatted')) : result;
}