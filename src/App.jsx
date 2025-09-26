import { Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from './layout/AppLayout'
import Dashboard from './pages/Dashboard/Dashboard'

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Navigate to="/user/18" />} />
        <Route path="/user/:id" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}
