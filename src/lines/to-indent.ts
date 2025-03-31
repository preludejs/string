/**
 * Maps lines to lines with provided indentation.
 * @param lines Lines to indent.
 * @param indentation Indentation to use.
 * @returns Indented lines.
 */
export function toIndent(lines: string[], indentation = '  '): string[] {
  return lines.map(line => indentation + line)
}

export default toIndent
