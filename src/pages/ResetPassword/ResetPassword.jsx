import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "semantic-ui-react";
import FormLayout from "../../components/layouts/FormLayout";
import { sendPasswordReset } from "../../config/firebase";
import ResetPasswordForm from "./ResetPasswordForm";
import { usePostData } from "../../hooks";

export default function ResetPassword() {

    const [formData, setFormData] = useState({
        email: ''
    });

    const [isLoading, error, makeRequest] = usePostData();

    const navigate = useNavigate();

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        const { email } = formData;

        await makeRequest(sendPasswordReset, email);

        if (!error) {
            navigate('/dashboard');
        }
    }

    return (
        <Container>
            <FormLayout
                title="Cбросить пароль"
                subheader="Пожалуйста, введите адрес электронной почты, к которому привязан Ваш аккаунт."
                error={error}
            >
                <ResetPasswordForm
                    formData={formData}
                    setFormData={setFormData}
                    isLoading={isLoading}
                    handlePasswordReset={handlePasswordReset}
                />
            </FormLayout>
        </Container>
    );
}