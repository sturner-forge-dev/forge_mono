import { Button } from '@catalyst/button'
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogDescription,
  DialogTitle
} from '@catalyst/dialog'
import { Field, Label } from '@catalyst/fieldset'
import { type Exercise } from '@server/src/models/Exercise'

type modalProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  exercise: Exercise
}

function ExerciseModal({ isOpen, setIsOpen, exercise }: modalProps) {
  return (
    <>
      <Dialog open={isOpen} onClose={setIsOpen}>
        <DialogTitle>{exercise.name}</DialogTitle>
        <DialogDescription className="mt-1">
          {exercise.description}
        </DialogDescription>
        {exercise.variations && exercise.variations.length > 0 && (
          <DialogBody>
            <Field>
              <Label>Variations</Label>
              <DialogBody className="text-zinc-500 mt-1 text-pretty">
                <div>
                  {exercise.variations.map((variation) => (
                    <div key={variation}>
                      <p className="text-pretty">{variation}</p>
                    </div>
                  ))}
                </div>
              </DialogBody>
            </Field>
          </DialogBody>
        )}
        <DialogActions>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ExerciseModal
