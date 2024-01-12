import { Container, Dimmer, Loader as SemanticLoader } from 'semantic-ui-react'

export const Loader = (props) => (
  <Container fluid style={{ minHeight: '50vh' }}>
    <Dimmer active inverted>
      <SemanticLoader
        active
        content={'Загрузка данных'}
        size={'huge'}
        {...props}
      />
    </Dimmer>
  </Container>
)