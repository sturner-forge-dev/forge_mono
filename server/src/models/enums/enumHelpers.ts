export function getEnumValues(enumObject: any): string[] {
  return Object.values(enumObject)
}

export const enumObject = (enumValues: any) =>
  enumValues.reduce(
    (obj: any, value: any) => {
      obj[value] = value
      return obj
    },
    {} as { [key: string]: string }
  )

export const convertEnumObject = (enumValues: any) => {
  return enumObject(getEnumValues(enumValues))
}
