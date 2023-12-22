import _ from 'lodash'

export const buildPriceString = (text, price, currencySymbol = '€') => {
  return `${text} (${currencySymbol}${price.toFixed(2)})`
}

export const buildPrice = (price, currencySymbol = '€') => {
  return `${currencySymbol} ${_.isNumber(price) ? price.toFixed(2) : 'NaN'}`
}