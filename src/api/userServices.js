import { normalizeScore } from './normalizers/normalizeScore.js'
import { normalizePerformance } from './normalizers/normalizePerformance.js'
import { normalizeAverageSessions } from './normalizers/normalizeAverageSessions.js'

const BASE_URL = 'http://localhost:3000/user'

async function apiFetch(path) {
  const response = await fetch(`${BASE_URL}${path}`)
  if (!response.ok) throw new Error(`Erreur HTTP ${response.status}`)
  return response.json()
}

// normalize score and todayScore into score
export async function getUser(id) {
  const { data } = await apiFetch(`/${id}`)
  return {
    id: data.id,
    firstName: data.userInfos.firstName,
    lastName: data.userInfos.lastName,
    age: data.userInfos.age,
    score: normalizeScore(data),
    keyData: data.keyData,
  }
}

// put french labels and reorder for Recharts
export async function getUserPerformance(id) {
  const { data } = await apiFetch(`/${id}/performance`)
  return normalizePerformance(data)
}

// add day labels (L, M, M, J, V, S, D)
export async function getUserAverageSessions(id) {
  const { data } = await apiFetch(`/${id}/average-sessions`)
  return normalizeAverageSessions(data)
}
