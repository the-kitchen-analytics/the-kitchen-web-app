import { formatPrice } from '../../../utils'

export const Price = ({ children }) => (
  <>
    {
      formatPrice(children)
    }
  </>
)