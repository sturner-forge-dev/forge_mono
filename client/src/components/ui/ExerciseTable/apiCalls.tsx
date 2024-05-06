import { api } from '@/lib/api'
import { type Exercise } from '@server/src/models/Exercise'

/**
 * Fetches all exercises from the server
 *
 * @returns Exercise[]
 */
export async function fetchExercises() {
  const res = await api.exercises.$get()

  if (!res.ok) {
    throw new Error('Failed to fetch exercises')
  }

  const data: { exercises: Exercise[] } = await res.json()
  return data.exercises
}

/**
 * Fetches an exercise by its id
 *
 * @param id:number
 *
 * @returns Exercise
 */
export async function fetchExerciseById(id: string) {
  const res = await api.exercises[':id'].$get({
    param: { id }
  })

  if (!res.ok) {
    throw new Error('Failed to fetch exercise')
  }

  const data = (await res.json()) as { exercise: Exercise }
  return data.exercise
}

/**
 * Creates a new exercise
 *
 * @param {any} exercise:Exercise
 *
 * @returns {any}
 */

export async function createExercise(exercise: Exercise) {
  const res = await api.exercises.$post({
    body: exercise
  })

  if (!res.ok) {
    throw new Error('Failed to create exercise')
  }

  const data = (await res.json()) as { exercise: Exercise }
  return data.exercise
}
