import PropTypes from 'prop-types'
import SessionsTooltip from './SessionsTooltip'
import SessionsCursor from './SessionsCursor'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts'

export default function SessionsChart({ data }) {
  return (
    <div className="dashboard__card sessions-card">
      <h2 className="sessions-card__title">Durée moyenne des sessions</h2>
      <div className="sessions-card__chart">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 80, right: 15, bottom: 20, left: 15 }}
          >
            {/* gradient line */}
            <defs>
              <linearGradient
                id="lineGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="white" stopOpacity={0.2} />
                <stop offset="100%" stopColor="white" stopOpacity={1} />
              </linearGradient>
            </defs>

            {/* X axis (days) */}
            <XAxis
              dataKey="day"
              type="number"
              // avoid hover confusion about M (Mardi and Mercredi)
              ticks={[1, 2, 3, 4, 5, 6, 7]}
              tickFormatter={(d) => ['', 'L', 'M', 'M', 'J', 'V', 'S', 'D'][d]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#fff', fontSize: 12, opacity: 0.5 }}
              dy={10}
            />

            {/* Y axis (min) */}
            <YAxis hide={true} domain={['dataMin - 15', 'dataMax + 5']} />

            {/* custom tooltip */}
            <Tooltip
              content={<SessionsTooltip />}
              cursor={<SessionsCursor />}
            />

            {/* main curve */}
            <Line
              type="natural" // natural curve
              dataKey="value"
              stroke="url(#lineGradient)" // apply gradient
              strokeWidth={2}
              dot={false} // dot only on hover
              activeDot={{
                r: 4,
                fill: '#ffffff',
                fillOpacity: 1,
                stroke: '#ffffff',
                strokeWidth: 10,
                strokeOpacity: 0.2,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

SessionsChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
}
