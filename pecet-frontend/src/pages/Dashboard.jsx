import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styles from '../styles/Dashboard.module.css'

const activosMock = [
  {
    id: '1',
    titulo: 'Investigación sobre malaria',
    descripcion: 'Estudio de campo en comunidades rurales del Chocó',
    autor: 'Dra. Ana Pérez',
    grupo: 'Grupo PECET Malaria',
    fecha: '2023-10-15',
    palabrasClave: 'malaria, salud pública, Colombia',
    tipo: 'Documento',
    estado: 'Público',
    enlace: 'https://ejemplo.com/malaria.pdf',
    idioma: 'Español',
    visualizaciones: 56,
    descargas: 12
  },
  {
    id: '2',
    titulo: 'Podcast sobre enfermedades tropicales',
    descripcion: 'Episodio 1 del podcast del PECET sobre investigación en salud tropical.',
    autor: 'Juan Díaz',
    grupo: 'Grupo PECET Comunicaciones',
    fecha: '2024-02-10',
    palabrasClave: 'podcast, salud tropical',
    tipo: 'Audio',
    estado: 'Privado',
    enlace: '',
    idioma: 'Español',
    visualizaciones: 8,
    descargas: 0
  }
]

export default function Dashboard() {
  const [activos, setActivos] = useState([])

  useEffect(() => {
    // Simula la carga de datos
    setActivos(activosMock)
  }, [])

  const activosPublicos = activos.filter(activo => activo.estado === 'Público')
  const activosPrivados = activos.filter(activo => activo.estado === 'Privado')

  return (
    <div className={styles.dashboardContainer}>
      <h1 className={styles.dashboardTitle}>Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card Total de Activos */}
        <div className={styles.summaryCard}>
          <h2>Total de Activos</h2>
          <p>{activos.length}</p>
        </div>

        {/* Card Activos Públicos */}
        <div className={styles.summaryCard}>
          <h2>Activos Públicos</h2>
          <p>{activosPublicos.length}</p>
        </div>

        {/* Card Activos Privados */}
        <div className={styles.summaryCard}>
          <h2>Activos Privados</h2>
          <p>{activosPrivados.length}</p>
        </div>

        {/* Activos Recientes */}
        <div className={styles.recentAssetsCard}>
          <h2>Activos Recientes</h2>
          <ul className={styles.recentAssetsList}>
            {activos.slice(0, 5).map((activo) => (
              <li key={activo.id}>
                <Link to={`/activo/${activo.id}`} className={styles.recentAssetsListLink}>
                  {activo.titulo}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link to="/nuevo-activo" className={styles.registerButton}>
          Registrar Nuevo Activo
        </Link>
      </div>
    </div>
  )
}
