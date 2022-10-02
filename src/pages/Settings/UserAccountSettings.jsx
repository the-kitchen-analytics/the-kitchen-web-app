import _ from "lodash";
import { useState } from "react";
import { Segment, Grid } from "semantic-ui-react";
import EditUserForm from "../../components/EditUserForm";
import { usePostData, useToggleState } from "../../hooks";
import { useMemo } from "react";
import Profile from "../../components/Profile";
import { updateProfile } from "firebase/auth";
import ErrorMessage from "../../components/ui/ErrorMessage";
import { useOutletContext } from "react-router-dom";

const UserAccountSettings = () => {

    const { currentUser } = useOutletContext();

    const [isLoading, error, postData] = usePostData();

    const initialFormData = useMemo(() => ({
        email: currentUser.email,
        displayName: currentUser.displayName,
        // description: '',
        photoURL: currentUser.photoURL,
    }), [currentUser.email, currentUser.displayName, currentUser.photoURL]);

    const [formData, setFormData] = useState(initialFormData);
    const [
        shouldDisplayEditProfileForm,
        toggleShouldDisplayEditProfileForm,
        setShouldDisplayEditProfileForm,
    ] = useToggleState(false);

    const shouldDisableSubmitButton = () => {
        return isLoading || _.isEqual(initialFormData, formData);
    }

    const shouldDisableResetButton = () => {
        return isLoading || _.isEqual(initialFormData, formData);
    }

    const resetFormData = () => {
        setFormData(initialFormData);
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        await postData(updateProfile, currentUser, formData);
        setShouldDisplayEditProfileForm(false);
        // resetFormData();
    }

    const handleResetButtonClick = (e) => {
        e.preventDefault();
        setShouldDisplayEditProfileForm(false);
        resetFormData();
    }

    return (
        <Segment loading={isLoading}>
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Profile
                            userData={currentUser}
                            handleEdit={toggleShouldDisplayEditProfileForm}
                            logout
                        />
                    </Grid.Column>
                </Grid.Row>
                {
                    shouldDisplayEditProfileForm && (
                        <Grid.Row>
                            <Grid.Column>
                                <Segment>

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
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    )
                }
            </Grid>
        </Segment>
    )
}

export default UserAccountSettings;