import PropTypes from 'prop-types'

export default function SessionsTooltip({ active, payload }) {
  // if on hover and get data
  if (active && payload && payload.length) {
    // display div with first point's value
    return <div className="sessions-card__tooltip">{payload[0].value} min</div>
  }
  return null
}

SessionsTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
}
