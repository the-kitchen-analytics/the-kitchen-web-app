import { Container, Grid } from 'semantic-ui-react'
import { ChartLegend } from '../ChartLegend'
import { calculateArcs, describeArc, sortChartData } from './helpers'

const DEFAULT_RADIUS = 125

const arcToPath = arc => (
  <path
    key={arc.color}
    d={describeArc(arc.innerRadius, arc.outerRadius, arc.startAngle, arc.endAngle)}
    fill={arc.color}
  />
)

export const DonutChart = ({ data, radius = DEFAULT_RADIUS, legend = false }) => {
  const sortedData = sortChartData(data)
  const arcs = calculateArcs(sortedData, radius)

  return (
    <Grid columns={1}>
      <Grid.Column>
        <Container textAlign={'center'}>
          <svg width={radius * 2} height={radius * 2}>
            <g transform={`translate(${radius},${radius})`}>
              {
                arcs.map(arcToPath)
              }
            </g>
          </svg>
        </Container>
      </Grid.Column>
      {
        legend && (
          <Grid.Column>
            <ChartLegend data={sortedData} />
          </Grid.Column>
        )
      }
    </Grid>
  )
}
