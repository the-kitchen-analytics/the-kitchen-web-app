import {
    STATISTICS_ALL, STATISTICS_DAILY, STATISTICS_MONTHLY,
    TABLE_ALL, TABLE_DAILY, TABLE_MONTHLY,
    SETTINGS, SUBMIT_DATA
} from "../../routePaths";
import { TYPE_DIVIDER, TYPE_ITEM, TYPE_PARENT } from "./elementTypes";

const tableElements = Object.freeze([
    {
        type: TYPE_ITEM,
        itemProps: {
            key: TABLE_DAILY,
            to: '/dashboard/table/daily',
        },
        text: 'За день'
    },
    {
        type: TYPE_ITEM,
        itemProps: {
            key: TABLE_MONTHLY,
            to: '/dashboard/table/monthly',
        },
        text: 'За месяц'
    },
    {
        type: TYPE_ITEM,
        itemProps: {
            key: TABLE_ALL,
            to: '/dashboard/table',
        },
        text: 'За всё время'
    }
]);

const statisticsElements = Object.freeze([
    {
        type: TYPE_ITEM,
        itemProps: {
            key: STATISTICS_DAILY,
            to: '/dashboard/statistics/daily',
        },
        text: 'За день'
    },
    {
        type: TYPE_ITEM,
        itemProps: {
            key: STATISTICS_MONTHLY,
            to: '/dashboard/statistics/monthly',
        },
        text: 'За месяц'
    },
    {
        type: TYPE_ITEM,
        itemProps: {
            key: STATISTICS_ALL,
            to: '/dashboard/statistics',
        },
        text: 'За всё время'
    }
]);

const navigationBarOptions = Object.freeze([
    {
        type: TYPE_PARENT,
        itemProps: {
            key: 'table-parent',
        },
        icon: 'table',
        text: 'Таблицы',
        items: tableElements
    },

    {
        type: TYPE_PARENT,
        itemProps: {
            key: 'statistics-parent',
        },
        icon: 'chart bar',
        text: 'Статистика',
        items: statisticsElements
    },

    {
        type: TYPE_DIVIDER,
        itemProps: {
            key: 'divider',
            fitted: true,
        },
    },

    {
        type: TYPE_ITEM,
        itemProps: {
            key: SUBMIT_DATA,
            to: '/dashboard/submitData',
        },
        icon: 'upload',
        text: 'Отправить данные'
    },

    {
        type: TYPE_ITEM,
        itemProps: {
            key: SETTINGS,
            to: '/dashboard/settings',
        },
        icon: 'setting',
        text: 'Настройки'
    }
]);

export default navigationBarOptions;