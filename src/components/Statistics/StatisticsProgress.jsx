import { Progress, Segment } from 'semantic-ui-react'
import { sumBy } from 'lodash'
import { getProcedureTypeDisplayName, getRandomFancyColorName, formatPrice } from '../../utils'

const getLabel = (type, price) => {
  return `${getProcedureTypeDisplayName(type)} (${formatPrice(price)})`
}

const isEligibleItem = ({ value }) => value > 0

export const StatisticsProgress = ({ data }) => {
  const filteredData = data.filter(isEligibleItem)
  const total = sumBy(filteredData, item => item.value)

  return (
    <Segment>
      {
        filteredData.map(({ key, value, totalPriceAfterTaxes }) => (
          <Progress
            key={key}
            color={getRandomFancyColorName()}
            size="large"
            progress="value"
            label={getLabel(key, totalPriceAfterTaxes)}
            value={value}
            total={total}
          />
        ))
      }
    </Segment>
  )
}