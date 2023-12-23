import { useCallback, Fragment } from 'react'
import { Accordion, Icon, Divider, Form } from 'semantic-ui-react'
import { buildPriceString } from '../../../utils/money'


const AccordionItem = ({ title, index, activeIndex, handleToggle, count, children }) => {

  const isActive = index === activeIndex

  return (
    <>
      <Accordion.Title
        active={isActive}
        index={index}
        onClick={handleToggle}
      >
        <Icon name='dropdown' />
        {title} {count !== 0 && `(${count})`}
      </Accordion.Title>

      <Accordion.Content active={isActive}>
        {
          children
        }
      </Accordion.Content>
    </>
  )
}

export const ProceduresAccordition = (props) => {

  const {
    shouldDisplayProcedurePrice,
    procedures,
    accorditionItems,
    handleProcedureItemChange,
    accorditionActiveIndex,
    setAccorditionActiveIndex
  } = props

  const handleAccorditionChange = (e, titleProps) => {
    const { index } = titleProps
    setAccorditionActiveIndex(activeIndex => activeIndex === index ? -1 : index)
  }

  const procedureToCheckboxItem = useCallback((procedure, i) => (
    <Fragment key={procedure.id}>
      {i !== 0 && <Divider />}
      <Form.Checkbox
        style={{ width: '100%' }}
        name={procedure.name}
        label={
          shouldDisplayProcedurePrice
            ? buildPriceString(procedure.name, procedure.price)
            : procedure.name
        }
        onChange={(event, { checked }) => handleProcedureItemChange(procedure, checked)}
        checked={procedures.map(({ id }) => id).includes(procedure.id)}
      />
    </Fragment>

  ), [procedures, handleProcedureItemChange, shouldDisplayProcedurePrice])

  return (
    <Accordion styled fluid>
      {
        accorditionItems.map(({ title, data, count }, index) => (
          <AccordionItem
            key={title}
            title={title}
            index={index}
            activeIndex={accorditionActiveIndex}
            handleToggle={handleAccorditionChange}
            count={count}
          >
            {
              data.map(procedureToCheckboxItem)
            }
          </AccordionItem>
        ))
      }
    </Accordion>
  )
}