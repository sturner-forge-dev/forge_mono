import { type Context } from 'hono'
import { db } from '../../db'
import { exercises as exercisesTable } from '../../db/schema/exercises'
import { eq } from 'drizzle-orm'

/**
 * Retrieves all exercises.
 *
 * @param {any} c:Context
 *
 * @returns {any}
 */
export const getAllExercises = async (c: Context) => {
  // const user = c.var.user
  // console.log(user)

  const results = await db.select().from(exercisesTable)

  if (!results) {
    return c.notFound()
  }

  return c.json({ exercises: results })
}

/**
 * Retrieves an exercise by its ID.
 *
 * @param {any} c:Context
 *
 * @returns {any}
 */
export const getExerciseById = async (c: Context) => {
  const user = c.var.user
  console.log(user)

  const id = Number(c.req.param('id'))
  const result = await db
    .select()
    .from(exercisesTable)
    .where(eq(exercisesTable.id, id))

  if (!result) {
    return c.notFound()
  }

  return c.json({ exercise: result })
}

/**
 * Deletes an exercise by its ID.
 *
 * @param {any} c:Context
 *
 * @returns {any}
 */
export const deleteExerciseById = async (c: Context) => {
  const user = c.var.user
  console.log(user)

  const id = Number(c.req.param('id'))
  const result = await db
    .delete(exercisesTable)
    .where(eq(exercisesTable.id, id))
    .returning()

  if (!result) {
    return c.notFound()
  }

  return c.json({ exercise: result })
}
