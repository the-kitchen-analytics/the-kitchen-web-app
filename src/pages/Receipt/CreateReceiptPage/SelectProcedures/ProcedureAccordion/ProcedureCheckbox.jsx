import { useMemo } from 'react'
import { Segment, Button, Grid, Header } from 'semantic-ui-react'
import { useUserSettings } from '../../../../../hooks'
import { formatPrice } from '../../../../../utils'

export const ProcedureCheckbox = (props) => {

  const {
    procedure,
    count,
    isPriceDisplayed,
    increment,
    decrement,
    remove
  } = props

  const isChecked = count > 0

  const { settings: { accentColor } } = useUserSettings()

  const activeColor = useMemo(() => isChecked ? accentColor : undefined,
    [isChecked, accentColor])

  const title = useMemo(() => count > 0 ? `(${count}) ${procedure.name}` : procedure.name,
    [count, procedure.name])

  const handleClick = () => {
    isChecked ? remove() : increment()
  }

  return (
    <Segment color={activeColor} raised={isChecked}>
      <Grid verticalAlign={'middle'}>
        <Grid.Column width={10} onClick={handleClick}>
          <Header
            color={activeColor}
            size={'small'}
            content={title}
            subheader={isPriceDisplayed ? formatPrice(procedure.price) : ''}
          />

        </Grid.Column>

        {
          (isChecked) && (
            <Grid.Column width={6} floated={'right'}>
              <Button
                compact
                type={'button'}
                icon={'plus'}
                onClick={increment}
                floated={'right'}
                circular
              />
              <Button
                compact
                type={'button'}
                icon={'minus'}
                onClick={decrement}
                floated={'right'}
                circular
              />
            </Grid.Column>
          )
        }
      </Grid>
    </Segment>
  )
}