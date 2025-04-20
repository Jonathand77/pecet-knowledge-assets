import { createContext, useContext, useState } from 'react'

// Valores posibles: 'admin', 'investigador', 'visitante'
const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState({ nombre: 'Invitado', rol: 'visitante' })

  const login = (nombre, rol) => {
    setUsuario({ nombre, rol })
  }

  const logout = () => {
    setUsuario({ nombre: 'Invitado', rol: 'visitante' })
  }

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
