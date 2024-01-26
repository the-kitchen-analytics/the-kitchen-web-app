import { Label } from 'semantic-ui-react'
import { Price } from '../../../shared/components'
import { useTheme } from '../../../shared/hooks'
import { formatDate } from '../../../shared/utils'


export const DateCell = ({ date, price = 0 }) => {
  const theme = useTheme()

  return (
    <>
      <Label {...theme} ribbon>
        <Price content={price} />
      </Label>
      <h2>{formatDate(date)}</h2>
    </>
  )
}