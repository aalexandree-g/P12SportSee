import PropTypes from 'prop-types'
import ActivityTooltip from './ActivityTooltip'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'

export default function ActivityChart({ data }) {
  return (
    <div className="dashboard__card activity-card">
      <h2 className="activity-card__title">Activité quotidienne</h2>
      <div className="activity-card__chart">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
            barGap={8}
          >
            {/* grid and graduation */}
            <CartesianGrid
              stroke="#dedede"
              strokeDasharray="2 2"
              vertical={false}
            />

            {/* axe X (jours) */}
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tick={{ fill: '#9b9eac', fontSize: 14 }}
            />

            {/* axe Y à droite (kg) */}
            <YAxis
              yAxisId="kg"
              dataKey="kilogram"
              orientation="right"
              axisLine={false}
              tickLine={false}
            />

            {/* axe Y à gauche (calories) masqué */}
            <YAxis yAxisId="cal" dataKey="calories" hide />

            {/* tooltip custom */}
            <Tooltip content={<ActivityTooltip />} />

            {/* légende */}
            <Legend
              verticalAlign="top"
              align="right"
              iconType="circle"
              wrapperStyle={{ top: 0 }}
            />

            {/* barres */}
            <Bar
              yAxisId="kg"
              dataKey="kilogram"
              fill="#282D30"
              radius={[5, 5, 0, 0]}
              barSize={7}
              name="Poids (kg)"
            />
            <Bar
              yAxisId="cal"
              dataKey="calories"
              fill="#E60000"
              radius={[5, 5, 0, 0]}
              barSize={7}
              name="Calories brûlées (kCal)"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

ActivityChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ).isRequired,
}
