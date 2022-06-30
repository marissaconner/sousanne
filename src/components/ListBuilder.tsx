import React, { useState } from 'react'

function ListBuilder() {
  const [list, setList] = useState<{name: string, editing: boolean}[]>([])
  const [name, setName] = useState<string>("")
  const [newName, setNewName] = useState<string>("")
  const [newNameValid, setNewNameValid] = useState<boolean>(false)
  const [nameValid, setNameValid] = useState<boolean>(false)

  const handleAdd = function () {
    if (nameValid) {
      const newItem = {"name" : name, editing: false}
      setList(state => [...state, newItem])
      setName("")
      setNameValid(false)
    }
  }

  const handleRemove = function (index: number) {
    const newList = [...list]
    newList.splice(index,1)
    setList(newList)
  }

  const toggleEdit = function (index: number) {
    const newList = [...list]
    newList[index].editing = !newList[index].editing
    setList(newList)
  }

  const saveEdit = function (index: number) {
    const newList = [...list]
    newList[index].name = newName
    setNewName("")
    setList(newList)
    toggleEdit(index)
  }

  const onInputNewEntry = function (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setName(e.target.value)
    setNameValid(e.target.value.length >= 1)
  }
  const onInputEditEntry = function (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setNewName(e.target.value)
    setNameValid(e.target.value.length >= 1)
  }

  return (
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
            {item.editing ? 
              <input
                type="text"
                value={newName}
                id={`item-renamer-${idx}`}
                onChange={onInputEditEntry}
              />
              :
              ""
            }
            { item.editing ? 
              <button
                id={`edit-item-${idx}`}
                onClick={() => saveEdit(idx)}
              >
                Save
              </button>
              :
              <button
                id={`edit-item-${idx}`}
                onClick={() => toggleEdit(idx)}
              >
                Edit
              </button>
            }

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
          <legend>New Item</legend>
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
        Add
      </button>
    </div>
  )
}

export default ListBuilder;