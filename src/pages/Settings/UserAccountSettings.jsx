import _ from "lodash";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Segment, Grid } from "semantic-ui-react";
import EditUserForm from "../../components/EditUserForm";
import { auth } from "../../config/firebase";
import { usePostData } from "../../hooks";
import { useMemo } from "react";
import Profile from "../../components/Profile";
import { toggleSetter } from "../../utils/ui";
import { updateProfile } from "firebase/auth";
import ErrorMessage from "../../components/ui/ErrorMessage";

const UserAccountSettings = () => {

    const [authState] = useAuthState(auth);
    const [isLoading, error, postData] = usePostData();

    const initialFormData = useMemo(() => ({
        email: authState.email,
        displayName: authState.displayName,
        // description: '',
        photoURL: authState.photoURL,
    }), [authState.email, authState.displayName, authState.photoURL]);

    const [formData, setFormData] = useState(initialFormData);
    const [shouldDisplayEditProfileForm, setShouldDisplayEditProfileForm] = useState(false);

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
        await postData(updateProfile, authState, formData);
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
                            userData={authState}
                            handleEdit={() => toggleSetter(setShouldDisplayEditProfileForm)}
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