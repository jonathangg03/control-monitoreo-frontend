const getAlerts = async ({ id } = {}) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  let response
  let data

  if (id) {
    try {
      response = await fetch(`${apiUrl}/alert/${id}`)
      data = await response.json()
    } catch (error) {}
  } else {
    response = await fetch(`${apiUrl}/alert`)
    data = await response.json()
  }
  return data
}

const sendAlert = async ({ alert }) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  try {
    await fetch(`${apiUrl}/alert`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(alert)
    })
  } catch (error) {
    console.error(error.message)
  }
}

const deleteAlert = async ({ id }) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  await fetch(`${apiUrl}/alert/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

const editAlert = async ({ alert, id }) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  console.log(alert)

  const response = await fetch(`${apiUrl}/alert/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(alert)
  })
  const data = await response.json()

  return data
}

export { getAlerts, sendAlert, deleteAlert, editAlert }
