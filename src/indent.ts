/**
 * Adds indentation to all lines of a string, including the first line.
 * @param value The multiline string to indent
 * @param indentation The indentation string to add (default: two spaces)
 * @returns A new string with all lines indented
 * @example
 * indent('hello\nworld') // '  hello\n  world'
 */
export function indent(input: string, indentation = '  '): string {
  if (indentation === '') {
    return input
  }
  return indentation + input.replace(/\n\r?/g, '\n' + indentation)
}

export default indent
