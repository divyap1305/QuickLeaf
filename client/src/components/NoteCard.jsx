function NoteCard(props) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300">

      <h2 className="text-2xl font-bold text-green-700 mb-3">
        {props.title}
      </h2>

      <p className="text-gray-600">
        {props.content}
      </p>

    </div>
  )
}

export default NoteCard