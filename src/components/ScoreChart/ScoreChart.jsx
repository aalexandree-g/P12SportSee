import PropTypes from 'prop-types'
import { RadialBarChart, RadialBar } from 'recharts'

export default function ScoreChart({ value }) {
  const data = [{ name: 'Score', value }]
  return (
    <div className="score-chart">
      <div className="score-chart__title">{data[0].name}</div>
      <RadialBarChart
        width={180}
        height={180}
        innerRadius="64%"
        outerRadius="75%"
        data={data}
        startAngle={90}
        endAngle={90 + (360 * value) / 100}
      >
        <circle
          cx="50%"
          cy="50%"
          r="55.5" // (width * innerRadius) / 2
          fill="#ffffff"
        />
        <RadialBar dataKey="value" cornerRadius={87} fill="#FF0101" />
      </RadialBarChart>
      <div className="score-chart__overlay">
        <h2 className="score-chart__value">{value}%</h2>
        <span className="score-chart__label">
          de votre
          <br />
          objectif
        </span>
      </div>
    </div>
  )
}

ScoreChart.propTypes = {
  value: PropTypes.number.isRequired,
}
