import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">PECET</h1>
      <div className="space-x-4">
        <Link to="/">Inicio</Link>
        <Link to="/buscar">Buscar</Link>
        <Link to="/subir">Subir Activo</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  )
}
