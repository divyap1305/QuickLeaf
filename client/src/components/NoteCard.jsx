import { Trash2 } from "lucide-react"

function NoteCard(props) {
  return (
    <div className={`p-6 rounded-3xl shadow-sm hover:shadow-xl transition duration-300 border
      ${props.darkMode
        ? "bg-gray-900 border-gray-700"
        : "bg-white border-gray-100"
      }
    `}>

      {/* Title */}
      <h2 className={`text-2xl font-bold mb-3
        ${props.darkMode ? "text-green-400" : "text-green-700"}
      `}>
        {props.title}
      </h2>

      {/* Content */}
      <p className={`mb-6 leading-relaxed
        ${props.darkMode ? "text-gray-300" : "text-gray-600"}
      `}>
        {props.content}
      </p>

      {/* Footer */}
      <div className="flex justify-end">

        <div className="flex justify-end gap-3">

  <button
    onClick={props.editNote}
    className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition"
  >
    Edit
  </button>

  <button
    onClick={props.deleteNote}
    className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition"
  >
    Delete
  </button>

</div>

      </div>

    </div>
  )
}

export default NoteCard