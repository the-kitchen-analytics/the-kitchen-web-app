import _ from 'lodash'
import { Grid, Segment, Statistic } from 'semantic-ui-react'
import { NoContent, PieChart } from '../'

export const Statistics = ({ chartData = [], statisticsData = [] }) => {

  if (_.isEmpty(statisticsData.flat())) {
    return (
      <Segment padded>
        <NoContent />
      </Segment>
    )
  }

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Segment padded>
            <PieChart data={chartData} />
          </Segment>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Segment.Group>
            {
              statisticsData.map((entries, i) => (
                <Segment key={i} padded>
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