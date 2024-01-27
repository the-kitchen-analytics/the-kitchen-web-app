import { RouterProvider } from 'react-router-dom'
import { router } from '../router'

export const App = () => (
  <div className="app">
    <RouterProvider router={router} />
  </div>
)