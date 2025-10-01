import PropTypes from 'prop-types'
import { Rectangle } from 'recharts'

// Custom cursor for the line chart
export default function SessionsCursor({ points }) {
  const { x, y } = points[0]
  return (
    <Rectangle
      fill="#000000"
      opacity={0.1}
      x={x} // start at hovered x
      y={y - 100} // shift up by 100px
      width={300}
      height={300}
    />
  )
}

SessionsCursor.propTypes = {
  points: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    })
  ),
}
