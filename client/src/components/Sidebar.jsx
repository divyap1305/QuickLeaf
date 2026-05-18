function Sidebar() {
  return (
    <div className="w-64 h-screen bg-green-700 text-white p-5">
      
      <h2 className="text-3xl font-bold mb-10">
        QuickLeaf 🌿
      </h2>

      <ul className="space-y-5 text-lg">
        <li className="hover:text-green-200 cursor-pointer">
          Dashboard
        </li>

        <li className="hover:text-green-200 cursor-pointer">
          All Notes
        </li>

        <li className="hover:text-green-200 cursor-pointer">
          Favorites
        </li>

        <li className="hover:text-green-200 cursor-pointer">
          Archived
        </li>

        <li className="hover:text-green-200 cursor-pointer">
          Settings
        </li>
      </ul>
    </div>
  )
}

export default Sidebar