export const useTableFilters = ({ getAllData, getDataByDay, getDataByMonthAndYear }) => ({
  getAllTableData: () => getAllData(),
  getTableDataByDay: (day) => getDataByDay(day),
  getTableDataByMonthAndYear: (month, year) => getDataByMonthAndYear(month, year)
})