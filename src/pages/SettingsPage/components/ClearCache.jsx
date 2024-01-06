import { useNavigate } from 'react-router-dom'
import { Header, Segment, Message, Grid } from 'semantic-ui-react'
import { LoadableButton } from '../../../components/shared'

const WarningMessage = () => (
  <Message
    warning
    header="Внимание!"
    content="Все несохранённые данные будут удалены, а так же ваши настройки будут сброшены. Страница будет перезагружена"
  />
)

const ReloadButton = (props) => (
  <LoadableButton
    fluid
    type="button"
    content="Oчистить"
    icon="trash"
    negative
    basic
    size="large"
    {...props}
  />
)

const useReload = () => {
  const navigate = useNavigate()

  return (e) => {
    e.preventDefault()
    localStorage.clear()

    setTimeout(() => {
      navigate('/')
      window.location.reload()
    }, 250)
  }
}

export const ClearCache = () => {

  const reload = useReload()

  return (
    <Segment>
      <Header icon="erase" content="Очистить кэш" />

      <WarningMessage />

      <Grid.Column width={16}>
        <ReloadButton onClick={reload} />
      </Grid.Column>
    </Segment>
  )
}