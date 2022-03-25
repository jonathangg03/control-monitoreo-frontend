const apiUrl = process.env.NEXT_PUBLIC_API_URL

const getReplacements = async () => {
  try {
    const response = await fetch(`${apiUrl}/replacement`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error.message)
  }
}

const getReplacement = async ({ id }) => {
  try {
    const response = await fetch(`${apiUrl}/replacement/${id}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error.message)
  }
}

const sendReplacement = async ({ replacement }) => {
  try {
    const response = await fetch(`${apiUrl}/replacement`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(replacement)
    })

    const data = await response.json()
    return data
  } catch (error) {
    console.error(error.message)
  }
}

const editReplacement = async ({ replacement, id }) => {
  try {
    const response = await fetch(`${apiUrl}/replacement/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(replacement)
    })

    const data = await response.json()
    return data
  } catch (error) {
    console.error(error.message)
  }
}

const deleteReplacement = async ({ id }) => {
  try {
    const response = await fetch(`${apiUrl}/replacement/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json()
    return data
  } catch (error) {
    console.error(error.message)
  }
}

export {
  getReplacements,
  getReplacement,
  sendReplacement,
  editReplacement,
  deleteReplacement
}
