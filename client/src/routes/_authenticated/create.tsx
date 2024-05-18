import { createFileRoute } from '@tanstack/react-router'
import CreateExercise from '@/components/ui/CreateExercise/CreateExercise'

export const Route = createFileRoute('/_authenticated/create')({
  component: Create
})

function Create() {
  return (
    <>
      <CreateExercise></CreateExercise>
    </>
  )
}
