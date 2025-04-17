import { Link } from 'react-router-dom'

export default function ResultadosBusqueda({ resultados }) {
  if (resultados.length === 0) {
    return <div className="text-center mt-10 text-gray-500">No se encontraron resultados</div>
  }

  return (
    <div className="grid md:grid-cols-2 gap-6 mt-6">
      {resultados.map(activo => (
        <div key={activo.id} className="border rounded-lg p-4 shadow hover:shadow-md bg-white transition duration-300">
          <h3 className="text-xl font-semibold text-green-700">{activo.titulo}</h3>
          <p className="text-sm text-gray-500 mb-1">Autor: {activo.autor}</p>
          <p className="text-sm text-gray-500 mb-2">Tipo: {activo.tipo} | Fecha: {activo.fecha}</p>
          <p className="text-gray-700 line-clamp-2">{activo.descripcion}</p>

          <Link
            to={`/detalle/${activo.id}`}
            className="inline-block mt-3 text-blue-600 hover:underline font-medium"
          >
            Ver más detalles →
          </Link>
        </div>
      ))}
    </div>
  )
}
