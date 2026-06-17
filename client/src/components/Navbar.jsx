import { Search, Moon, Sun } from "lucide-react"
import { useState } from "react"
import LogoutModal from "./LogoutModal"

function Navbar(props) {

  const user = JSON.parse(
    localStorage.getItem("user")
  )

  const [showProfile, setShowProfile] =
    useState(false)

  const [showLogoutModal, setShowLogoutModal] =
    useState(false)

  function confirmLogout() {

    localStorage.removeItem("token")
    localStorage.removeItem("user")

    window.location.replace("/login")
  }

  return (

    <div
      className={`sticky top-0 z-40 border-b p-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4

      ${
        props.darkMode
          ? "bg-gray-900 border-gray-800"
          : "bg-white border-gray-200"
      }`}
    >

      {/* Welcome Section */}

      <div>

        <h1
          className={`text-3xl font-bold

          ${
            props.darkMode
              ? "text-green-400"
              : "text-green-700"
          }`}
        >
          Welcome Back 🌿
        </h1>

        <p
          className={`text-sm mt-1

          ${
            props.darkMode
              ? "text-gray-400"
              : "text-gray-500"
          }`}
        >
          Organize your thoughts beautifully
        </p>

      </div>

      {/* Right Section */}

      <div className="flex items-center gap-4 flex-wrap">

        {/* Search */}

        <div
          className={`flex items-center px-4 py-2 rounded-xl w-full md:w-80

          ${
            props.darkMode
              ? "bg-gray-800"
              : "bg-gray-100"
          }`}
        >

          <Search
            size={20}
            className={
              props.darkMode
                ? "text-gray-400"
                : "text-gray-500"
            }
          />

          <input
            type="text"
            placeholder="Search notes..."
            value={props.search}
            onChange={props.handleSearch}
            className={`bg-transparent outline-none ml-3 w-full

            ${
              props.darkMode
                ? "text-white placeholder:text-gray-500"
                : "text-black placeholder:text-gray-400"
            }`}
          />

        </div>

        {/* Theme Toggle */}

        <button
          onClick={props.toggleDarkMode}
          className="bg-green-700 text-white p-3 rounded-xl hover:bg-green-800 transition"
        >
          {
            props.darkMode
              ? <Sun size={20} />
              : <Moon size={20} />
          }
        </button>

        {/* Profile */}

        <div className="relative">

          <button
            onClick={() =>
              setShowProfile(
                !showProfile
              )
            }
            className={`px-4 py-2 rounded-xl transition

            ${
              props.darkMode
                ? "bg-gray-800 text-white hover:bg-gray-700"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >

            {user?.name} ▼

          </button>

          {showProfile && (

            <div
              className={`absolute right-0 mt-2 w-64 rounded-xl shadow-xl p-4 z-50 border

              ${
                props.darkMode
                  ? "bg-gray-900 text-white border-gray-700"
                  : "bg-white text-black border-gray-200"
              }`}
            >

              <p className="font-semibold text-lg">
                {user?.name}
              </p>

              <p
                className={`text-sm mt-1

                ${
                  props.darkMode
                    ? "text-gray-400"
                    : "text-gray-600"
                }`}
              >
                {user?.email}
              </p>

              <hr
                className={`my-3

                ${
                  props.darkMode
                    ? "border-gray-700"
                    : "border-gray-200"
                }`}
              />

              <button
                onClick={() =>
                  setShowLogoutModal(true)
                }
                className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
              >
                🚪 Logout
              </button>

            </div>

          )}

        </div>

      </div>

      <LogoutModal
        show={showLogoutModal}
        onCancel={() =>
          setShowLogoutModal(false)
        }
        onConfirm={confirmLogout}
        darkMode={props.darkMode}
      />

    </div>

  )
}

export default Navbar