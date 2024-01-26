import { ProceduresList } from './ProceduresList'
import { RECEIPT_PATH } from '../../../router'

export const ProceduresCell = ({ id, procedures }) => (
  <ProceduresList
    listProps={{
      relaxed: true
    }}
    linkTo={id ? `${RECEIPT_PATH}/${id}` : null}
    procedures={procedures}
  />
)