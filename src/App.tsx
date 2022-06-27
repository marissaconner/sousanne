import React, { useState } from 'react'

function App() {
  const [list, setList] = useState<{name: string}[]>([])
  const [name, setName] = useState<string>("")

  const handleAdd = function() { 
    const newItem = {"name" : name}
    setList(state => [...state, newItem])
    setName("")
  }

  const handleRemove = function(index: number) {
    const newList = [...list]
    newList.splice(index,1)
    setList(newList)
  }

  const onInputNewEntry = function(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setName(e.target.value)
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

        <form>
          <input
            type="text"
            value={name}
            id="listBuilder_newEntry"
            onChange={onInputNewEntry}
          />
        </form>

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