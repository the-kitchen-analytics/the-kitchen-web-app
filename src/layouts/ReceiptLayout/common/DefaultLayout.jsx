import { Outlet } from 'react-router-dom'
import { Form } from 'semantic-ui-react'
import { Carousel, Loader } from '../../../shared/components'

export const DefaultLayout = ({ dateSelect, carousel, loading, receipts }) => {

  const { as: DateSelect, ...dateSelectProps } = dateSelect

  return (
    <>
      <Form className={'mb-1'}>
        <Form.Field>
          <DateSelect {...dateSelectProps} />
        </Form.Field>
        <Form.Field>
          <Carousel {...carousel} />
        </Form.Field>
      </Form>
      {
        loading
          ? <Loader />
          : <Outlet context={{ receipts }} />
      }
    </>
  )
}