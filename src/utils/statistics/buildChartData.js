import _ from 'lodash'
import { getColorNameByIndex } from '../ui'
import { getProcedureTypeDisplayName } from '../procedures'
import { formatPrice } from '../money'

const getType = (entry) => {
  if (entry.type) {
    return entry.type
  }

  if (!_.isEmpty(entry.types)) {
    return entry.types[0]
  }

  return 'Unknown'
}

export const getChartLabel = (type, price) => {
  return `${getProcedureTypeDisplayName(type)} (${formatPrice(price)})`
}

const groupDataByType = (entries) => {
  return _.groupBy(entries.map(entry => ({
    ...entry,
    type: getType(entry)
  })), ({ type }) => type)
}

const mapEntry = ([key, value], i) => {

  const totalIncome = _.sumBy(value, item => item.priceAfterTaxes)

  return {
    key,
    name: key,
    value: totalIncome,
    label: getChartLabel(key, totalIncome),
    color: getColorNameByIndex(i),
  }
}

export const buildChartData = (data) => Object.entries(groupDataByType(data))
  .map(mapEntry)