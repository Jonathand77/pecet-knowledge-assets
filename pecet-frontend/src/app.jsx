import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Buscar from './pages/Buscar'
import SubirActivo from './pages/SubirActivo'
import Dashboard from './pages/Dashboard'
import ActivoDetail from './pages/ActivoDetail'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { RutaProtegida } from './components/RutaProtegida'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800 font-sans">
        <Router>
          <Navbar />
          <main className="flex-grow container mx-auto p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/buscar" element={<Buscar />} />
              <Route path="/activo/:id" element={<ActivoDetail />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route
                path="/subir"
                element={
                  <RutaProtegida permitido={['admin', 'investigador']}>
                    <SubirActivo />
                  </RutaProtegida>
                }
              />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </AuthProvider>
  )
}

export default App
