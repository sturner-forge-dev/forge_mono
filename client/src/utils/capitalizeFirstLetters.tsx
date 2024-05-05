export function capitalizeFirstLetters(key: string): import('react').ReactNode {
  const words = key.split(/(?=[A-Z])/) // Split by capital letters
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  )
  return capitalizedWords.join(' ')
}
