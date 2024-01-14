import { useMemo } from 'react'
import { Grid } from 'semantic-ui-react'
import { YearSelect } from '../shared'

export const YearFilterLayout = (props) => {

  const { children, date, setDate, options } = props

  const yearSelectOptions = useMemo(() => options.map(year => ({
    key: year,
    text: year,
    value: year
  })), [options])

  return (
    <Grid>
      <Grid.Column
        computer={'6'}
        tablet={'6'}
        mobile={'16'}
      >
        <YearSelect
          value={date}
          handleChange={(e, { value }) => setDate(value)}
          options={yearSelectOptions}
        />
      </Grid.Column>

      <Grid.Row>
        <Grid.Column>
          {
            children
          }
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}