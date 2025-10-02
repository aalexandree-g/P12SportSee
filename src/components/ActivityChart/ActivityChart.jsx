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
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 80, right: 0, left: 0, bottom: 30 }}
            barGap={8}
          >
            {/* grid and graduation */}
            <CartesianGrid
              stroke="#dedede"
              strokeDasharray="2"
              vertical={false}
            />
            {/* X axis (days) */}
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tick={{ fill: '#9b9eac', fontSize: 14 }}
              dy={15}
            />
            {/* Y axis (kg) */}
            <YAxis
              yAxisId="kg"
              dataKey="kilogram"
              orientation="right"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9b9eac', fontSize: 14, fontFamily: 'Roboto' }}
              domain={['dataMin - 2', 'dataMax + 1']}
              tickCount={3}
            />
            {/* custom tooltip */}
            <Tooltip content={<ActivityTooltip />} />
            <Legend
              verticalAlign="top"
              align="right"
              iconType="circle"
              iconSize={8}
            />
            {/* bars */}
            <Bar
              name="Poids (kg)"
              yAxisId="kg"
              dataKey="kilogram"
              fill="#282D30"
              radius={[3, 3, 0, 0]}
              barSize={7}
            />
            <Bar
              name="Calories brûlées (kCal)"
              yAxisId="cal"
              dataKey="calories"
              fill="#E60000"
              radius={[3, 3, 0, 0]}
              barSize={7}
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
