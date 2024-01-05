import { useUserSettings } from '../../../hooks'
import classNames from 'classnames'
import './Switch.css'

export const Switch = ({ label, checked, onChange }) => {
  const { settings: { accentColor } } = useUserSettings()

  return (
    <div className="switch">
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <div className={classNames('label', 'ui', { [accentColor]: checked })} />
        <span>{label}</span>
      </label>
    </div>
  )
}