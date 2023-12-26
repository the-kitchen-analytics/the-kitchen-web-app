import { List } from 'semantic-ui-react'

export const ChartLegend = ({ data }) =>{
  const listItems = data.map(({ key, label, color }) => (
    {
      key,
      color,
      icon: {
        name: 'circle',
        color
      },
      header: label
    }
  ))
  
  return (
    <List
      relaxed
      size={'large'}
      items={listItems}
    />
  )
  
}
