import  Express, { Request, Response } from 'express'
import { db } from '../index'
import { QueryResult } from 'pg'
import createHash, { compareHash } from '../lib/hash'

const userRouter = Express.Router()

userRouter.get('/', async (req: Request, res: Response) => {
  res.send('User router!')
})

userRouter.post('/new', async (req: Request, res: Response) => {
  const pool = await db.connect()
  const cleanEmail = req.body.email.replace(/[^a-zA-Z0-9@._-]/gi, '')
  const hashedPassword = createHash(req.body.password)
  const text = `
    INSERT INTO users (email, password)
    VALUES ($1, $2)
    RETURNING id
  `
  const values = [cleanEmail, hashedPassword]
  console.log(hashedPassword)
  pool.query(text, values, (err: Error, result: QueryResult<any>) => {
    if (err) {
      console.error(err)
      res.status(500).send(err)
    }
    res.status(200).send(result)
  })
})

userRouter.post('/login', async (req: Request, res: Response) => {
  const pool = await db.connect()
  const cleanEmail = req.body.email.replace(/[^a-zA-Z0-9@._-]/gi, '')
  const text = `
    SELECT password FROM users
    WHERE
    email=$1
    LIMIT 1
  `
  const values = [cleanEmail]
  pool.query(text, values, (err: Error, result: QueryResult<any>) => {
    if (err) {
      console.error(err)
      res.status(500).send(err)
    }
    console.log("Compare to " + req.body.password)
    const attemptedPassword = req.body.password
    const userPassword = result.rows[0].password
    console.log(compareHash(attemptedPassword, userPassword))
  })
  res.status(500).send()
})

export default userRouter