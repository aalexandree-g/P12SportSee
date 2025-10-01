import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import {
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
  getUser,
} from '../../api/userServices'

import ActivityChart from '../../components/ActivityChart/ActivityChart'
import SessionsChart from '../../components/SessionsChart/SessionsChart'
import PerformanceChart from '../../components/PerformanceChart/PerformanceChart'
import ScoreChart from '../../components/ScoreChart/ScoreChart'
import NutritionCard from '../../components/NutritionCard/NutritionCard'

import caloriesIcon from '../../assets/calories-icon.png'
import proteinIcon from '../../assets/protein-icon.png'
import carbsIcon from '../../assets/carbs-icon.png'
import fatIcon from '../../assets/fat-icon.png'

export default function Dashboard() {
  const { id } = useParams()
  const [activity, setActivity] = useState(null)
  const [sessions, setSessions] = useState(null)
  const [performance, setPerformance] = useState(null)
  const [user, setUser] = useState(null)

  //get data for activity chart
  useEffect(() => {
    getUserActivity(id).then(setActivity).catch(console.error)
  }, [id])

  // get data for sessions chart
  useEffect(() => {
    getUserAverageSessions(id).then(setSessions).catch(console.error)
  }, [id])

  // get data for performance chart
  useEffect(() => {
    getUserPerformance(id).then(setPerformance).catch(console.error)
  }, [id])

  // get data for score chart
  useEffect(() => {
    getUser(id).then(setUser).catch(console.error)
  }, [id])

  if (!activity || !sessions || !performance || !user)
    return <p>Chargement...</p>

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <h1 className="dashboard__title">
          Bonjour <span className="dashboard__username">{user.firstName}</span>
        </h1>
        <p className="dashboard__subtitle">
          Félicitations ! Vous avez explosé vos objectifs hier 👏
        </p>
      </div>
      <div className="dashboard__content">
        <div className="dashboard__charts">
          <div className="dashboard__card dashboard__card--activity">
            <ActivityChart data={activity} />
          </div>
          <div className="dashboard__mini-charts">
            <SessionsChart data={sessions} />
            <PerformanceChart data={performance} />
            <ScoreChart value={user.score} />
          </div>
        </div>
        <div className="dashboard__nutrition">
          <NutritionCard
            icon={caloriesIcon}
            value={user.keyData.calorieCount}
            unit="kCal"
            label="Calories"
          />
          <NutritionCard
            icon={proteinIcon}
            value={user.keyData.proteinCount}
            unit="g"
            label="Protéines"
          />
          <NutritionCard
            icon={carbsIcon}
            value={user.keyData.carbohydrateCount}
            unit="g"
            label="Glucides"
          />
          <NutritionCard
            icon={fatIcon}
            value={user.keyData.lipidCount}
            unit="g"
            label="Lipides"
          />
        </div>
      </div>
    </div>
  )
}
