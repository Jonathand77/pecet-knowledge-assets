import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Comentarios from '../components/comentarios'
import styles from '../styles/ActivoDetail.module.css'

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
    <div className={styles.container}>
      <h1 className={styles.titulo}>{activo.titulo}</h1>
      <p className={styles.subtitulo}>Por {activo.autor} – {activo.grupo}</p>
      <p className={styles.subtitulo}>Publicado el {activo.fecha} – Idioma: {activo.idioma}</p>

      <div className={styles.descripcion}>
        <h2 className="text-xl font-semibold">Descripción</h2>
        <p>{activo.descripcion}</p>
      </div>

      <div className={styles.palabrasClave}>
        <h2 className="text-xl font-semibold">Palabras clave</h2>
        <p>{activo.palabrasClave}</p>
      </div>

      <div className={styles.tipo}>
        <h2 className="text-xl font-semibold">Tipo de activo</h2>
        <p>{activo.tipo}</p>
      </div>

      <div className={styles.estado}>
        <h2 className="text-xl font-semibold">Estado</h2>
        <span className={`${styles.estado} ${activo.estado === 'Público' ? styles.estadoPublico : styles.estadoPrivado}`}>
          {activo.estado}
        </span>
      </div>

      <div className="mt-6 flex gap-4">
        {activo.estado === 'Público' && activo.enlace ? (
          <a href={activo.enlace} target="_blank" rel="noopener noreferrer" className={styles.enlace}>
            Descargar / Ver Activo
          </a>
        ) : (
          <span className="text-gray-500">Este activo no está disponible públicamente.</span>
        )}
      </div>

      <div className={styles.informacion}>
        <p>Visualizaciones: {activo.visualizaciones}</p>
        <p>Descargas: {activo.descargas}</p>
      </div>

      <div className={styles.comentarios}>
        <Comentarios activoId={activo.id} />
      </div>
    </div>
  )
}
