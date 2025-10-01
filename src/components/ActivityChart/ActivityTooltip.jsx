import PropTypes from 'prop-types'

export default function ActivityTooltip({ active, payload }) {
  // if on hover and get data
  if (active && payload && payload.length) {
    // display div with first point's value
    return (
      <div className="activity-card__tooltip">
        <p>{payload[0].value}kg</p>
        <p>{payload[1].value}kCal</p>
      </div>
    )
  }
  return null
}

ActivityTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
}
