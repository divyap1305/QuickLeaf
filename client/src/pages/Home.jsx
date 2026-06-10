import { useState, useEffect } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


import {
  getNotes,
  createNote,
  deleteNoteById,
  updateNoteById,
  togglePin
} from "../services/noteService"

import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import NoteCard from "../components/NoteCard"
import AddNote from "../components/AddNote"
import DeleteModal from "../components/DeleteModal"

function Home() {

  const [notes, setNotes] = useState([])

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("quickleaf-theme")
    return savedTheme === "dark"
  })

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [tag, setTag] = useState("General")
  const [editingId, setEditingId] = useState(null)
  const [search, setSearch] = useState("")
  const [selectedTag, setSelectedTag] = useState("All")
  const [viewMode, setViewMode] = useState("all")

  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [selectedNoteId, setSelectedNoteId] = useState(null)

  // Fetch Notes
  async function fetchNotes() {
    try {
      const data = await getNotes()
      setNotes(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  // Save Theme
  useEffect(() => {
    localStorage.setItem(
      "quickleaf-theme",
      darkMode ? "dark" : "light"
    )
  }, [darkMode])

  // Toggle Theme
  function toggleDarkMode() {
    setDarkMode(!darkMode)
  }

  // Inputs
  function handleTitleChange(event) {
    setTitle(event.target.value)
  }

  function handleContentChange(event) {
    setContent(event.target.value)
  }

  function handleSearch(event) {
    setSearch(event.target.value)
  }

  function handleTagChange(event) {
    setTag(event.target.value)
  }

  // Create / Update Note
  async function addNote() {

    if (
      title.trim() === "" ||
      content.trim() === ""
    ) {
      alert("Please fill all fields")
      return
    }

    try {

      if (editingId) {

        await updateNoteById(
          editingId,
          {
            title,
            content,
            tag
          }
        )
        toast.success("Note Updated ✏️")

      } else {

        await createNote({
          title,
          content,
          tag
        })
        toast.success("Note Created 🌿")

      }

      await fetchNotes()

      setTitle("")
      setContent("")
      setTag("General")
      setEditingId(null)

    } catch (error) {

      console.log(error)
    }
  }

  // Edit
  function startEditing(note) {

    setTitle(note.title)
    setContent(note.content)
    setEditingId(note._id)
    setTag(note.tag || "General")
  }

  // Delete Modal
  function openDeleteModal(id) {

    setSelectedNoteId(id)
    setShowDeleteModal(true)
  }

  function closeDeleteModal() {

    setShowDeleteModal(false)
    setSelectedNoteId(null)
  }

  async function confirmDelete() {

    try {

      await deleteNoteById(selectedNoteId)

      await fetchNotes()

      closeDeleteModal()
      toast.success("Note Deleted 🗑️")

    } catch (error) {

      console.log(error)
    }
  }

  // Pin Note
  async function handlePin(id) {

    try {

      await togglePin(id)
      toast.success("Note Pinned 📌")

      await fetchNotes()

    } catch (error) {

      console.log(error)
    }
  }

  // Filter + Sort
  const filteredNotes = notes
  .filter((note) => {

    const matchesSearch =
      note.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      note.content
        .toLowerCase()
        .includes(search.toLowerCase())

    const matchesTag =
      selectedTag === "All" ||
      note.tag === selectedTag

    const matchesView =
      viewMode === "all" ||
      (viewMode === "pinned" && note.pinned)

    return (
      matchesSearch &&
      matchesTag &&
      matchesView
    )

  })
  .sort((a, b) => {

    if (a.pinned === b.pinned) {
      return 0
    }

    return a.pinned ? -1 : 1
  })

  return (
    <div
      className={`flex min-h-screen ${
        darkMode
          ? "bg-gray-950"
          : "bg-gray-100"
      }`}
    >

      <Sidebar
        darkMode={darkMode}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
        viewMode={viewMode}
        setViewMode={setViewMode}
        notesCount={notes.length}
      />

      <div className="flex-1">

        <Navbar
          search={search}
          handleSearch={handleSearch}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />

        <div className="p-8">

          <AddNote
            title={title}
            content={content}
            tag={tag}
            handleTitleChange={handleTitleChange}
            handleContentChange={handleContentChange}
            handleTagChange={handleTagChange}
            addNote={addNote}
            darkMode={darkMode}
            editingId={editingId}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            {filteredNotes.length > 0 ? (

              filteredNotes.map((note) => (

                <NoteCard
                  key={note._id}
                  title={note.title}
                  content={note.content}
                  tag={note.tag}
                  pinned={note.pinned}
                  pinNote={() => handlePin(note._id)}
                  createdAt={note.createdAt}
                  updatedAt={note.updatedAt}
                  editNote={() => startEditing(note)}
                  deleteNote={() =>
                    openDeleteModal(note._id)
                  }
                  darkMode={darkMode}
                />

              ))

            ) : (

              <div
                className={`col-span-3 text-center text-2xl mt-10 ${
                  darkMode
                    ? "text-gray-400"
                    : "text-gray-500"
                }`}
              >
                No Notes Found 🌿
              </div>

            )}

          </div>

        </div>

      </div>

      <DeleteModal
        show={showDeleteModal}
        onCancel={closeDeleteModal}
        onConfirm={confirmDelete}
      />

      <ToastContainer
        position="top-right"
        autoClose={2500}
      />

    </div>
  )
}

export default Home