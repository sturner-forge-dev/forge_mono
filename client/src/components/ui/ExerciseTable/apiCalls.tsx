import { api } from '@lib/api'

export async function fetchExercises() {
  const res = await api.exercises.$get()

  if (!res.ok) {
    throw new Error('Failed to fetch exercises')
  }

  const data = await res.json()
  return data.exercises
}
