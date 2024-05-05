import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { omittedKeys } from './omittedKeys'
import { capitalizeFirstLetters } from '../../../utils/capitalizeFirstLetters'
import { fetchExercises } from './apiCalls'
import type { Exercise } from './ExerciseType'
import ExerciseModal from './ExerciseModal'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '../catalyst/table'

function ExerciseTable() {
  const [exercise, setExercise] = useState({} as Exercise)
  const [isOpen, setIsOpen] = useState(false)

  const {
    isPending,
    error,
    data: exercises,
    isFetching
  } = useQuery({
    queryKey: ['exercises'],
    queryFn: fetchExercises
  })

  if (error) return <p>Error: {error.message}</p>
  if (isFetching)
    return <p className='text-zinc-300 font-thin'>Refreshing...</p>

  return (
    <>
      <Table
        striped={true}
        bleed
        className='[--gutter:theme(spacing.6)] sm:[--gutter:theme(spacing.8)] px-10 pt-3'
      >
        <TableHead>
          <TableRow>
            {exercises.length > 0 &&
              Object.keys(exercises[0]).map((key: string) => {
                if (!omittedKeys.includes(key)) {
                  return (
                    <TableHeader
                      key={key}
                      className='font-bold'
                    >
                      {capitalizeFirstLetters(key)}
                    </TableHeader>
                  )
                }
                return null
              })}
          </TableRow>
        </TableHead>
        <TableBody>
          {isPending
            ? '...'
            : exercises.map((exercise: Exercise) => (
                <TableRow
                  key={exercise.name}
                  onClick={() => [setIsOpen(true), setExercise(exercise)]}
                >
                  {Object.entries(exercise).map(([key, value]) => {
                    if (!omittedKeys.includes(key)) {
                      return (
                        <TableCell
                          className='text-zinc-300 font-thin'
                          key={value.toString()}
                        >
                          {Array.isArray(value)
                            ? value.join(', ')
                            : String(value)}
                        </TableCell>
                      )
                    }
                    return null
                  })}
                </TableRow>
              ))}
        </TableBody>
      </Table>

      {isOpen && (
        <ExerciseModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          exercise={exercise}
        />
      )}
    </>
  )
}

export default ExerciseTable
