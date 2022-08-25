import React from "react";
import { Menu, Icon } from "semantic-ui-react";

import MenuItemWrapper from "./MenuItemWrapper";
import { AllTimeTableView, DailyTableView, MonthlyTableView } from "../../View/Tables";
import { AllTimeStatisticsView, DailyStatisticsView, MonthlyStatisticsView } from "../../View/Statistics";
import { SettingsView } from "../../View";

const MainMenu = ({ activeItem, handleActiviItemChange, refreshData }) => (
    <Menu
        defaultActiveIndex={0}
        stackable
        fluid
        vertical
        size="massive"
    >
        <Menu.Item>

            <Menu.Header>
                <Icon name="table" />
                Таблицы
            </Menu.Header>

            <Menu.Menu>
                <MenuItemWrapper
                    name={DailyTableView.displayName}
                    activeItem={activeItem}
                    handleItemClick={handleActiviItemChange}
                >
                    За день
                </MenuItemWrapper>

                <MenuItemWrapper
                    name={MonthlyTableView.displayName}
                    activeItem={activeItem}
                    handleItemClick={handleActiviItemChange}
                >
                    За месяц
                </MenuItemWrapper>

                <MenuItemWrapper
                    name={AllTimeTableView.displayName}
                    activeItem={activeItem}
                    handleItemClick={handleActiviItemChange}
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
                    handleItemClick={handleActiviItemChange}
                >
                    За день
                </MenuItemWrapper>

                <MenuItemWrapper
                    name={MonthlyStatisticsView.displayName}
                    activeItem={activeItem}
                    handleItemClick={handleActiviItemChange}
                >
                    За месяц
                </MenuItemWrapper>

                <MenuItemWrapper
                    name={AllTimeStatisticsView.displayName}
                    activeItem={activeItem}
                    handleItemClick={handleActiviItemChange}
                >
                    За всё время
                </MenuItemWrapper>
            </Menu.Menu>
        </Menu.Item>


        <Menu.Item
            name={SettingsView.displayName}
            active={activeItem === SettingsView.displayName}
            onClick={handleActiviItemChange}
        >
            <Icon name="setting" />
            Настройки
        </Menu.Item>

        <Menu.Item
            name='refreshData'
            onClick={refreshData}
        >
            <Icon name="refresh" />
            Обновить данные
        </Menu.Item>
    </Menu>
);

export default MainMenu;