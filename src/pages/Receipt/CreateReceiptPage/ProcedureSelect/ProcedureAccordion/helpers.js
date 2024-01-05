export const getAccordionItemTitleContent = (title, count) => {
  if (count > 0) {
    return `${title} (${count})`
  }

  return title
}