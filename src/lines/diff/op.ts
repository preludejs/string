/** Defines the operation type for diff output. */
type Op = {
  type: 'unchanged' | 'removed' | 'added'
  lines: string[]
}

export { type Op as T }

/**
 * Prepends operations at the beginning of diff ops.
 */
export function prepend(ops: Op[], ...otherOps: Op[]) {
  for (const op of otherOps) {
    const first = ops[0]
    if (first?.type === op.type) {
      first.lines.splice(0, 0, ...op.lines)
    } else {
      ops.unshift(op)
    }
  }
}

/**
 * Appends operations at the end of diff ops.
 */
export function append(ops: Op[], ...otherOps: Op[]) {
  for (const op of otherOps) {
    const last = ops[ops.length - 1]
    if (last?.type === op.type) {
      last.lines.splice(last.lines.length, 0, ...op.lines)
    } else {
      ops.push(op)
    }
  }
}

/**
 * Verifies that ops applied to the source produce target.
 */
export function verify(sourceLines: string[], targetLines: string[], ops: Op[]) {
  let i = 0 // lines index
  let j = 0 // other lines index
  let k = 0 // ops index
  while (k < ops.length) {
    const op = ops[k]
    for (const opLine of op.lines) {
      const sourceLine = sourceLines[i]
      const targetLine = targetLines[j]
      switch (op.type) {
        case 'unchanged': {
          if (opLine !== sourceLine || opLine !== targetLine) {
            throw new Error(
              `Expected unchanged to be the same, got op line "${opLine}", source line "${sourceLine}" and target line "${targetLine}".`
            )
          }
          i++
          j++
          break
        }
        case 'removed': {
          if (opLine !== sourceLine) {
            throw new Error(
              `Expected removed line to be the same, got op line "${opLine}" and source line "${sourceLine}".`
            )
          }
          i++
          break
        }
        case 'added': {
          if (opLine !== targetLine) {
            throw new Error(
              `Expected added line to be the same, got op line "${opLine}" and target line "${targetLine}".`
            )
          }
          j++
          break
        }
        default:
          throw new Error(`Unexpected op type ${op.type}`)
      }
    }
    k++
  }
  if (k !== ops.length) {
    throw new Error(`Expected to process ${ops.length} ops, but processed ${k} ops.`)
  }
  if (i !== sourceLines.length) {
    throw new Error(`Expected to process ${sourceLines.length} source lines, but processed ${i} lines.`)
  }
  if (j !== targetLines.length) {
    throw new Error(`Expected to process ${targetLines.length} target lines, but processed ${j} lines.`)
  }
}

/** Maps ops to readable strings with "  ", "+ " and " -" prefixes. */
export function readable(ops: Op[]): string[] {
  return ops.flatMap(op => {
    switch (op.type) {
      case 'unchanged':
        return op.lines.map(line => `  ${line}`)
      case 'removed':
        return op.lines.map(line => `- ${line}`)
      case 'added':
        return op.lines.map(line => `+ ${line}`)
      default:
        throw new Error(`Unexpected op type ${op.type}`)
    }
  })
}

export function dump(sourceLines: string[], targetLines: string[], ops: Op[]): string {
  const lines: string[] = []
  lines.push('Source:')
  lines.push(...sourceLines)
  lines.push('')
  lines.push('Target:')
  lines.push(...targetLines)
  lines.push('')
  lines.push('Ops:')
  lines.push(...readable(ops))
  return lines.join('\n')
}
