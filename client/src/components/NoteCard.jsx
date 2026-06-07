import { Trash2, Pin } from "lucide-react"

function NoteCard(props) {
  const createdDate =
  new Date(props.createdAt)
    .toLocaleDateString()

  const updatedDate =
  new Date(props.updatedAt)
    .toLocaleDateString()

  return (
    <div className={`p-6 rounded-3xl shadow-sm hover:shadow-xl transition duration-300 border
      ${props.darkMode
        ? "bg-gray-900 border-gray-700"
        : "bg-white border-gray-100"
      }
    `}>

      {/* Title */}
      <div className="flex justify-between items-center mb-3">

  <h2
    className={`text-2xl font-bold
      ${props.darkMode
        ? "text-green-400"
        : "text-green-700"}
    `}
  >
    {props.title}
  </h2>

  {props.pinned && (
    <span
      className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm"
    >
      📌 Pinned
    </span>
  )}

</div>

      {/* Content */}
      <p className={`mb-6 leading-relaxed
        ${props.darkMode ? "text-gray-300" : "text-gray-600"}
      `}>
        {props.content}
      </p>
      
      <div className="text-sm text-gray-500 mb-4">

        <p>
          Created: {createdDate}
        </p>

        <p>
          Updated: {updatedDate}
        </p>

      </div>

      {/* Footer */}
      <div className="flex justify-end">

        <div className="flex justify-end gap-3">
          <button
            onClick={props.pinNote}
            className={`px-4 py-2 rounded-xl text-white transition
              ${props.pinned
                ? "bg-yellow-500 hover:bg-yellow-600"
                : "bg-gray-500 hover:bg-gray-600"
              }
            `}
          >
            <Pin size={18} />
          </button>

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