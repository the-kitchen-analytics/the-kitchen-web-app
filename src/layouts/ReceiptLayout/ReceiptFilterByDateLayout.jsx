import _ from 'lodash'
import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import { MainHeader, Tabs } from '../../shared/components'
import { LastWorkedDayContextProvider } from '../../context/'


const titlePerPathname = {
  table: 'Главная',
  statistics: 'Статистика'
}

const getTitleByPathname = (pathname) => {
  return titlePerPathname[pathname] || pathname
}

export const ReceiptFilterByDateLayout = () => {

  const { pathname } = useLocation()
  const pathnames = pathname.split('/')
  const displayOption = _.last(pathnames)

  const tabs = useMemo(() => (
    [
      {
        to: `/receipts/day/${displayOption}`,
        content: 'За день'
      },
      {
        to: `/receipts/month/${displayOption}`,
        content: 'За месяц'
      },
      {
        to: `/receipts/year/${displayOption}`,
        content: 'За год'
      }
    ]
  ), [displayOption])

  return (
    <Grid columns={'1'}>
      <Grid.Column>
        <MainHeader content={getTitleByPathname(displayOption)} />
      </Grid.Column>

      <Grid.Column>
        <LastWorkedDayContextProvider>
          <Tabs tabs={tabs} />
        </LastWorkedDayContextProvider>
      </Grid.Column>
    </Grid>
  )
}