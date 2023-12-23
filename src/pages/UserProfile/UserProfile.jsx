import _ from 'lodash'
import { Segment, Header, Icon, Form } from 'semantic-ui-react'
import { ErrorMessage, Loader } from '../../components/shared'
import LogoutButton from '../../components/LogoutButton'
import { useState, useMemo } from 'react'
import { useOutletContext } from 'react-router-dom'
import { useUserSettings, usePostData } from '../../hooks'
import { getWorkerCategoryDisplayName } from '../../utils/workerCategory'
import EditUserForm from '../../components/EditUserForm'

const UserProfile = () => {

  const {
    userDetails,
    updateUserDetails,
    isUserDetailsLoading,
  } = useOutletContext()

  const { settings: { controlsSize } } = useUserSettings()

  const initialFormData = useMemo(() => userDetails, [userDetails])

  const [formData, setFormData] = useState(userDetails)

  const [
    shouldDisplayEditProfileForm,
    setShouldDisplayEditProfileForm,
  ] = useState(false)

  const [isLoading, error, postData] = usePostData()

  const shouldDisableSubmitButton = () => {
    return isLoading || _.isEqual(initialFormData, formData)
  }

  const shouldDisableResetButton = () => {
    return isLoading
  }

  const resetFormData = () => {
    setFormData(initialFormData)
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    await postData(updateUserDetails, formData)

    if (!error) {
      setShouldDisplayEditProfileForm(false)
    }
  }

  const handleResetButtonClick = (e) => {
    e.preventDefault()
    setShouldDisplayEditProfileForm(false)
    resetFormData()
  }

  if (isUserDetailsLoading) {
    return <Loader />
  }

  return (
    <Segment loading={isLoading || isUserDetailsLoading}>
      <Header
        icon
        textAlign="center"
        size={controlsSize}>
        <Icon name="user circle" />
        <Header.Content>
          {userDetails.name}
        </Header.Content>

        <Header.Subheader>
          {userDetails.email} | {getWorkerCategoryDisplayName(userDetails.workerCategory)}
        </Header.Subheader>
      </Header>

      {
        shouldDisplayEditProfileForm ?

          (
            <>
              {
                error && (
                  <ErrorMessage message={error.message} />
                )
              }
              <EditUserForm
                isLoading={isLoading}
                formData={formData}
                setFormData={setFormData}
                handleSubmit={handleFormSubmit}
                handleResetButtonClick={handleResetButtonClick}
                shouldDisableSubmitButton={shouldDisableSubmitButton}
                shouldDisableResetButton={shouldDisableResetButton}
              />
            </>
          ) : (
            <Form>
              <Form.Group widths='equal'>
                <Form.Button
                  fluid
                  icon="edit"
                  size={controlsSize}
                  type="button"
                  onClick={() => setShouldDisplayEditProfileForm(true)}
                  content="Редактировать"
                />

                <Form.Field>
                  <LogoutButton fluid />
                </Form.Field>
              </Form.Group>
            </Form>
          )
      }

    </Segment>
  )
}

export default UserProfile