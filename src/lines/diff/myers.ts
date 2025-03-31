import * as Op from './op.js'

/**
 * Calculate diff based on Myers algorithm.
 *
 * @param sourceLines The source sequence of strings.
 * @param targetLines The target sequence of strings.
 * @returns An array of operations representing the diff.
 */
export function myers(sourceLines: string[], targetLines: string[]): Op.T[] {
  const n = sourceLines.length
  const m = targetLines.length
  const max = n + m

  // Initialize V with -1, except V[max] = 0 for k=0
  let V: number[] = new Array(2 * max + 1).fill(-1)
  V[max] = 0 // Starting point at (0,0) for k=0
  let trace: number[][] = []

  // Forward pass to find the shortest edit path
  for (let D = 0; D <= max; D++) {
    trace.push([...V]) // Store the current frontier

    for (let k = -D; k <= D; k += 2) {
      const kIndex = k + max
      const kMinus1Index = k - 1 + max
      const kPlus1Index = k + 1 + max

      // Choose the path that extends furthest
      let x = k === -D || (k !== D && V[kMinus1Index] < V[kPlus1Index]) ? V[kPlus1Index] : V[kMinus1Index] + 1

      let y = x - k

      // Follow the snake (matching elements)
      while (x < n && y < m && sourceLines[x] === targetLines[y]) {
        x++
        y++
      }

      V[kIndex] = x

      // If we’ve reached the end of both sequences
      if (x >= n && y >= m) {
        return backtrack(sourceLines, targetLines, trace, D, k)
      }
    }
  }

  return [] // Fallback (should not reach here with valid inputs)
}

function backtrack(A: string[], B: string[], trace: number[][], D: number, k: number): Op.T[] {
  const operations: Op.T[] = []
  let x = A.length
  let y = B.length
  const max = x + y

  // Trace back from the end to the start
  for (let d = D; d >= 0; d--) {
    const Vd = trace[d]
    const kPrev = k
    const kMinus1Index = kPrev - 1 + max
    const kPlus1Index = kPrev + 1 + max

    let xPrev: number
    if (kPrev === -d || (kPrev !== d && Vd[kMinus1Index] < Vd[kPlus1Index])) {
      xPrev = Vd[kPlus1Index] // Came from below
      k = kPrev + 1
    } else {
      xPrev = Vd[kMinus1Index] // Came from left
      k = kPrev - 1
    }
    const yPrev = xPrev - k

    // Follow the snake backwards (unchanged elements)
    while (x > xPrev && y > yPrev && x > 0 && y > 0) {
      x--
      y--
      Op.prepend(operations, { type: 'unchanged', lines: [A[x]] })
    }

    if (d > 0) {
      if (x > xPrev) {
        Op.prepend(operations, { type: 'removed', lines: [A[x - 1]] })
        x--
      } else if (y > yPrev) {
        Op.prepend(operations, { type: 'added', lines: [B[y - 1]] })
        y--
      }
    }
  }

  return operations
}

export default myers
