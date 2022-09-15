
const useTableFilters = ({ getAllData, getDataByDay, getDataByMonth }) => {
    return {
        getAllTableData: () => getAllData(),
        getTableDataByDay: (day) => getDataByDay(day),
        getTableDataByMonth: (month, year) => getDataByMonth(month, year)
    }
}

export default useTableFilters;