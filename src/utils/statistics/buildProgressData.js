import _ from 'lodash'

const getType = (entry) => {
  if (entry.type) {
    return entry.type
  }

  if (!_.isEmpty(entry.types)) {
    return entry.types[0]
  }

  return 'Unknown'
}

const groupDataByType = (entries) => {
  return _.groupBy(entries.map(entry => ({
    ...entry,
    type: getType(entry)
  })), ({ type }) => type)
}

const mapEntry = ([key, value]) => ({
  key,
  value: value.length,
  totalPriceBeforeTaxes: _.sumBy(value, item => item.priceBeforeTaxes),
  totalPriceAfterTaxes: _.sumBy(value, item => item.priceAfterTaxes)
})

const buildProgressData = (data) => Object.entries(groupDataByType(data))
  .map(mapEntry)

export default buildProgressData