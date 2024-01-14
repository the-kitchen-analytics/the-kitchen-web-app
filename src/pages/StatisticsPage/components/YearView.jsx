import { YearFilterLayout } from '../../../components/layouts'
import { Statistics } from './Statistics'
import { useReceiptContext, useReceiptsFilteredByDate } from '../../../hooks'
import { getStatisticsByYear } from '../../../services/statisticsDataFilterService'

export const YearView = () => {
  const { workedYears } = useReceiptContext()

  const [
    statistics,
    year,
    setYear
  ] = useReceiptsFilteredByDate(workedYears[0], getStatisticsByYear)

  return (
    <YearFilterLayout
      date={year}
      setDate={setYear}
      options={workedYears}
    >
      <Statistics
        {...statistics}
      />
    </YearFilterLayout>
  )
}