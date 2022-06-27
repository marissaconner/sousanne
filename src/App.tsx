import React, { useState } from 'react'

function App() {
  // interface IList {name: string}[]
  const [list, setList] = useState<{name: string}[]>([])

  const handleAdd = function() {
    const newItem = {"name" : "Entry"}
    setList(state => [...state, newItem])
  }

  return (
    <div>
      <h1>The List!</h1>
      <div id="listbuilder">
        <ul>
          {list.map((item, key) =>
            <li key={key}>{item.name}</li>
          )}
        </ul>

        <button
          id="add_button"
          onClick={() => handleAdd()}
        >
          Add Item
        </button>
      </div>
    </div>
  )
}

export default App;