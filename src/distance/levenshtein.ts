/** @returns The Levenshtein distance between two strings. */
export function levenshtein(source: string, target: string): number {
  // Empty cases
  if (source === target) {
    return 0
  }
  if (source.length === 0) {
    return target.length
  }
  if (target.length === 0) {
    return source.length
  }

  // Make a the shorter string to minimize memory usage
  if (source.length > target.length) {
    return levenshtein(target, source)
  }

  // Create two rows instead of full matrix
  let previousRow: number[] = new Array(source.length + 1)
  let row: number[] = new Array(source.length + 1)

  // Initialize previous row with incremental values
  for (let i = 0; i <= source.length; i++) {
    previousRow[i] = i
  }

  // Iterate through string b
  for (let j = 1; j <= target.length; j++) {
    row[0] = j

    // Fill current row
    for (let i = 1; i <= source.length; i++) {
      const cost = source[i - 1] === target[j - 1] ? 0 : 1
      row[i] = Math.min(
        row[i - 1] + 1, // insertion
        previousRow[i] + 1, // deletion
        previousRow[i - 1] + cost
      )
    }

    // Swap rows (current becomes previous for next iteration)
    ;[previousRow, row] = [row, previousRow]
  }

  return previousRow[source.length]
}

export default levenshtein
