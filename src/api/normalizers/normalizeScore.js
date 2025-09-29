export function normalizeScore(user) {
  if (!user) return 0
  const raw = user.todayScore ?? user.score ?? 0
  const score = Number(raw) * 100
  return score
}
