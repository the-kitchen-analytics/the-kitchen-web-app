import _ from 'lodash'
import { getHexByColorName } from '../../../utils'

export const sortChartData = (data) => _.orderBy(data, 'value', 'desc')

export const describeArc = (innerRadius, outerRadius, startAngle, endAngle) => {
  const startCos = Math.cos(startAngle)
  const startSin = Math.sin(startAngle)
  const endCos = Math.cos(endAngle)
  const endSin = Math.sin(endAngle)

  const startInnerX = innerRadius * startCos
  const startInnerY = innerRadius * startSin
  const startOuterX = outerRadius * startCos
  const startOuterY = outerRadius * startSin

  const endInnerX = innerRadius * endCos
  const endInnerY = innerRadius * endSin
  const endOuterX = outerRadius * endCos
  const endOuterY = outerRadius * endSin

  const largeArcFlag = endAngle - startAngle <= Math.PI ? '0' : '1'

  return [
    `M ${startInnerX},${startInnerY}`,
    `L ${startOuterX},${startOuterY}`,
    `A ${outerRadius},${outerRadius} 0 ${largeArcFlag},1 ${endOuterX},${endOuterY}`,
    `L ${endInnerX},${endInnerY}`,
    `A ${innerRadius},${innerRadius} 0 ${largeArcFlag},0 ${startInnerX},${startInnerY}`,
    'Z'
  ].join(' ')
}

const calculateTotal = data => _.sumBy(data, item => item.value)

export const calculateArcs = (data, radius) => {
  const total = calculateTotal(data)
  let cumulativePercent = 0

  return data.map(({ value, color }) => {
    const percent = value / total
    const arc = {
      startAngle: cumulativePercent * 2 * Math.PI,
      endAngle: (cumulativePercent + percent) * 2 * Math.PI,
      innerRadius: radius * 0.5,
      outerRadius: radius,
      color: getHexByColorName(color)
    }
    cumulativePercent += percent
    return arc
  })
}