import yogaIcon from '../../assets/yoga.png'
import swimIcon from '../../assets/swim.png'
import bikeIcon from '../../assets/bike.png'
import gymIcon from '../../assets/gym.png'

export default function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Navigation secondaire">
      <nav className="sidebar__nav">
        <button aria-label="Yoga" className="sidebar__btn">
          <img src={yogaIcon} alt="Yoga" />
        </button>
        <button aria-label="Natation" className="sidebar__btn">
          <img src={swimIcon} alt="Natation" />
        </button>
        <button aria-label="Vélo" className="sidebar__btn">
          <img src={bikeIcon} alt="Vélo" />
        </button>
        <button aria-label="Musculation" className="sidebar__btn">
          <img src={gymIcon} alt="Musculation" />
        </button>
      </nav>
      <span className="sidebar__copyright">Copyrights, SportSee 2020</span>
    </aside>
  )
}
