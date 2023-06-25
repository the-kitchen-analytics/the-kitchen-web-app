import _ from 'lodash'

const buildProgressData = (data) =>
  Object.entries(_.groupBy(data, data => data.type))
    .map(([key, value]) => ({
      key,
      value: value.length,
      totalPriceBeforeTaxes: _.sumBy(value, item => item.priceBeforeTaxes),
      totalPriceAfterTaxes: _.sumBy(value, item => item.priceAfterTaxes)
    }))

export default buildProgressData