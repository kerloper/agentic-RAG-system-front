export function useFetch() {
  const baseUrl = import.meta.env.VITE_API_URL

  async function post(url, body) {
    if (!baseUrl) {
      throw new Error('VITE_API_URL environment variable is not set')
    }

    const fullUrl = baseUrl + url

    try {
      const response = await fetch(fullUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`)
      }

      return await response.json()
    } catch (err) {
      // Network or connection error
      if (err instanceof TypeError) {
        throw new Error('Cannot connect to Kerloper API. Is the backend running?')
      }
      // Re-throw if it's already a formatted error
      throw err
    }
  }

  return { post }
}
