import { MonthlyDataLayout } from '../../components/layouts/'
import { DataTable } from '../../components/DataTable'
import { getTableDataByMonthAndYear } from '../../services/tableDataFilterService'
import { useMonthlyData } from '../../hooks'

const MonthlyTableView = () => {

  const [
    filteredData, yearOptions, initialSelectedDate,
    selectedDate, setSelectedDate
  ] = useMonthlyData(getTableDataByMonthAndYear)

  return (
    <MonthlyDataLayout
      icon="home"
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

export default MonthlyTableView