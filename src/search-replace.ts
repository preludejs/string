import * as Lines from './lines.js'

/**
 * Fuzzy search uses sliding window per search line to find the best match.
 * @param source - The text to search in.
 * @param search - The query to search for.
 * @param replacement - The replacement text.
 * @returns The modified text with the query replaced by the replacement.
 */
export function searchReplace(source: string, search: string, replacement: string): string {
  const sourceLines = Lines.of(source)
  const searchLines = Lines.of(search)
  const replacementLines = Lines.of(replacement)
  const start = Lines.similarIndexOf(sourceLines, searchLines)
  const end = Math.min(start + searchLines.length, sourceLines.length)
  const resultLines = [...sourceLines]
  resultLines.splice(start, end - start, ...replacementLines)
  return resultLines.join('\n')
}

export default searchReplace
