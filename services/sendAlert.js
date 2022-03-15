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

export default sendAlert
