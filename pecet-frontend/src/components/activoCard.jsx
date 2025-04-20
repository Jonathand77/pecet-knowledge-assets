import styles from './ActivoCard.module.css'

export default function ActivoCard({ activo }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.titulo}>{activo.titulo}</h3>
      <p className={styles.descripcion}>{activo.descripcion}</p>
      <p className={styles.detalles}>
        📁 {activo.tipo} | 👤 {activo.autor}
      </p>
    </div>
  )
}
