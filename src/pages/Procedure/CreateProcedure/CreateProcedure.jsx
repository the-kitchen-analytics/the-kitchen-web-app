import _ from 'lodash'
import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePostData } from '../../../hooks'
import { Grid } from 'semantic-ui-react'
import DashboardLayout from '../../../components/layouts/DashboardLayout'
import CreateProcedureForm from './CreateProcedureForm'
import { ErrorMessage } from '../../../components/ui'
import { handleInputChange } from '../../../utils/ui/form'
import { addProcedure } from '../../../services/proceduresService'
import validateProcedure from '../../../validators/procedure'
import { PROCEDURES } from '../../../data/routePaths'

const CreateProcedure = () => {

  const navigate = useNavigate()
  const [isLoading, error, postData] = usePostData()

  const initialProcedureData = useMemo(() => ({
    name: '',
    type: '',
    workerCategory: '',
    price: 0,
    workerRate: 40,
    workerIncome: 0
  }), [])

  const [procedure, setProcedure] = useState(initialProcedureData)

  const isProcedureValid = useMemo(() => validateProcedure(procedure), [procedure])

  const handleInputChangeWrapper = (e) => {
    return handleInputChange(e, setProcedure)
  }

  const getRoundedValue = (value) => {
    return value >= 0
      ? value > 0
        ? _.round(value, 2)
        : value
      : ''
  }

  const handlePriceChange = ({ target }) => {
    const price = getRoundedValue(target.value)

    setProcedure(prev => ({
      ...prev,
      price: price > 0 ? _.round(price, 2) : price,
      workerIncome: price * prev.workerRate / 100
    }))
  }

  const handleWorkerRateChange = ({ target }) => {
    const workerRate = getRoundedValue(target.value)

    setProcedure(prev => ({
      ...prev,
      workerRate,
      workerIncome: workerRate >= 0
        ? _.round(prev.price / 100 * workerRate, 2)
        : prev.workerIncome
    }))
  }

  const handleWorkerIncomeChange = ({ target }) => {
    const workerIncome = getRoundedValue(target.value)

    setProcedure(prev => ({
      ...prev,
      workerIncome,
      workerRate: workerIncome >= 0
        ? _.round(workerIncome / prev.price * 100, 2)
        : prev.workerRate,
    }))
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    await postData(addProcedure, {
      ...procedure,
      lastUpdated: new Date(),
    })
    navigate(PROCEDURES)
  }

  return (
    <DashboardLayout
      icon="cloud upload"
      header="Добавить процедуру"
      subheader="После того как вы добавите процедуру, она станет доступна мастерам"
    >
      <Grid.Row>
        <Grid.Column>
          {
            error && <ErrorMessage message={error.message} />
          }

          <CreateProcedureForm
            isLoading={isLoading}
            formData={procedure}
            shouldDisableSubmitButton={isLoading || !isProcedureValid}
            handleSubmit={handleFormSubmit}
            handleInputChangeWrapper={handleInputChangeWrapper}
            handlePriceChange={handlePriceChange}
            handleWorkerRateChange={handleWorkerRateChange}
            handleWorkerIncomeChange={handleWorkerIncomeChange}
          />
        </Grid.Column>
      </Grid.Row>

    </DashboardLayout>
  )
}

export default CreateProcedure