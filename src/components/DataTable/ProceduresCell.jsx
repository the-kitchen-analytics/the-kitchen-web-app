
import { RECEIPTS } from '../../data/routePaths'
import { ProceduresList } from '../ProceduresList'

export const ProceduresCell = ({ id, procedures }) => (
  <ProceduresList
    listProps={{
      relaxed: true,
      bulleted: true,
    }}
    linkTo={id ? `${RECEIPTS}/${id}` : null}
    procedures={procedures}
  />
)