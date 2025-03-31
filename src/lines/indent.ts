/**
 * Indents each line in the mutableLines array with the specified indentation.
 * @param mutableLines - The array of lines to be indented.
 * @param indentation - The string used for indentation (default is two spaces).
 */
export function indent(mutableLines: string[], indentation = '  '): void {
  for (let i = 0; i < mutableLines.length; i++) {
    mutableLines[i] = indentation + mutableLines[i]
  }
}

export default indent
