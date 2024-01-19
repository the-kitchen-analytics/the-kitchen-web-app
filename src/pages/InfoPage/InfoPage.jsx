import { Grid } from 'semantic-ui-react'
import { MainHeader } from '../../components/shared'
import { ContactUs } from './ContactUs'
import { Info } from './Info'
import contactOptions from '../../data/contactOptions.json'
import { useTheme } from '../../hooks'

export const InfoPage = () => {
  const { size } = useTheme()

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <MainHeader content={'Информация'} />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <ContactUs
            options={contactOptions}
            size={size}
          />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Info size={size} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}