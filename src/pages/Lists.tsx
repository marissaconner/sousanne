import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ListBuilder from '../components/ListBuilder'
function Lists() {
  const [newListName, setNewListName] = useState<string>('')
  const [lists, setLists] = useState<{ id: number, name: string }[]>([])
  const onNewListChange = function (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setNewListName(e.target.value)
  }

  useEffect(() => {
    axios({
      method: 'get',
      url: '/api/list'
    })
      .then((res) => {
        console.log(res)
        setLists(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  const submitList = function(e: React.FormEvent) {
    axios({
      method: 'post',
      url: '/api/list/new',
      data: { name: newListName }
    })
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <div>
      <h1>Lists</h1>
      <ul>
        {lists.map((item, idx) =>
          <a
            key={idx}
            href={`/list/${item.id}`}
          >
            <li>
              {item.name}
            </li>
          </a>
        )}
      </ul>
      <form>
        <input
          onChange={(e) => {onNewListChange(e)}}
          type="text"
        />
        <input
          type="submit"
          value="Create"
          onClick={(e) => submitList(e)}
        />
      </form>

      <ListBuilder />
    </div>
  )
}

export default Lists;