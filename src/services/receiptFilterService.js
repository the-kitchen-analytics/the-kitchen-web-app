import _ from "lodash";

export const getAllData = (data) => groupAsArray(data)

export const getDataByDay = (selectedDay, data) => {
    const result = data
        .flat()
        .filter(({ dateFormatted }) => dateFormatted === selectedDay);

    return result ? groupAsArray(result) : result;
}

export const getDataByMonthAndYear = (selectedMonth, selectedYear, data) => {
    const result = data
        .flat()
        .filter(({ date }) => (date.getFullYear() === selectedYear && date.getMonth() === selectedMonth))

    return result ? groupAsArray(result) : result;
}

const groupAsObject = (data) => {
    return _.groupBy(data, 'dateFormatted');
}

const groupAsArray = (data) => {
    return Object.values(groupAsObject(data))
        .map(dataByDay => _.sortBy(dataByDay, 'dateCreated'));
}