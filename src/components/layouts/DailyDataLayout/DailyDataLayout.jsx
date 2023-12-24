import _ from 'lodash'
import { Grid } from 'semantic-ui-react'
import { MainLayout } from '../'
import { TimelinePicker } from '../../TimelinePicker'
import { Carousel, DaySelect } from '../../shared'
import { buildDropdownOptions } from '../../../utils/'

export const DailyDataLayout = (props) => {

  const { selectedDay, setSelectedDay, options, icon, header, children } = props
  const selectedDayIndex = _.indexOf(options, selectedDay)

  return (
    <MainLayout
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
    </MainLayout>
  )
}