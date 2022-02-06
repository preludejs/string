
/** @returns first line's indent. */
const firstIndent =
  (value: string): string => {
    let i = 0
    for (; i < value.length; i++) {
      if (value[i] !== ' ' && value[i] !== '\t') {
        break
      }
    }
    return value.slice(0, i)
  }

export default firstIndent
