import _ from 'lodash'
import { Grid, Segment, Statistic } from 'semantic-ui-react'
import { NoContent, PieChart } from '../shared'

export const Statistics = ({ chartData = [], statisticsData = [] }) => {

  if (_.isEmpty(statisticsData.flat())) {
    return (
      <Segment>
        <NoContent />
      </Segment>
    )
  }

  const buildStatisticComponent = (entry) => (
    <Statistic
      key={entry.name}
      color={entry.color}
    >
      <Statistic.Value>{entry.renderValue()}</Statistic.Value>
      <Statistic.Label>{entry.renderLabel()}</Statistic.Label>
    </Statistic>
  )

  return (
    <div className="statistics">
      <Grid padded stackable>
        <Grid.Row columns={2}>
          {
            statisticsData.map((entries) => (
              <Grid.Column
                key={entries.map(it => it.name).join()}
              >
                <Statistic.Group
                  size="small"
                  horizontal
                >
                  {
                    entries.map(buildStatisticComponent)
                  }
                </Statistic.Group>
              </Grid.Column>
            ))
          }
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <PieChart data={chartData} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}