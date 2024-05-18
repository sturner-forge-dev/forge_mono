import type { Context } from 'hono'
import { type Exercise } from '../models/Exercise'
import exampleExercises from '../dev/data/exampleExercises'

export const getAllExercises = async (c: Context) => {
  const user = c.var.user

  console.log(user)

  return c.json({ exercises: exampleExercises })
}

export const getExerciseById = async (c: Context) => {
  const user = c.var.user

  console.log(user)

  const id = Number.parseInt(c.req.param('id'))
  const exercise = await exampleExercises.find((e) => e.id === id)

  if (!exercise) {
    return c.notFound()
  }

  return c.json({ exercise })
}

export const createExercise = async (c: Context) => {
  const user = c.var.user

  console.log(user)

  const exercise = await c.req.json()

  const newExercise: Exercise = {
    id: exampleExercises.length + 1,
    name: exercise.name,
    description: exercise.description,
    difficulty: exercise.difficulty,
    equipment: exercise.equipment,
    primaryMuscleGroup: exercise.primaryMuscleGroup,
    type: exercise.type,
    isCustom: exercise.isCustom
  }

  exampleExercises.push(newExercise)

  c.status(201)
  return c.json({ exercise })
}

export const deleteExerciseById = async (c: Context) => {
  const user = c.var.user

  console.log(user)

  const id = Number.parseInt(c.req.param('id'))
  const index = exampleExercises.findIndex((exercise) => exercise.id === id)

  if (index === -1) {
    return c.notFound()
  }

  const deletedExercise = exampleExercises.splice(index, 1)[0]
  return c.json({ exercise: deletedExercise })
}
