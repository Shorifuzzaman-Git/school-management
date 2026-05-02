import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import AdminLogin from './components/AdminLogin'
import Dashboard from './pages/Dashboard'
import Home from '../pages/Home'

function Admin() {
  const { isAdmin } = useContext(UserContext)
  const [showLogin, setShowLogin] = useState(true)

  useEffect(() => {
    setShowLogin(!isAdmin())
  }, [isAdmin])

  if (showLogin) {
    return (
      <>
        <Home />
        <AdminLogin onLoginSuccess={() => setShowLogin(false)} />
      </>
    )
  }

  return <Dashboard />
}

export default Admin