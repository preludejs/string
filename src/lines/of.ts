/**
 * Splits a string into an array of lines.
 * This function handles different line endings by splitting on newline characters.
 * @param value The string to split into lines
 * @returns An array of string lines
 * @example
 * of('hello\nworld') // ['hello', 'world']
 * of('one line') // ['one line']
 */
export function of(value: string): string[] {
  return value.split(/\n\r?/)
}
