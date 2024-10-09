import { useState, useEffect } from 'react'

const useFetchAnnouncements = (url) => {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!url) return

    const fullUrl = `http://localhost:3000${url}`

    setLoading(true)
    async function fetchData() {
      try {
        const response = await fetch(fullUrl)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setData(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url])

  return { data, isLoading, error }
};

export default useFetchAnnouncements;