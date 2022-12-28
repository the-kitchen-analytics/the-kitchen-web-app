import {
  STATISTICS_ALL, STATISTICS_DAILY, STATISTICS_MONTHLY,
  TABLE_ALL, TABLE_DAILY, TABLE_MONTHLY,
  SETTINGS, CREATE_RECEIPT,
} from '../../routePaths'
import { TYPE_ITEM, TYPE_PARENT } from './elementTypes'

const tableElements = Object.freeze([
  {
    type: TYPE_ITEM,
    itemProps: {
      key: TABLE_DAILY,
      to: TABLE_DAILY,
    },
    text: 'За день'
  },
  {
    type: TYPE_ITEM,
    itemProps: {
      key: TABLE_MONTHLY,
      to: TABLE_MONTHLY,
    },
    text: 'За месяц'
  },
  {
    type: TYPE_ITEM,
    itemProps: {
      key: TABLE_ALL,
      to: TABLE_ALL,
    },
    text: 'За всё время'
  }
])

const statisticsElements = Object.freeze([
  {
    type: TYPE_ITEM,
    itemProps: {
      key: STATISTICS_DAILY,
      to: STATISTICS_DAILY,
    },
    text: 'За день',
  },
  {
    type: TYPE_ITEM,
    itemProps: {
      key: STATISTICS_MONTHLY,
      to: STATISTICS_MONTHLY,
    },
    text: 'За месяц',
  },
  {
    type: TYPE_ITEM,
    itemProps: {
      key: STATISTICS_ALL,
      to: STATISTICS_ALL,
    },
    text: 'За всё время',
  },
])

const navigationBarOptions = Object.freeze([
  {
    type: TYPE_PARENT,
    itemProps: {
      key: 'table-parent',
    },
    icon: 'table',
    text: 'Таблицы',
    items: tableElements,
  },

  {
    type: TYPE_PARENT,
    itemProps: {
      key: 'statistics-parent',
    },
    icon: 'chart bar',
    text: 'Статистика',
    items: statisticsElements,
  },

  {
    type: TYPE_PARENT,
    itemProps: {
      key: 'more-parent',
    },
    icon: 'th',
    text: 'Ещё',
    items: [
      {
        type: TYPE_ITEM,
        itemProps: {
          key: CREATE_RECEIPT,
          to: CREATE_RECEIPT,
        },
        icon: 'save',
        text: 'Сохранить запись',
      },

      {
        type: TYPE_ITEM,
        itemProps: {
          key: SETTINGS,
          to: SETTINGS,
        },
        icon: 'setting',
        text: 'Настройки',
      }
    ],
  },
])

export default navigationBarOptions