/**
 * Normalise les données d’activité en remplaçant la date par un index de jour (1..N).
 * @param {{sessions: {day:string, kilogram:number, calories:number}[]}} data - Données brutes de l’API
 * @returns {ActivitySession[]} Tableau des sessions normalisées
 */
export function normalizeActivity(data) {
  return data.sessions.map((s, i) => ({
    day: i + 1,
    kilogram: s.kilogram,
    calories: s.calories,
  }))
}
