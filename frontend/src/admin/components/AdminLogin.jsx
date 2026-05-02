import React, { useState, useContext } from 'react'
import { UserContext } from '../../context/UserContext'

function AdminLogin({ onLoginSuccess }) {
  const { login } = useContext(UserContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const result = await login(email, password)

    if (result.success) {
      onLoginSuccess()
    } else {
      setError(result.message)
    }
    setLoading(false)
  }

  const handleForgetPassword = () => {
    alert('Forget password functionality not implemented yet.')
  }

  const handleResetPassword = () => {
    alert('Reset password functionality not implemented yet.')
  }

  return (
    <div className="fixed inset-0 bg-green-300 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <div className="mt-4 flex justify-between">
          <button
            onClick={handleForgetPassword}
            className="text-sm text-indigo-600 hover:text-indigo-500"
          >
            Forget Password
          </button>
          <button
            onClick={handleResetPassword}
            className="text-sm text-indigo-600 hover:text-indigo-500"
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin