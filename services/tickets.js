const apiUrl = process.env.NEXT_PUBLIC_API_URL

const getTickets = async () => {
  try {
    const response = await fetch(`${apiUrl}/ticket`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error.message)
  }
}

const getTicket = async ({ id }) => {
  try {
    const response = await fetch(`${apiUrl}/ticket/${id}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error.message)
  }
}

const sendTicket = async ({ ticket }) => {
  try {
    const response = await fetch(`${apiUrl}/ticket`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(ticket)
    })

    const data = await response.json()
    return data
  } catch (error) {
    console.error(error.message)
  }
}

const editTicket = async ({ ticket, id }) => {
  try {
    const response = await fetch(`${apiUrl}/ticket/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(ticket)
    })

    const data = await response.json()
    return data
  } catch (error) {
    console.error(error.message)
  }
}

const deleteTicket = async ({ id }) => {
  try {
    const response = await fetch(`${apiUrl}/ticket/${id}`, {
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

export { getTickets, getTicket, sendTicket, editTicket, deleteTicket }
