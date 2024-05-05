export async function fetchExercises() {
  const res = await fetch('/api/exercises')

  if (!res.ok) {
    throw new Error('Failed to fetch exercises')
  }

  const data = await res.json()
  return data.exercises
}
