import React, { useCallback, useState, useContext } from "react";
import { Form, Message } from "semantic-ui-react";
import { handleInputChange } from "../../utils/ui/form";
import ApiServiceContext from "../../context/ApiServiceContext";
import { LoadableButton } from "../../components/ui/Button";

const INITIAL_CREDENTIALS = Object.freeze({
    username: '',
    password: ''
});

const LoginForm = ({ setToken }) => {

    const { login } = useContext(ApiServiceContext)
    const [credentials, setCredentials] = useState(INITIAL_CREDENTIALS);
    const [isHttpRequestPerformed, setIsHttpRequestPerformed] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleCredentialsChange = e => handleInputChange(e, setCredentials);

    const handleFormSubmit = async (event) => {
        try {
            event.preventDefault();
            setHasError(false);
            setIsHttpRequestPerformed(true);
            const { token } = await login(credentials)
            setToken(token);
        } catch (error) {
            setHasError(true);
            console.error(error);
        } finally {
            setIsHttpRequestPerformed(false);
        }
    }

    const shouldDisableSubmitButton = useCallback(() => {
        return !(credentials.username && credentials.password);
    }, [credentials]);

    return (
        <Form
            error={hasError}
            size="large"
            loading={isHttpRequestPerformed}
            onSubmit={handleFormSubmit}
        >
            {
                hasError && (
                    <Message
                        error
                        header='Произошла ошибка'
                        content='Пожалуйста, проверьте введённые данные и повторите попытку снова.'
                    />
                )
            }
            <Form.Field>
                <Form.Input
                    icon='at'
                    iconPosition='left'
                    label="Имя пользователя"
                    name="username"
                    placeholder='Имя пользователя'
                    autoComplete='username'
                    onChange={handleCredentialsChange}
                    value={credentials.email}
                />
            </Form.Field>
            <Form.Field>
                <Form.Input
                    icon='key'
                    iconPosition='left'
                    label="Пароль"
                    type="password"
                    name="password"
                    placeholder='Пароль'
                    autoComplete='current-password'
                    onChange={handleCredentialsChange}
                    value={credentials.password}
                />
            </Form.Field>
            <Form.Field>
                <Form.Checkbox label='Запомнить меня' />
            </Form.Field>

            <LoadableButton
                fluid
                positive
                size="large"
                loading={isHttpRequestPerformed}
                disabled={shouldDisableSubmitButton()}
                icon='sign in'
                type='submit'
                onClick={handleFormSubmit}
                content='Вход'
            />
        </Form>
    );
}

export default LoginForm;