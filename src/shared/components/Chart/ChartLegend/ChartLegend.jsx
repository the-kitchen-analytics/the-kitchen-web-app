import { List } from 'semantic-ui-react'

const toListItem = ({ key, label, color }) => (
  {
    key,
    color,
    icon: {
      name: 'circle',
      color
    },
    header: label
  }
)

export const ChartLegend = ({ data }) => (
  <List
    relaxed
    size={'large'}
    items={data.map(toListItem)}
  />
)
