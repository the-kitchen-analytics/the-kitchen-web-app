import { Accordion } from 'semantic-ui-react'
import { ProcedureCheckbox } from './ProcedureCheckbox'
import { Fragment } from 'react'
import { AccordionItem } from './AccordionItem'

export const ProceduresAccordion = (props) => {

  const {
    procedureIdsCount,
    accordionItems,
    addProcedure,
    removeProcedure,
    removeFirstProcedure,
    accordionActiveIndex,
    setAccordionActiveIndex,
    shouldDisplayProcedurePrice
  } = props

  const handleAccordionChange = (e, titleProps) => {
    const { index } = titleProps
    setAccordionActiveIndex(activeIndex => activeIndex === index ? -1 : index)
  }

  return (
    <Accordion styled fluid>
      {
        accordionItems.map(({ title, data, count }, index) => (
          <AccordionItem
            key={title}
            title={title}
            index={index}
            activeIndex={accordionActiveIndex}
            handleToggle={handleAccordionChange}
            count={count}
          >
            {
              data.map(procedure => (
                <Fragment key={procedure.id}>
                  <ProcedureCheckbox
                    count={procedureIdsCount[procedure.id] || 0}
                    procedure={procedure}
                    increment={() => addProcedure(procedure)}
                    decrement={() => removeFirstProcedure(procedure)}
                    remove={() => removeProcedure(procedure)}
                    isPriceDisplayed={shouldDisplayProcedurePrice}
                  />
                </Fragment>
              ))
            }
          </AccordionItem>
        ))
      }
    </Accordion>
  )
}