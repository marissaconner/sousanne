import { db } from '../../index'
import { QueryResult } from 'pg'

export const list = {
  create: async function (name: string, userId: number) {
    const pool = await db.connect()
    const sql = `
      INSERT INTO lists (name, user_id)
      VALUES ($1, $2)
      RETURNING id
    `
    const values = [name, userId]
    const result = await pool
      .query(sql, values)
        .then((data: QueryResult<any>) => {
          return data.rows[0]
        })
        .catch((err: Error) => {
          return { error: 'An error occurred creating a new list.' }
        })
    pool.release()
    return result
  },
  selectById: async function (id: number) {
    const pool = await db.connect()
    const sql = 'SELECT id FROM lists WHERE id=$1'
    const values = [id]
    const result = await pool
      .query(sql, values)
        .then((data: QueryResult<any>) => {
          if (data.rows.length === 1) {
            return data.rows[0]
          }
          return { error: 'No such list.' }
        })
        .catch((err: Error) => {
          return { error: 'No such list.' }
        })
    pool.release()
    return result
  },
  selectByUser: async function (userId: number) {
    const pool = await db.connect()
    const sql = `
      SELECT *
      FROM lists
      WHERE
      user_id=$1
    `
    const values = [userId]
    const result = await pool
      .query(sql, values)
        .then(() => {
          return data.rows
        })
        .catch((err: Error) => {
          return { error: 'Error getting lists.' }
        })
    pool.release()
    return result
  },
  ,
  delete: async function (id: number) {
    const pool = await db.connect()
    const sql = `DELETE from LISTS where id = $1`
    const values = [id]
    const result = await pool
      .query(sql, values)
        .then(() => {
          return { error: false }
        })
        .catch((err: Error) => {
          return { error: 'Error deleting table.' }
        })
      pool.release()
      return result
  }
}

export default auth