import  Express, { Request, Response } from 'express'
import { db } from '../index'
import { QueryResult } from 'pg'
import { lists } from './database/list'
const listRoutes = Express.Router()

userRoutes.get('/', async (req: Request, res: Response) => {
  const id = req.cookies.sousanneuser
  const queryResult = await list.selectByUser(id)
  if (queryResult.error) {
    res.status(500).send(queryResult)
  } else {
    res.status(200).send(queryResult)
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

export default userRoutes