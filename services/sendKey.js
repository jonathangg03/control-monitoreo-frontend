const sendAlert = async ({ key }) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  try {
    await fetch(`${apiUrl}/key`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(key)
    })
  } catch (error) {
    console.error(error.message)
  }
}

export default sendAlert
