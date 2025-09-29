import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <img src={logo} alt="SportSee logo" className="header__logo" />
        <NavLink to="/user/18">Accueil</NavLink>
        <NavLink to="/user/12">Profil</NavLink>
        <NavLink to="">Réglages</NavLink>
        <NavLink to="">Communauté</NavLink>
      </nav>
    </header>
  )
}
