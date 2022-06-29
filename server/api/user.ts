import  Express, { Request, Response } from 'express'
import { db } from '../index'
import { QueryResult } from 'pg'
import { createHash, compareHash, createRandom } from '../lib/hash'
import { auth } from './functions/auth'

const userRoutes = Express.Router()

userRoutes.get('/', async (req: Request, res: Response) => {
  res.send('User router!')
})

userRoutes.post('/new', async (req: Request, res: Response) => {
  const email = req.body.email.replace(/[^a-zA-Z0-9@._-]/gi, '')
  const hashedPassword = createHash(req.body.password)
  const queryResult = await auth.createNewUser(email, hashedPassword)
  if (queryResult.error) {
    res.status(500).send(queryResult)
  } else {
    res.status(200).send(queryResult)
  }
})

userRoutes.post('/login', async (req: Request, res: Response) => {
  const email = req.body.email.replace(/[^a-zA-Z0-9@._-]/gi, '')
  const hashedPassword = createHash(req.body.password)
  const queryResult = await auth.getUserByCredentials(email, hashedPassword)
  if (queryResult.error) {
    res.status(400).send(queryResult)
  } else {
    const userId = queryResult.id
    const sessionHash = createHash(createRandom())
    auth.updateUserSession(userId, sessionHash)
    res.cookie('sousannesession', sessionHash)
    res.cookie('sousanneuser', userId)
    const data = {sousanneSession: sessionHash, sousanneUser: userId}
    res.status(200).send(data)
  }
})

export default userRoutes