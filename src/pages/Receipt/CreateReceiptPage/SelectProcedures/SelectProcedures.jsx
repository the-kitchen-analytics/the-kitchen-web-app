import _ from 'lodash'
import { useCallback, useMemo } from 'react'
import { Divider, Form } from 'semantic-ui-react'
import { DisplayOptionsAccordition } from './DisplayOptionsAccordition'
import { useLocalStorage, useToggleState } from '../../../../hooks'
import { ProceduresAccordion } from './ProcedureAccordion'
import { toggleSetter, halfPartProceduresMapper } from '../../../../utils/'
import procedureTypes from '../../../../data/procedure-types.json'

export const SelectProcedures = (props) => {

  const {
    formData, setFormData,
    accordionActiveIndex,
    setAccordionActiveIndex,
    procedures,
    shouldRedirectToHomePageAfterSubmit,
    setShouldRedirectToHomePageAfterSubmit,
    shouldDisplayPreview,
    setShouldDisplayPreview
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

  const getTypeFilter = useCallback((type) => {
    return it => it.type === type
  }, [])

  const displayOptions = useMemo(() => ([
    {
      key: 'shouldDisplayHalfPartProcedures',
      label: 'Показывать 1/2 услуги',
      checked: shouldDisplayHalfPartProcedures,
      onChange: toggleShouldDisplayHalfPartProcedures
    },
    {
      key: 'shouldDisplayPreview',
      label: 'Показывать превью выбранных услуг',
      checked: shouldDisplayPreview,
      onChange: () => toggleSetter(setShouldDisplayPreview)
    },
    {
      key: 'shouldDisplayProcedurePrice',
      label: 'Показывать стоимость услуги',
      checked: shouldDisplayProcedurePrice,
      onChange: () => toggleSetter(setShouldDisplayProcedurePrice)
    },
    {
      key: 'shouldRedirectToHomePageAfterSubmit',
      label: 'Переходить на главную после отправки формы',
      checked: shouldRedirectToHomePageAfterSubmit,
      onChange: () => toggleSetter(setShouldRedirectToHomePageAfterSubmit)
    }
  ]), [
    shouldDisplayHalfPartProcedures, toggleShouldDisplayHalfPartProcedures,
    shouldDisplayProcedurePrice, setShouldDisplayProcedurePrice,
    shouldRedirectToHomePageAfterSubmit, setShouldRedirectToHomePageAfterSubmit,
    shouldDisplayPreview, setShouldDisplayPreview
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
        .filter(getTypeFilter(procedureType.name))
        .map(halfPartProceduresMapperFn)
    ))
  }, [createAccordionItem, getTypeFilter, halfPartProceduresMapperFn, procedures])

  return (
    <Form.Group grouped required>

      <Form.Field label="Выберите набор услуг" required />

      <Form.Field>
        <DisplayOptionsAccordition
          options={displayOptions}
        />
      </Form.Field>

      <Form.Field>
        <ProceduresAccordion
          procedureIdsCount={procedureIdsCount}
          shouldDisplayProcedurePrice={shouldDisplayProcedurePrice}
          procedures={formData.procedures}
          accordionItems={accordionItems}
          accordionActiveIndex={accordionActiveIndex}
          addProcedure={addProcedure}
          removeProcedure={removeProcedure}
          removeFirstProcedure={removeFirstProcedure}
          setAccordionActiveIndex={setAccordionActiveIndex}
        />
        <Divider hidden />
      </Form.Field>

    </Form.Group>
  )
}