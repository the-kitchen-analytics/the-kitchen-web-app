import { Button } from 'semantic-ui-react'
import { useLocation, useNavigate } from 'react-router-dom'

const items = [
  {
    name: 'daily',
    content: 'За день'
  },
  {
    name: 'monthly',
    content: 'За месяц'
  },
  {
    name: 'all',
    content: 'За всё время'
  }
]

export const TimelinePicker = () => {

  const location = useLocation()
  const navigate = useNavigate()
  const pathNames = location.pathname.split('/')

  const activePath = ['daily', 'monthly']
    .find(path => pathNames.includes(path)) || 'all'

  return (
    <Button.Group
      basic
      fluid
      widths={items.length}
    >
      {
        items.map(({ name, content }) => (
          <Button
            key={name}
            active={name === activePath}
            content={content}
            onClick={() => navigate(`../${name}`, { replace: true })}
          />
        ))
      }
    </Button.Group>
  )
}