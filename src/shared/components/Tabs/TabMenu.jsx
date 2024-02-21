import { NavLink } from 'react-router-dom'

export const TabMenu = ({ tabs }) => (
  <div className="tab-menu">
    {
      tabs.map(({ content, to }) => (
        <div key={content} className="tab-menu-item">
          <NavLink to={to}>
            {content}
          </NavLink>
        </div>
      ))
    }
  </div>
)