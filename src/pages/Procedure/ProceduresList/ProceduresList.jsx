import _ from 'lodash'
import { useState, useEffect, useCallback } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { Form, Grid, Button } from 'semantic-ui-react'
import DashboardLayout from '../../../components/layouts/DashboardLayout'
import ProceduresTable from '../../../components/ProceduresTable'
import ProceduresFilter from './ProceduresFilter'
import { useSessionStorage, useUserSettings } from '../../../hooks'
import { CREATE_PROCEDURE } from '../../../data/routePaths'

const ProceduresList = () => {

  const { settings: { controlsSize, accentColor } } = useUserSettings()
  const { procedures } = useOutletContext()

  const [filteredProcedures, setFilteredProcedures] = useState(procedures)
  const [order, setOrder] = useSessionStorage('procedures-edit-order', '')
  const [filter, setFilter] = useSessionStorage('procedures-edit-filter', '')

  const filterProcedures = useCallback((procedures, filter, order) => {

    let filteredProcedures

    switch (filter) {
      case 'manicure':
        filteredProcedures = procedures.filter(procedure => procedure.type === filter)
        break

      case 'pedicure':
        filteredProcedures = procedures.filter(procedure => procedure.type === filter)
        break

      case 'brows':
        filteredProcedures = procedures.filter(procedure => procedure.type === filter)
        break

      case 'spa':
        filteredProcedures = procedures.filter(procedure => procedure.type === filter)
        break

      case 'master':
        filteredProcedures = procedures.filter(procedure => procedure.workerCategory === filter)
        break

      case 'top-master':
        filteredProcedures = procedures.filter(procedure => procedure.workerCategory === filter)
        break

      case '1/2':
        filteredProcedures = procedures.filter(procedure => _.startsWith(procedure.name, '1/2'))
        break

      case 'all':
        filteredProcedures = procedures
        break

      case '':
        filteredProcedures = procedures
        break

      default:
        filteredProcedures = []
        break
    }

    if (order) {
      return _.orderBy(filteredProcedures, 'name', order)
    } else {
      return filteredProcedures
    }
  }, [])

  useEffect(() => {
    setFilteredProcedures(filterProcedures(procedures, filter, order))
  }, [procedures, filter, order, filterProcedures])

  const sort = (order) => {
    setOrder(order)
  }

  return (
    <DashboardLayout
      icon="clipboard list"
      header="Список услуг"
      subheader="Управляйте конфигурацией услуг"
    >
      <Grid.Row>
        <Grid.Column>
          <Form size={controlsSize}>
            <Form.Group widths="equal">
              <Form.Field>
                <ProceduresFilter
                  filter={filter}
                  handleChange={(e, { value }) => setFilter(value)}
                  size={controlsSize}
                />
              </Form.Field>

              <Form.Field>
                <Button.Group
                  fluid
                  size={controlsSize}
                >
                  <Button
                    icon="sort content descending"
                    active={order === 'desc'}
                    onClick={() => sort('desc')}
                  />
                  <Button
                    icon="sort content ascending"
                    active={order === 'asc'}
                    onClick={() => sort('asc')}
                  />
                </Button.Group>
              </Form.Field>

              <Form.Field>
                <Link to={CREATE_PROCEDURE}>
                  <Button
                    fluid
                    icon="plus"
                    content="Добавить"
                    color={accentColor}
                    size={controlsSize}
                  />
                </Link>
              </Form.Field>
            </Form.Group>
          </Form>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <ProceduresTable tableData={filteredProcedures} />
        </Grid.Column>
      </Grid.Row>

    </DashboardLayout>
  )
}

export default ProceduresList