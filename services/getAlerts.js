const getAlerts = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  try {
    const response = await fetch(`${apiUrl}/alert`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error.message)
  }
}

export default getAlerts
