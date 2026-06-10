import axios from "axios"

const API_URL = "http://localhost:5000/api/notes"

// Get Notes
export const getNotes = async () => {

  const response = await axios.get(API_URL, getConfig())

  return response.data
}

// Get Config with Token
const getConfig = () => {

  const token =
    localStorage.getItem("token")

  return {
    headers: {
      authorization: token
    }
  }
}

// Create Note
export const createNote = async (noteData) => {

  const response = await axios.post(
    API_URL,
    noteData,
    getConfig()
  )

  return response.data
}

// Delete Note
export const deleteNoteById = async (id) => {

  const response = await axios.delete(
    `${API_URL}/${id}`,
    getConfig()
  )

  return response.data
}

// Update Note
export const updateNoteById =
  async (id, noteData) => {

    const response =
      await axios.put(
        `${API_URL}/${id}`,
        noteData,
        getConfig()
      )

    return response.data
}

// Toggle Pin Note
export const togglePin =
  async (id) => {

    const response =
      await axios.patch(
        `${API_URL}/${id}/pin`,
        {},
        getConfig()
      )

    return response.data
}