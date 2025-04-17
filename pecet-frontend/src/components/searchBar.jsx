import { useState } from 'react'

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar activos por título, autor, palabra clave..."
        className="w-full p-2 border rounded-lg"
      />
      <button
        type="submit"
        className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
      >
        Buscar
      </button>
    </form>
  )
}
