import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Header, Segment, Message, Grid } from 'semantic-ui-react'
import { DefaultButton } from '../../../components/shared'

const WarningMessage = () => (
  <Message
    warning
    header="Внимание!"
    content="Все несохранённые данные будут удалены, а так же ваши настройки будут сброшены. Страница будет перезагружена"
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
      navigate('/')
      window.location.reload()
    }, 250)
  }

  return [reload, isLoading]
}

export const ClearCache = () => {
  const [reload, isLoading] = useReload()

  return (
    <Segment padded>
      <Header icon="erase" content="Очистить кэш" />

      <WarningMessage />

      <Grid.Column width={16}>
        <ReloadButton loading={isLoading} onClick={reload} />
      </Grid.Column>
    </Segment>
  )
}