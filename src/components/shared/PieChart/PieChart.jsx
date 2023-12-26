import _ from 'lodash'
import { useRef, useEffect } from 'react'
import { Segment, List, Grid } from 'semantic-ui-react'

export const PieChart = ({ data }) => {
  const canvasRef = useRef(null)
  const total = _.sumBy(data, item => item.value)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const outerRadius = Math.min(centerX, centerY)
    const innerRadius = outerRadius * 0.5

    let startAngle = 0

    data.forEach((entry) => {
      const sliceAngle = (entry.value / total) * 2 * Math.PI
      const endAngle = startAngle + sliceAngle

      // Draw the pie slice
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, outerRadius, startAngle, endAngle, false)
      ctx.fillStyle = entry.color
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
  }, [data])

  const listItems = data.map(({ key, label, color }) => ({
    key,
    color,
    icon: {
      name: 'circle',
      color
    },
    header: label
  }))

  return (
    <Segment padded>
      <Grid centered>
        <Grid.Row>
          <Grid.Column>
            <canvas
              ref={canvasRef}
              width={250}
              height={250}
              style={{ display: 'block', margin: 'auto' }}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column>
            <List
              relaxed
              size={'large'}
              items={listItems}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}