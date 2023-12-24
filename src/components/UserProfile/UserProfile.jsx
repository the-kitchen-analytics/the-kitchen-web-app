import _ from 'lodash'
import { useState, useMemo } from 'react'
import { useOutletContext } from 'react-router-dom'
import { Segment, Header, Icon, Form } from 'semantic-ui-react'
import { LogOutButton, ErrorMessage, Loader } from '../shared'
import { usePostData } from '../../hooks'
import { getWorkerCategoryDisplayName } from '../../utils/'
import { EditUserForm } from './EditUserForm'

export const UserProfile = () => {

  const { userDetails, updateUserDetails } = useOutletContext()

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

  if (!userDetails) {
    return <Loader />
  }

  return (
    <Segment loading={isLoading}>
      <Header
        icon
        textAlign="center"
        size="large">
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
                  size="large"
                  type="button"
                  onClick={() => setShouldDisplayEditProfileForm(true)}
                  content="Редактировать"
                />

                <Form.Field>
                  <LogOutButton fluid />
                </Form.Field>
              </Form.Group>
            </Form>
          )
      }

    </Segment>
  )
}