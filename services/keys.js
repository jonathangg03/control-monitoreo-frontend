const apiUrl = process.env.NEXT_PUBLIC_API_URL

const getKeys = async () => {
  try {
    const response = await fetch(`${apiUrl}/key`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error.message)
  }
}

const getKey = async ({ id }) => {
  try {
    const response = await fetch(`${apiUrl}/key/${id}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error.message)
  }
}

const sendKey = async ({ key }) => {
  try {
    const response = await fetch(`${apiUrl}/key`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(key)
    })

    const data = await response.json()
    return data
  } catch (error) {
    console.error(error.message)
  }
}

const editKey = async ({ key, id }) => {
  try {
    const response = await fetch(`${apiUrl}/key/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(key)
    })

    const data = await response.json()
    return data
  } catch (error) {
    console.error(error.message)
  }
}

const deleteKey = async ({ id }) => {
  try {
    const response = await fetch(`${apiUrl}/key/${id}`, {
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

export { getKeys, getKey, sendKey, editKey, deleteKey }
