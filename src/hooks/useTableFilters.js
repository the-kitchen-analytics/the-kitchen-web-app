
const useTableFilters = ({ getAllData, getDataByDay, getDataByMonth }) => {
    return {
        getAllTableData: () => getAllData(),
        getTableDataByDay: (day) => getDataByDay(day),
        getTableDataByMonth: (month) => getDataByMonth(month)
    }
}

export default useTableFilters;