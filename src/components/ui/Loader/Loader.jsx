import { Dimmer, Loader as SemanticLoader } from 'semantic-ui-react'

const Loader = (props) => (
  <div className="loader">
    <Dimmer active inverted>
      <SemanticLoader
        {...props}
        size='huge'
      />
    </Dimmer>
  </div>
)

export default Loader