const getAlerts = async ({ id } = {}) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  let response
  let data

  if (id) {
    response = await fetch(`${apiUrl}/alert/${id}`)
    data = await response.json()
  } else {
    response = await fetch(`${apiUrl}/alert`)
    data = await response.json()
  }
  return data
}

export default getAlerts
