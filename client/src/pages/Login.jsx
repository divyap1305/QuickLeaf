import { useState } from "react"
import { loginUser } from "../services/authService"
import { Navigate, Link } from "react-router-dom"

function Login() {

  const [email, setEmail] =
    useState("")

  const [password, setPassword] =
    useState("")

  async function handleLogin() {

    try {

      const data =
        await loginUser({
          email,
          password
        })

      localStorage.setItem(
        "token",
        data.token
      )

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      )

      window.location.replace("/")

    } catch (error) {

      alert("Login Failed")
    }
  }

  const token =
    localStorage.getItem("token")

  if (token) {
    return <Navigate to="/" />
  }

  return (
    <div className="min-h-screen flex items-center justify-center">

      <div className="w-96 p-8 shadow-lg rounded-xl">

        <h1 className="text-3xl font-bold mb-6">
          Login 🌿
        </h1>

        <input
          placeholder="Email"
          className="w-full p-3 border rounded mb-4"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded mb-4"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          onClick={handleLogin}
          className="w-full bg-green-700 text-white p-3 rounded"
        >
          Login
        </button>

        <p className="text-center mt-4">

          New to QuickLeaf?

          <Link
            to="/register"
            className="text-green-700 font-semibold ml-1"
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  )
}

export default Login