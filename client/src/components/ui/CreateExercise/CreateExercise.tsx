import { useForm } from '@tanstack/react-form'
import { Field, Fieldset, Label, Legend } from '@catalyst/fieldset'
import { Text } from '@catalyst/text'
import { Textarea } from '@catalyst/textarea'
import { Button } from '@catalyst/button'

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

function CreateExercise() {
  const form = useForm({
    defaultValues: {
      name: '',
      difficulty: '',
      equipment: '',
      type: '',
      primary_muscle_group: '',
      secondary_muscle_group: '',
      description: ''
    },
    onSubmit: async ({ value }) => {
      console.log(value)
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

            <div className="w-full mr-2">
              <form.Field
                name="secondary_muscle_group"
                children={(field) => {
                  return (
                    <FieldSelect
                      field={field}
                      name="Secondary Muscle Group"
                      options={Object.values(MuscleGroup)}
                    />
                  )
                }}
              />
            </div>
          </div>

          <div className="flex flex-row justify-center min-w-max mt-3">
            <div className="w-full mr-2">
              <form.Field
                name="type"
                children={(field) => {
                  return (
                    <FieldSelect
                      field={field}
                      name="Exercise Type"
                      options={Object.values(Type)}
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
                      options={Object.values(Difficulty)}
                    />
                  )
                }}
              />
            </div>
          </div>

          <div className="flex flex-row justify-center min-w-max mt-3">
            <div className="w-full mr-2">
              <form.Field
                name="equipment"
                children={(field) => {
                  return (
                    <FieldSelect
                      field={field}
                      name="Exercise Equipment"
                      options={Object.values(Equipment)}
                    />
                  )
                }}
              />
            </div>

            <div className="w-full pl-2">
              <form.Field
                name="primary_muscle_group"
                children={(field) => {
                  return (
                    <FieldSelect
                      field={field}
                      name="Primary Muscle Group"
                      options={Object.values(MuscleGroup)}
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
