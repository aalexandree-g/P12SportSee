/**
 * Calcule le score utilisateur en pourcentage.
 * Utilise `todayScore` si disponible, sinon `score`.
 *
 * @param {{ todayScore?: number, score?: number }|null} user - Données brutes utilisateur
 * @returns {number} Pourcentage du score (0 à 100)
 */
export function getPercentScore(user) {
  if (!user) return 0
  const raw = user.todayScore ?? user.score ?? 0
  const score = Number(raw) * 100
  return score
}

/**
 * Normalise les informations brutes d’un utilisateur
 * pour les rendre prêtes à l’affichage dans l’application.
 *
 * @param {{id:number, userInfos:{firstName:string, lastName:string, age:number}, todayScore?:number, score?:number, keyData:Object}} data - Données brutes API
 * @returns {UserInfo} Informations utilisateur normalisées
 */
export function normalizeScore(data) {
  return {
    id: data.id,
    firstName: data.userInfos.firstName,
    lastName: data.userInfos.lastName,
    age: data.userInfos.age,
    score: getPercentScore(data),
    keyData: data.keyData,
  }
}
