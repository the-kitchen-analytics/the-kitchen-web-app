import { Container, Loader as SemanticLoader } from 'semantic-ui-react'
import './Loader.css'

export const Loader = (props) => (
  <Container
    className={'loder-container'}
    textAlign={'center'}
  >
    <SemanticLoader
      active
      content={'Загрузка данных'}
      size={'huge'}
      {...props}
    />
  </Container>
)