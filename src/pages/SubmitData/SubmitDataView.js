import React, { useState } from "react";
import { Grid, Form, Button } from "semantic-ui-react";
import { getCurrentDate } from "../../utils/date";
import { WorkerSelect, ProcedureSelect } from "../../components/shared/dropdown";
import { GenericView } from "../../components/shared/View";

const initalFormData = Object.freeze({
    date: getCurrentDate().toISOString().split('T')[0],
    worker: '',
    procedures: []
})

const SubmitDataForm = () => {

    const [formData, setFormData] = useState(initalFormData)

    const handleFormSubmit = (e) => {
        e.preventDefault()

        console.debug(formData)
    }

    const handleInputChange = ({ target }) => {
        setFormData(prevData => ({
            ...prevData,
            [target.name]: target.value
        }))
    }

    return (
        <Form
            method="post"
            onSubmit={handleFormSubmit}
        >
            <Form.Field required>
                <Form.Input
                    required
                    label="Выберите день"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    type="date"
                />
            </Form.Field>

            <Form.Field required>
                <WorkerSelect
                    label='Выберите мастера'
                    name="worker"
                    value={formData.worker}
                    handleChange={handleInputChange}
                />
            </Form.Field>

            <Form.Field required>
                <ProcedureSelect
                    label='Выберите набор услуг'
                    name="procedures"
                    value={formData.procedures}
                    handleChange={handleInputChange}
                />
            </Form.Field>

            <Form.Field>
                <Button
                    type="submit"
                    content="Отправить"
                />
            </Form.Field>
        </Form>
    )
}

const SubmitDataView = () => {

    return (
        <GenericView header="Отправить данные">
            <Grid.Row>
                <Grid.Column>
                    <SubmitDataForm />
                </Grid.Column>
            </Grid.Row>
        </GenericView>
    )
}

SubmitDataView.displayName = 'SubmitDataView'
export default SubmitDataView