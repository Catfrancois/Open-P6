import logo from '../../assets/img/kasa-footer-big.png'
import './Footer.scss'

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="logo kasa" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
