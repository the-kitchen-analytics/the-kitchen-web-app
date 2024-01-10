import { DataTable } from '../../components/DataTable'
import { DailyDataLayout } from '../../components/layouts'
import { getTableDataByDay } from '../../services/tableDataFilterService'
import { useDailyData } from '../../hooks'

export const DailyTablePage = () => {

  const [tableData, workedDays, selectedDay, setSelectedDay] = useDailyData(getTableDataByDay)

  return (
    <div className="view">
      <DailyDataLayout
        header="Главная"
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        options={workedDays}
        component={DailyTablePage}
      >
        <DataTable
          data={tableData}
        />
      </DailyDataLayout>
    </div>
  )
}