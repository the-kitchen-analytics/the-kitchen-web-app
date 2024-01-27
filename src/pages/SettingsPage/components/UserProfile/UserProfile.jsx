import _ from 'lodash'
import { useState, useMemo } from 'react'
import { Segment, Header, Placeholder, Icon } from 'semantic-ui-react'
import { LogOutButton, ErrorMessage, ButtonGroup, PlaceholderParagraph } from '../../../../shared/components'
import { useInitialState, usePostData, useTheme, useUserDetailsContext } from '../../../../shared/hooks'
import { getWorkerCategoryDisplayName } from '../../../../shared/utils'
import { EditUserForm } from './EditUserForm'

export const UserProfile = () => {

  const { size } = useTheme()
  const [userDetails, setUserDetails] = useUserDetailsContext()
  const initialFormData = useMemo(() => userDetails, [userDetails])
  const [formData, setFormData, resetFormData] = useInitialState(initialFormData)
  const [displayForm, setDisplayForm] = useState(false)
  const [isLoading, error, postData] = usePostData()

  const shouldDisableSubmitButton = () => {
    return isLoading || _.isEqual(initialFormData, formData)
  }

  const shouldDisableResetButton = () => {
    return isLoading
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    await postData(setUserDetails, formData)

    if (!error) {
      setDisplayForm(false)
    }
  }

  const handleResetButtonClick = (e) => {
    e.preventDefault()
    setDisplayForm(false)
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
          <PlaceholderParagraph lines={2} />
        </Placeholder>
      )
    }

    if (userDetails) {
      return (
        <>
          <Icon name={'user circle'} />
          <Header.Content content={userDetails.name} />
          <Header.Subheader content={getWorkerCategoryDisplayName(userDetails.workerCategory)} />
        </>
      )
    }

    return null
  }

  return (
    <Segment loading={shouldDisplayLoader()}>
      <Header icon textAlign={'center'} size={size}>
        {
          getHeaderContent()
        }
      </Header>

      {
        displayForm
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
                  type: 'button',
                  onClick: () => setDisplayForm(true),
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