import myers from './myers.js'
import * as Op from './op.js'
import Occurrence from '../occurrence.js'

/**
 * Finds matching lines between source and target arrays using histogram analysis.
 * Identifies unique lines that appear in both arrays and returns their indices.
 * @param sourceLines Array of source lines to compare
 * @param targetLines Array of target lines to compare against
 * @returns Array of tuple pairs containing matching line indices [sourceIndex, targetIndex]
 * @private Internal helper function for histogram diffing
 */
function matchesOf(sourceLines: string[], targetLines: string[]): [number, number][] {
  const sourceOccurrence = new Occurrence(sourceLines)
  const targetOccurrence = new Occurrence(targetLines)
  const unique = Occurrence.unique(sourceOccurrence, targetOccurrence)
  return Array.from(unique).map(line => {
    const sourceIndex = sourceOccurrence.firstIndexOf(line)
    const targetIndex = targetOccurrence.firstIndexOf(line)
    return [sourceIndex, targetIndex]
  })
}

/**
 * Performs a histogram-based diff between two arrays of strings.
 * This algorithm is optimized for performance on large inputs by:
 * 1. Identifying unique matching lines between both arrays
 * 2. Using those unique matches as anchors to divide the diff problem
 * 3. Applying Myers diff algorithm to the smaller segments between anchors
 *
 * @param sourceLines Source array of strings to compare
 * @param targetLines Target array of strings to compare against
 * @returns Array of diff operations (added, deleted, unchanged) representing the changes
 */
export function histogram(sourceLines: string[], targetLines: string[]): Op.T[] {
  const matches = matchesOf(sourceLines, targetLines)
  const operations: Op.T[] = []
  let sourcePrev = 0
  let targetPrev = 0

  // Process each segment
  for (const [sourcePos, targetPos] of matches) {
    const sourceSegment = sourceLines.slice(sourcePrev, sourcePos)
    const targetSegment = targetLines.slice(targetPrev, targetPos)
    Op.append(operations, ...myers(sourceSegment, targetSegment))
    Op.append(operations, { type: 'unchanged', lines: sourceLines.slice(sourcePos, sourcePos + 1) })
    sourcePrev = sourcePos + 1
    targetPrev = targetPos + 1
  }

  // Handle remaining segment
  const remainingSource = sourceLines.slice(sourcePrev)
  const remainingTarget = targetLines.slice(targetPrev)
  const remainingOps = myers(remainingSource, remainingTarget)
  operations.push(...remainingOps)

  return operations
}

export default histogram
