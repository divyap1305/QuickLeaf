import { useState } from "react"
import { registerUser } from "../services/authService"
import { Navigate, Link } from "react-router-dom"

function Register() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const token = localStorage.getItem("token")

  const darkMode =
    localStorage.getItem(
      "quickleaf-theme"
    ) === "dark"

  if (token) {
    return <Navigate to="/" />
  }

  async function handleRegister() {

    try {

      setLoading(true)

      await registerUser({
        name,
        email,
        password
      })

      alert("Registration Successful")

      window.location.replace("/login")

    } catch (error) {

      alert("Registration Failed")

    } finally {

      setLoading(false)

    }
  }

  return (

    <div
      className={`min-h-screen flex items-center justify-center
      ${
        darkMode
          ? "bg-gray-950"
          : "bg-gray-100"
      }`}
    >

      <div
        className={`w-full max-w-md shadow-xl rounded-2xl p-8
        ${
          darkMode
            ? "bg-gray-900"
            : "bg-white"
        }`}
      >

        <div className="text-center mb-8">

          <h1
            className={`text-5xl font-bold mb-3
            ${
              darkMode
                ? "text-green-400"
                : "text-green-700"
            }`}
          >
            QuickLeaf 🌿
          </h1>

          <p
            className={
              darkMode
                ? "text-gray-400"
                : "text-gray-500"
            }
          >
            Create your account
          </p>

        </div>

        <input
          placeholder="Name"
          className={`w-full p-3 rounded-lg mb-4 border
          ${
            darkMode
              ? "bg-gray-800 text-white border-gray-700"
              : "bg-white border-gray-300"
          }`}
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          type="email"
          placeholder="Email"
          className={`w-full p-3 rounded-lg mb-4 border
          ${
            darkMode
              ? "bg-gray-800 text-white border-gray-700"
              : "bg-white border-gray-300"
          }`}
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className={`w-full p-3 rounded-lg mb-4 border
          ${
            darkMode
              ? "bg-gray-800 text-white border-gray-700"
              : "bg-white border-gray-300"
          }`}
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          onClick={handleRegister}
          disabled={loading}
          className="w-full bg-green-700 hover:bg-green-800 text-white p-3 rounded-lg transition disabled:opacity-50"
        >
          {
            loading
              ? "Registering..."
              : "Register"
          }
        </button>

        <p
          className={`text-center mt-5
          ${
            darkMode
              ? "text-gray-400"
              : "text-gray-600"
          }`}
        >

          Already have an account?

          <Link
            to="/login"
            className="text-green-600 font-semibold ml-1"
          >
            Login
          </Link>

        </p>

      </div>

    </div>

  )
}

export default Register