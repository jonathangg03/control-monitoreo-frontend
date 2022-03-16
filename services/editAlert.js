const editAlert = async ({ alert, id }) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  try {
    await fetch(`${apiUrl}/alert/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(alert)
    })
  } catch (error) {
    console.error(error.message)
  }
}

export default editAlert
