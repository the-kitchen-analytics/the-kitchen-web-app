import _ from 'lodash'
import { Grid } from 'semantic-ui-react'
import { Carousel, DaySelect } from '../../shared'
import { useReceiptContext, useReceiptsFilteredByDate } from '../../../hooks'
import { buildDropdownOptions } from '../../../utils'

export const DayFilterLayout = ({ getData, as: Component }) => {

  const { workedDays: options } = useReceiptContext()
  const [componentProps, date, setDate] = useReceiptsFilteredByDate(options[0], getData)
  const selectedDayIndex = _.indexOf(options, date)

  return (
    <Grid>
      <Grid.Column
        computer={'4'}
        tablet={'6'}
        mobile={'16'}
      >
        <DaySelect
          value={date}
          options={buildDropdownOptions(options)}
          handleChange={(e, { value }) => setDate(value)}
        />
      </Grid.Column>

      <Grid.Column
        computer={'6'}
        tablet={'10'}
        mobile={'16'}
        textAlign="right"
        floated="right"
      >
        <Carousel
          previousItemProps={{
            disabled: options.length === 0 || selectedDayIndex === _.lastIndexOf(options) - 1,
            onClick: () => setDate(options[selectedDayIndex + 1])
          }}
          resetButtonProps={{
            content: 'Последний день',
            disabled: _.isEqual(date, _.first(options)),
            onClick: () => setDate(_.first(options))
          }}
          nextItemProps={{
            disabled: options.length === 0 || selectedDayIndex === 0,
            onClick: () => setDate(options[selectedDayIndex - 1])
          }}
        />
      </Grid.Column>

      <Grid.Row>
        <Grid.Column>
          <Component {...componentProps} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}