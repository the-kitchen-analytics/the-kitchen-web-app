import _ from 'lodash'
import { useMemo } from 'react'
import { Grid } from 'semantic-ui-react'
import { FIRST_MONTH_INDEX, LAST_MONTH_INDEX } from '../../../data/monthIndexes'
import { MonthSelect, YearSelect } from '../../shared/dropdown'
import { Carousel } from '../../ui'
import DashboardLayout from '../DashboardLayout/DashboardLayout'
import TimelinePicker from '../../TimelinePicker'

const MonthlyDataLayout = ({
  icon, header, content, children,
  defaultSelectedDate, selectedDate, setSelectedDate,
  yearOptions
}) => {

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
    <DashboardLayout
      icon={icon}
      header={header}
    >
      <Grid.Row>
        <Grid.Column>
          <TimelinePicker />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns="equal">
        <Grid.Column
          width={4}
        >
          <MonthSelect
            value={selectedDate.month}
            handleChange={(e, { value }) => setSelectedMonth(value)}
            disabled={yearSelectOptions <= 1}
          />
        </Grid.Column>

        <Grid.Column
          width={4}
        >
          <YearSelect
            value={selectedDate.year}
            handleChange={(e, { value }) => setSelectedYear(value)}
            options={yearSelectOptions}
          />
        </Grid.Column>

        <Grid.Column
          width={6}
          textAlign="right"
          floated="right"
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
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          {
            content || children
          }
        </Grid.Column>
      </Grid.Row>
    </DashboardLayout>
  )
}

export default MonthlyDataLayout