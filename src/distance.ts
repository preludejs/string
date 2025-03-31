import levenshtein from './distance/levenshtein.js'

/**
 * Calculate the distance between two strings using the specified method.
 *
 * @param {string} a - The first string.
 * @param {string} b - The second string.
 * @param {string} method - The distance method to use. Defaults to 'levenshtein'.
 * @returns {number} The distance between the two strings.
 */
export function distance(a: string, b: string, method: 'levenshtein' = 'levenshtein'): number {
  switch (method) {
    case 'levenshtein':
      return levenshtein(a, b)
    default:
      throw new Error(`Expected known distance method, got ${method}.`)
  }
}

export default distance
