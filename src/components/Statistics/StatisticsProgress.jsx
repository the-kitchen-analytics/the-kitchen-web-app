import { Progress, Segment } from 'semantic-ui-react'
import { sumBy } from 'lodash'
import { getProcedureTypeDisplayName } from '../../utils/procedures'
import { buildPriceString } from '../../utils/money'

const isEligibleItem = ({ value }) => value > 0

const StatisticsProgress = ({ data }) => {

  const filteredData = data.filter(isEligibleItem)
  const total = sumBy(filteredData, item => item.value)

  return (
    <Segment>
      {
        filteredData.map(({ key, value, totalPriceAfterTaxes }) => (
          <Progress
            indicating
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

export default StatisticsProgress