import { Plus } from "lucide-react"

function AddNote(props) {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm mb-8 border border-gray-100">

      <h2 className="text-3xl font-bold text-green-700 mb-6">
        Create Note
      </h2>

      {/* Title */}
      <input
        type="text"
        placeholder="Enter note title..."
        value={props.title}
        onChange={props.handleTitleChange}
        className="w-full border border-gray-200 p-4 rounded-2xl mb-4 outline-none focus:border-green-600"
      />

      {/* Content */}
      <textarea
        placeholder="Write your thoughts..."
        value={props.content}
        onChange={props.handleContentChange}
        className="w-full border border-gray-200 p-4 rounded-2xl mb-5 h-36 outline-none focus:border-green-600 resize-none"
      ></textarea>

      {/* Button */}
      <button
        onClick={props.addNote}
        className="flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-2xl hover:bg-green-800 transition"
      >
        <Plus size={20} />
        Add Note
      </button>

    </div>
  )
}

export default AddNote