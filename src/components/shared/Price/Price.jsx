import { formatPrice } from '../../../utils'

export const Price = ({ content, primary = false }) => {
  const formatted = formatPrice(content)

  return primary
    ? <strong>{formatted}</strong>
    : <span>{formatted}</span>
}