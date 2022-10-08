import _ from "lodash";
import { useState, useMemo } from "react";
import { useOutletContext } from "react-router-dom";
import { Segment, Header, Loader, Form } from "semantic-ui-react";
import EditUserForm from "../../components/EditUserForm";
import { usePostData, useUserSettings } from "../../hooks";
import ErrorMessage from "../../components/ui/ErrorMessage";
import Logout from '../../components/Logout';
import { getWorkerCategoryDisplayName } from "../../utils/workerCategory";

const UserAccountSettings = () => {

    const {
        userDetails,
        updateUserDetails,
        isUserDetailsLoading,
    } = useOutletContext();

    const { settings: { controlsSize } } = useUserSettings();

    const initialFormData = useMemo(() => userDetails, [userDetails]);

    const [formData, setFormData] = useState(userDetails);

    const [
        shouldDisplayEditProfileForm,
        setShouldDisplayEditProfileForm,
    ] = useState(false);

    const [isLoading, error, postData] = usePostData();

    const shouldDisableSubmitButton = () => {
        return isLoading || _.isEqual(initialFormData, formData);
    }

    const shouldDisableResetButton = () => {
        return isLoading
    }

    const resetFormData = () => {
        setFormData(initialFormData);
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        await postData(updateUserDetails, formData);

        if (!error) {
            setShouldDisplayEditProfileForm(false);
        }
    }

    const handleResetButtonClick = (e) => {
        e.preventDefault();
        setShouldDisplayEditProfileForm(false);
        resetFormData();
    }

    if (isUserDetailsLoading) {
        return <Loader />
    }

    return (
        <Segment loading={isLoading || isUserDetailsLoading}>

            <Header
                icon="user"
                content={userDetails.displayName}
                subheader={`${userDetails.email} | ${getWorkerCategoryDisplayName(userDetails.workerCategory)}`}
            />

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
                                    <Logout
                                        fluid
                                    />
                                </Form.Field>

                            </Form.Group>
                        </Form>
                    )
            }

        </Segment>
    )
}

export default UserAccountSettings;