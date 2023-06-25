import { Grid } from 'semantic-ui-react'
import DashboardLayout from '../DashboardLayout'
import { DaySelect } from '../../shared/dropdown'
import { buildDropdownOptions } from '../../../utils/ui/dropdown'
import { Carousel } from '../../ui'
import _ from 'lodash'
import TimelinePicker from '../../TimelinePicker'

const DailyDataLayout = ({ selectedDay, setSelectedDay, options, icon, header, children }) => {

  const selectedDayIndex = _.indexOf(options, selectedDay)

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
          tablet={4}
          largeScreen={4}
          widescreen={4}
          mobile={16}
        >
          <DaySelect
            value={selectedDay}
            options={buildDropdownOptions(options)}
            handleChange={(e, { value }) => setSelectedDay(value)}
          />
        </Grid.Column>

        <Grid.Column
          width={8}
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
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          {
            children
          }
        </Grid.Column>
      </Grid.Row>
    </DashboardLayout>
  )
}

export default DailyDataLayout
