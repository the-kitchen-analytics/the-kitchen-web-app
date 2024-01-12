import _ from 'lodash'
import { Grid } from 'semantic-ui-react'
import { Carousel, DaySelect } from '../../shared'
import { buildDropdownOptions } from '../../../utils'

export const DailyDataLayout = (props) => {

  const { selectedDay, setSelectedDay, options, children } = props
  const selectedDayIndex = _.indexOf(options, selectedDay)

  return (
    <Grid>
      <Grid.Column
        computer={'4'}
        tablet={'6'}
        mobile={'16'}
      >
        <DaySelect
          value={selectedDay}
          options={buildDropdownOptions(options)}
          handleChange={(e, { value }) => setSelectedDay(value)}
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
            onClick: () => setSelectedDay(options[selectedDayIndex + 1])
          }}
          resetButtonProps={{
            content: 'Последний день',
            disabled: _.isEqual(selectedDay, _.first(options)),
            onClick: () => setSelectedDay(_.first(options))
          }}
          nextItemProps={{
            disabled: options.length === 0 || selectedDayIndex === 0,
            onClick: () => setSelectedDay(options[selectedDayIndex - 1])
          }}
        />
      </Grid.Column>

      <Grid.Row>
        <Grid.Column>
          {
            children
          }
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}