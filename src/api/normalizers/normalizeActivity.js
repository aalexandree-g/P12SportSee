// replace day labels (1, 2, 3, 4, 5, 6, 7)
export function normalizeActivity(data) {
  return data.sessions.map((s, i) => ({
    day: i + 1,
    kilogram: s.kilogram,
    calories: s.calories,
  }))
}
