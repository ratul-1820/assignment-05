import { useEffect, useState } from 'react'

export default function App() {
  const [techs, setTechs] = useState([])
  const [loading, setLoading] = useState(true)
  const [stack, setStack] = useState([])

  useEffect(() => {
    fetch('/data/technologies.json')
      .then((res) => res.json())
      .then((data) => {
        setTechs(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Failed to load technologies:', err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-pink-500"></div>
      </div>
    )
  }

  return (
    <div>
      <p>{techs.length} technologies loaded</p>
    </div>
  )
}