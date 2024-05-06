/**
 * Capitalize the first letter of each word in a string
 *
 * @param {any} key:string
 *
 * @returns {string}
 */
export function capitalizeFirstLetters(key: string): import('react').ReactNode {
  const words = key.split(/(?=[A-Z])/)

  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  )

  return capitalizedWords.join(' ')
}
