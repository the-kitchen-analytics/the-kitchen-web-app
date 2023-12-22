import _ from 'lodash'
import { useState } from 'react'

export const useTouched = (handleChange) => {
  const [isTouched, setIsTouched] = useState(false)

  const handleInputChangeWrapper = (...args) => {
    setIsTouched(true)

    if (_.isFunction(handleChange)) {
      handleChange(...args)
    }
  }

  return {
    isTouched, handleInputChangeWrapper
  }
}