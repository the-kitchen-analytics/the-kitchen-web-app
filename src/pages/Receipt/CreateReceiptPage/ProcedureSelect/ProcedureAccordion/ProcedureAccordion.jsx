import { Accordion } from 'semantic-ui-react'
import { ProcedureListItem } from './ProcedureListItem'
import { AccordionItem } from './AccordionItem'
import { getAccordionItemTitleContent } from './helpers'

export const ProcedureAccordion = (props) => {

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
            content={getAccordionItemTitleContent(title, count)}
            index={index}
            isActive={index === accordionActiveIndex}
            handleToggle={handleAccordionChange}
            count={count}
          >
            {
              data.map(procedure => (
                <ProcedureListItem
                  key={procedure.id}
                  count={procedureIdsCount[procedure.id] || 0}
                  procedure={procedure}
                  increment={() => addProcedure(procedure)}
                  decrement={() => removeFirstProcedure(procedure)}
                  remove={() => removeProcedure(procedure)}
                  isPriceDisplayed={shouldDisplayProcedurePrice}
                />
              ))
            }
          </AccordionItem>
        ))
      }
    </Accordion>
  )
}