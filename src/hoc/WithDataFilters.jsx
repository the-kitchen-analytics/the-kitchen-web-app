import { useDataFilters, useStatisticsFilters, useTableFilters } from '../hooks'

export default function WithDataFilters(Component, data) {

  return function WithDataFilters({ ...props }) {

    const dataFilters = useDataFilters(data, data?.groupedData)

    const {
      getAllTableData,
      getTableDataByDay,
      getTableDataByMonthAndYear
    } = useTableFilters(dataFilters)

    const {
      getAllStatisticsData,
      getStatisticsDataByMonthAndYear,
      getStatisticsDataByDay
    } = useStatisticsFilters(dataFilters)

    const newProps = {
      ...props,
      getAllTableData,
      getTableDataByDay,
      getTableDataByMonthAndYear,
      getAllStatisticsData,
      getStatisticsDataByMonthAndYear,
      getStatisticsDataByDay
    }

    return (
      <Component {...newProps} />
    )
  }
}