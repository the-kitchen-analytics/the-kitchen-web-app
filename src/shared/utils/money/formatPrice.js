import _ from 'lodash'

const LOCALE_CODE = 'lt-LT'
const CURRENCY_CODE = 'EUR'

const CURRENCY_OPTIONS = Object.freeze({
  style: 'currency',
  currency: CURRENCY_CODE,
  minimumFractionDigits: 2
})

export const formatPrice = (price) => {
  if (!_.isNumber(price)) {
    throw new Error(`Given value is not number: ${price}`)
  }
  
  return price.toLocaleString(LOCALE_CODE, CURRENCY_OPTIONS)
}