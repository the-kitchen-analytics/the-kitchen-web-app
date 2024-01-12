import { Grid } from 'semantic-ui-react'
import { MainHeader } from '../../components/shared'
import { ContactUs } from './ContactUs'
import { Info } from './Info'
import contactOptions from '../../data/contactOptions.json'

export const InfoPage = () =>  (
  <Grid>
    <Grid.Row>
      <Grid.Column>
        <MainHeader content={'Информация'} />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <ContactUs options={contactOptions} />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Info />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)