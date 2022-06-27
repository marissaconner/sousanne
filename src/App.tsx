import React, { useState } from 'react'

function App() {
  const [list, setList] = useState<{name: string}[]>([])

  const handleAdd = function() {
    const newItem = {"name" : "Entry"}
    setList(state => [...state, newItem])
  }

  const handleRemove = function(index: number) {
    const newList = [...list]
    newList.splice(index,1)
    setList(newList)
  }

  return (
    <div>
      <h1>The List!</h1>
      <div id="listbuilder">
        <ul>
          {list.map((item, idx) =>
            <li
              key={idx}
              id={`list-item-${idx}`}
            >
              <span>
                {item.name}
              </span>
              <button
                onClick={() => handleRemove(idx)}
              >
                &times;
              </button>
            </li>
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