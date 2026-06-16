function LogoutModal({
  show,
  onCancel,
  onConfirm
}) {

  if (!show) return null

  return (

    <div
      className="
        fixed inset-0
        bg-black/50
        flex items-center
        justify-center
        z-50
      "
    >

      <div
        className="
          bg-white
          p-6
          rounded-xl
          w-96
        "
      >

        <h2
          className="
            text-xl
            font-bold
            mb-4
          "
        >
          Logout?
        </h2>

        <p className="mb-6">
          Are you sure you want
          to logout?
        </p>

        <div
          className="
            flex
            justify-end
            gap-3
          "
        >

          <button
            onClick={onCancel}
            className="
              px-4 py-2
              bg-gray-300
              rounded-lg
            "
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="
              px-4 py-2
              bg-red-500
              text-white
              rounded-lg
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