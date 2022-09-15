import React, { useEffect, useState } from "react";
import { Segment, Header, Message, Form } from "semantic-ui-react";
import { useLocalStorage } from "../../hooks";
import { handleInputChange } from "../../utils/ui/form";
import _ from "lodash";
import { buildDropdownOptions } from "../../utils/ui/dropdown";

const GoogleApiConfiguration = () => {

    const [googleApiConfiguration, setGoogleApiConfiguration] = useLocalStorage('googleApiConfiguration', {});

    const [listNameOptions, setListNameOptions] = useState([]);

    const handleResponse = async (response) => {
        const { sheets } = await response.json();

        const sheetOptions = buildDropdownOptions(
            sheets.map(({ properties }) => properties),
            ({ sheetId }) => sheetId,
            ({ title }) => title,
            ({ title }) => title
        );

        console.debug('sheetOptions', sheetOptions)
        setListNameOptions(sheetOptions)
    }

    useEffect(() => {
        if (_.isEmpty(listNameOptions) && googleApiConfiguration.apiKey && googleApiConfiguration.spreadSheetId) {
            console.debug('api key has changed');

            fetch('https://sheets.googleapis.com/v4/spreadsheets/15lV-BQrAf7tqbFlG9LGtdDaoCAVC_WkLV0P55_9urMk/?key=AIzaSyD9MdV215tec7rcp4rIeWGyUF0QUXmwdTw')
                .then(handleResponse)
                .then(data => console.debug(data))
            // .error(console.error)

        }
    }, [googleApiConfiguration.apiKey, googleApiConfiguration.spreadSheetId, listNameOptions])

    const handleFormSumbit = (e) => {
        e.preventDefault();
    }

    const handleChangeWrapper = (e) => {
        handleInputChange(e, setGoogleApiConfiguration);
    }

    return (
        <Segment>
            <Header
                icon='google'
                content='Интеграция с Google API'
            >
            </Header>

            <Message
                attached
                negative
                header='Внимание!'
                content='Не передавайте эти данные третьим лицам.'
            />
            <Form
                onSubmit={handleFormSumbit}
                size="large"
                className='attached fluid segment'
            >

                <Form.Input
                    name='spreadSheetId'
                    value={googleApiConfiguration.spreadSheetId}
                    onChange={handleChangeWrapper}
                    fluid
                    label='Google Spreadsheet ID'
                    placeholder='Введите ID таблицы'
                />

                <Form.Input
                    name='apiKey'
                    value={googleApiConfiguration.apiKey}
                    onChange={handleChangeWrapper}
                    type='password'
                    label='API Key'
                    placeholder='Введите API Key'
                />

                <Form.Select
                    name='sheetName'
                    value={googleApiConfiguration.sheetName}
                    options={listNameOptions}
                    onChange={handleChangeWrapper}
                    fluid
                    label='Sheet name'
                    placeholder='Выберите нужный лист'
                />

                <Form.TextArea
                    name='googleScriptUrl'
                    value={googleApiConfiguration.postUrl}
                    onChange={handleChangeWrapper}
                    label='Google Script URL'
                    placeholder='Добавте ссылку вашего Google Script'
                />
            </Form>
            <Message
                attached='bottom'
                content='Данные сохраняются автоматически.'
            />

        </Segment>
    )
}

export default GoogleApiConfiguration;
