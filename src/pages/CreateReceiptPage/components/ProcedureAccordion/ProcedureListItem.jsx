import { useMemo } from 'react'
import { Segment, Button, Grid, Header } from 'semantic-ui-react'
import { useTheme } from '../../../../shared/hooks'
import { formatPrice } from '../../../../shared/utils'

const ProcedureButton = ({ handleClick, icon, floated }) => (
  <Button
    compact
    type={'button'}
    icon={icon}
    onClick={handleClick}
    floated={floated}
    circular
  />
)

export const ProcedureListItem = (props) => {

  const {
    procedure,
    count,
    isPriceDisplayed,
    increment,
    decrement,
    remove
  } = props

  const isChecked = count > 0

  const { color } = useTheme()

  const activeColor = useMemo(() => isChecked ? color : undefined,
    [isChecked, color])

  const title = useMemo(() => count > 0 ? `(${count}) ${procedure.name}` : procedure.name,
    [count, procedure.name])

  const handleClick = () => {
    isChecked ? remove() : increment()
  }

  return (
    <Segment
      color={activeColor}
      attached={!isChecked}
      raised={isChecked}
    >
      <Grid verticalAlign={'middle'}>
        {
          isChecked && (
            <Grid.Column
              width={3}
              floated={'left'}
            >
              <ProcedureButton
                handleClick={decrement}
                icon={'minus'}
                floated={'left'}
              />
            </Grid.Column>
          )
        }

        <Grid.Column
          width={isChecked ? 10 : 16}
          onClick={handleClick}
          textAlign={isChecked ? 'center' : 'left'}
        >
          <Header
            color={activeColor}
            size={'small'}
            content={title}
            subheader={isPriceDisplayed ? formatPrice(procedure.price) : ''}
          />
        </Grid.Column>

        {
          isChecked && (
            <Grid.Column
              width={3}
              floated={'right'}
            >
              <ProcedureButton
                handleClick={increment}
                icon={'plus'}
                floated={'right'}
              />
            </Grid.Column>
          )
        }
      </Grid>
    </Segment>
  )
}