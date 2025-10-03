import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <img src={logo} alt="SportSee logo" className="header__logo" />
        <NavLink to="/home">Accueil</NavLink>
        <NavLink to="/">Profil</NavLink>
        <NavLink to="/settings">Réglages</NavLink>
        <NavLink to="/community">Communauté</NavLink>
      </nav>
    </header>
  )
}
