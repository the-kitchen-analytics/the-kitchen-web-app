import _ from 'lodash'

export default function calculateTotalPrice(procedures = []) {
  return _.sumBy(procedures, 'priceBeforeTaxes')
}