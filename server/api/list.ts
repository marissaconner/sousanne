import  Express, { Request, Response } from 'express'
import { db } from '../index'
import { QueryResult } from 'pg'
import { list } from './database/list'
const listRoutes = Express.Router()

listRoutes.get('/', async (req: Request, res: Response) => {
  console.error("lists get")
  const id = req.cookies.sousanneuser
  const queryResult = await list.selectByUser(id)
  if (queryResult) {
    res.status(200).send(queryResult)
  } else {
    res.status(500).send(queryResult)
  }
})

listRoutes.post('/new', async (req: Request, res: Response) => {
  const name = req.body.name
  const id = req.cookies.sousanneuser
  const queryResult = await list.create(name, id)
  if (queryResult.error) {
    res.status(500).send(queryResult)
  } else {
    res.status(200).send(queryResult)
  }
})

export default listRoutes