import { Progress, Segment } from 'semantic-ui-react'
import { sumBy } from 'lodash'
import { getProcedureTypeDisplayName } from '../../utils/procedures'
import { buildPriceString } from '../../utils/money'
import { useColorNames } from '../../hooks'

const isEligibleItem = ({ value }) => value > 0

const StatisticsProgress = ({ data }) => {

  const filteredData = data.filter(isEligibleItem)
  const total = sumBy(filteredData, item => item.value)

  const { getRandomFancyColorName } = useColorNames()

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

export default StatisticsProgress