import _ from 'lodash'
import { Grid, Segment, Statistic } from 'semantic-ui-react'
import { DonutChart, NoContent } from '../../shared/components'


export const Statistics = ({ chartData = [], statisticsData = [] }) => {

  if (_.isEmpty(statisticsData.flat())) {
    return (
      <Segment>
        <NoContent />
      </Segment>
    )
  }

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Segment>
            <DonutChart
              legend
              radius={125}
              data={chartData}
            />
          </Segment>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Segment.Group>
            {
              statisticsData.map((entries, i) => (
                <Segment key={i}>
                  <Statistic.Group size={'small'} horizontal>
                    {
                      entries.map(({ name, color, renderLabel, renderValue }) =>
                        <Statistic
                          key={name}
                          color={color}
                          label={renderLabel()}
                          value={renderValue()}
                        />
                      )
                    }
                  </Statistic.Group>
                </Segment>
              ))
            }
          </Segment.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
