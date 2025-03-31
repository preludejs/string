/**
 * A utility class for tracking line occurrences and uniqueness in text.
 * Used primarily by the diff algorithms to efficiently identify common lines.
 */
export default class Occurrence {
  /** Map of lines to the set of indices where they appear */
  #indicesOfLines = new Map<string, Set<number>>()

  /** Set of lines that appear exactly once */
  unique = new Set<string>()

  /**
   * Finds lines that are unique in both occurrence objects.
   * Optimizes by starting with the smaller set of unique lines.
   *
   * @param occurrence First occurrence object
   * @param otherOccurrence Second occurrence object
   * @returns Set of lines that are unique in both occurrence objects
   */
  static unique(occurrence: Occurrence, otherOccurrence: Occurrence): Set<string> {
    if (occurrence.unique.size > otherOccurrence.unique.size) {
      return Occurrence.unique(otherOccurrence, occurrence)
    }
    const lines = new Set<string>()
    for (const line of occurrence.unique) {
      if (otherOccurrence.unique.has(line)) {
        lines.add(line)
      }
    }
    return lines
  }

  /**
   * Creates a new Occurrence instance and populates it with the provided lines.
   * @param lines Array of string lines to analyze
   */
  constructor(lines: string[] = []) {
    lines.forEach((line, index) => this.add(line, index))
  }

  /**
   * Adds a line occurrence at the specified index.
   * Updates the unique set - a line is only in the unique set if it appears exactly once.
   * @param line The line string to add
   * @param index The index where this line appears
   */
  add(line: string, index: number): void {
    const lineIndices = this.#indicesOfLines.get(line)
    if (lineIndices) {
      lineIndices.add(index)
      this.unique.delete(line)
    } else {
      this.#indicesOfLines.set(line, new Set([index]))
      this.unique.add(line)
    }
  }

  /**
   * Checks if a line appears exactly once in the data set.
   * @param line The line to check for uniqueness
   * @returns True if the line appears exactly once, false otherwise
   */
  isUnique(line: string): boolean {
    return this.unique.has(line)
  }

  /**
   * Gets the first index where a line appears.
   * @param line The line to find
   * @returns The first index where the line appears, or -1 if not found
   */
  firstIndexOf(line: string): number {
    const lineIndices = this.#indicesOfLines.get(line)
    if (lineIndices == null) {
      return -1
    }
    for (const index of lineIndices) {
      return index
    }
    return -1
  }
}
