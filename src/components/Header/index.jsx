import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/img/kasa-big.png'
import './Header.scss'

function Header() {
  const location = useLocation()

  return (
    <header className="header">
      <img src={logo} alt="logo kasa" className="header__logo" />
      <nav className="header__nav">
        <Link
          to="/home"
          className={location.pathname === "/home" ? "active-link" : ""}
        >
          Accueil
        </Link>
        <Link
          to="/about"
          className={location.pathname === "/about" ? "active-link" : ""}
        >
          A Propos
        </Link>
      </nav>
    </header>
  )
}

export default Header
