export function getPercentScore(user) {
  if (!user) return 0
  const raw = user.todayScore ?? user.score ?? 0
  const score = Number(raw) * 100
  return score
}

// normalize score and todayScore into score
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
