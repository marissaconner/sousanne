import  Express, { Request, Response } from 'express'
import { db } from '../index'
import { QueryResult } from 'pg'

const userRouter = Express.Router()

userRouter.get('/', async (req: Request, res: Response) => {
  res.send('User router!')
})

userRouter.post('/new', async (req: Request, res: Response) => {
  console.log("Route request to new user")
  const pool = await db.connect()
  const text = `
    INSERT INTO users (email, password)
    VALUES ($1, $2)
    RETURNING id
  `
  const values = [req.body.email, req.body.password]
  pool.query(text, values, (err: Error, result: QueryResult<any>) => {
    if (err) {
      console.error(err)
      res.status(500).send(err)
    } else {
      res.status(200).send(result)
    }
  })
})

export default userRouter