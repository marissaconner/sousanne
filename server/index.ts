import Express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import userRouter from './routers/userRouter'
import { Pool } from 'pg';

const port = process.env.PORT || 5000
const router = Express.Router()
const pgConfig = {
  max: 20,
  idleTimeoutMillis: 30000,
  user: 'postgres',
  host: 'localhost',
  database: 'sousanne',
  password: 'bacon',
  port: 5432,
};

export const db = new Pool(pgConfig)

let app: Express.Application | undefined = undefined
app = Express()
app.use(Express.urlencoded({extended: true})) 
app.use(Express.static(path.join(__dirname, '/../build')))  

app.get('/', function (req: Express.Request, res: Express.Response) {
  res.sendFile(path.join(__dirname+'/../public/index.html'))
})
app.get('/hello', (request, response) => {
  response.send('Hello world!');
});

app.use('/api/user', userRouter)
app.listen(port)

console.log('App is listening on port ' + port)
module.exports = app

