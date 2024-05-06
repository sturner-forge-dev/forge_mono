import FieldInfo from './FieldInfo'
import { Field, Label } from '@catalyst/fieldset'
import { Select } from '@catalyst/select'

import { capitalizeFirstLetters } from '@/utils/capitalizeFirstLetters'
import { type FieldSelectProps } from './FieldSelectProps'

export default function FieldSelect({
  field,
  name,
  options
}: FieldSelectProps) {
  return (
    <>
      <Field className="mt-2">
        <Label htmlFor={field.name}>{name}</Label>
        <Select
          id={field.name}
          name={field.name}
          value={field.state.value}
          onBlur={field.handleBlur}
          onChange={(e) => field.handleChange(e.target.value)}
          autoComplete="on"
        >
          <option value="" className="font-thin">
            Select {name}
          </option>
          {Object.values(options).map((type) => (
            <option key={type} value={type}>
              {capitalizeFirstLetters(type)}
            </option>
          ))}
        </Select>
        <FieldInfo field={field} />
      </Field>
    </>
  )
}
