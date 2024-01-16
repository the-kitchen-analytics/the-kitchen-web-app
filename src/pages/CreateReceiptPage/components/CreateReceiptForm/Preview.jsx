import { Divider, Header } from 'semantic-ui-react'
import { DataTable } from '../../../../components/shared'

export const Preview = ({ data }) => (
  <>
    <Divider horizontal>
      <Header
        as="h4"
        icon={'paperclip'}
        content={'Предпросмотр'}
      />
    </Divider>
    <DataTable showNotes data={data} />
  </>
)