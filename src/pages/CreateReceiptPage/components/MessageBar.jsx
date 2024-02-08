import { ErrorMessage, SuccessMessage, WarningMessage } from '../../../shared/components'

export const MessageBar = ({ errorMessage, warningMessage, clearWarningMessage, successMessage }) => (
  <>
    {
      errorMessage && (
        <ErrorMessage
          content={errorMessage}
        />
      )
    }

    {
      warningMessage && (
        <WarningMessage
          icon={'exclamation circle'}
          onDismiss={clearWarningMessage}
          content={warningMessage}
        />
      )
    }

    {
      successMessage && (
        <SuccessMessage
          header={'Готово'}
          content={successMessage}
        />
      )
    }
  </>
)