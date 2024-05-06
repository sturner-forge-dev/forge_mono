import type { Context } from 'hono'
import { type Exercise } from '../models/Exercise'
import exampleExercises from '../dev/data/exampleExercises'

export const getAllExercises = async (c: Context) => {
  return c.json({ exercises: exampleExercises })
}

export const getExerciseById = async (c: Context) => {
  const id = Number.parseInt(c.req.param('id'))
  const exercise = await exampleExercises.find((e) => e.id === id)

  if (!exercise) {
    return c.notFound()
  }

  return c.json({ exercise })
}

export const createExercise = async (c: Context) => {
  const exercise = await c.req.valid('json' as never)
  exampleExercises.push({
    ...(exercise as Exercise),
    id: exampleExercises.length + 1
  })

  c.status(201)
  return c.json({ exercise })
}

export const deleteExerciseById = async (c: Context) => {
  const id = Number.parseInt(c.req.param('id'))
  const index = exampleExercises.findIndex((exercise) => exercise.id === id)

  if (index === -1) {
    return c.notFound()
  }

  const deletedExercise = exampleExercises.splice(index, 1)[0]
  return c.json({ exercise: deletedExercise })
}
