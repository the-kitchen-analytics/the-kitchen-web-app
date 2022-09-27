import { useCallback } from "react";
import { Form } from "semantic-ui-react";
import { useUserSettings } from "../../hooks";
import { handleInputChange } from "../../utils/ui/form";

const EditUserForm = ({
    formData,
    setFormData,
    handleSubmit,
    isLoading,
    handleResetButtonClick,
    shouldDisableSubmitButton,
    shouldDisableResetButton,
}) => {

    const { settings: { controlsSize, accentColor } } = useUserSettings();

    const {
        displayName,
        email,
        photoURL,
        // description,
    } = formData;

    const handleInputChangeWrapper = useCallback((e) => {
        handleInputChange(e, setFormData)
    }, [setFormData]);

    return (
        <Form
            onSubmit={handleSubmit}
            loading={isLoading}
            size={controlsSize}
        >
            <Form.Input
                required
                icon="address card"
                iconPosition="left"
                name="displayName"
                type="text"
                label="Имя"
                placeholder="Имя"
                value={displayName}
                onChange={handleInputChangeWrapper}
            />

            <Form.Input
                required
                disabled
                icon="at"
                iconPosition="left"
                name="email"
                type="email"
                label="Электронная почта"
                placeholder="Эл. почта"
                value={email}
                onChange={handleInputChangeWrapper}
            />

            {/* <Form.TextArea
                name="description"
                label="О себе"
                placeholder="Введите пару слов о себе"
                value={description}
                onChange={handleInputChangeWrapper}
            /> */}

            <Form.TextArea
                name="photoURL"
                label="URL-адрес аватара"
                placeholder="https://example.com/avatar.jpg"
                value={photoURL}
                onChange={handleInputChangeWrapper}
            />

            <Form.Group widths='equal'>
                <Form.Button
                    fluid
                    icon="save"
                    type="submit"
                    loading={isLoading}
                    disabled={shouldDisableSubmitButton()}
                    size={controlsSize}
                    color={accentColor}
                    content="Сохранить"
                />

                <Form.Button
                    fluid
                    icon="cancel"
                    type="button"
                    disabled={shouldDisableResetButton()}
                    onClick={handleResetButtonClick}
                    size={controlsSize}
                    content="Отменить"
                />
            </Form.Group>

        </Form>
    )
}

export default EditUserForm;