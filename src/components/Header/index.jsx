import { Link } from 'react-router-dom'
import logo from '../../assets/img/kasa-big.png'
import './Header.scss'

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo kasa" className="header__logo" />
      <nav className="header__nav">
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </nav>
    </header>
  )
}

export default Header
