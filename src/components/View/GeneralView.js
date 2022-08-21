import React, { useState } from "react";
import { Container, Grid, Icon, Menu } from "semantic-ui-react";

import NoContentView from "./NoContentView";
import { AllTimeTableView, DailyTableView, MonthlyTableView } from "./Tables";
import { sum } from "../../utils/ArrayUtil";
import { AllTimeStatisticsView, DailyStatisticsView, MonthlyStatisticsView } from "./Statistics";

const MenuItemWrapper = ({ name, activeItem, handleItemClick, children = '' }) => (
    <Menu.Item
        name={name}
        active={activeItem === name}
        onClick={handleItemClick}
        children={children}
    />
);

const GeneralView = ({ getAllData, getDataByDay, getDataByMonth, getWorkedDays }) => {

    const buildStatisticsData = (groupedData) => ({
        daysCount: Object.keys(groupedData).length,
        totalIncome: sum(Object.values(groupedData).flat().map(({ totalPriceAfterTaxes }) => totalPriceAfterTaxes)),
        operationsCount: Object.values(groupedData).flat().length
    });

    const [activeItem, setActiveItem] = useState(DailyTableView.displayName);

    const handleItemClick = (e, { name }) => setActiveItem(name);

    const getContent = (activeView) => {
        switch (activeView) {
            case DailyTableView.displayName:
                return (
                    <DailyTableView
                        getTableData={getDataByDay}
                        getWorkedDays={getWorkedDays}
                    />
                );

            case MonthlyTableView.displayName:
                return (
                    <MonthlyTableView
                        getTableData={getDataByMonth}
                    />
                )

            case AllTimeTableView.displayName:
                return (
                    <AllTimeTableView
                        getTableData={getAllData}
                    />
                );

            case DailyStatisticsView.displayName:
                return (
                    <DailyStatisticsView
                        getStatisticData={getDataByDay}
                    />
                );

            case MonthlyStatisticsView.displayName:
                return (
                    <MonthlyStatisticsView
                        getStatisticData={getDataByMonth}
                    />
                )

            case AllTimeStatisticsView.displayName:
                return (
                    <AllTimeStatisticsView
                        getStatisticData={getAllData}
                    />
                );

            default: return (
                <NoContentView />
            )
        }
    }

    return (
        <Container>
            <Grid centered padded stackable>

                <Grid.Row>
                    <Grid.Column width={4}>
                        <Menu fluid vertical tabular>
                            <Menu.Item>
                                <Menu.Header>
                                    <Icon name="table" />
                                    Таблицы
                                </Menu.Header>

                                <Menu.Menu>
                                    <MenuItemWrapper
                                        name={DailyTableView.displayName}
                                        activeItem={activeItem}
                                        handleItemClick={handleItemClick}
                                    >
                                        За день
                                    </MenuItemWrapper>

                                    <MenuItemWrapper
                                        name={MonthlyTableView.displayName}
                                        activeItem={activeItem}
                                        handleItemClick={handleItemClick}
                                    >
                                        За месяц
                                    </MenuItemWrapper>

                                    <MenuItemWrapper
                                        name={AllTimeTableView.displayName}
                                        activeItem={activeItem}
                                        handleItemClick={handleItemClick}
                                    >
                                        За всё время
                                    </MenuItemWrapper>
                                </Menu.Menu>
                            </Menu.Item>

                            <Menu.Item>
                                <Menu.Header>
                                    <Icon name="chart bar" />
                                    Статистика
                                </Menu.Header>

                                <Menu.Menu>
                                    <MenuItemWrapper
                                        name={DailyStatisticsView.displayName}
                                        activeItem={activeItem}
                                        handleItemClick={handleItemClick}
                                    >
                                        За день
                                    </MenuItemWrapper>

                                    <MenuItemWrapper
                                        name={MonthlyStatisticsView.displayName}
                                        activeItem={activeItem}
                                        handleItemClick={handleItemClick}
                                    >
                                        За месяц
                                    </MenuItemWrapper>

                                    <MenuItemWrapper
                                        name={AllTimeStatisticsView.displayName}
                                        activeItem={activeItem}
                                        handleItemClick={handleItemClick}
                                    >
                                        За всё время
                                    </MenuItemWrapper>
                                </Menu.Menu>
                            </Menu.Item>

                            <Menu.Item
                                name='links'
                                active={activeItem === 'links'}
                                onClick={handleItemClick}
                            >
                                <Icon name="linkify" />
                                Ссылки
                            </Menu.Item>
                            <Menu.Item
                                name='settings'
                                active={activeItem === 'settings'}
                                onClick={handleItemClick}
                            >
                                <Icon name="setting" />
                                Настройки
                            </Menu.Item>
                        </Menu>
                    </Grid.Column>

                    <Grid.Column stretched width={12}>
                        {
                            getContent(activeItem)
                        }
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
}

export default GeneralView;