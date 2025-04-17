import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/Home'
import Buscar from './pages/Buscar'
import SubirActivo from './pages/SubirActivo'
import DetalleActivo from './pages/ActivoDetail'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buscar" element={<Buscar />} />
            <Route path="/subir" element={<SubirActivo />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/detalle/:id" element={<DetalleActivo />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
