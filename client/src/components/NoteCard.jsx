import { Trash2 } from "lucide-react"

function NoteCard(props) {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100">

      {/* Title */}
      <h2 className="text-2xl font-bold text-green-700 mb-3">
        {props.title}
      </h2>

      {/* Content */}
      <p className="text-gray-600 mb-6 leading-relaxed">
        {props.content}
      </p>

      {/* Footer */}
      <div className="flex justify-end">

        <button
          onClick={props.deleteNote}
          className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition"
        >
          <Trash2 size={18} />
          Delete
        </button>

      </div>

    </div>
  )
}

export default NoteCard