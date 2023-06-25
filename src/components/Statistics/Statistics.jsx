import _ from 'lodash'
import { Grid, Segment, Statistic } from 'semantic-ui-react'
import NoContent from '../../pages/NoContent'
import StatisticsProgress from './StatisticsProgress'

const Statistics = ({ progressData = [], statisticsData = [] }) => {

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
        {
          !_.isEmpty(progressData) && (
            <Grid.Row>
              <Grid.Column>
                <StatisticsProgress data={progressData} />
              </Grid.Column>
            </Grid.Row>
          )
        }
      </Grid>
    </div>
  )
}

export default Statistics