import { Accordion, Icon } from 'semantic-ui-react'

export const AccordionItem = ({ title, index, activeIndex, handleToggle, count, children }) => {
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