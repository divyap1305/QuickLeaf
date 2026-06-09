import { useState } from "react"

function Sidebar(props) {

  const [showCategories, setShowCategories] = useState(false)

  return (
    <div
      className={`w-64 min-h-screen p-6 hidden md:block
      ${
        props.darkMode
          ? "bg-black text-white"
          : "bg-green-700 text-white"
      }`}
    >

      {/* Logo */}
      <h1 className="text-3xl font-bold mb-12">
        QuickLeaf 🌿
      </h1>

      {/* Navigation */}
      <h2 className="text-sm uppercase opacity-70 mb-3">
        Navigation
      </h2>

      <ul className="space-y-2 mb-8">

        <li
          onClick={() => {
            props.setViewMode("all")
            props.setSelectedTag("All")
          }}
          className={`cursor-pointer p-2 rounded-lg transition
            ${
              props.viewMode === "all"
                ? "bg-white text-green-700"
                : "hover:bg-green-600"
            }
          `}
        >
          📄 All Notes
        </li>

        <li
          onClick={() => {
            props.setViewMode("pinned")
          }}
          className={`cursor-pointer p-2 rounded-lg transition
            ${
              props.viewMode === "pinned"
                ? "bg-white text-green-700"
                : "hover:bg-green-600"
            }
          `}
        >
          📌 Pinned
        </li>

      </ul>

      {/* Categories Dropdown */}
      <h2 className="text-sm uppercase opacity-70 mb-3">
        Categories
      </h2>

      <button
        onClick={() =>
          setShowCategories(!showCategories)
        }
        className="w-full text-left p-2 rounded-lg hover:bg-green-600 transition mb-2"
      >
        📂 Categories {showCategories ? "▲" : "▼"}
      </button>

      {showCategories && (

        <ul className="space-y-2 ml-4">

          {[
            "All",
            "General",
            "React",
            "DSA",
            "Research",
            "Project",
            "College",
            "Personal"
          ].map((tag) => (

            <li
              key={tag}
              onClick={() => {

                props.setViewMode("all")
                props.setSelectedTag(tag)

              }}
              className={`cursor-pointer p-2 rounded-lg transition

                ${
                  props.selectedTag === tag
                    ? "bg-white text-green-700"
                    : "hover:bg-green-600"
                }
              `}
            >
              {tag}
            </li>

          ))}

        </ul>

      )}

    </div>
  )
}

export default Sidebar