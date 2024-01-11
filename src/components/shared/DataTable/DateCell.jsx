import { Label } from 'semantic-ui-react'
import { Price } from '../'
import { useUserSettings } from '../../../hooks'
import { formatDate } from '../../../utils'

export const DateCell = ({ children, price = 0 }) => {

  const { settings: { accentColor } } = useUserSettings()

  return (
    <>
      <Label ribbon size="large" color={accentColor}>
        <Price content={price} />
      </Label>
      <h2>{formatDate(children)}</h2>
    </>
  )
}