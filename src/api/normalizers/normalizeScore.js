export function normalizeScore(user) {
  if (!user) return 0
  const raw = user.todayScore ?? user.score ?? 0
  const n = Number(raw)
  const score = n <= 1 ? n * 100 : n
  return score
}
