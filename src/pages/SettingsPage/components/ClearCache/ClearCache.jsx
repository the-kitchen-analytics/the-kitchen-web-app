import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header, Segment, Message } from 'semantic-ui-react'
import { DefaultButton } from '../../../../shared/components'
import { HOME_PATH } from '../../../../router'

const WarningMessage = () => (
  <Message
    warning
    header={'Внимание!'}
    content={'Все несохранённые данные будут удалены, а так же ваши настройки будут сброшены. Страница будет перезагружена'}
  />
)

const ReloadButton = (props) => (
  <DefaultButton
    fluid
    content={'Oчистить'}
    icon={'trash'}
    negative
    basic
    {...props}
  />
)

const useReload = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const reload = (e) => {
    e.preventDefault()
    setIsLoading(true)
    localStorage.clear()

    setTimeout(() => {
      navigate(HOME_PATH)
      window.location.reload()
    }, 250)
  }

  return [reload, isLoading]
}

export const ClearCache = () => {
  const [reload, isLoading] = useReload()

  return (
    <Segment>
      <Header icon={'erase'} content={'Очистить кэш'} />
      <WarningMessage />
      <ReloadButton loading={isLoading} onClick={reload} />
    </Segment>
  )
}