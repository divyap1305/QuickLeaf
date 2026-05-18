import {
  LayoutDashboard,
  NotebookPen,
  Star,
  Archive,
  Settings
} from "lucide-react"

function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-green-700 text-white p-6 hidden md:block">

      {/* Logo */}
      <h1 className="text-3xl font-bold mb-12">
        QuickLeaf 🌿
      </h1>

      {/* Menu */}
      <ul className="space-y-6">

        <li className="flex items-center gap-3 hover:text-green-200 cursor-pointer transition">
          <LayoutDashboard size={22} />
          Dashboard
        </li>

        <li className="flex items-center gap-3 hover:text-green-200 cursor-pointer transition">
          <NotebookPen size={22} />
          Notes
        </li>

        <li className="flex items-center gap-3 hover:text-green-200 cursor-pointer transition">
          <Star size={22} />
          Favorites
        </li>

        <li className="flex items-center gap-3 hover:text-green-200 cursor-pointer transition">
          <Archive size={22} />
          Archived
        </li>

        <li className="flex items-center gap-3 hover:text-green-200 cursor-pointer transition">
          <Settings size={22} />
          Settings
        </li>

      </ul>

    </div>
  )
}

export default Sidebar