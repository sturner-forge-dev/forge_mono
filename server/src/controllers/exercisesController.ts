import type { Context } from 'hono'
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
  const user = c.var.user
  console.log(user)

  const results = db.select().from(exercisesTable)

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
  const result = db
    .select()
    .from(exercisesTable)
    .where(eq(exercisesTable.id, id))

  if (!result) {
    return c.notFound()
  }

  return c.json({ exercise: result })
}

export const createExercise = async (c: Context) => {
  try {
    const user = c.var.user
    console.log('User:', user)
    const exercise = await c.req.json()
    console.log('Received exercise:', exercise)

    // Insert the exercise into the database
    const newExercise = await db
      .insert(exercisesTable)
      .values({
        id: undefined,
        name: exercise.name,
        description: exercise.description,
        image: undefined,
        isCustom: exercise.isCustom
      })
      .returning()

    console.log('DB result:', newExercise)
    c.status(201)
    return c.json({ exercise: newExercise })
  } catch (error) {
    console.error('Error:', error)
    c.status(500)
    return c.json({ error: 'Internal Server Error' })
  }
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
  const result = db
    .delete(exercisesTable)
    .where(eq(exercisesTable.id, id))
    .returning()

  if (!result) {
    return c.notFound()
  }

  return c.json({ exercise: result })
}
