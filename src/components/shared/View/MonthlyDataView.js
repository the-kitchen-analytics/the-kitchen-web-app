import _ from "lodash";
import React from "react";
import { Grid } from "semantic-ui-react";
import { getCurrentDate } from "../../../utils/date";
import { MonthSelect, YearSelect } from "../dropdown";
import Carosel from "../../ui/Carosel";
import GenericView from "./GenericView";
import { useLocalStorage } from "../../../hooks";

const now = getCurrentDate();
const CURRENT_MONTH_AND_YEAR = {
    month: now.getMonth() + 1,
    year: now.getFullYear()
}

const MonthlyDataView = ({ getData, component, icon, componentProps = {} }) => {

    const [selectedDate, setSelectedDate] = useLocalStorage('selectedMonthAndYear', CURRENT_MONTH_AND_YEAR)

    const setSelectedMonth = (month) => {
        setSelectedDate((selectedDate) => ({ ...selectedDate, month }));
    }

    const setSelectedYear = (year) => {
        setSelectedDate((selectedDate) => ({ ...selectedDate, year }));
    }

    const Component = component;

    return (
        <GenericView
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
                            disabled: _.isEqual(CURRENT_MONTH_AND_YEAR, selectedDate),
                            onClick: () => setSelectedDate(CURRENT_MONTH_AND_YEAR)
                        }}
                        nextItemProps={{
                            disabled: selectedDate.month >= 12,
                            onClick: () => setSelectedMonth(selectedDate.month + 1)
                        }}
                    />
                </Grid.Column>
            </Grid.Row>

            {/* <Divider /> */}

            <Grid.Row>
                <Grid.Column>
                    <Component
                        {...componentProps}
                        data={getData(selectedDate.month, selectedDate.year)}
                    />
                </Grid.Column>
            </Grid.Row>
        </GenericView>
    )
}

export default MonthlyDataView;