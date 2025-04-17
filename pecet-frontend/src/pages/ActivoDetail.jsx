import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Comentarios from '../components/comentarios'

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

export default function DetalleActivo() {
  const { id } = useParams()
  const [activo, setActivo] = useState(null)

  useEffect(() => {
    const encontrado = activosMock.find(a => a.id === id)
    setActivo(encontrado || null)
  }, [id])

  if (!activo) {
    return <div className="text-center mt-10 text-xl text-red-500">Activo no encontrado</div>
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-lg mt-6">
      <h1 className="text-3xl font-bold text-green-700 mb-4">{activo.titulo}</h1>
      <p className="text-gray-600 italic mb-2">Por {activo.autor} – {activo.grupo}</p>
      <p className="text-sm text-gray-500 mb-2">Publicado el {activo.fecha} – Idioma: {activo.idioma}</p>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Descripción</h2>
        <p className="text-gray-800 mt-1">{activo.descripcion}</p>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Palabras clave</h2>
        <p className="text-gray-700">{activo.palabrasClave}</p>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Tipo de activo</h2>
        <p className="text-gray-700">{activo.tipo}</p>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Estado</h2>
        <span className={`inline-block px-3 py-1 text-white rounded-full ${
          activo.estado === 'Público' ? 'bg-green-600' : 'bg-gray-600'
        }`}>
          {activo.estado}
        </span>
      </div>

      <div className="mt-6 flex gap-4">
        {activo.estado === 'Público' && activo.enlace ? (
          <a href={activo.enlace} target="_blank" rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Descargar / Ver Activo
          </a>
        ) : (
          <span className="text-gray-500">Este activo no está disponible públicamente.</span>
        )}
      </div>

      <div className="mt-6 text-sm text-gray-500">
        <p>Visualizaciones: {activo.visualizaciones}</p>
        <p>Descargas: {activo.descargas}</p>
        <Comentarios activoId={activo.id} />
      </div>
    </div>
  )
}
