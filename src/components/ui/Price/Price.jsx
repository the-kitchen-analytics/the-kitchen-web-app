import _ from 'lodash'

const Price = ({ children, euro, fixed = 2 }) => (
  <>{euro ? '€' : ''} {_.isNumber(children) ? children.toFixed(fixed) : 'NaN'}</>
)

export default Price