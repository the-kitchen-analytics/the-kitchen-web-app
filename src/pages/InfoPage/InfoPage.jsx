import { Grid } from 'semantic-ui-react'
import { MainHeader } from '../../shared/components'
import { ContactUs } from './ContactUs'
import { Info } from './Info'
import contactOptions from '../../data/contactOptions.json'

export const InfoPage = () => {

  const listProps = {
    relaxed: true
  }

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
            {...listProps}
          />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Info {...listProps} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}