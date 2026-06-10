import { Search, Moon, Sun } from "lucide-react"

function Navbar(props) {

  const user = JSON.parse(
    localStorage.getItem("user")
  )

  function logout() {
    localStorage.removeItem("token")
    localStorage.removeItem("user")

    window.location.replace("/login")
  }

  return (
    <div className={`shadow-sm p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4
      ${props.darkMode ? "bg-gray-900" : "bg-white"}
    `}>

      {/* Heading */}
      <h1 className={`text-3xl font-bold
        ${props.darkMode ? "text-green-400" : "text-green-700"}
      `}>
        Welcome Back 🌿
      </h1>

      {/* Right Section */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <div className={`flex items-center px-4 py-2 rounded-xl w-full md:w-80
          ${props.darkMode ? "bg-gray-800" : "bg-gray-100"}
        `}>

          <Search
            className={props.darkMode ? "text-gray-400" : "text-gray-500"}
            size={20}
          />

          <input
            type="text"
            placeholder="Search notes..."
            value={props.search}
            onChange={props.handleSearch}
            className={`bg-transparent outline-none ml-3 w-full
              ${props.darkMode ? "text-white" : "text-black"}
            `}
          />

        </div>

        {/* Dark Mode Button */}
        <button
          onClick={props.toggleDarkMode}
          className="bg-green-700 text-white p-3 rounded-xl hover:bg-green-800 transition"
        >
          {props.darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* User Info */}
        <div className="hidden md:flex flex-col text-right">
          <span
            className={`font-semibold
              ${
                props.darkMode
                  ? "text-white"
                  : "text-gray-800"
              }
            `}
          >
            Welcome Back 👋
          </span>

          <span
            className={`text-sm
              ${
                props.darkMode
                  ? "text-gray-400"
                  : "text-gray-600"
              }
            `}
          >
            {user?.name}
          </span>

        </div>

        {/* Logout Button */}
        <button
          onClick={logout}
          className="
            bg-red-500
            hover:bg-red-600
            text-white
            px-4
            py-2
            rounded-xl
            transition
          "
        >
          🚪 Logout
        </button>

      </div>

    </div>
  )
}

export default Navbar