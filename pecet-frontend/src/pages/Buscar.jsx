import { useState } from 'react'
import SearchBar from '../components/searchBar'
import ActivoCard from '../components/activoCard'

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
    <div>
      <h2 className="text-2xl font-bold mb-4">Buscar Activos</h2>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {resultados.length > 0 ? (
          resultados.map((activo) => (
            <ActivoCard key={activo.id} activo={activo} />
          ))
        ) : (
          <p>No se encontraron resultados.</p>
        )}
      </div>
    </div>
  )
}
