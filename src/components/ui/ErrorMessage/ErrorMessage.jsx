import { Message } from "semantic-ui-react";

const ErrorMessage = ({ message }) => (
    <Message
        error
        header="Произошла ошибка."
        content={message || "Пожалуйста, проверьте введённые данные и повторите попытку."}
    />
);

export default ErrorMessage;