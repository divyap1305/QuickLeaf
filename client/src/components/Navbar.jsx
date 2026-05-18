function Navbar() {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold text-green-700">
        Welcome Back 🌿
      </h1>

      <button className="bg-green-700 text-white px-5 py-2 rounded-xl hover:bg-green-800 transition">
        + New Note
      </button>

    </div>
  )
}

export default Navbar