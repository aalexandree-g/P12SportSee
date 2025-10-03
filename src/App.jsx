import { Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from './layout/AppLayout'
import Dashboard from './pages/Dashboard/Dashboard'
import Error from './pages/Error/Error'
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons'

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Navigate to="/user/12" />} />
        <Route path="/user/:id" element={<Dashboard />} />
        <Route
          path="*"
          element={
            <Error icon={faPersonDigging} message="Page en construction..." />
          }
        />
      </Route>
    </Routes>
  )
}
