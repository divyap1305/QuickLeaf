function DeleteModal(props) {

  if (!props.show) {
    return null
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 w-96 shadow-xl">

        {/* Title */}
        <h2 className="text-2xl font-bold text-red-500 mb-3">
          Delete Note
        </h2>

        {/* Message */}
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Are you sure you want to delete this note?
        </p>

        {/* Buttons */}
        <div className="flex justify-end gap-3">

          <button
            onClick={props.onCancel}
            className="px-5 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 transition"
          >
            Cancel
          </button>

          <button
            onClick={props.onConfirm}
            className="px-5 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  )
}

export default DeleteModal