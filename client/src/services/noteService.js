import axios from "axios"

const API_URL = "http://localhost:5000/api/notes"

// Get Notes
export const getNotes = async () => {

  const response = await axios.get(API_URL)

  return response.data
}

// Create Note
export const createNote = async (noteData) => {

  const response = await axios.post(
    API_URL,
    noteData
  )

  return response.data
}

// Delete Note
export const deleteNoteById = async (id) => {

  const response = await axios.delete(
    `${API_URL}/${id}`
  )

  return response.data
}

// Update Note
export const updateNoteById =
  async (id, noteData) => {

    const response =
      await axios.put(
        `${API_URL}/${id}`,
        noteData
      )

    return response.data
}