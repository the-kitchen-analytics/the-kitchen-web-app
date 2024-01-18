import _ from 'lodash'
import { useState, useMemo } from 'react'
import { Segment, Header, Placeholder, Icon } from 'semantic-ui-react'
import { LogOutButton, ErrorMessage, ButtonGroup } from '../../../../components/shared'
import { usePostData, useUserDetailsContext } from '../../../../hooks'
import { getWorkerCategoryDisplayName } from '../../../../utils'
import { EditUserForm } from './EditUserForm'

export const UserProfile = () => {

  const [userDetails, setUserDetails] = useUserDetailsContext()
  const initialFormData = useMemo(() => userDetails, [userDetails])
  const [formData, setFormData] = useState(userDetails)

  const [
    shouldDisplayEditProfileForm,
    setShouldDisplayEditProfileForm
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
    await postData(setUserDetails, formData)

    if (!error) {
      setShouldDisplayEditProfileForm(false)
    }
  }

  const handleResetButtonClick = (e) => {
    e.preventDefault()
    setShouldDisplayEditProfileForm(false)
    resetFormData()
  }

  const shouldDisplayLoader = () => isLoading || !userDetails

  const getHeaderContent = () => {
    if (shouldDisplayLoader()) {
      return (
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Paragraph>
        </Placeholder>
      )
    }

    if (userDetails) {
      return (
        <>
          <Icon name={'user circle'} />
          <Header.Content>{userDetails.name}</Header.Content>
          <Header.Subheader>
            {userDetails.email} | {getWorkerCategoryDisplayName(userDetails.workerCategory)}
          </Header.Subheader>
        </>
      )
    }

    return null
  }

  return (
    <Segment loading={shouldDisplayLoader()}>
      <Header icon textAlign={'center'} size={'large'}>
        {
          getHeaderContent()
        }
      </Header>

      {
        shouldDisplayEditProfileForm
          ? (
            <>
              {
                error && (
                  <ErrorMessage content={error.message} />
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
          )
          : (
            <ButtonGroup
              buttons={[
                {
                  fluid: true,
                  icon: 'edit',
                  size: 'large',
                  type: 'button',
                  onClick: () => setShouldDisplayEditProfileForm(true),
                  content: 'Редактировать'
                },
                {
                  as: LogOutButton,
                  fluid: true
                }
              ]}
            />
          )
      }
    </Segment>
  )
}