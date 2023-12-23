import { Grid } from 'semantic-ui-react'
import { DashboardLayout } from '../../components/layouts'
import ContactUs from './ContactUs'
import contactOptions from '../../data/contactOptions.json'
import { WithCurrentUser } from '../../hoc'
import Info from './Info'

const InfoWithUser = WithCurrentUser(Info)
const InfoPage = () => {

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

export default InfoPage