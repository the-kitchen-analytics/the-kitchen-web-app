import { YearFilterLayout } from '../../../components/layouts'
import { DataTable } from '../../../components/shared'
import { useReceiptContext, useReceiptsFilteredByDate } from '../../../hooks'
import { getTableDataByYear } from '../../../services/tableDataFilterService'

export const YearView = () => {
  const { workedYears } = useReceiptContext()

  const [
    filteredData,
    year,
    setYear
  ] = useReceiptsFilteredByDate(workedYears[0], getTableDataByYear)

  return (
    <YearFilterLayout
      date={year}
      setDate={setYear}
      options={workedYears}
    >
      <DataTable
        data={filteredData}
      />
    </YearFilterLayout>
  )
}