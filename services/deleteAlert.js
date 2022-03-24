const deleteAlert = async ({ id }) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  await fetch(`${apiUrl}/alert/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export default deleteAlert
