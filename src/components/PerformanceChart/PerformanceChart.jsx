import PropTypes from 'prop-types'
import { RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts'

export default function PerformanceRadar({ data }) {
  return (
    <div className="performance-radar">
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="72%"
        width={180}
        height={180}
        data={data}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          tick={{ fill: '#ffffff', className: 'performance-radar__tick' }}
        />
        <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
    </div>
  )
}

PerformanceRadar.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      kind: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
}
