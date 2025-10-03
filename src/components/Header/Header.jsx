import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <img src={logo} alt="SportSee logo" className="header__logo" />
        <NavLink to="/user/12">Accueil</NavLink>
        <NavLink to="/error">Profil</NavLink>
        <NavLink to="/error">Réglages</NavLink>
        <NavLink to="/error">Communauté</NavLink>
      </nav>
    </header>
  )
}
