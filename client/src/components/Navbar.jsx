import { Search } from "lucide-react"

function Navbar(props) {
  return (
    <div className="bg-white shadow-sm p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

      {/* Heading */}
      <h1 className="text-3xl font-bold text-green-700">
        Welcome Back 🌿
      </h1>

      {/* Search Box */}
      <div className="flex items-center bg-gray-100 px-4 py-2 rounded-xl w-full md:w-96">

        <Search className="text-gray-500" size={20} />

        <input
          type="text"
          placeholder="Search notes..."
          value={props.search}
          onChange={props.handleSearch}
          className="bg-transparent outline-none ml-3 w-full"
        />

      </div>

    </div>
  )
}

export default Navbar