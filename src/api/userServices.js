import { normalizeActivity } from './normalizers/normalizeActivity.js'
import { normalizeAverageSessions } from './normalizers/normalizeAverageSessions.js'
import { normalizePerformance } from './normalizers/normalizePerformance.js'
import { normalizeScore } from './normalizers/normalizeScore.js'

const BASE_URL = 'http://localhost:3000/user'

async function apiFetch(path) {
  const response = await fetch(`${BASE_URL}${path}`)
  if (!response.ok) throw new Error(`Erreur HTTP ${response.status}`)
  return response.json()
}

export async function getUserActivity(id) {
  const { data } = await apiFetch(`/${id}/activity`)
  return normalizeActivity(data)
}

export async function getUserAverageSessions(id) {
  const { data } = await apiFetch(`/${id}/average-sessions`)
  return normalizeAverageSessions(data)
}

export async function getUserPerformance(id) {
  const { data } = await apiFetch(`/${id}/performance`)
  return normalizePerformance(data)
}

export async function getUser(id) {
  const { data } = await apiFetch(`/${id}`)
  return normalizeScore(data)
}
