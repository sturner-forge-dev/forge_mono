import { createFileRoute } from '@tanstack/react-router'
import ExerciseTable from '../components/ui/ExerciseTable/ExerciseTable'

export const Route = createFileRoute('/exercises')({
  component: Exercises
})

function Exercises() {
  return (
    <>
      <ExerciseTable />
    </>
  )
}
