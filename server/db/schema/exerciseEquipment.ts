import { pgTable, serial, uniqueIndex } from 'drizzle-orm/pg-core'
import { exercises } from './exercises'
import { equipment } from './equipment'

export const exerciseEquipment = pgTable(
  'exercise_equipment',
  {
    exerciseId: serial('exercise_id')
      .notNull()
      .references(() => exercises.id),
    equipmentId: serial('equipment_id')
      .notNull()
      .references(() => equipment.id)
  },
  (exerciseEquipment) => {
    return {
      exerciseIdIndex: uniqueIndex('exercise_id_idx').on(
        exerciseEquipment.exerciseId
      ),
      equipmentIdIndex: uniqueIndex('equipment_id_idx').on(
        exerciseEquipment.equipmentId
      )
    }
  }
)
