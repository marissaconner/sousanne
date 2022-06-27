import React, { useState } from 'react'

function App() {
  const [list, setList] = useState<{name: string}[]>([])
  const [name, setName] = useState<string>("")
  const [nameValid, setNameValid] = useState<boolean>(false)

  const handleAdd = function() {
    if (nameValid) {
      const newItem = {"name" : name, strikethrough: false}
      setList(state => [...state, newItem])
      setName("")
      setNameValid(false)
    }
  }

  const handleRemove = function(index: number) {
    const newList = [...list]
    newList.splice(index,1)
    setList(newList)
  }

  const validateNewEntry = function(value: string) {
    const isValid = value.length >= 1
    setNameValid(isValid)
  }

  const onInputNewEntry = function(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setName(e.target.value)
    validateNewEntry(e.target.value)
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
              <input
                type="checkbox"
                id={`checkbox-item-${idx}`}
              >
              </input>
              <label
                htmlFor={`checkbox-item-${idx}`}
              >
                {item.name}
              </label>
              <button
                id={`delete-item-${idx}`}
                onClick={() => handleRemove(idx)}
              >
                &times;
              </button>
            </li>
          )}
        </ul>

        <form>
          <fieldset>
            <legend>Add An Item</legend>
            <input
              type="text"
              value={name}
              id="listBuilder_newEntry"
              onChange={onInputNewEntry}
            />
          </fieldset>
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