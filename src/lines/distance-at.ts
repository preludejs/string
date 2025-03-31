import levenshtein from '../distance/levenshtein'

/**
 * Calculate the similarity score between a query and source lines at a given source line index.
 *
 * @param sourceLines - The lines of the text.
 * @param at - The line index at which to start calculating the similarity score.
 * @param queryLines - The lines of the query.
 * @returns Elementwise sum of similarity scores for query lines against source lines starting at given index.
 */
export function distanceAt(sourceLines: string[], at: number, queryLines: string[], distanceOf = levenshtein): number {
  return queryLines
    .map((queryLine, i) => {
      const sourceLine = sourceLines[at + i] ?? ''
      return distanceOf(queryLine, sourceLine)
    })
    .reduce((sum, distance) => sum + distance, 0)
}

export default distanceAt
