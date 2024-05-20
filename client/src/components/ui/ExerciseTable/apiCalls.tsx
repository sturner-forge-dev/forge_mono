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

  const data = await res.json()
  return data.exercises
}

/**
 * Fetches an exercise by its id
 *
 * @param id:number
 *
 * @returns Exercise
 */
export async function fetchExerciseById(id: number) {
  const res = await api.exercises[':id'].$get({
    param: { id: id.toString() }
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
    json: exercise
  })

  if (!res.ok) {
    throw new Error(`HTTP error: ${res.status}`)
  }

  const data = await res.json()
  return data.exercise
}
