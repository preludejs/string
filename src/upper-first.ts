export const upperFirstRegex = /^\p{Ll}/u

/**
 * @returns the provided string with the first character as upper case.
 */
export function upperFirst(value: string): string {
  return value.replace(upperFirstRegex, match => match.toUpperCase())
}

export default upperFirst
