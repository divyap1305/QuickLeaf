function LogoutModal({
  show,
  onCancel,
  onConfirm,
  darkMode
}) {

  if (!show) return null

  return (

    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

      <div
        className={`
          w-96
          p-6
          rounded-3xl
          shadow-2xl

          ${
            darkMode
              ? "bg-gray-900 border border-gray-700"
              : "bg-white border border-gray-200"
          }
        `}
      >

        <h2 className="text-2xl font-bold text-red-500 mb-4">
          Logout?
        </h2>

        <p
          className={`mb-6

          ${
            darkMode
              ? "text-gray-300"
              : "text-gray-600"
          }`}
        >
          Are you sure you want to logout?
        </p>

        <div className="flex justify-end gap-3">

          <button
            onClick={onCancel}
            className={`
              px-4
              py-2
              rounded-xl
              transition

              ${
                darkMode
                  ? "bg-gray-700 text-white hover:bg-gray-600"
                  : "bg-gray-200 hover:bg-gray-300"
              }
            `}
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="
              px-4
              py-2
              rounded-xl
              bg-red-500
              hover:bg-red-600
              text-white
              transition
            "
          >
            Logout
          </button>

        </div>

      </div>

    </div>

  )
}

export default LogoutModal