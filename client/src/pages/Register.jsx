import { useState } from "react"
import { registerUser } from "../services/authService"

function Register() {

  const [name, setName] =
    useState("")

  const [email, setEmail] =
    useState("")

  const [password, setPassword] =
    useState("")

  async function handleRegister() {

    try {

      await registerUser({
        name,
        email,
        password
      })

      alert(
        "Registration Successful"
      )

      window.location.replace("/login")

    } catch (error) {

      alert("Registration Failed")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">

      <div className="w-96 p-8 shadow-lg rounded-xl">

        <h1 className="text-3xl font-bold mb-6">
          Register 🌿
        </h1>

        <input
          placeholder="Name"
          className="w-full p-3 border rounded mb-4"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

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
          onClick={handleRegister}
          className="w-full bg-green-700 text-white p-3 rounded"
        >
          Register
        </button>

      </div>

    </div>
  )
}

export default Register