export function normalizePerformance(raw) {
  if (!raw || !raw.data || !raw.kind) return []

  // french version of each kind
  const kindMap = {
    1: 'Cardio',
    2: 'Énergie',
    3: 'Endurance',
    4: 'Force',
    5: 'Vitesse',
    6: 'Intensité',
  }

  const formatted = raw.data.map((d) => ({
    value: Number(d.value) || 0,
    // if a 7th kind is added later in raw arrays, "7" will be displayed
    kind: kindMap[d.kind] ?? String(d.kind),
  }))

  // reverse order for Recharts
  return formatted.reverse()
}
