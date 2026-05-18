function AddNote(props) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md mb-8">

      <h2 className="text-2xl font-bold text-green-700 mb-4">
        Create New Note
      </h2>

      {/* Title Input */}
      <input
        type="text"
        placeholder="Enter note title..."
        value={props.title}
        onChange={props.handleTitleChange}
        className="w-full border border-gray-300 p-3 rounded-xl mb-4 outline-none focus:border-green-600"
      />

      {/* Content Input */}
      <textarea
        placeholder="Write your note..."
        value={props.content}
        onChange={props.handleContentChange}
        className="w-full border border-gray-300 p-3 rounded-xl mb-4 h-32 outline-none focus:border-green-600"
      ></textarea>

      {/* Button */}
      <button
        onClick={props.addNote}
        className="bg-green-700 text-white px-6 py-3 rounded-xl hover:bg-green-800 transition"
      >
        Add Note
      </button>

    </div>
  )
}

export default AddNote