import React, { useState } from 'react'
import axios from 'axios'

function Lists() {

  const [newListName, setNewListName] = useState<string>('')

  const onNewListChange = function (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setNewListName(e.target.value)
  }

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
    </div>
  )
}

export default Lists;