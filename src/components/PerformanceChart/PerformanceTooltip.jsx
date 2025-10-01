import PropTypes from 'prop-types'

export default function PerformanceTooltip({ active, payload }) {
  // if on hover and get data
  if (active && payload && payload.length) {
    // display div with first point's value
    return <div className="performance-card__tooltip">{payload[0].value}</div>
  }
  return null
}

PerformanceTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
}
