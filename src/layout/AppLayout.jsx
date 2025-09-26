import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'

export default function AppLayout() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <main className="app__dashboard">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
