import React from "react";
import { Menu, Icon, Image, Divider } from "semantic-ui-react";

import MenuItemWrapper from "./MenuItemWrapper";
import { AllTimeTableView, DailyTableView, MonthlyTableView } from "../../View/Tables";
import { AllTimeStatisticsView, DailyStatisticsView, MonthlyStatisticsView } from "../../View/Statistics";
import { SettingsView } from "../../View";

const LOGO_SRC = process.env.PUBLIC_URL + '/apple-touch-icon.png'

const MainMenu = ({ refreshData }) => (
    <Menu
        defaultActiveIndex={0}
        stackable
        fluid
        vertical
        size="massive"
    >
        <Menu.Item onClick={refreshData}>
            <Image
                avatar
                src={LOGO_SRC}
            /> <strong>The Kitchen App</strong>
        </Menu.Item>

        <Menu.Item>

            <Menu.Header>
                <Icon name="table" />
                Таблицы
            </Menu.Header>

            <Menu.Menu>
                <MenuItemWrapper
                    to={'table/daily'}
                    name={DailyTableView.displayName}
                >
                    За день
                </MenuItemWrapper>

                <MenuItemWrapper
                    to={'table/montly'}
                    name={MonthlyTableView.displayName}
                >
                    За месяц
                </MenuItemWrapper>

                <MenuItemWrapper
                    to={'table'}
                    name={AllTimeTableView.displayName}
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
                    to={'statistics/daily'}
                    name={DailyStatisticsView.displayName}
                >
                    За день
                </MenuItemWrapper>

                <MenuItemWrapper
                    to={'statistics/montly'}
                    name={MonthlyStatisticsView.displayName}
                >
                    За месяц
                </MenuItemWrapper>

                <MenuItemWrapper
                    to={'statistics'}
                    name={AllTimeStatisticsView.displayName}
                >
                    За всё время
                </MenuItemWrapper>
            </Menu.Menu>
        </Menu.Item>

        <Divider fitted />

        <MenuItemWrapper
            to={'settings'}
            name={SettingsView.displayName}
        >
            <Icon name="setting" />
            Настройки
        </MenuItemWrapper>

    </Menu>
);

export default MainMenu;