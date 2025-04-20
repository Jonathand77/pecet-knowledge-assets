import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'
import styles from '../styles/RutaProtegida.module.css'

export function RutaProtegida({ permitido = [], children }) {
  const { usuario } = useAuth()

  if (!permitido.includes(usuario.rol)) {
    return (
      <div className={styles.deniedContainer}>
        <h2>Acceso denegado</h2>
        <p>No tienes permisos para acceder a esta sección.</p>
        <Navigate to="/" />
      </div>
    )
  }

  return children
}
