import { Field, Label } from '@catalyst/fieldset'
import { Input } from '@catalyst/input'

import FieldInfo from './FieldInfo'

type fieldInputProps = {
  field: any
  name: string
}

export default function FieldInput({ field, name }: fieldInputProps) {
  return (
    <>
      <Field className="mt-2 w-1/2">
        <Label htmlFor={field.name}>{name}</Label>
        <Input
          id={field.name}
          name={field.name}
          value={field.state.value}
          onBlur={field.handleBlur}
          onChange={(e) => field.handleChange(e.target.value)}
          autoComplete="on"
        />
        <FieldInfo field={field} />
      </Field>
    </>
  )
}
