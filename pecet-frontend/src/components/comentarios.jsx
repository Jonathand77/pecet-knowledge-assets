import { useState } from 'react'
import styles from '../styles/Comentarios.module.css'

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
    <div className={styles.commentsContainer}>
      <h2 className={styles.commentsTitle}>Comentarios</h2>
      <div className={styles.commentList}>
        {comentarios.map((c, idx) => (
          <div key={idx} className={styles.commentCard}>
            <p className={styles.commentAuthor}>{c.autor}</p>
            <p className={styles.commentText}>{c.texto}</p>
          </div>
        ))}
      </div>

      <div className={styles.newCommentContainer}>
        <textarea
          className={styles.textareaInput}
          rows={3}
          placeholder="Escribe tu comentario..."
          value={nuevo}
          onChange={e => setNuevo(e.target.value)}
        />
        <button
          onClick={agregarComentario}
          className={styles.commentButton}
        >
          Comentar
        </button>
      </div>
    </div>
  )
}
