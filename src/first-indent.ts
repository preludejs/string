/**
 * Extracts the indentation (spaces and tabs) from the beginning of a string.
 * @param value The string to extract indentation from
 * @returns The indentation string (spaces and tabs) at the beginning of the input
 * @example
 * firstIndent('  hello') // '  '
 * firstIndent('\t\thello') // '\t\t'
 * firstIndent('hello') // ''
 */
export function firstIndent(value: string): string {
  let i = 0
  for (; i < value.length; i++) {
    if (value[i] !== ' ' && value[i] !== '\t') {
      break
    }
  }
  return value.slice(0, i)
}

export default firstIndent
