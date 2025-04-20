import { Link } from 'react-router-dom'
import SelectorRol from './SelectorRol'
import styles from '../styles/Navbar.module.css'
import logo from '../assets/img/LogoPecet.png'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="PECET Logo" className={styles.logoImg} />
        <h1 className={styles.logo}>PECET</h1>
      </div>

      <div className={styles.navContent}>
        <div className={styles.navLinks}>
          <Link to="/" className={styles.link}>Home</Link>
          <Link to="/buscar" className={styles.link}>Buscar</Link>
          <Link to="/subir" className={styles.link}>Subir Activo</Link>
          <Link to="/dashboard" className={styles.link}>Dashboard</Link>
        </div>

        <div className={styles.rolSelector}>
          <SelectorRol />
        </div>
      </div>
    </nav>
  )
}
