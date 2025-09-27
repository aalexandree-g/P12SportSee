import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getUser } from '../../api/client'
import NutritionCard from '../../components/NutritionCard/NutritionCard'
import caloriesIcon from '../../assets/calories-icon.png'
import proteinIcon from '../../assets/protein-icon.png'
import carbsIcon from '../../assets/carbs-icon.png'
import fatIcon from '../../assets/fat-icon.png'

export default function Dashboard() {
  const { id } = useParams()
  const [user, setUser] = useState(null)

  useEffect(() => {
    getUser(id).then(setUser).catch(console.error)
  }, [id])

  if (!user) return <p>Chargement...</p>

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <h1 className="dashboard__title">
          Bonjour{' '}
          <span className="dashboard__username">
            {user.userInfos.firstName}
          </span>
        </h1>
        <p className="dashboard__subtitle">
          Félicitations ! Vous avez explosé vos objectifs hier 👏
        </p>
      </div>
      <div className="dashboard__content">
        <div className="dashboard__performances">
          <div className="dashboard__chart"></div>
          <div className="dashboard__charts">
            <div className="dashboard__card"></div>
            <div className="dashboard__card"></div>
            <div className="dashboard__card"></div>
          </div>
        </div>
        <div className="dashboard__nutrition">
          <div className="dashboard__card">
            <NutritionCard
              icon={caloriesIcon}
              value={user.keyData.calorieCount}
              unit="kCal"
              label="Calories"
            />
          </div>
          <div className="dashboard__card">
            <NutritionCard
              icon={proteinIcon}
              value={user.keyData.proteinCount}
              unit="g"
              label="Protéines"
            />
          </div>
          <div className="dashboard__card">
            <NutritionCard
              icon={carbsIcon}
              value={user.keyData.carbohydrateCount}
              unit="g"
              label="Glucides"
            />
          </div>
          <div className="dashboard__card">
            <NutritionCard
              icon={fatIcon}
              value={user.keyData.lipidCount}
              unit="g"
              label="Lipides"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
