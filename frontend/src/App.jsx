import { useState, useEffect} from "react"

function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('http://localhost/backend/api.php')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching data:', error))
  }, [])

  return (
    <div>
      <h1>Item from PHP Backend:</h1>
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
    </div>
  )
}

export default App
