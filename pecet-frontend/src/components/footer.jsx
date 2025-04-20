import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.textMain}>
          © 2025 <span>PECET</span> — Sistema de Activos del Conocimiento. Todos los derechos reservados.
        </p>
        <p className={styles.textSecondary}>
          Universidad de Antioquia — Grupo de Investigación PECET
        </p>
      </div>
    </footer>
  )
}
