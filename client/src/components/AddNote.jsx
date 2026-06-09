import { Plus } from "lucide-react"

function AddNote(props) {
  return (
    <div className={`p-6 rounded-3xl shadow-sm mb-8 border
      ${props.darkMode
        ? "bg-gray-900 border-gray-700"
        : "bg-white border-gray-100"
      }
    `}>

      <h2 className={`text-3xl font-bold mb-6
        ${props.darkMode ? "text-green-400" : "text-green-700"}
      `}>
        Create Note
      </h2>

      {/* Title */}
      <input
        type="text"
        placeholder="Enter note title..."
        value={props.title}
        onChange={props.handleTitleChange}
        className={`w-full p-4 rounded-2xl mb-4 outline-none border
          ${props.darkMode
            ? "bg-gray-800 border-gray-700 text-white"
            : "border-gray-200"
          }
        `}
      />

      <select
        value={props.tag}
        onChange={props.handleTagChange}
        className={`w-full p-4 rounded-2xl mb-4 border
          ${props.darkMode
            ? "bg-gray-800 border-gray-700 text-white"
            : "border-gray-200"
          }
        `}
      >

        <option value="General">General</option>
        <option value="React">React</option>
        <option value="DSA">DSA</option>
        <option value="Research">Research</option>
        <option value="Project">Project</option>
        <option value="College">College</option>
        <option value="Personal">Personal</option>

      </select>

      {/* Content */}
      <textarea
        placeholder="Write your thoughts..."
        value={props.content}
        onChange={props.handleContentChange}
        className={`w-full p-4 rounded-2xl mb-5 h-36 outline-none resize-none border
          ${props.darkMode
            ? "bg-gray-800 border-gray-700 text-white"
            : "border-gray-200"
          }
        `}
      ></textarea>

      {/* Button */}
      <button
        onClick={props.addNote}
        className="flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-2xl hover:bg-green-800 transition"
      >
        <Plus size={20} />
        {props.editingId
        ? "Update Note"
        : "Add Note"}
        </button>

    </div>
  )
}

export default AddNote