import { MonthAndYearFilterLayout } from '../../../components/layouts/'
import { DataTable } from '../../../components/shared'
import { getTableDataByMonthAndYear } from '../../../services/tableDataFilterService'
import { useReceiptsFilteredByDate } from '../../../hooks'
import { getCurrentMonthAndYear } from '../../../utils'

const INITIAL_DATE = getCurrentMonthAndYear()

export const MonthAndYearView = () => {
  const [
    filteredData,
    selectedDate,
    setSelectedDate
  ] = useReceiptsFilteredByDate(INITIAL_DATE, getTableDataByMonthAndYear)

  return (
    <MonthAndYearFilterLayout
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
    >
      <DataTable
        data={filteredData}
      />
    </MonthAndYearFilterLayout>
  )
}