
import { RECEIPTS } from '../../data/routePaths'
import ProceduresList from '../ProceduresList/ProceduresList'

const ProceduresCell = ({ id, procedures }) => (
  <ProceduresList
    listProps={{
      relaxed: true,
      bulleted: true,
    }}
    linkTo={id ? `${RECEIPTS}/${id}` : null}
    procedures={procedures}
  />
)

export default ProceduresCell