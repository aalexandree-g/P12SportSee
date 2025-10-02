import { normalizeActivity } from './normalizers/normalizeActivity.js'
import { normalizeAverageSessions } from './normalizers/normalizeAverageSessions.js'
import { normalizePerformance } from './normalizers/normalizePerformance.js'
import { normalizeScore } from './normalizers/normalizeScore.js'

const BASE_URL = 'http://localhost:3000/user'

/**
 * Effectue une requête HTTP vers l’API SportSee.
 * @async
 * @param {string} path - Chemin relatif (ex: `/12/activity`)
 * @returns {Promise<any>} Réponse JSON parsée
 * @throws {Error} Lance une erreur si la réponse HTTP n’est pas OK
 */
async function apiFetch(path) {
  const response = await fetch(`${BASE_URL}${path}`)
  if (!response.ok) throw new Error(`Erreur HTTP ${response.status}`)
  return response.json()
}

/**
 * Récupère et normalise l’activité quotidienne d’un utilisateur.
 * @async
 * @param {number|string} id - Identifiant de l’utilisateur
 * @returns {Promise<{day:number, kilogram:number, calories:number}[]>}
 * Liste des sessions normalisées (jour, poids, calories)
 */
export async function getUserActivity(id) {
  const { data } = await apiFetch(`/${id}/activity`)
  return normalizeActivity(data)
}

/**
 * Récupère et normalise la durée moyenne des sessions d’un utilisateur.
 * @async
 * @param {number|string} id - Identifiant de l’utilisateur
 * @returns {Promise<{day:string, sessionLength:number}[]>}
 * Liste des sessions normalisées (jour -L,M,M,J,V,S,D-, durée)
 */
export async function getUserAverageSessions(id) {
  const { data } = await apiFetch(`/${id}/average-sessions`)
  return normalizeAverageSessions(data)
}

/**
 * Récupère et normalise les performances d’un utilisateur.
 * @async
 * @param {number|string} id - Identifiant de l’utilisateur
 * @returns {Promise<{value:number, kindLabel:string}[]>}
 * Liste des performances triées
 */
export async function getUserPerformance(id) {
  const { data } = await apiFetch(`/${id}/performance`)
  return normalizePerformance(data)
}

/**
 * Récupère et normalise les informations principales d’un utilisateur.
 * @async
 * @param {number|string} id - Identifiant de l’utilisateur
 * @returns {Promise<{id:number, firstName:string, lastName:string, age:number, score:number, keyData:Object}>}
 * Informations du score normalisées
 */
export async function getUser(id) {
  const { data } = await apiFetch(`/${id}`)
  return normalizeScore(data)
}
