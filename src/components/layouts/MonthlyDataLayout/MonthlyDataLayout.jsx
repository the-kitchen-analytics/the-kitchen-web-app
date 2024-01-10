import _ from 'lodash'
import { useMemo } from 'react'
import { Grid } from 'semantic-ui-react'
import { FIRST_MONTH_INDEX, LAST_MONTH_INDEX } from '../../../data/monthIndexes'
import { MonthSelect, YearSelect } from '../../shared/dropdown'
import { Carousel } from '../../shared'
import { MainLayout } from '../MainLayout'
import { TimelinePicker } from '../../TimelinePicker'

export const MonthlyDataLayout = (props) => {

  const {
    header, content, children,
    defaultSelectedDate, selectedDate, setSelectedDate,
    yearOptions
  } = props

  const setSelectedMonth = (month) => {
    setSelectedDate((selectedDate) => ({ ...selectedDate, month }))
  }

  const setSelectedYear = (year) => {
    setSelectedDate((selectedDate) => ({ ...selectedDate, year }))
  }

  const yearSelectOptions = useMemo(() => yearOptions.map(year => ({
    key: year,
    text: year,
    value: year
  })), [yearOptions])

  return (
    <MainLayout header={header}>
      <Grid.Column width={'16'}>
        <TimelinePicker />
      </Grid.Column>

      <Grid.Column
        computer={'4'}
        tablet={'4'}
        mobile={'16'}
      >
        <MonthSelect
          value={selectedDate.month}
          handleChange={(e, { value }) => setSelectedMonth(value)}
          disabled={yearSelectOptions <= 1}
        />
      </Grid.Column>

      <Grid.Column
        computer={'4'}
        tablet={'4'}
        mobile={'16'}
      >
        <YearSelect
          value={selectedDate.year}
          handleChange={(e, { value }) => setSelectedYear(value)}
          options={yearSelectOptions}
        />
      </Grid.Column>

      <Grid.Column
        computer={'8'}
        tablet={'8'}
        mobile={'16'}
        textAlign={'right'}
        floated={'right'}
      >
        <Carousel
          previousItemProps={{
            disabled: yearSelectOptions.length === 0 || selectedDate.month <= FIRST_MONTH_INDEX,
            onClick: () => setSelectedMonth(selectedDate.month - 1)
          }}
          resetButtonProps={{
            content: 'Текущий месяц',
            disabled: _.isEqual(defaultSelectedDate, selectedDate),
            onClick: () => setSelectedDate(defaultSelectedDate)
          }}
          nextItemProps={{
            disabled: yearSelectOptions.length === 0 || selectedDate.month >= LAST_MONTH_INDEX,
            onClick: () => setSelectedMonth(selectedDate.month + 1)
          }}
        />
      </Grid.Column>

      <Grid.Row>
        <Grid.Column>
          {
            content || children
          }
        </Grid.Column>
      </Grid.Row>
    </MainLayout>
  )
}