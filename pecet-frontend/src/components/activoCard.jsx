export default function ActivoCard({ activo }) {
    return (
      <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-bold">{activo.titulo}</h3>
        <p className="text-gray-600">{activo.descripcion}</p>
        <p className="text-sm mt-2">📁 {activo.tipo} | 👤 {activo.autor}</p>
      </div>
    )
  }
  