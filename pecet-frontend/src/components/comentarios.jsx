import { useState } from 'react'

export default function Comentarios({ activoId }) {
  const [comentarios, setComentarios] = useState([
    { autor: 'María R.', texto: 'Excelente material, ¡gracias por compartir!' },
    { autor: 'Carlos T.', texto: 'Me ayudó mucho en mi tesis sobre salud pública.' }
  ])
  const [nuevo, setNuevo] = useState('')

  const agregarComentario = () => {
    if (nuevo.trim() !== '') {
      setComentarios([...comentarios, { autor: 'Usuario Anónimo', texto: nuevo }])
      setNuevo('')
    }
  }

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-3">Comentarios</h2>
      <div className="space-y-2">
        {comentarios.map((c, idx) => (
          <div key={idx} className="bg-gray-100 p-3 rounded shadow-sm">
            <p className="font-medium text-gray-800">{c.autor}</p>
            <p className="text-gray-700">{c.texto}</p>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <textarea
          className="w-full border p-2 rounded resize-none"
          rows={3}
          placeholder="Escribe tu comentario..."
          value={nuevo}
          onChange={e => setNuevo(e.target.value)}
        />
        <button
          onClick={agregarComentario}
          className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Comentar
        </button>
      </div>
    </div>
  )
}
