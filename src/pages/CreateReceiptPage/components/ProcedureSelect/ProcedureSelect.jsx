import _ from 'lodash'
import { useCallback, useMemo } from 'react'
import { Divider, Form } from 'semantic-ui-react'
import { DisplayOptions } from '../DisplayOptions'
import { ProcedureAccordion } from '../ProcedureAccordion'
import { useLocalStorage, useToggleState } from '../../../../shared/hooks'
import { toggleSetter, halfPartProceduresMapper } from '../../../../shared/utils'
import procedureTypes from '../../../../data/procedure-types.json'

export const ProcedureSelect = (props) => {

  const {
    formData, setFormData,
    accordionActiveIndex,
    setAccordionActiveIndex,
    procedures
  } = props

  const procedureIdsCount = _.countBy(formData.procedures, 'id')
  const [shouldDisplayHalfPartProcedures, toggleShouldDisplayHalfPartProcedures] = useToggleState(false)
  const [shouldDisplayProcedurePrice, setShouldDisplayProcedurePrice] = useLocalStorage('shouldDisplayProcedurePrice', true)

  const halfPartProceduresMapperFn = useCallback((procedure) => {
    if (_.has(procedureIdsCount, procedure.id)) {
      return { ...formData.procedures.find(({ id }) => procedure.id === id) }
    }

    return halfPartProceduresMapper(procedure, shouldDisplayHalfPartProcedures)
  }, [shouldDisplayHalfPartProcedures, formData.procedures])

  const displayOptions = useMemo(() => ([
    {
      key: 'shouldDisplayHalfPartProcedures',
      label: 'Показывать 1/2 услуги',
      checked: shouldDisplayHalfPartProcedures,
      onChange: toggleShouldDisplayHalfPartProcedures
    },
    {
      key: 'shouldDisplayProcedurePrice',
      label: 'Показывать стоимость услуги',
      checked: shouldDisplayProcedurePrice,
      onChange: () => toggleSetter(setShouldDisplayProcedurePrice)
    }
  ]), [
    shouldDisplayHalfPartProcedures, toggleShouldDisplayHalfPartProcedures,
    shouldDisplayProcedurePrice, setShouldDisplayProcedurePrice
  ])

  const addProcedure = useCallback((procedure) => {
    setFormData((prevData) => ({
      ...prevData,
      procedures: [...prevData.procedures, procedure]
    }))
  }, [setFormData])

  const removeProcedure = useCallback(({ id }) => {
    setFormData((prevData) => ({
      ...prevData,
      procedures: _.filter(prevData.procedures, (element) => !(element.id === id))
    }))
  }, [setFormData])

  const removeFirstProcedure = useCallback(({ id }) => {
    const indexToRemove = formData.procedures.findIndex(it => it.id === id)

    setFormData((prevData) => ({
      ...prevData,
      procedures: prevData.procedures.filter((it, i) => i !== indexToRemove)
    }))
  }, [setFormData])

  const createAccordionItem = useCallback((title, data) => {
    const ids = data.map(({ id }) => id)

    const values = Object.entries(procedureIdsCount)
      .filter(([key]) => ids.includes(key))
      .filter(([, value]) => value > 0)
      .map(([, value]) => value)

    const count = _.sum(values)

    return {
      title,
      data,
      count
    }
  }, [procedureIdsCount])

  const accordionItems = useMemo(() => {
    return procedureTypes.map(procedureType => createAccordionItem(
      procedureType.displayName,
      procedures
        .filter(({ type }) => type === procedureType.name)
        .map(halfPartProceduresMapperFn)
    ))
      .filter(accordionItem => !_.isEmpty(accordionItem.data))
  }, [createAccordionItem, halfPartProceduresMapperFn, procedures])

  return (
    <Form.Group grouped required>
      <Form.Field>
        <DisplayOptions options={displayOptions} />
      </Form.Field>

      <Divider hidden />

      <Form.Field
        required
        label={'Выберите набор услуг'}
      />

      <Form.Field>
        <ProcedureAccordion
          procedureIdsCount={procedureIdsCount}
          shouldDisplayProcedurePrice={shouldDisplayProcedurePrice}
          procedures={formData.procedures}
          items={accordionItems}
          accordionActiveIndex={accordionActiveIndex}
          addProcedure={addProcedure}
          removeProcedure={removeProcedure}
          removeFirstProcedure={removeFirstProcedure}
          setAccordionActiveIndex={setAccordionActiveIndex}
        />
      </Form.Field>

    </Form.Group>
  )
}
