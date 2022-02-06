import blank from './blank.js'
import lines_ from './lines.js'

/** @returns string lines without shared indentation. */
const dedent =
  (value: string): string => {
    const lines = lines_(value)
    if (lines.length > 0 && blank(lines[0])) {
      lines.shift()
    }
    if (lines.length > 0 && blank(lines[lines.length - 1])) {
      lines.pop()
    }
    let n = Infinity
    for (const line of lines) {
      for (let i = 0; i < line.length; i++) {
        if (line[i] !== ' ' && line[i] !== '\t') {
          n = Math.min(n, i)
          break
        }
      }
    }
    return n === Infinity ?
      lines.join('\n') :
      lines
        .map(_ => _.slice(n))
        .join('\n')
  }

export default dedent
