import Express from 'express'
import http from 'http'
import path from 'path'

let app: Express.Application | undefined = undefined;

app = Express()
app.use(Express.urlencoded({extended: true}))

// Serve the static files from the React app
app.use(Express.static(path.join(__dirname, '/../build')))

app.get('*', function (_req: Express.Request, res: Express.Response) {
  res.sendFile(path.join(__dirname+'/../public/index.html'))
})
const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);

const { Pool, Client } = require("pg");

const credentials = {
  user: "postgres",
  host: "localhost",
  database: "sousanne",
  password: "bacon",
  port: 5432,
};

async function connectWithPool() {
  const pool = new Pool(credentials);
  const now = await pool.query("SELECT NOW()");
  await pool.end();
  return now;
}

(async () => {
  const result = await connectWithPool();
  console.log("Connected to Postgres at " + result.rows[0]["now"]);
})();

module.exports = app

