import { useState } from 'react'
import { useForm } from '@tanstack/react-form'
import { Field, Fieldset, Label, Legend } from '@catalyst/fieldset'
import { Text } from '@catalyst/text'
import { Textarea } from '@catalyst/textarea'
import { Button } from '@catalyst/button'
import { useNavigate } from '@tanstack/react-router'

import { createExercise } from '../ExerciseTable/apiCalls'

import {
  Type,
  Difficulty,
  MuscleGroup,
  Equipment
} from '@server/src/models/enums/ExerciseEnums'
import FieldInput from './FieldInput'
import FieldSelect from './FieldSelect'
import FieldInfo from './FieldInfo'
import FieldMultiSelect from './FieldMultiSelect'

type ExerciseOption = {
  id?: number
  name: string
  description: string
  difficulty: Difficulty
  image?: string | null
  equipment: Array<Equipment>
  primaryMuscleGroup: Array<MuscleGroup>
  secondaryMuscleGroup?: Array<MuscleGroup>
  type: Array<Type>
  variations?: Array<string>
  isCustom?: boolean
}

const convertEnumToOptions = (enumObject: Object) => {
  return Object.values(enumObject).map((value, index) => {
    return { id: index, name: value as string }
  })
}

const muscleGroupOptions = convertEnumToOptions(MuscleGroup)
const exerciseTypeOptions = convertEnumToOptions(Type)
const exerciseDifficultyOptions = convertEnumToOptions(Difficulty)
const exerciseEquipmentOptions = convertEnumToOptions(Equipment)

function CreateExercise() {
  const [primaryMuscleGroup, setPrimaryMuscleGroup] = useState<
    ExerciseOption['primaryMuscleGroup']
  >([])
  const [secondaryMuscleGroup, setSecondaryMuscleGroup] = useState<
    ExerciseOption['secondaryMuscleGroup']
  >([])
  const [exerciseType, setExerciseType] = useState<ExerciseOption['type']>([])
  const [exerciseDifficulty, setExerciseDifficulty] = useState<
    ExerciseOption['difficulty']
  >(Difficulty.EASY)
  const [exerciseEquipment, setExerciseEquipment] = useState<
    ExerciseOption['equipment']
  >([])

  const navigate = useNavigate()

  const form = useForm({
    defaultValues: {
      name: '',
      difficulty: exerciseDifficulty,
      equipment: exerciseEquipment,
      type: exerciseType,
      primaryMuscleGroup: primaryMuscleGroup,
      secondaryMuscleGroup: secondaryMuscleGroup,
      description: ''
    },
    onSubmit: async ({ value }) => {
      const payload = {
        ...value,
        primaryMuscleGroup: primaryMuscleGroup,
        secondaryMuscleGroup: secondaryMuscleGroup,
        type: exerciseType,
        difficulty: exerciseDifficulty,
        equipment: exerciseEquipment,
        isCustom: true
      }

      createExercise(payload).then(() => {
        navigate({ to: '/exercises' })
      })
    }
  })

  return (
    <>
      <Fieldset className="mt-4">
        <Legend>Create Exercise</Legend>
        <Text>Take your routine to the next level.</Text>
        <form
          className="flex flex-col mt-3"
          onSubmit={(e) => {
            e.preventDefault()
            e.stopPropagation()
            form.handleSubmit()
          }}
        >
          <div className="flex flex-row justify-center min-w-max mt-3">
            <div className="w-full mr-2">
              <form.Field
                name="name"
                children={(field) => {
                  return (
                    <FieldInput field={field} name="Exercise Name"></FieldInput>
                  )
                }}
              />
            </div>

            <div className="w-full">
              <form.Field
                name="secondaryMuscleGroup"
                children={(field) => {
                  return (
                    <FieldMultiSelect
                      field={field}
                      name="Equipment"
                      options={exerciseEquipmentOptions}
                      selectedOptions={exerciseEquipment as any}
                      onChange={(selected) => {
                        setExerciseEquipment(selected as Equipment[])
                      }}
                    />
                  )
                }}
              />
            </div>
          </div>

          <div className="flex flex-row justify-center min-w-max mt-3">
            <div className="w-full">
              <form.Field
                name="type"
                children={(field) => {
                  return (
                    <FieldMultiSelect
                      field={field}
                      name="Exercise Type"
                      options={exerciseTypeOptions}
                      selectedOptions={exerciseType as any}
                      onChange={(selected) => {
                        setExerciseType(selected as Type[])
                      }}
                    />
                  )
                }}
              />
            </div>

            <div className="w-full pl-2">
              <form.Field
                name="difficulty"
                children={(field) => {
                  return (
                    <FieldSelect
                      field={field}
                      name="Exercise Difficulty"
                      options={exerciseDifficultyOptions}
                      selectedOption={exerciseDifficulty as any}
                      onChange={(selected) => {
                        setExerciseDifficulty(selected as Difficulty)
                      }}
                    />
                  )
                }}
              />
            </div>
          </div>

          <div className="flex flex-row justify-center min-w-max mt-3">
            <div className="w-full pl-2">
              <form.Field
                name="primaryMuscleGroup"
                children={(field) => {
                  return (
                    <FieldMultiSelect
                      field={field}
                      name="Primary Muscle Group"
                      options={muscleGroupOptions}
                      selectedOptions={primaryMuscleGroup as any}
                      onChange={(selected) => {
                        setPrimaryMuscleGroup(selected as MuscleGroup[])
                      }}
                    />
                  )
                }}
              />
            </div>

            <div className="w-full">
              <form.Field
                name="secondaryMuscleGroup"
                children={(field) => {
                  return (
                    <FieldMultiSelect
                      field={field}
                      name="Secondary Muscle Group"
                      options={muscleGroupOptions}
                      selectedOptions={secondaryMuscleGroup as any}
                      onChange={(selected) => {
                        setSecondaryMuscleGroup(selected as MuscleGroup[])
                      }}
                    />
                  )
                }}
              />
            </div>
          </div>

          <div className="flex flex-row min-w-max">
            <form.Field
              name="description"
              children={(field) => {
                return (
                  <>
                    <Field className="mt-3 w-full">
                      <Label htmlFor={field.name}>Exercise Description</Label>
                      <Textarea
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                      <FieldInfo field={field} />
                    </Field>
                  </>
                )
              }}
            />
          </div>

          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            children={([canSubmit, isSubmitting]) => (
              <Button
                className="mt-8 w-1/4 block mx-auto"
                type="submit"
                disabled={!canSubmit}
                outline
              >
                {isSubmitting ? '...' : 'Submit'}
              </Button>
            )}
          />
        </form>
      </Fieldset>
    </>
  )
}

export default CreateExercise
