import classNames from 'classnames'
import { useTheme } from '../../hooks'
import './Switch.css'

const SLIDER_DEFAULT_CLASS_NAMES = ['switch-slider', 'ui', 'button']

export const Switch = ({ label, checked, onChange }) => {
  const { color } = useTheme()
  const sliderClassName = classNames(SLIDER_DEFAULT_CLASS_NAMES, { [color]: checked })

  return (
    <label className="switch-container">
      <input
        type="checkbox"
        className="switch-input"
        checked={checked}
        onChange={onChange}
      />
      <span className={sliderClassName}></span>
      <span className="switch-label">{label}</span>
    </label>
  )
}