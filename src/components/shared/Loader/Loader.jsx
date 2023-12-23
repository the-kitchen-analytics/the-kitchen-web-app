import { Dimmer, Loader as SemanticLoader } from 'semantic-ui-react'

export const Loader = (props) => (
  <div className="loader">
    <Dimmer active inverted>
      <SemanticLoader
        {...props}
        size='huge'
      />
    </Dimmer>
  </div>
)