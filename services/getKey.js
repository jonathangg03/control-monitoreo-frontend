const getKey = async ({ id }) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  try {
    const response = await fetch(`${apiUrl}/key/${id}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error.message)
  }
}

export default getKey
