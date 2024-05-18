import { useState } from 'react'
import FieldInfo from './FieldInfo'
import { Field, Label } from '@catalyst/fieldset'
import { Listbox, Transition } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/24/outline'
import { clsx } from 'clsx'

import { capitalizeFirstLetters } from '@/utils/capitalizeFirstLetters'

interface Option {
  id: number
  name: string
}

interface SelectProps {
  field: any
  name: string
  options: Option[]
  selectedOption: string
  onChange: (selectedOption: string) => void
}

export default function FieldSelect({
  field,
  name,
  options,
  selectedOption,
  onChange
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)

  const isSelected = (option: string) => selectedOption === option

  return (
    <div className="relative">
      <Field className="mt-2">
        <Label htmlFor={field.name} className="ml-2">
          {name}
        </Label>
        <Listbox as="div" className="relative mt-3 ml-2">
          <Listbox.Button
            onClick={() => setIsOpen(!isOpen)}
            className={clsx([
              // Basic layout
              'relative block w-full appearance-none rounded-lg py-[calc(theme(spacing[2.5])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] text-left',

              // Horizontal padding
              'pl-[calc(theme(spacing[3.5])-1px)] pr-[calc(theme(spacing.10)-1px)] sm:pl-[calc(theme(spacing.3)-1px)] sm:pr-[calc(theme(spacing.9)-1px)]',

              // Typography
              'text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white dark:*:text-white',

              // Border
              'border border-zinc-950/10 data-[hover]:border-zinc-950/20 dark:border-white/10 dark:data-[hover]:border-white/20',

              // Background color
              'bg-transparent dark:bg-white/5 dark:*:bg-zinc-800',

              // Hide default focus styles
              'focus:outline-none',

              // Invalid state
              'data-[invalid]:border-red-500 data-[invalid]:data-[hover]:border-red-500 data-[invalid]:dark:border-red-600 data-[invalid]:data-[hover]:dark:border-red-600',

              // Disabled state
              'data-[disabled]:border-zinc-950/20 data-[disabled]:opacity-100 dark:data-[hover]:data-[disabled]:border-white/15 data-[disabled]:dark:border-white/15 data-[disabled]:dark:bg-white/[2.5%]'
            ])}
          >
            <span className="block truncate">
              {selectedOption
                ? capitalizeFirstLetters(selectedOption)
                : 'Select an option'}
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 absolute z-20 w-full max-h-full bg-transparent dark:bg-white/5 dark:*:bg-zinc-800 shadow-lg"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100 absolute absolute z-20 w-full max-h-full bg-transparent dark:bg-white/5 dark:*:bg-zinc-800 shadow-lg"
            leave="transition ease-in duration-75 absolute z-20 w-full max-h-full bg-transparent dark:bg-white/5 dark:*:bg-zinc-800 shadow-lg"
            leaveFrom="transform scale-100 opacity-100 absolute z-20 w-full max-h-full bg-transparent dark:bg-white/5 dark:*:bg-zinc-800 shadow-lg"
            leaveTo="transform scale-95 opacity-0"
          >
            <Listbox.Options className="block border rounded-md border-zinc-500 text-sm leading-3 bg-transparent dark:bg-white/5 dark:*:bg-white/5">
              {options.map((option) => {
                return (
                  <Listbox.Option
                    key={option.id}
                    value={option}
                    onClick={() => onChange(option.name)}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2 pl-10 pr-4 font-thin hover:bg-blue-500 ${
                        active ? 'bg-blue-500 text-white' : 'text-white'
                      }`
                    }
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            isSelected(option.name)
                              ? 'font-medium'
                              : 'font-thin'
                          }`}
                        >
                          {option
                            ? capitalizeFirstLetters(option.name)
                            : 'Select an option'}
                        </span>
                        {isSelected(option.name) && (
                          <span
                            className={`absolute inset-y-0 left-0 items-start pl-3 ${
                              selected ? 'text-white' : 'text-blue-600'
                            }`}
                          ></span>
                        )}
                      </>
                    )}
                  </Listbox.Option>
                )
              })}
            </Listbox.Options>
          </Transition>
        </Listbox>
      </Field>
      <FieldInfo field={field} />
    </div>
  )
}
