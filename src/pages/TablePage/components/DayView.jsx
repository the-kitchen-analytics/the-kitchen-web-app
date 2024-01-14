import { DataTable } from '../../../components/shared'
import { DayFilterLayout } from '../../../components/layouts'
import { getTableDataByDay } from '../../../services/tableDataFilterService'
import { useReceiptContext, useReceiptsFilteredByDate } from '../../../hooks'

export const DayView = () => {
  const { workedDays } = useReceiptContext()
  const [tableData, selectedDay, setSelectedDay] = useReceiptsFilteredByDate(workedDays[0], getTableDataByDay)

  return (
    <DayFilterLayout
      selectedDay={selectedDay}
      setSelectedDay={setSelectedDay}
      options={workedDays}
    >
      <DataTable
        data={tableData}
      />
    </DayFilterLayout>
  )
}