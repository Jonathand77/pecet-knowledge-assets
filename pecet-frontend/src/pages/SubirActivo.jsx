import { useState } from 'react'

export default function NuevoActivo() {
  const [activo, setActivo] = useState({
    titulo: '',
    descripcion: '',
    autor: '',
    grupo: '',
    fecha: '',
    palabrasClave: '',
    tipo: '',
    estado: 'Público',
    enlace: '',
    idioma: 'Español',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setActivo({ ...activo, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Activo creado:', activo)
    alert('Activo registrado (simulado en consola).')
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Registrar Nuevo Activo</h2>
      <form onSubmit={handleSubmit} className="grid gap-4 max-w-3xl">
        <input name="titulo" value={activo.titulo} onChange={handleChange} placeholder="Título" required className="p-2 border rounded" />
        <textarea name="descripcion" value={activo.descripcion} onChange={handleChange} placeholder="Descripción" required className="p-2 border rounded" />
        <input name="autor" value={activo.autor} onChange={handleChange} placeholder="Autor" required className="p-2 border rounded" />
        <input name="grupo" value={activo.grupo} onChange={handleChange} placeholder="Grupo de investigación" className="p-2 border rounded" />
        <input type="date" name="fecha" value={activo.fecha} onChange={handleChange} className="p-2 border rounded" />
        <input name="palabrasClave" value={activo.palabrasClave} onChange={handleChange} placeholder="Palabras clave (separadas por coma)" className="p-2 border rounded" />
        
        <select name="tipo" value={activo.tipo} onChange={handleChange} required className="p-2 border rounded">
          <option value="">Selecciona el tipo de activo</option>
          <option value="Documento">Documento</option>
          <option value="Video">Video</option>
          <option value="Audio">Audio</option>
          <option value="Imagen">Imagen</option>
          <option value="Dataset">Dataset</option>
          <option value="Software">Software</option>
        </select>

        <select name="estado" value={activo.estado} onChange={handleChange} className="p-2 border rounded">
          <option value="Público">Público</option>
          <option value="Privado">Privado</option>
        </select>

        <input name="enlace" value={activo.enlace} onChange={handleChange} placeholder="URL o ubicación del archivo" className="p-2 border rounded" />
        
        <select name="idioma" value={activo.idioma} onChange={handleChange} className="p-2 border rounded">
          <option value="Español">Español</option>
          <option value="Inglés">Inglés</option>
          <option value="Otro">Otro</option>
        </select>

        <button type="submit" className="bg-green-600 text-white py-2 rounded hover:bg-green-700">Registrar activo</button>
      </form>
    </div>
  )
}
