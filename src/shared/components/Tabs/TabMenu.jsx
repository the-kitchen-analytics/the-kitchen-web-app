import classNames from 'classnames'

export const TabMenu = ({ tabs }) => (
  <div className="tab-menu">
    {
      tabs.map(({ name, active, onClick }) => (
        <div key={name} className="tab-menu-item">
          <button
            type="button"
            className={classNames({ active })}
            onClick={onClick}
          >{name}</button>
        </div>
      ))
    }
  </div>
)