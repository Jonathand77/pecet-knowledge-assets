import { useState } from 'react'
import styles from './SubirActivo.module.css'

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
    <div className={styles.container}>
      <h2 className={styles.titulo}>Registrar Nuevo Activo</h2>
      <form onSubmit={handleSubmit} className={styles.formulario}>
        <input
          name="titulo"
          value={activo.titulo}
          onChange={handleChange}
          placeholder="Título"
          required
          className={styles.input}
        />
        <textarea
          name="descripcion"
          value={activo.descripcion}
          onChange={handleChange}
          placeholder="Descripción"
          required
          className={`${styles.input} ${styles.textarea}`}
        />
        <input
          name="autor"
          value={activo.autor}
          onChange={handleChange}
          placeholder="Autor"
          required
          className={styles.input}
        />
        <input
          name="grupo"
          value={activo.grupo}
          onChange={handleChange}
          placeholder="Grupo de investigación"
          className={styles.input}
        />
        <input
          type="date"
          name="fecha"
          value={activo.fecha}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          name="palabrasClave"
          value={activo.palabrasClave}
          onChange={handleChange}
          placeholder="Palabras clave (separadas por coma)"
          className={styles.input}
        />
        
        <select
          name="tipo"
          value={activo.tipo}
          onChange={handleChange}
          required
          className={styles.select}
        >
          <option value="">Selecciona el tipo de activo</option>
          <option value="Documento">Documento</option>
          <option value="Video">Video</option>
          <option value="Audio">Audio</option>
          <option value="Imagen">Imagen</option>
          <option value="Dataset">Dataset</option>
          <option value="Software">Software</option>
        </select>

        <select
          name="estado"
          value={activo.estado}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="Público">Público</option>
          <option value="Privado">Privado</option>
        </select>

        <input
          name="enlace"
          value={activo.enlace}
          onChange={handleChange}
          placeholder="URL o ubicación del archivo"
          className={styles.input}
        />
        
        <select
          name="idioma"
          value={activo.idioma}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="Español">Español</option>
          <option value="Inglés">Inglés</option>
          <option value="Otro">Otro</option>
        </select>

        <button type="submit" className={styles.button}>
          Registrar activo
        </button>
      </form>
    </div>
  )
}
