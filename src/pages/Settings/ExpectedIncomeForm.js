import React from "react";
import { Segment, Header, Message, Input, Grid } from "semantic-ui-react";
import { useLocalStorage } from "../../hooks";

const LOCAL_STORAGE_KEY = 'expectedIncomeSetting';
const INPUT_SIZE = 'large';

const ExpectedIncomeForm = () => {

    const [expectedIncome, setExpectedIncome] = useLocalStorage(LOCAL_STORAGE_KEY, undefined);

    return (
        <Segment>
            <Header
                icon='money'
                content='Ожидаемый доход'
            >
            </Header>

            <Message
                positive

                header='Введите целое число (евро):'
                content='Данное значение будет использовано в аналитике на странице статистики за месяц. Оно поможет нам лучше показать наглядно ваши финансовые результаты в выбранный период времени.'
            />

            <Grid stackable>
                <Grid.Row>

                    <Grid.Column
                        computer={6}
                        mobile={10}
                    >
                        <Input
                            size={INPUT_SIZE}
                            fluid
                            type='number'
                            placeholder='Введите значение'
                            value={expectedIncome}
                            onChange={({ target: { value } }) => setExpectedIncome(value)}
                            min={0}
                            step={5}
                            icon="euro"
                            iconPosition="left"
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </Segment>
    )
}

export default ExpectedIncomeForm;