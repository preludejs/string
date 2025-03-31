/**
 * Adds indentation to all lines of a string except the first line.
 *
 * Useful when embedding fragments that should be correctly indented.
 *
 * @example
 *   indentTail('hello\nworld') // 'hello\n  world'
 *
 * @param input The multiline string to indent
 * @param indentation The indentation string to add (default: two spaces)
 * @returns A new string with all but the first line indented
 */
export function indentTail(input: string, indentation = '  '): string {
  if (indentation === '') {
    return input
  }
  return input.replace(/\n\r?/g, '\n' + indentation)
}

export default indentTail
