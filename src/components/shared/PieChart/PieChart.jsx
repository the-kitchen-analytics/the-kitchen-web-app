import { useRef, useEffect } from 'react'
import { Segment, Grid } from 'semantic-ui-react'
import { getHexByColorName } from '../../../utils'
import { ChartLegend } from './ChartLegend'
import { calculateTotal, sortChartData } from './helpers'

const CANVAS_SIZE = 250

export const PieChart = ({ data }) => {
  const canvasRef = useRef(null)
  const total = calculateTotal(data)
  const sortedData = sortChartData(data)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const outerRadius = Math.min(centerX, centerY)
    const innerRadius = outerRadius * 0.5

    let startAngle = 0

    sortedData.forEach((entry) => {
      const sliceAngle = (entry.value / total) * 2 * Math.PI
      const endAngle = startAngle + sliceAngle

      // Draw the pie slice
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, outerRadius, startAngle, endAngle, false)
      ctx.fillStyle = getHexByColorName(entry.color)
      ctx.fill()
      ctx.closePath()
      startAngle = endAngle
    })

    // Draw the inner circle (hole)
    ctx.beginPath()
    ctx.arc(centerX, centerY, innerRadius, 0, 2 * Math.PI)
    ctx.fillStyle = 'white'
    ctx.fill()
    ctx.closePath()
  }, [sortedData])

  return (
    <Segment padded>
      <Grid centered>
        <Grid.Row>
          <Grid.Column>
            <canvas
              ref={canvasRef}
              width={CANVAS_SIZE}
              height={CANVAS_SIZE}
              style={{ display: 'block', margin: 'auto' }}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column>
            <ChartLegend data={sortedData} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}
