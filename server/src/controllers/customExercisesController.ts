import { type Context } from 'hono'
import { db } from '../../db'
import { customExercises as customExercisesTable } from '../../db/schema/customExercises'
import { eq } from 'drizzle-orm'

/**
 * Retrieves all custom exercises.
 *
 * @param {any} c:Context
 *
 * @returns {any}
 */
export const getAllCustomExercises = async (c: Context) => {
  const user = c.var.user
  console.log('user:', user)

  const results = await db.select().from(customExercisesTable)

  if (!results) {
    return c.notFound()
  }

  return c.json({ customExercises: results })
}

/**
 * Retrieves a custom exercise by its ID.
 *
 * @param {any} c:Context
 *
 * @returns {any}
 */
export const getCustomExerciseById = async (c: Context) => {
  const user = c.var.user
  console.log('user:', user)

  const id = Number(c.req.param('id'))
  const result = await db
    .select()
    .from(customExercisesTable)
    .where(eq(customExercisesTable.id, id))

  if (!result) {
    return c.notFound()
  }

  return c.json({ customExercise: result })
}

/**
 * Creates a custom exercise.
 *
 * @param {any} c:Context
 *
 * @returns {any}
 */
export const createCustomExercise = async (c: Context) => {
  try {
    const user = c.var.user
    console.log('user:', user)
    const customExercise = await c.req.json()
    console.log('Received custom exercise:', customExercise)

    // Insert the custom exercise into the database
    const newCustomExercise = await db
      .insert(customExercisesTable)
      .values({
        userId: user.id,
        name: customExercise.name,
        description: customExercise.description,
        image: null
      })
      .returning()

    return c.json({ customExercise: newCustomExercise })
  } catch (e) {
    console.error(e)
    return c.json({
      error: 'An error occurred while creating the custom exercise.'
    })
  }
}

/**
 * Updates a custom exercise.
 *
 * @param {any} c:Context
 *
 * @returns {any}
 */
export const updateCustomExercise = async (c: Context) => {
  try {
    const user = c.var.user
    console.log('user:', user)
    const customExercise = await c.req.json()
    console.log('Received custom exercise:', customExercise)

    // Update the custom exercise in the database
    const updatedCustomExercise = await db
      .update(customExercisesTable)
      .set({
        name: customExercise.name,
        description: customExercise.description,
        image: customExercise.image
      })
      .where(eq(customExercisesTable.id, customExercise.id))

    return c.json({ customExercise: updatedCustomExercise })
  } catch (e) {
    console.error(e)
    return c.json({
      error: 'An error occurred while updating the custom exercise.'
    })
  }
}

/**
 * Deletes a custom exercise.
 *
 * @param {any} c:Context
 *
 * @returns {any}
 */
export const deleteCustomExercise = async (c: Context) => {
  try {
    const user = c.var.user
    console.log('user:', user)
    const id = Number(c.req.param('id'))

    // Delete the custom exercise from the database
    const deletedCustomExercise = await db
      .delete(customExercisesTable)
      .where(eq(customExercisesTable.id, id))

    return c.json({ customExercise: deletedCustomExercise })
  } catch (e) {
    console.error(e)
    return c.json({
      error: 'An error occurred while deleting the custom exercise.'
    })
  }
}
