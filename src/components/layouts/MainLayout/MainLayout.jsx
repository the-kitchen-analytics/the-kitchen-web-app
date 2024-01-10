import { Grid, Header } from 'semantic-ui-react'
import './MainLayout.css'

export const MainLayout = ({ header, subheader, content, children }) => (
  <Grid className='main-layout'>
    <Grid.Row>
      <Grid.Column width={'16'}>
        <Header
          as={'h1'}
          size={'huge'}
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