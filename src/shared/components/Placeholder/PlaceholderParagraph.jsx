import _ from 'lodash'
import { Placeholder } from 'semantic-ui-react'

export const PlaceholderParagraph = ({ lines = 0 }) => (
  <Placeholder>
    <Placeholder.Paragraph>
      {
        _.range(0, lines).map(i => <Placeholder.Line key={i} />)
      }
    </Placeholder.Paragraph>
  </Placeholder>
)