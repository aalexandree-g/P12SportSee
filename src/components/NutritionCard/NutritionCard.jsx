import PropTypes from 'prop-types'

export default function NutritionCard({ icon, value, unit, label }) {
  return (
    <div className="dashboard__card nutrition-card">
      <div
        className={`nutrition-card__icon nutrition-card__icon--${label.toLowerCase()}`}
      >
        <img src={icon} alt={label} />
      </div>
      <div className="nutrition-card__info">
        <p className="nutrition-card__value">
          {/* format number with thousands separator */}
          {value.toLocaleString('en-US')}
          {unit}
        </p>
        <p className="nutrition-card__label">{label}</p>
      </div>
    </div>
  )
}

NutritionCard.propTypes = {
  icon: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}
