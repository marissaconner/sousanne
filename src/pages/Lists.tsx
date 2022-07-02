import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ListBuilder from '../components/ListBuilder'
import { UList, TextInput, Button } from '@marissaconner/sousanne-component-library'
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
      <UList>
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
      </UList>
      <form>
        <TextInput
          id="new-list-name"
          labelText="List Name"
          onChange={(e) => {onNewListChange(e)}}
        />
        <Button
          type="submit"
          onClick={(e) => submitList(e)}
        >
          Create
        </Button>
      </form>

      <ListBuilder />
    </div>
  )
}

export default Lists;