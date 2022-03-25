const apiUrl = process.env.NEXT_PUBLIC_API_URL

const getAlerts = async ({ id } = {}) => {
  let response
  let data

  if (id) {
    try {
      response = await fetch(`${apiUrl}/alert/${id}`)
      data = await response.json()
    } catch (error) {
      console.error(error.message)
    }
  } else {
    try {
      response = await fetch(`${apiUrl}/alert`)
      data = await response.json()
    } catch (error) {
      console.error(error.message)
    }
  }
  return data
}

const sendAlert = async ({ alert }) => {
  try {
    const response = await fetch(`${apiUrl}/alert`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(alert)
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error.message)
  }
}

const deleteAlert = async ({ id }) => {
  try {
    const response = await fetch(`${apiUrl}/alert/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = response.json()
    return data
  } catch (error) {
    console.error(error.message)
  }
}

const editAlert = async ({ alert, id }) => {
  try {
    const response = await fetch(`${apiUrl}/alert/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(alert)
    })
    const data = await response.json()

    return data
  } catch (error) {
    console.error(error.message)
  }
}

export { getAlerts, sendAlert, deleteAlert, editAlert }
