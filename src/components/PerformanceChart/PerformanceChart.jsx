import PropTypes from 'prop-types'
import PerformanceTooltip from './PerformanceTooltip'
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  Tooltip,
} from 'recharts'
export default function PerformanceChart({ data }) {
  return (
    <div className="dashboard__card performance-card">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fill: '#ffffff', className: 'performance-card__tick' }}
          />
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
          <Tooltip content={<PerformanceTooltip />} cursor={false} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

PerformanceChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      kind: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
}
