import { Grid, Header } from 'semantic-ui-react'
import './MainLayout.css'

export const MainLayout = ({ header, subheader, icon, content, children }) => (
  <Grid className='main-layout'>
    <Grid.Row>
      <Grid.Column width={'16'}>
        <Header
          size={'huge'}
          icon={icon}
          content={header}
          subheader={subheader}
        />
      </Grid.Column>
    </Grid.Row>
    {
      content || children
    }
  </Grid>
)