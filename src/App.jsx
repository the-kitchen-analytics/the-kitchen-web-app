import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import './App.css'

export const App = () => (
  <div className="app">
    <RouterProvider router={router} />
  </div>
)