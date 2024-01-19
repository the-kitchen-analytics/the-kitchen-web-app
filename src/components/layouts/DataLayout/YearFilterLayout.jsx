import _ from 'lodash'
import { useMemo } from 'react'
import { Grid } from 'semantic-ui-react'
import { Carousel, YearSelect } from '../../shared'
import { useReceiptContext, useReceiptsFilteredByDate } from '../../../hooks'

export const YearFilterLayout = ({ getData, as: Component }) => {

  const { workedYears: options } = useReceiptContext()
  const [statistics, date, setDate] = useReceiptsFilteredByDate(options[0], getData)
  const selectedDayIndex = _.indexOf(options, date)

  const yearSelectOptions = useMemo(() => options.map(year => ({
    key: year,
    text: year,
    value: year
  })), [options])

  return (
    <Grid>
      <Grid.Column
        computer={'6'}
        tablet={'6'}
        mobile={'16'}
      >
        <YearSelect
          value={date}
          handleChange={(e, { value }) => setDate(value)}
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
          leftButton={{
            disabled: options.length === 0 || selectedDayIndex === _.lastIndexOf(options) - 1,
            onClick: () => setDate(options[selectedDayIndex + 1])
          }}
          resetButton={{
            content: 'Текущий год',
            disabled: _.isEqual(date, _.first(options)),
            onClick: () => setDate(_.first(options))
          }}
          rightButton={{
            disabled: options.length === 0 || selectedDayIndex === 0,
            onClick: () => setDate(options[selectedDayIndex - 1])
          }}
        />
      </Grid.Column>

      <Grid.Row>
        <Grid.Column>
          <Component {...statistics} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}