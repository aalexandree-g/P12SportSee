// normalizers/normalizeAverageSessions.js
const DAY_LABELS = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

// adding day label to each session
export function normalizeAverageSessions(data) {
  return data.sessions.map((session) => ({
    day: session.day,
    label: DAY_LABELS[session.day - 1],
    value: session.sessionLength,
  }))
}
