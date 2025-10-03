import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Error({ icon, message }) {
  return (
    <div className="error-message">
      <FontAwesomeIcon icon={icon} className="error-icon" />
      <p>{message}</p>
    </div>
  )
}
