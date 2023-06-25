import DataTable from '../../components/DataTable'
import DailyDataLayout from '../../components/layouts/DailyDataLayout'
import { getTableDataByDay } from '../../services/tableDataFilterService'
import { useDailyData } from '../../hooks'

const DailyTableView = () => {

  const [tableData, workedDays, selectedDay, setSelectedDay] = useDailyData(getTableDataByDay)

  return (
    <div className="view">
      <DailyDataLayout
        icon="home"
        header="Главная"
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        options={workedDays}
        component={DailyTableView}
      >
        <DataTable
          data={tableData}
        />
      </DailyDataLayout>
    </div>
  )
}

export default DailyTableView