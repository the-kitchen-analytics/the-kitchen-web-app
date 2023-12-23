import { buildPrice } from '../../../utils/money'

export const Price = ({ children, euro }) => (
  <>
    {
      buildPrice(children, euro ? '€' : '')
    }
  </>
)