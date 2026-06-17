import axios from "axios"

const API_URL =
  `${import.meta.env.VITE_API_URL}/notes`

const getConfig = () => {

  const token =
    localStorage.getItem("token")

  return {
    headers: {
      authorization: token
    }
  }
}

export const getNotes = async () => {

  const response =
    await axios.get(
      API_URL,
      getConfig()
    )

  return response.data
}

export const createNote =
  async (noteData) => {

    const response =
      await axios.post(
        API_URL,
        noteData,
        getConfig()
      )

    return response.data
}

export const deleteNoteById =
  async (id) => {

    const response =
      await axios.delete(
        `${API_URL}/${id}`,
        getConfig()
      )

    return response.data
}

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