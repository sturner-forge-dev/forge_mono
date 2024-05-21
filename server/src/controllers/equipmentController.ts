import { type Context } from 'hono'
import { db } from '../../db'
import { equipment as equipmentTable } from '../../db/schema/equipment'
import { eq } from 'drizzle-orm'

/**
 * Retrieves all equipment.
 *
 * @param {any} c:Context
 *
 * @returns {any}
 */
export const getAllEquipment = async (c: Context) => {
  const user = c.var.user
  console.log('user:', user)

  const results = await db.select().from(equipmentTable)

  if (!results) {
    return c.notFound()
  }

  return c.json({ equipment: results })
}

/**
 * Retrieves an equipment by its ID.
 *
 * @param {any} c:Context
 *
 * @returns {any}
 */
export const getEquipmentById = async (c: Context) => {
  const user = c.var.user
  console.log('user:', user)

  const id = Number(c.req.param('id'))
  const result = await db
    .select()
    .from(equipmentTable)
    .where(eq(equipmentTable.id, id))

  if (!result) {
    return c.notFound()
  }

  return c.json({ equipment: result })
}

/**
 * Creates an equipment.
 *
 * @param {any} c:Context
 *
 * @returns {any}
 */
export const createEquipment = async (c: Context) => {
  try {
    const user = c.var.user
    console.log('user:', user)

    const equipment = await c.req.json()
    console.log('Received equipment:', equipment)

    const newEquipment = await db
      .insert(equipmentTable)
      .values(equipment)
      .returning()

    return c.json({ equipment: newEquipment })
  } catch (error) {
    console.error('Error creating equipment:', error)
    return c.json({ error: 'Error creating equipment' }, 500)
  }
}

/**
 * Updates an equipment by its ID.
 *
 * @param {any} c:Context
 *
 * @returns {any}
 */
export const updateEquipmentById = async (c: Context) => {
  try {
    const user = c.var.user
    console.log('user:', user)

    const id = Number(c.req.param('id'))
    const equipment = await c.req.json()
    console.log('Received equipment:', equipment)

    const updatedEquipment = await db
      .update(equipmentTable)
      .set(equipment)
      .where(eq(equipmentTable.id, id))
      .returning()

    return c.json({ equipment: updatedEquipment })
  } catch (error) {
    console.error('Error updating equipment:', error)
    return c.json({ error: 'Error updating equipment' }, 500)
  }
}

/**
 * Deletes an equipment by its ID.
 *
 * @param {any} c:Context
 *
 * @returns {any}
 */
export const deleteEquipmentById = async (c: Context) => {
  try {
    const user = c.var.user
    console.log('user:', user)

    const id = Number(c.req.param('id'))
    const result = await db
      .delete(equipmentTable)
      .where(eq(equipmentTable.id, id))
      .returning()

    if (!result) {
      return c.notFound()
    }

    return c.json({ equipment: result })
  } catch (error) {
    console.error('Error deleting equipment:', error)
    return c.json({ error: 'Error deleting equipment' }, 500)
  }
}
