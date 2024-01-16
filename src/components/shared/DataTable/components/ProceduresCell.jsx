import { ProceduresList } from './ProceduresList'
import { RECEIPTS } from '../../../../data/routePaths'

export const ProceduresCell = ({ id, procedures }) => (
  <ProceduresList
    listProps={{
      relaxed: true,
      bulleted: true
    }}
    linkTo={id ? `${RECEIPTS}/${id}` : null}
    procedures={procedures}
  />
)