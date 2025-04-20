import { useAuth } from '../context/AuthContext'
import styles from './SelectorRol.module.css'

export default function SelectorRol() {
  const { login, usuario } = useAuth()

  const handleChange = (e) => {
    const nuevoRol = e.target.value
    login(nuevoRol !== 'visitante' ? `Usuario ${nuevoRol}` : 'Invitado', nuevoRol)
  }

  return (
    <div className={styles.selectorContainer}>
      <label className={styles.label}>Rol actual:</label>
      <select
        onChange={handleChange}
        value={usuario.rol}
        className={styles.select}
      >
        <option value="visitante">Visitante</option>
        <option value="investigador">Investigador</option>
        <option value="admin">Administrador</option>
      </select>
      <span className={styles.usuarioInfo}>({usuario.nombre})</span>
    </div>
  )
}
