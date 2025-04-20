import { Link } from 'react-router-dom'
import styles from '../styles/ResultadosBusqueda.module.css'

export default function ResultadosBusqueda({ resultados }) {
  if (resultados.length === 0) {
    return <div className="text-center mt-10 text-gray-500">No se encontraron resultados</div>
  }

  return (
    <div className={styles.resultsContainer}>
      {resultados.map(activo => (
        <div key={activo.id} className={styles.resultCard}>
          <h3 className={styles.resultTitle}>{activo.titulo}</h3>
          <p className={styles.resultMeta}>
            Autor: {activo.autor} | Tipo: {activo.tipo} | Fecha: {activo.fecha}
          </p>
          <p className={styles.resultDescription}>{activo.descripcion}</p>

          <Link
            to={`/detalle/${activo.id}`}
            className={styles.viewMoreLink}
          >
            Ver más detalles →
          </Link>
        </div>
      ))}
    </div>
  )
}
