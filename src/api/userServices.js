import { normalizeScore } from './normalizers/normalizeScore.js'

const BASE_URL = 'http://localhost:3000/user'

export async function apiFetch(id) {
  const response = await fetch(`${BASE_URL}/${id}`)
  if (!response.ok) {
    throw new Error(`Erreur HTTP ${response.status}`)
  }
  const json = await response.json()
  return json.data
}

export async function getUser(id) {
  const data = await apiFetch(id)
  return {
    id: data.id,
    firstName: data.userInfos.firstName,
    lastName: data.userInfos.lastName,
    age: data.userInfos.age,
    score: normalizeScore(data),
    keyData: data.keyData,
  }
}
