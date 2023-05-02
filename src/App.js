import React from 'react'
import GlogalStyle from './styles/global'
import RoutesApp from './routes'
import { AuthProvider } from './contexts/auth'

const App = () => {
  return (
    <AuthProvider>
      <RoutesApp />
      <GlogalStyle />
    </AuthProvider>

  )
}

export default App