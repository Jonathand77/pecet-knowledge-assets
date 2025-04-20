import { useState } from 'react'
import SearchBar from '../components/searchBar'
import ActivoCard from '../components/activoCard'
import styles from './Buscar.module.css'

// Simulación de activos existentes
const activosMock = [
  {
    id: 1,
    titulo: 'Estudio sobre enfermedades tropicales',
    descripcion: 'Informe científico del grupo PECET sobre la malaria.',
    autor: 'Dra. Ana Gómez',
    tipo: 'Documento',
  },
  {
    id: 2,
    titulo: 'Podcast: Avances en medicina tropical',
    descripcion: 'Entrevista con investigadores sobre nuevas vacunas.',
    autor: 'PECET Radio',
    tipo: 'Audio',
  },
  {
    id: 3,
    titulo: 'Dataset clínico de leishmaniasis',
    descripcion: 'Datos anonimizados de pacientes para análisis.',
    autor: 'Grupo PECET',
    tipo: 'Dataset',
  },
]

export default function Buscar() {
  const [resultados, setResultados] = useState(activosMock)

  const handleSearch = (query) => {
    const lowerQuery = query.toLowerCase()
    const filtrados = activosMock.filter((a) =>
      a.titulo.toLowerCase().includes(lowerQuery) ||
      a.descripcion.toLowerCase().includes(lowerQuery) ||
      a.autor.toLowerCase().includes(lowerQuery)
    )
    setResultados(filtrados)
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Buscar Activos</h2>
      <SearchBar onSearch={handleSearch} />
      <div className={styles.gridResultados}>
        {resultados.length > 0 ? (
          resultados.map((activo) => (
            <ActivoCard key={activo.id} activo={activo} />
          ))
        ) : (
          <p className={styles.mensaje}>No se encontraron resultados.</p>
        )}
      </div>
    </div>
  )
}
