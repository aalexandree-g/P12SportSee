import PropTypes from 'prop-types'
import { ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts'

export default function ScoreChart({ value }) {
  const data = [{ name: 'Score', value }]
  return (
    <div className="dashboard__card score-card">
      <h2 className="score-card__title">Score</h2>
      <div className="score-card__chart">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            innerRadius="64%"
            outerRadius="75%"
            data={data}
            startAngle={90}
            endAngle={90 + (360 * value) / 100}
          >
            {/* inner white circle */}
            <circle
              cx="50%"
              cy="50%"
              r="81" // (width * innerRadius) / 2
              fill="#ffffff"
            />
            <RadialBar dataKey="value" cornerRadius={10} fill="#FF0101" />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
      <div className="score-card__text">
        <h2 className="score-card__value">{value}%</h2>
        <span className="score-card__label">
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
