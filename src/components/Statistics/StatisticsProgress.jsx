import { Progress, Segment } from 'semantic-ui-react'
import { sumBy } from 'lodash'
import { getProcedureTypeDisplayName, getRandomFancyColorName, buildPriceString } from '../../utils'

const isEligibleItem = ({ value }) => value > 0

export const StatisticsProgress = ({ data }) => {

  const filteredData = data.filter(isEligibleItem)
  const total = sumBy(filteredData, item => item.value)

  return (
    <Segment>
      {
        filteredData.map(({ key, value, totalPriceAfterTaxes }) => (
          <Progress
            color={getRandomFancyColorName()}
            size="large"
            progress="value"
            key={key}
            label={buildPriceString(getProcedureTypeDisplayName(key), totalPriceAfterTaxes)}
            value={value}
            total={total}
          />
        ))
      }
    </Segment>
  )
}