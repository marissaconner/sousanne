import { db } from '../../index'
import { QueryResult } from 'pg'

export const listItem = {
  create: async function (name: string, count: number = 1, listId: number) {
    const pool = await db.connect()
    const sql = `
      INSERT INTO shoppinglistitems (name, count, list_id)
      VALUES ($1, $2, $3)
      RETURNING id
    `
    const values = [name, count, listId]
    const result = await pool
      .query(sql, values)
        .then((data: QueryResult<any>) => {
          return data.rows[0]
        })
        .catch((err: Error) => {
          return { error: 'An error occurred creating a new list item.' }
        })
    pool.release()
    return result
  },
  selectById: async function (id: number) {
    const pool = await db.connect()
    const sql = 'SELECT id FROM shoppinglistitems WHERE id=$1'
    const values = [id]
    const result = await pool
      .query(sql, values)
        .then((data: QueryResult<any>) => {
          if (data.rows.length === 1) {
            return data.rows[0]
          }
          return { error: 'No such list item.' }
        })
        .catch((err: Error) => {
          return { error: 'No such list item.' }
        })
    pool.release()
    return result
  },
  selectByList: async function (listId: number) {
    const pool = await db.connect()
    const sql = `
      SELECT *
      FROM shoppinglistitems
      WHERE
      list_id=$1
    `
    const values = [listId]
    const result = await pool
      .query(sql, values)
        .then((data: QueryResult<any>) => {
          return data.rows
        })
        .catch((err: Error) => {
          return false
        })
    pool.release()
    return result
  },
  deleteListItem: async function (id: number) {
    const pool = await db.connect()
    const sql = `DELETE FROM shoppinglistitems where id = $1`
    const values = [id]
    const result = await pool
      .query(sql, values)
        .then(() => {
          return { error: false }
        })
        .catch((err: Error) => {
          return { error: 'Error deleting item.' }
        })
      pool.release()
      return result
  }
}

export default list