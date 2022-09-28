import _ from "lodash";
import { Grid } from "semantic-ui-react";
import { MonthSelect, YearSelect } from "../../shared/dropdown";
import Carosel from "../../ui/Carosel";
import GenericLayout from "../GenericLayout/GenericLayout";

const MonthlyDataLayout = ({ icon, content, children, defaultSelectedDate, selectedDate, setSelectedDate }) => {

    const setSelectedMonth = (month) => {
        setSelectedDate((selectedDate) => ({ ...selectedDate, month }));
    }

    const setSelectedYear = (year) => {
        setSelectedDate((selectedDate) => ({ ...selectedDate, year }));
    }

    return (
        <GenericLayout
            icon={icon}
            header="За месяц"
            subheader="Выберите месяц и год"
        >
            <Grid.Row columns='equal'>
                <Grid.Column
                    width={4}
                >
                    <MonthSelect
                        value={selectedDate.month}
                        handleChange={(e, { value }) => setSelectedMonth(value)}
                    />
                </Grid.Column>

                <Grid.Column
                    width={4}
                >
                    <YearSelect
                        value={selectedDate.year}
                        handleChange={(e, { value }) => setSelectedYear(value)}
                    />
                </Grid.Column>

                <Grid.Column
                    width={6}
                    textAlign="right"
                    floated="right"
                >
                    <Carosel
                        previousItemProps={{
                            disabled: selectedDate.month <= 1,
                            onClick: () => setSelectedMonth(selectedDate.month - 1)
                        }}
                        resetButtonProps={{
                            content: 'Текущий месяц',
                            disabled: _.isEqual(defaultSelectedDate, selectedDate),
                            onClick: () => setSelectedDate(defaultSelectedDate)
                        }}
                        nextItemProps={{
                            disabled: selectedDate.month >= 12,
                            onClick: () => setSelectedMonth(selectedDate.month + 1)
                        }}
                    />
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column>
                    {
                        content || children
                    }
                </Grid.Column>
            </Grid.Row>
        </GenericLayout>
    )
}

export default MonthlyDataLayout;