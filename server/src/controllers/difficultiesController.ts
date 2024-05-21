import { type Context } from 'hono'
import { db } from '../../db'
import { difficulties as difficultiesTable } from '../../db/schema/difficulties'
import { eq } from 'drizzle-orm'

/**
 * Retrieves all difficulties.
 *
 * @param {any} c:Context
 *
 * @returns {any}
 */
export const getAllDifficulties = async (c: Context) => {
  const user = c.var.user
  console.log('user:', user)

  const results = await db.select().from(difficultiesTable)

  if (!results) {
    return c.notFound()
  }

  return c.json({ difficulties: results })
}

/**
 * Retrieves a difficulty by its ID.
 *
 * @param {any} c:Context
 *
 * @returns {any}
 */
export const getDifficultyById = async (c: Context) => {
  const user = c.var.user
  console.log('user:', user)

  const id = Number(c.req.param('id'))
  const result = await db
    .select()
    .from(difficultiesTable)
    .where(eq(difficultiesTable.id, id))

  if (!result) {
    return c.notFound()
  }

  return c.json({ difficulty: result })
}

/**
 * Creates a difficulty.
 *
 * @param {any} c:Context
 *
 * @returns {any}
 */
export const createDifficulty = async (c: Context) => {
  try {
    const user = c.var.user
    console.log('user:', user)

    const difficulty = await c.req.json()
    console.log('Received difficulty:', difficulty)

    const newDifficulty = await db
      .insert(difficultiesTable)
      .values(difficulty)
      .returning()

    return c.json({ difficulty: newDifficulty })
  } catch (error) {
    console.error(error)
    return c.json(
      { error: 'An error occurred while creating the difficulty.' },
      500
    )
  }
}

/**
 * Updates a difficulty by its ID.
 *
 * @param {any} c:Context
 *
 * @returns {any}
 */
export const updateDifficultyById = async (c: Context) => {
  try {
    const user = c.var.user
    console.log('user:', user)

    const id = Number(c.req.param('id'))
    const difficulty = await c.req.json()

    const updatedDifficulty = await db
      .update(difficultiesTable)
      .set(difficulty)
      .where(eq(difficultiesTable.id, id))
      .returning()

    return c.json({ difficulty: updatedDifficulty })
  } catch (error) {
    console.error(error)
    return c.json(
      { error: 'An error occurred while updating the difficulty.' },
      500
    )
  }
}

/**
 * Deletes a difficulty by its ID.
 *
 * @param {any} c:Context
 *
 * @returns {any}
 */
export const deleteDifficultyById = async (c: Context) => {
  try {
    const user = c.var.user
    console.log('user:', user)

    const id = Number(c.req.param('id'))
    const result = await db
      .delete(difficultiesTable)
      .where(eq(difficultiesTable.id, id))
      .returning()

    if (!result) {
      return c.notFound()
    }

    return c.json({ difficulty: result })
  } catch (error) {
    console.error(error)
    return c.json(
      { error: 'An error occurred while deleting the difficulty.' },
      500
    )
  }
}
