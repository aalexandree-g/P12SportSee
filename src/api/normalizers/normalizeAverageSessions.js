/**
 * Ajoute des labels de jour (L, M, M, J, V, S, D) aux sessions.
 * @param {{sessions: {day:number, sessionLength:number}[]}} data - Données brutes de l’API
 * @returns {AverageSession[]} Tableau des sessions normalisées avec labels FR
 */
export function normalizeAverageSessions(data) {
  const DAY_LABELS = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
  return data.sessions.map((session) => ({
    day: session.day,
    label: DAY_LABELS[session.day - 1],
    value: session.sessionLength,
  }))
}
