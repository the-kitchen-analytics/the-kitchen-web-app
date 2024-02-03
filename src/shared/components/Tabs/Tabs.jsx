import classNames from 'classnames'
import './Tabs.css'

export const Tabs = ({ panes }) => (
  <div className={'tabs'}>
    <div className={'tab-menu'}>
      {
        panes.map(({ name, active, onClick }) => (
          <div key={name} className={'tab-menu-item'}>
            <button
              className={classNames({ active })}
              onClick={onClick}
            >{name}</button>
          </div>
        ))
      }
    </div>

    <div className={'tab-pane'}>
      {
        panes.find(({ active }) => active)?.content
      }
    </div>
  </div>
)
