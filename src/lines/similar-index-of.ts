import distanceAt from './distance-at.js'

/**
 * Finds most similar index in source lines for search lines.
 * @param sourceLines Source lines to search in.
 * @param searchLines Lines to search for.
 * @returns Start index of most similar match
 */
export function similarIndexOf(sourceLines: string[], searchLines: string[]): number {
  let bestDistance = Infinity
  let index = -1

  const n = sourceLines.length - searchLines.length + 1
  for (let i = 0; i < n; i++) {
    let distance = distanceAt(sourceLines, i, searchLines)
    if (distance < bestDistance) {
      bestDistance = distance
      index = i
    }
  }

  return index
}

export default similarIndexOf
