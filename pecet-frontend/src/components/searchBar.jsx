import { useState } from 'react'
import styles from '../styles/SearchBar.module.css'

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar activos por título, autor, palabra clave..."
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Buscar
      </button>
    </form>
  )
}
