const useTableFilters = ({ getAllData, getDataByDay, getDataByMonthAndYear }) => {
  return {
    getAllTableData: () => getAllData(),
    getTableDataByDay: (day) => getDataByDay(day),
    getTableDataByMonthAndYear: (month, year) => getDataByMonthAndYear(month, year)
  }
}

export default useTableFilters