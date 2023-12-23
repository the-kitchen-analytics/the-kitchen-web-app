import { Grid } from 'semantic-ui-react'
import { DashboardLayout } from '../../components/layouts'
import { WithCurrentUser } from '../../hoc'
import { ContactUs } from './ContactUs'
import { Info } from './Info'
import contactOptions from '../../data/contactOptions.json'

const InfoWithUser = WithCurrentUser(Info)

export const InfoPage = () => {

  const settingsOptions = [
    {
      key: 'contact-us',
      element: (
        <ContactUs
          options={contactOptions}
        />
      )
    },
    {
      key: 'app-info',
      element: <InfoWithUser />
    }
  ]

  const content = settingsOptions.map(({ key, element }) => (
    <Grid.Row key={key}>
      <Grid.Column>
        {
          element
        }
      </Grid.Column>
    </Grid.Row>
  ))

  return (
    <DashboardLayout
      icon="question circle"
      header="Информация"
      content={content}
    />
  )
}