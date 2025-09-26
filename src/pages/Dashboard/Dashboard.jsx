import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getUser } from '../../api/client'

export default function Dashboard() {
  const { id } = useParams()
  const [user, setUser] = useState(null)

  useEffect(() => {
    getUser(id).then(setUser).catch(console.error)
  }, [id])

  if (!user) return <p>Chargement...</p>

  return (
    <div className="dashboard">
      <div className="dashboard__welcome">
        <h1>
          Bonjour <span>{user.userInfos.firstName}</span>
        </h1>
        <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <div className="dashboard__graphs">bonjour</div>
    </div>
  )
}
