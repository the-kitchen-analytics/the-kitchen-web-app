import { Accordion } from 'semantic-ui-react'

export const AccordionItem = ({ content, index, isActive, handleToggle, children }) => (
  <>
    <Accordion.Title
      active={isActive}
      index={index}
      onClick={handleToggle}
      icon={'dropdown'}
      content={content}
    />

    <Accordion.Content active={isActive}>
      {
        children
      }
    </Accordion.Content>
  </>
)