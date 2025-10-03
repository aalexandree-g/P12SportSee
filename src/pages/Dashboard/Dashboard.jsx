import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import {
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
  getUser,
} from '../../api/userServices'

import Error from '../Error/Error'
import { faSpinner, faUserXmark } from '@fortawesome/free-solid-svg-icons'

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
  const [loading, setLoading] = useState(true)
  const [activity, setActivity] = useState(null)
  const [sessions, setSessions] = useState(null)
  const [performance, setPerformance] = useState(null)
  const [user, setUser] = useState(null)

  //get data for charts
  useEffect(() => {
    Promise.all([
      getUserActivity(id),
      getUserAverageSessions(id),
      getUserPerformance(id),
      getUser(id),
    ])
      .then(([act, sess, perf, usr]) => {
        setActivity(act)
        setSessions(sess)
        setPerformance(perf)
        setUser(usr)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      })
  }, [id])

  // while data is loading
  if (loading) return <Error icon={faSpinner} message="Chargement..." />

  // wrong id
  if (!user)
    return <Error icon={faUserXmark} message="L'utilisateur n'existe pas..." />

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
