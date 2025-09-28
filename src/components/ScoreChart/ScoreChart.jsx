import { RadialBarChart, RadialBar } from 'recharts'

export default function ScoreChart() {
  const data = [{ name: 'score', value: 30 }]

  return (
    <RadialBarChart
      width={180}
      height={180}
      innerRadius="77%"
      outerRadius="90%"
      data={data}
      startAngle={90}
      endAngle={90 + (360 * data[0].value) / 100}
    >
      <circle
        cx="50%"
        cy="50%"
        r="67" // (width * innerRadius) / 2
        fill="#ffffff"
      />
      <RadialBar dataKey="value" cornerRadius={87} fill="#FF0101" />
    </RadialBarChart>
  )
}
