/**
 * Capitalize the first letter of each word in a string
 *
 * @param {any} key:string
 *
 * @returns {string}
 */
export function capitalizeFirstLetters(key: string): import('react').ReactNode {
  if (key.includes(',')) {
    const words = key.split(',')
    const capitalizedWords = words.map((word) =>
      word
        .split(' ')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ')
    )
    return capitalizedWords.join(', ')
  } else {
    const words = key.split(/(?=[A-Z])/)
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    )
    return capitalizedWords.join(' ')
  }
}
