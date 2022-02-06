/** @returns `true` if provided string is blank, `false` otherwise. */
const blank =
  (value: string): boolean => {
    for (const c of value) {
      if (c !== ' ' && c !== '\t' && c !== '\n' && c !== '\r') {
        return false
      }
    }
    return true
  }

export default blank
