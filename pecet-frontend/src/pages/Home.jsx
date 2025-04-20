import { useAuth } from '../context/AuthContext'
import styles from './Home.module.css'

function Home() {
  const { usuario } = useAuth()

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Bienvenido al sistema PECET</h1>

      {(usuario.rol === 'admin' || usuario.rol === 'investigador') && (
        <button className={styles.botonNuevo}>
          + Nuevo Activo
        </button>
      )}

      <p className={styles.texto}>Aquí se mostrarán los activos del conocimiento...</p>
    </div>
  )
}

export default Home
