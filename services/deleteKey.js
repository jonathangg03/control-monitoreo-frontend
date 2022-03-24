const deleteKey = async ({ id }) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  try {
    await fetch(`${apiUrl}/key/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    console.error(error.message)
  }
}

export default deleteKey