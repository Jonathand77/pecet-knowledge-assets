import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom' // Importamos useNavigate de React Router
import styles from '../styles/Home.module.css'

function Home() {
  const { usuario } = useAuth()
  const navigate = useNavigate() // Usamos useNavigate para navegar a otras páginas

  const handleNuevoActivo = () => {
    navigate('/subirActivo') // Correcta forma de navegar a otra página
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Bienvenido al sistema PECET</h1>

      {(usuario.rol === 'admin' || usuario.rol === 'investigador') && (
        <button
          className={styles.botonNuevo}
          onClick={handleNuevoActivo} // Asignamos la función al click
        >
          + Nuevo Activo
        </button>
      )}

      <p className={styles.texto}>Aquí se mostrarán los activos del conocimiento...</p>
    </div>
  )
}

export default Home
