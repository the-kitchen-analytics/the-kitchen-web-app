import { MonthlyDataLayout } from '../../components/layouts/'
import { DataTable } from '../../components/DataTable'
import { getTableDataByMonthAndYear } from '../../services/tableDataFilterService'
import { useMonthlyData } from '../../hooks'

export const MonthlyTablePage = () => {

  const [
    filteredData, yearOptions, initialSelectedDate,
    selectedDate, setSelectedDate
  ] = useMonthlyData(getTableDataByMonthAndYear)

  return (
    <MonthlyDataLayout
      header="Главная"
      yearOptions={yearOptions}
      defaultSelectedDate={initialSelectedDate}
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
    >
      <DataTable
        data={filteredData}
      />
    </MonthlyDataLayout>
  )
}