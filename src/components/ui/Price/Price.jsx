import { buildPrice } from '../../../utils/money'

const Price = ({ children, euro }) => (
  <>
    {
      buildPrice(children, euro ? '€' : '')
    }
  </>
)

export default Price